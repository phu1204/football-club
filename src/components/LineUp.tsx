"use client";
import { useEffect, useState } from "react";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import SoccerLineUp, { type Team } from 'react-soccer-lineup';
import { useLanguage } from "@/context/LanguageContext";
import { motion } from "framer-motion";

const team: Team = {
    squad: {
      gk: { number: 1, name: 'Chau Hung', offset: { x: -4 }},
      df: [
        { number: 6, name: 'Brown', offset: { x: 7 } },
        { number: 5, name: 'Ferdinand', offset: { x: -6 }  },
        { number: 3, name: 'Evra', offset: { x: 7 } },
      ],
      cm: [
        { number: 18, name: 'Scholes', offset: { y: -6, x: 5 } },
        { number: 4, name: 'Hargreaves', offset: { x: 5 }},
      ],
      fw: [
        { number: 10, name: 'Rooney', offset: { x: 4 } },
    ],
    },
    style: {
      color: '#000',
      borderColor: '#fff',
      numberColor: '#fff',
      nameColor: '#ffffff',
      nameBackgroundColor: '#11111166',
    }
  };

const substitutes = [
  { number: 2, name: "Tấn Phát", role: "Defender", roleKey: "squad.filter.df" },
  { number: 3, name: "Chí Tuấn", role: "Defender", roleKey: "squad.filter.df" },
  { number: 4, name: "Kiệt AB", role: "Defender", roleKey: "squad.filter.df" },
  { number: 22, name: "Phu Nguyen", role: "Midfielder", roleKey: "squad.filter.mf" },
  { number: 9, name: "Tường Mập", role: "Forward", roleKey: "squad.filter.fw" },
  { number: 10, name: "Thế Anh", role: "Forward", roleKey: "squad.filter.fw" },
];

export function LineUp() {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
    const checkScreen = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkScreen(); // check lần đầu
    window.addEventListener("resize", checkScreen);

    return () => {
      window.removeEventListener("resize", checkScreen);
    };
  }, []);
  const { t } = useLanguage();
  return (
    <section className="py-24 mx-auto border-t border-border-default">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="flex flex-col container-custom md:flex-row justify-between items-start md:items-end mb-12 gap-6"
      >
        <div>
          <h2 className="text-[10px] text-text-secondary uppercase tracking-widest font-semibold mb-2">{t("line.center")}</h2>
          <h3 className="heading-xl text-text-primary">{t("line.upcoming")}</h3>
        </div>
      </motion.div>
      <div className="flex flex-col lg:flex-row items-stretch gap-16 container-custom">
        <motion.div 
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="w-full lg:w-1/2 flex justify-center items-center "
        >
          <SoccerLineUp
              size="responsive"
              color="#4a7d32"
              pattern="squares"
              homeTeam={team}
              orientation={isMobile ? 'vertical' : "horizontal"}
            />
        </motion.div>
        <motion.div 
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="w-full lg:w-1/2 flex flex-col justify-start"
        >
          <div className="border border-border-default rounded-[var(--radius-card)] p-6 sm:p-8 bg-surface shadow-card hover:shadow-card-hover transition-all duration-300 h-full flex flex-col">
            <h4 className="font-display text-2xl font-bold uppercase tracking-tight text-text-primary mb-6 flex items-center gap-3">
              <span className="w-1 h-6 bg-accent rounded-full"></span>
              {t("line.substitutes")}
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 flex-1">
              {substitutes.map((player) => (
                <div 
                  key={player.number}
                  className="flex items-center justify-between p-4 rounded-xl border border-border-default hover:border-border-active bg-background hover:bg-surface transition-all duration-300 group"
                >
                  <div className="flex items-center gap-4">
                    <span className="w-10 h-10 rounded-lg bg-accent/5 flex items-center justify-center font-display font-bold text-accent group-hover:bg-accent group-hover:text-white transition-colors duration-300">
                      {player.number}
                    </span>
                    <div>
                      <h5 className="font-semibold text-text-primary text-sm group-hover:text-accent transition-colors duration-300">
                        {player.name}
                      </h5>
                      <span className="text-xs text-text-muted">
                        {t(player.roleKey)}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
