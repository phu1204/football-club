"use client";

import React from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import Image from "next/image"

export function AboutSimpleFC() {
  const { t } = useLanguage();

  return (
    <section className="section-padding bg-surface relative overflow-hidden border-t border-border-default">
      {/* Soft decorative background */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full -translate-y-1/2 translate-x-1/3 pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(23,23,23,0.02) 0%, transparent 70%)' }}></div>
      
      <div className="container-custom grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-6 h-[1px] bg-text-muted"></div>
            <h2 className="text-[10px] text-text-secondary uppercase tracking-widest font-semibold">{t("about.badge")}</h2>
          </div>
          
          <h3 className="heading-xl text-text-primary mb-8 leading-tight">
            {t("about.title1")}<br/><span className="text-text-secondary font-light italic">{t("about.title2")}</span>
          </h3>
          
          <div className="space-y-6 text-text-secondary border-l-2 border-border-default pl-6 mb-10">
            <p className="text-lg leading-relaxed">
              {t("about.p1")}
            </p>
            <p className="leading-relaxed">
              {t("about.p2")}
            </p>
          </div>
          
          <button className="btn-outline text-xs tracking-widest uppercase font-medium cursor-pointer">
            <span className="relative z-10">{t("about.cta")}</span>
          </button>
        </motion.div>
        
        <motion.div 
          className="relative aspect-[3/4] md:aspect-[4/4] rounded-[var(--radius-card)] overflow-hidden shadow-xl"
          initial={{ opacity: 0, scale: 0.9, y: 50 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <Image
            fill
            priority
            alt="Stadium" 
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover transition-transform duration-1000 hover:scale-105" 
            src="/images/arena.jpeg"
          />
          <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/20 to-transparent opacity-80"></div>
          
          <div className="absolute bottom-8 left-8 right-8 p-5 backdrop-blur-md bg-white/10 border border-white/20 rounded-[var(--radius-card)]">
            <h4 className="text-xl font-semibold text-white mb-2">{t("about.arena")}</h4>
            <div className="flex items-center gap-2 text-white/70 text-sm font-light">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
              <span>{t("about.capacity")}</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
