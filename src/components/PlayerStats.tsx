"use client";

import React from "react";
import { motion } from "framer-motion";
import { Trophy, Award, Activity } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

interface PlayerStatRow {
  rank: number;
  name: string;
  number: string;
  role: string;
  roleKey: string;
  value: number;
  matches: number;
  image?: string;
}

const topScorers: PlayerStatRow[] = [
  { rank: 1, name: "Thế Anh", number: "10", role: "Forward", roleKey: "squad.filter.fw", value: 18, matches: 24, image: "/images/anh.jpg" },
  { rank: 2, name: "Tường Mập", number: "09", role: "Forward", roleKey: "squad.filter.fw", value: 14, matches: 22, image: "/images/tuong.jpg" },
  { rank: 3, name: "Trần Ry", number: "11", role: "Forward", roleKey: "squad.filter.fw", value: 11, matches: 26, image: "/images/ry.jpg" },
  { rank: 4, name: "Phu Nguyen", number: "22", role: "Midfielder", roleKey: "squad.filter.mf", value: 8, matches: 25, image: "/images/p7n.jpg" },
  { rank: 5, name: "Hoàng Giang", number: "22", role: "Midfielder", roleKey: "squad.filter.mf", value: 5, matches: 20, image: "/images/giang.jpg" },
];

const topAssisters: PlayerStatRow[] = [
  { rank: 1, name: "Phu Nguyen", number: "22", role: "Midfielder", roleKey: "squad.filter.mf", value: 15, matches: 25, image: "/images/p7n.jpg" },
  { rank: 2, name: "Văn Duy", number: "22", role: "Midfielder", roleKey: "squad.filter.mf", value: 10, matches: 23, image: "/images/duy.jpg" },
  { rank: 3, name: "Hoàng Giang", number: "22", role: "Midfielder", roleKey: "squad.filter.mf", value: 8, matches: 20, image: "/images/giang.jpg" },
  { rank: 4, name: "Thế Anh", number: "10", role: "Forward", roleKey: "squad.filter.fw", value: 7, matches: 24, image: "/images/anh.jpg" },
  { rank: 5, name: "Bảo Khoa", number: "08", role: "Defender", roleKey: "squad.filter.df", value: 5, matches: 18, image: "/images/khoa.jpg" },
];

export function PlayerStats() {
  const { t } = useLanguage();

  return (
    <section className="py-24 border-t border-border-default bg-surface relative overflow-hidden" id="stats">
      {/* Background ambient light */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full pointer-events-none" 
        style={{ background: 'radial-gradient(circle, rgba(212,175,55,0.015) 0%, transparent 70%)' }}
      ></div>

      <div className="container-custom relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-[10px] text-text-secondary uppercase tracking-widest font-semibold mb-2">{t("stats.title")}</h2>
          <h3 className="heading-xl text-text-primary">{t("stats.headline")}</h3>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Top Goals Table */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="border border-border-default rounded-[var(--radius-card)] p-6 sm:p-8 bg-surface shadow-card hover:shadow-card-hover transition-all duration-500"
          >
            <h4 className="font-display text-2xl font-bold uppercase tracking-tight text-text-primary mb-6 flex items-center gap-3">
              <Trophy className="w-6 h-6 text-gold" />
              {t("stats.goals.title")}
            </h4>
            <div className="overflow-x-auto">
              <table className="w-full text-sm font-sans">
                <thead>
                  <tr className="border-b border-border-default text-text-muted text-xs uppercase tracking-wider">
                    <th className="text-left pb-4 font-semibold w-12">#</th>
                    <th className="text-left pb-4 font-semibold">{t("stats.player")}</th>
                    <th className="text-center pb-4 font-semibold w-20">{t("stats.matches")}</th>
                    <th className="text-right pb-4 font-semibold w-24">{t("stats.goals")}</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border-default/50">
                  {topScorers.map((player) => {
                    const isFirst = player.rank === 1;
                    return (
                      <tr 
                        key={player.name}
                        className={`group transition-all duration-300 ${
                          isFirst 
                            ? "bg-gold/5 border-y border-gold/10 hover:bg-gold/10" 
                            : "hover:bg-background/40"
                        }`}
                      >
                        <td className="py-4 pl-2 font-display font-bold text-base">
                          {isFirst ? (
                            <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-gold/15 text-gold text-xs shadow-sm">
                              1
                            </span>
                          ) : (
                            <span className="text-text-muted text-sm">{player.rank}</span>
                          )}
                        </td>
                        <td className="py-4">
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-background overflow-hidden relative border border-border-default shadow-sm">
                              {player.image ? (
                                <img 
                                  src={player.image} 
                                  alt={player.name} 
                                  className="w-full h-full object-cover" 
                                />
                              ) : (
                                <div className="w-full h-full bg-accent/5 flex items-center justify-center font-bold text-accent">
                                  {player.name[0]}
                                </div>
                              )}
                            </div>
                            <div>
                              <div className="flex items-center gap-1.5">
                                <span className={`font-semibold text-text-primary ${isFirst ? "text-gold font-bold" : ""}`}>
                                  {player.name}
                                </span>
                                {isFirst && (
                                  <Award className="w-4 h-4 text-gold fill-gold/10" />
                                )}
                              </div>
                              <span className="text-[10px] text-text-muted uppercase tracking-wider block">
                                {t(player.roleKey)} • #{player.number}
                              </span>
                            </div>
                          </div>
                        </td>
                        <td className="py-4 text-center font-medium text-text-secondary">
                          {player.matches}
                        </td>
                        <td className="py-4 text-right pr-2">
                          <span className={`font-display font-bold text-lg ${isFirst ? "text-gold text-xl" : "text-text-primary"}`}>
                            {player.value}
                          </span>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </motion.div>

          {/* Top Assists Table */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="border border-border-default rounded-[var(--radius-card)] p-6 sm:p-8 bg-surface shadow-card hover:shadow-card-hover transition-all duration-500"
          >
            <h4 className="font-display text-2xl font-bold uppercase tracking-tight text-text-primary mb-6 flex items-center gap-3">
              <Activity className="w-6 h-6 text-accent" />
              {t("stats.assists.title")}
            </h4>
            <div className="overflow-x-auto">
              <table className="w-full text-sm font-sans">
                <thead>
                  <tr className="border-b border-border-default text-text-muted text-xs uppercase tracking-wider">
                    <th className="text-left pb-4 font-semibold w-12">#</th>
                    <th className="text-left pb-4 font-semibold">{t("stats.player")}</th>
                    <th className="text-center pb-4 font-semibold w-20">{t("stats.matches")}</th>
                    <th className="text-right pb-4 font-semibold w-24">{t("stats.assists")}</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border-default/50">
                  {topAssisters.map((player) => {
                    const isFirst = player.rank === 1;
                    return (
                      <tr 
                        key={player.name}
                        className={`group transition-all duration-300 ${
                          isFirst 
                            ? "bg-accent/5 border-y border-accent/10 hover:bg-accent/10" 
                            : "hover:bg-background/40"
                        }`}
                      >
                        <td className="py-4 pl-2 font-display font-bold text-base">
                          {isFirst ? (
                            <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-accent/10 text-accent text-xs shadow-sm">
                              1
                            </span>
                          ) : (
                            <span className="text-text-muted text-sm">{player.rank}</span>
                          )}
                        </td>
                        <td className="py-4">
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-background overflow-hidden relative border border-border-default shadow-sm">
                              {player.image ? (
                                <img 
                                  src={player.image} 
                                  alt={player.name} 
                                  className="w-full h-full object-cover" 
                                />
                              ) : (
                                <div className="w-full h-full bg-accent/5 flex items-center justify-center font-bold text-accent">
                                  {player.name[0]}
                                </div>
                              )}
                            </div>
                            <div>
                              <div className="flex items-center gap-1.5">
                                <span className={`font-semibold text-text-primary ${isFirst ? "text-accent font-bold" : ""}`}>
                                  {player.name}
                                </span>
                                {isFirst && (
                                  <Award className="w-4 h-4 text-accent fill-accent/5" />
                                )}
                              </div>
                              <span className="text-[10px] text-text-muted uppercase tracking-wider block">
                                {t(player.roleKey)} • #{player.number}
                              </span>
                            </div>
                          </div>
                        </td>
                        <td className="py-4 text-center font-medium text-text-secondary">
                          {player.matches}
                        </td>
                        <td className="py-4 text-right pr-2">
                          <span className={`font-display font-bold text-lg ${isFirst ? "text-accent text-xl" : "text-text-primary"}`}>
                            {player.value}
                          </span>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
