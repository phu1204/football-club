"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import Image from "next/image"

const players = [
  {
    name: "Châu Hưng",
    role: "Goalkeeper",
    number: "01",
    quote: "Nothing gets past.",
    age: 26,
    nationality: "VN",
    height: "1.88m",
    weight: "82kg",
    image: "/images/hung.jpg"
  },
  {
    name: "Tấn Phát",
    role: "Defender",
    number: "02",
    quote: "Always on guard.",
    age: 26,
    nationality: "VN",
    height: "1.85m",
    weight: "79kg",
    image: "/images/phat.jpg"
  },
  {
    name: "Chí Tuấn",
    role: "Defender",
    number: "03",
    quote: "The final line of defense.",
    age: 33,
    nationality: "VN",
    height: "1.82m",
    weight: "80kg",
    image: "/images/tuan.jpg"
  },
  {
    name: "Kiệt AB",
    role: "Defender",
    number: "04",
    quote: "The wall of Simple FC.",
    age: 24,
    nationality: "VN",
    height: "1.90m",
    weight: "85kg",
    image: "/images/kiet.jpg"
  },
  {
    name: "Thanh Hòa",
    role: "Defender",
    number: "05",
    quote: "Unbreakable spirit.",
    age: 25,
    nationality: "VN",
    height: "1.83m",
    weight: "76kg",
    image: "/images/a2.jpg"
  },
  {
    name: "Ngọc Long",
    role: "Defender",
    number: "06",
    quote: "Vision meets execution.",
    age: 34,
    nationality: "VN",
    height: "1.79m",
    weight: "70kg",
    image: "/images/long.jpg"
  },
  {
    name: "Bảo Khoa",
    role: "Defender",
    number: "08",
    quote: "Controlling the tempo.",
    age: 22,
    nationality: "VN",
    height: "1.75m",
    weight: "68kg",
    image: "/images/khoa.jpg"
  },
  {
    name: "Chí Dương",
    role: "Defender",
    number: "14",
    quote: "The wall of Simple FC.",
    age: 32,
    nationality: "VN",
    height: "1.71m",
    weight: "71kg",
    image: "/images/cduong.jpg"
  },
 {
    name: "Nhật Hào",
    role: "Defender",
    number: "14",
    quote: "The wall of Simple FC.",
    age: 32,
    nationality: "VN",
    height: "1.71m",
    weight: "71kg",
    image: "/images/hao.jpg"
  },
 {
    name: "Phu Nguyen",
    role: "Midfielder",
    number: "22",
    quote: "The engine of the team.",
    age: 32,
    nationality: "VN",
    height: "1.71m",
    weight: "71kg",
    image: "/images/p7n.jpg"
  },
  {
    name: "Hoàng Giang",
    role: "Midfielder",
    number: "22",
    quote: "The engine of the team.",
    age: 32,
    nationality: "VN",
    height: "1.71m",
    weight: "71kg",
    image: "/images/giang.jpg"
  },
  {
    name: "Văn Duy",
    role: "Midfielder",
    number: "22",
    quote: "The engine of the team.",
    age: 32,
    nationality: "VN",
    height: "1.71m",
    weight: "71kg",
    image: "/images/duy.jpg"
  },
  {
    name: "Tường Mập",
    role: "Forward",
    number: "09",
    quote: "Born to score.",
    age: 23,
    nationality: "VN",
    height: "1.82m",
    weight: "75kg",
    image: "/images/tuong.jpg"
  },
  {
    name: "Thế Anh",
    role: "Forward",
    number: "10",
    quote: "Precision in every strike.",
    age: 27,
    nationality: "VN",
    height: "1.78m",
    weight: "74kg",
    image: "/images/anh.jpg"
  },
  {
    name: "Trần Ry",
    role: "Forward",
    number: "11",
    quote: "Pace and power.",
    age: 30,
    nationality: "VN",
    height: "1.84m",
    weight: "77kg",
    image: "/images/ry.jpg"
  }
];

export function SquadSection() {
  const [selectedPlayer, setSelectedPlayer] = useState<typeof players[0] | null>(null);
  const { t } = useLanguage();

  const getRoleTranslation = (role: string) => {
    switch (role) {
      case "Goalkeeper": return t("squad.filter.gk");
      case "Defender": return t("squad.filter.df");
      case "Midfielder": return t("squad.filter.mf");
      case "Forward": return t("squad.filter.fw");
      default: return role;
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } }
  };

  return (
    <section className="section-padding bg-surface relative overflow-hidden border-t border-border-default" id="squad">
      {/* Soft decorative ambient */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(23,23,23,0.02) 0%, transparent 70%)' }}></div>

      <div className="container-custom relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="flex justify-between items-end mb-12"
        >
          <div>
            <h2 className="text-[10px] text-text-secondary uppercase tracking-widest font-semibold mb-2">{t("squad.title")}</h2>
            <h3 className="heading-xl text-text-primary">{t("squad.headline")}</h3>
          </div>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {players.map((player, index) => (
            <motion.div 
              key={index} 
              variants={itemVariants}
              onClick={() => setSelectedPlayer(player)}
              className="card-style !p-0 cursor-pointer overflow-hidden group transition-all duration-500"
            >
              <div className="aspect-[3/4] overflow-hidden bg-background relative">
                 <Image 
                  src={player.image} 
                  alt={player.name} 
                  sizes="(max-width: 768px) 100vw, 50vw"
                  fill
                  priority
                  className="object-cover object-cover group-hover:scale-110 transition-all duration-700"
                  decoding="async"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-60"></div>
                
                {/* Player Number Watermark */}
                <span className="absolute -bottom-4 right-2 text-7xl font-black italic text-white/25 pointer-events-none group-hover:text-white/60 transition-colors duration-500">
                  {player.number}
                </span>
              </div>
              <div className="p-5 relative bg-surface">
                <span className="text-[10px] text-text-secondary font-semibold uppercase tracking-widest">
                  {getRoleTranslation(player.role)} • #{player.number}
                </span>
                <h3 className="text-lg font-semibold mt-1 text-text-primary group-hover:text-accent transition-colors duration-300">
                  {player.name}
                </h3>
                <p className="text-text-muted text-xs mt-2 italic border-l-2 border-border-active pl-3">
                  &quot;{player.quote}&quot;
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedPlayer && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedPlayer(null)}
              className="fixed inset-0 z-[100] flex items-center justify-center bg-black/30 backdrop-blur-sm p-4 md:p-8"
          >
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-surface max-w-4xl w-full rounded-[var(--radius-card)] overflow-hidden shadow-2xl border border-border-default flex flex-col md:flex-row relative"
            >
              <button 
                onClick={() => setSelectedPlayer(null)}
                className="absolute top-4 right-4 z-10 w-10 h-10 md:bg-black/10 bg-white hover:bg-accent text-text-primary hover:text-white rounded-full flex items-center justify-center transition-colors backdrop-blur-md cursor-pointer"
              >
                <span className="material-symbols-outlined">close</span>
              </button>

              <div className="w-full md:w-2/5 aspect-square relative bg-surface">
                <Image 
                  src={selectedPlayer.image} 
                  alt={selectedPlayer.name} 
                  sizes="(max-width: 768px) 100vw, 50vw"
                  fill
                  priority
                  className="object-cover"
                  decoding="async"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent md:bg-gradient-to-r md:from-transparent md:via-transparent md:to-background"></div>
                <span className="absolute bottom-4 left-4 text-8xl md:text-9xl font-black italic text-text-primary/5 pointer-events-none mix-blend-overlay">
                  {selectedPlayer.number}
                </span>
              </div>
              
              <div className="p-8 md:p-12 w-full md:w-3/5 flex flex-col justify-center">
                <span className="text-xs text-text-secondary font-semibold uppercase tracking-widest mb-2 block">
                  {getRoleTranslation(selectedPlayer.role)}
                </span>
                <h3 className="text-4xl md:text-5xl font-semibold text-text-primary mb-6 tracking-tight">
                  {selectedPlayer.name}
                </h3>
                <p className="text-text-secondary text-base italic border-l-2 border-border-active pl-4 mb-8">
                  &quot;{selectedPlayer.quote}&quot;
                </p>

                {/* Additional Info Section */}
                <div className="grid grid-cols-2 gap-y-4 gap-x-8 mb-8 border-y border-border-default py-6">
                  <div className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-text-muted text-xl">calendar_month</span>
                    <div>
                      <span className="text-text-secondary text-[10px] uppercase tracking-widest block">{t("squad.label.age")}</span>
                      <span className="text-text-primary font-bold">{selectedPlayer.age}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-text-muted text-xl">public</span>
                    <div>
                      <span className="text-text-secondary text-[10px] uppercase tracking-widest block">{t("squad.label.nationality")}</span>
                      <div className="flex items-center gap-2">
                        <span className="text-text-primary font-bold">{selectedPlayer.nationality}</span>
                        <Image src="/svgs/vietnam.svg" alt="Website Logo" width={22} height={22} />
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-text-muted text-xl">height</span>
                    <div>
                      <span className="text-text-secondary text-[10px] uppercase tracking-widest block">{t("squad.label.height")}</span>
                      <span className="text-text-primary font-bold">{selectedPlayer.height}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-text-muted text-xl">weight</span>
                    <div>
                      <span className="text-text-secondary text-[10px] uppercase tracking-widest block">{t("squad.label.weight")}</span>
                      <span className="text-text-primary font-bold">{selectedPlayer.weight}</span>
                    </div>
                  </div>
                </div>
                
                <div className="grid grid-cols-3 gap-4 mt-auto">
                  <div>
                    <span className="text-text-secondary text-[10px] sm:text-xs uppercase tracking-widest block mb-1">{t("squad.stats.app")}</span>
                    <span className="text-text-primary text-2xl font-bold">124</span>
                  </div>
                  <div>
                    <span className="text-text-secondary text-[10px] sm:text-xs uppercase tracking-widest block mb-1">{t("squad.stats.goals")}</span>
                    <span className="text-text-primary text-2xl font-bold">
                      {selectedPlayer.role === 'Goalkeeper' || selectedPlayer.role === 'Defender' ? '12' : '48'}
                    </span>
                  </div>
                  <div>
                    <span className="text-text-secondary text-[10px] sm:text-xs uppercase tracking-widest block mb-1">{t("squad.stats.assists")}</span>
                    <span className="text-text-primary text-2xl font-bold">
                      {selectedPlayer.role === 'Goalkeeper' ? '2' : '31'}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
