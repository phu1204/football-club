"use client";

import React from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

export function Sponsors() {
  const { t } = useLanguage();
  
  return (
    <section className="py-16 bg-background border-t border-border-default">
      <div className="container-custom flex flex-col items-center justify-center">
        <motion.p 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-[10px] text-text-muted uppercase tracking-widest font-semibold mb-4"
        >
          {t("partner.title")}
        </motion.p>
        
        {/* Simple Static Sponsor Card */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex flex-col items-center p-8 rounded-xl border border-border-default bg-surface max-w-md w-full text-center"
        >
          <span className="text-[11px] text-text-secondary font-semibold uppercase tracking-widest font-sans mb-3">
            {t("partner.type.main")}
          </span>
          <h4 className="text-3xl font-bold text-text-primary tracking-tight font-display uppercase">
            {t("partner.name.dongphat")}
          </h4>
        </motion.div>
      </div>
    </section>
  );
}
