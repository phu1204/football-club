"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";

export function BossOfClub() {
  const { t } = useLanguage();

  return (
    <section className="section-padding bg-surface border-t border-border-default overflow-hidden">
      <div className="container-custom flex flex-col md:flex-row items-center gap-16">
        <div className="w-full md:w-5/12 relative">
          <div className="absolute -top-10 -left-10 w-40 h-40 border-t border-l border-border-default opacity-50 rounded-tl-2xl"></div>
          <div className="relative z-10 rounded-[var(--radius-card)] overflow-hidden shadow-xl">
            <img alt={t("boss.role")} className="w-full object-cover aspect-[4/5]" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDhgX3asvC-cvvY6rZIWH_ExZDxpILM4tS1Zf2wl5estrkhpmzzV3liUiu9AntF4NKlReTQIw5KPC3-xiVkVvouKb_3P_1Y-8nlKxYsGneJNYJnDaD3V_kU3IqnLBQDe2EzzrrXUVYyEV3gg2q7PTFRVNIo_cDopzFx6dn0DNT--sY23Vccw41CrPblI_5_Ume_BVRiTf0LA2VCs4MceZG5I7ejTY2KnCiD5FNmfmQ89sNcVFFyhsU-f9waNRJkUaS_I2We17JdOTU"/>
          </div>
          <div className="absolute -bottom-6 -right-6 bg-surface border border-border-default p-5 z-20 shadow-md rounded-[var(--radius-card)]">
            <p className="text-text-primary font-semibold text-sm uppercase tracking-widest">{t("boss.role")}</p>
          </div>
        </div>
        <div className="w-full md:w-7/12 space-y-8 mt-12 md:mt-0">
          <div className="inline-block bg-black/5 text-text-secondary px-4 py-1.5 text-[10px] font-semibold uppercase tracking-widest rounded-full border border-border-default">{t("boss.badge")}</div>
          <h2 className="text-4xl md:text-5xl font-light leading-tight text-text-primary tracking-tight">{t("boss.title")}</h2>
          <div className="space-y-4 text-text-secondary">
            <p className="text-lg leading-relaxed font-light">
              {t("boss.quote")}
            </p>
          </div>
          <div className="pt-4 border-t border-border-default">
            <p className="font-semibold text-xl text-text-primary">Khalid Al-Rashid</p>
            <p className="text-text-secondary text-xs uppercase tracking-widest mt-1">{t("boss.role")}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
