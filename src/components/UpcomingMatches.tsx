"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const container: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
      staggerChildren: 0.12,
    },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: "easeOut" },
  },
};

export function UpcomingMatches() {
  return (
    <motion.section
      className="py-20 px-5 md:px-16 max-w-[1440px] mx-auto"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      variants={container}
    >
      <motion.div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-12 gap-4" variants={item}>
        <div>
          <h2 className="text-sm font-bold text-tertiary uppercase tracking-widest mb-2">Schedule</h2>
          <h3 className="text-3xl md:text-5xl font-display font-bold text-on-surface">Upcoming Matches</h3>
        </div>
        <div className="flex flex-wrap gap-4 text-sm font-bold font-label-lg uppercase tracking-wider">
          <span className="text-tertiary border-b-2 border-tertiary pb-1 cursor-pointer">
            All Category
          </span>
          <span className="text-on-surface-variant hover:text-tertiary cursor-pointer transition-colors">Men</span>
          <span className="text-on-surface-variant hover:text-tertiary cursor-pointer transition-colors">Women</span>
          <span className="text-on-surface-variant hover:text-tertiary cursor-pointer transition-colors">Youth</span>
        </div>
      </motion.div>
      
      <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6" variants={container}>
        {/* Match Card 1 */}
        <motion.div
          variants={item}
          whileHover={{ y: -8, scale: 1.01 }}
          transition={{ type: "spring", stiffness: 220, damping: 18 }}
          className="glass-panel p-6 rounded-xl hover:border-tertiary/30 transition-all duration-300 cursor-pointer"
        >
          <div className="flex justify-between items-start mb-6">
            <span className="w-8 h-8 rounded-full bg-tertiary/10 text-tertiary flex items-center justify-center font-bold text-xs">RSL</span>
            <span className="text-[10px] font-bold text-on-surface-variant uppercase tracking-wider">
              May 5, 2026 • 7:30 PM
            </span>
          </div>
          <div className="flex flex-col gap-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center font-display font-bold text-on-surface">
                  B
                </div>
                <span className="font-semibold text-on-surface">Al Batin</span>
              </div>
              <span className="font-display font-bold text-2xl text-on-surface">4</span>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center font-display font-bold text-on-surface">
                  B
                </div>
                <span className="font-semibold text-on-surface">Al Balad</span>
              </div>
              <span className="font-display font-bold text-2xl text-on-surface">3</span>
            </div>
          </div>
        </motion.div>

        {/* Match Card Highlight (Next Match) */}
        <motion.div
          variants={item}
          whileHover={{ y: -10, scale: 1.015 }}
          transition={{ type: "spring", stiffness: 220, damping: 18 }}
          className="bg-tertiary p-6 rounded-xl text-black relative shadow-lg transform transition-all duration-300 hover:-translate-y-1 cursor-pointer group"
        >
          <div className="flex justify-between items-start mb-6">
            <span className="w-8 h-8 rounded-full bg-black/10 text-black flex items-center justify-center font-bold text-xs">CUP</span>
            <span className="text-[10px] font-bold text-black/75 uppercase tracking-wider">
              May 6, 2026 • 8:05 PM
            </span>
          </div>
          <div className="mb-4">
            <h3 className="text-4xl font-display font-extrabold tracking-tight">6 May</h3>
            <p className="text-xs text-black/60 font-medium mt-1">Reserve Stadium A</p>
          </div>
          <div className="flex flex-col gap-4 mt-6">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-black/10 flex items-center justify-center font-display font-bold">
                Q
              </div>
              <span className="font-bold">Al Qadisiyah</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-black/10 flex items-center justify-center font-display font-bold">
                E
              </div>
              <span className="font-bold">Al Ettifaq</span>
            </div>
          </div>
          <button className="absolute top-4 right-4 w-10 h-10 rounded-full bg-black/5 flex items-center justify-center group-hover:bg-black/15 transition-colors">
            <ArrowUpRight className="w-5 h-5 text-black" />
          </button>
        </motion.div>

        {/* Match Card 3 */}
        <motion.div
          variants={item}
          whileHover={{ y: -8, scale: 1.01 }}
          transition={{ type: "spring", stiffness: 220, damping: 18 }}
          className="glass-panel p-6 rounded-xl hover:border-tertiary/30 transition-all duration-300 cursor-pointer"
        >
          <div className="flex justify-between items-start mb-6">
            <span className="w-8 h-8 rounded-full bg-tertiary/10 text-tertiary flex items-center justify-center font-bold text-xs">CUP</span>
            <span className="text-[10px] font-bold text-on-surface-variant uppercase tracking-wider">
              May 8, 2026 • 10:30 PM
            </span>
          </div>
          <div className="mb-4">
            <h3 className="text-4xl font-display font-extrabold text-on-surface tracking-tight">8 May</h3>
            <p className="text-xs text-on-surface-variant mt-1">Alinma Stadium (Jeddah)</p>
          </div>
          <div className="flex flex-col gap-4 mt-6">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center font-display font-bold text-on-surface">
                I
              </div>
              <span className="font-semibold text-on-surface">Al Ittihad</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center font-display font-bold text-on-surface">
                S
              </div>
              <span className="font-semibold text-on-surface">Al Shabab</span>
            </div>
          </div>
        </motion.div>

        {/* Match Card 4 */}
        <motion.div
          variants={item}
          whileHover={{ y: -8, scale: 1.01, opacity: 1 }}
          transition={{ type: "spring", stiffness: 220, damping: 18 }}
          className="glass-panel p-6 rounded-xl hover:border-tertiary/30 transition-all duration-300 cursor-pointer opacity-70 hover:opacity-100"
        >
          <div className="flex justify-between items-start mb-6">
            <span className="w-8 h-8 rounded-full bg-tertiary/10 text-tertiary flex items-center justify-center font-bold text-xs">SUP</span>
            <span className="text-[10px] font-bold text-on-surface-variant uppercase tracking-wider">
              May 11, 2026 • 9:45 PM
            </span>
          </div>
          <div className="mb-4">
            <h3 className="text-4xl font-display font-extrabold text-on-surface-variant tracking-tight">11 May</h3>
            <p className="text-xs text-on-surface-variant mt-1">Prince Sultan Stadium</p>
          </div>
          <div className="flex flex-col gap-4 mt-6">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center font-display font-bold text-on-surface-variant">
                N
              </div>
              <span className="font-semibold text-on-surface-variant">Al Nassr</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center font-display font-bold text-on-surface-variant">
                W
              </div>
              <span className="font-semibold text-on-surface-variant">Al Wehda</span>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </motion.section>
  );
}
