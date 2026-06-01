"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { RotateCw, Shirt } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

// --- Types & Colors ---
type KitType = "home" | "away" | "third";

interface KitDetails {
  name: { vi: string; en: string };
  tagline: { vi: string; en: string };
  colors: {
    bg: string;
    accent: string;
    trim: string;
    sponsor: string;
    text: string;
  };
}

const kitConfig: Record<KitType, KitDetails> = {
  home: {
    name: { vi: "Sân Nhà", en: "Home Kit" },
    tagline: { vi: "Legacy Teal", en: "Legacy Teal" },
    colors: {
      bg: "#081425",
      accent: "#2bb8bb",
      trim: "#facc15",
      sponsor: "#ffffff",
      text: "#facc15",
    },
  },
  away: {
    name: { vi: "Sân Khách", en: "Away Kit" },
    tagline: { vi: "Alpine White", en: "Alpine White" },
    colors: {
      bg: "#ffffff",
      accent: "#2bb8bb",
      trim: "#081425",
      sponsor: "#081425",
      text: "#081425",
    },
  },
  third: {
    name: { vi: "Thứ Ba", en: "Third Kit" },
    tagline: { vi: "Neon Cyber", en: "Neon Cyber" },
    colors: {
      bg: "#152031",
      accent: "#ff6b35",
      trim: "#2bb8bb",
      sponsor: "#ffffff",
      text: "#ff6b35",
    },
  },
};

export function TeamKits() {
  const [activeKit, setActiveKit] = useState<KitType>("home");
  const [isFlipped, setIsFlipped] = useState(false);
  const [customName, setCustomName] = useState("SIMPLE FC");
  const [customNumber, setCustomNumber] = useState("10");
  const { language, t } = useLanguage();

  const activeDetails = kitConfig[activeKit];

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value.slice(0, 12).toUpperCase();
    setCustomName(val || "PLAYER");
    setIsFlipped(true);
  };

  const handleNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value.replace(/[^0-9]/g, "").slice(0, 2);
    setCustomNumber(val || "0");
    setIsFlipped(true);
  };

  // --- Jersey SVG ---
  const renderJerseySVG = (side: "front" | "back") => {
    const { bg, accent, trim, sponsor, text } = activeDetails.colors;

    return (
      <svg viewBox="0 0 200 240" className="w-full h-full select-none transition-all duration-500">
        <defs>
          <linearGradient id="homeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#081425" />
            <stop offset="100%" stopColor="#152031" />
          </linearGradient>
          <linearGradient id="neonGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#111c2d" />
            <stop offset="100%" stopColor="#1e293b" />
          </linearGradient>
          <linearGradient id="tealGlow" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor={accent} stopOpacity="0.8" />
            <stop offset="100%" stopColor={accent} stopOpacity="0" />
          </linearGradient>
        </defs>

        {/* Left Sleeve */}
        <path
          d="M 75,45 L 42,54 L 14,84 L 30,98 L 55,98 Z"
          fill={activeKit === "home" ? "url(#homeGradient)" : activeKit === "third" ? "url(#neonGradient)" : bg}
          stroke={activeKit === "away" ? "#e2e8f0" : "rgba(255,255,255,0.05)"}
          strokeWidth="1.5"
        />
        <path d="M 14,84 L 20,78 L 33,91 L 30,98 Z" fill={trim} />

        {/* Right Sleeve */}
        <path
          d="M 125,45 L 158,54 L 186,84 L 170,98 L 145,98 Z"
          fill={activeKit === "home" ? "url(#homeGradient)" : activeKit === "third" ? "url(#neonGradient)" : bg}
          stroke={activeKit === "away" ? "#e2e8f0" : "rgba(255,255,255,0.05)"}
          strokeWidth="1.5"
        />
        <path d="M 186,84 L 180,78 L 167,91 L 170,98 Z" fill={trim} />

        {/* Main Body */}
        <path
          d={
            side === "front"
              ? "M 75,45 Q 100,72 125,45 L 145,98 L 142,215 Q 100,222 58,215 L 55,98 Z"
              : "M 75,45 Q 100,50 125,45 L 145,98 L 142,215 Q 100,222 58,215 L 55,98 Z"
          }
          fill={activeKit === "home" ? "url(#homeGradient)" : activeKit === "third" ? "url(#neonGradient)" : bg}
          stroke={activeKit === "away" ? "#e2e8f0" : "rgba(255,255,255,0.05)"}
          strokeWidth="1.5"
        />

        {/* Patterns */}
        {activeKit === "home" && (
          <>
            <path d="M 55,100 L 145,65 L 145,90 L 55,125 Z" fill={accent} opacity="0.15" />
            <path d="M 55,130 L 145,95 L 145,120 L 55,155 Z" fill={accent} opacity="0.25" />
            <path d="M 55,160 L 145,125 L 145,150 L 55,185 Z" fill={accent} opacity="0.15" />
            <path d="M 55,98 L 58,98 L 58,211 L 55,210 Z" fill={trim} />
            <path d="M 142,211 L 145,210 L 145,98 L 142,98 Z" fill={trim} />
          </>
        )}
        {activeKit === "away" && (
          <>
            <line x1="70" y1="65" x2="70" y2="212" stroke={accent} strokeWidth="1.5" opacity="0.25" />
            <line x1="85" y1="70" x2="85" y2="215" stroke={accent} strokeWidth="1.5" opacity="0.25" />
            <line x1="100" y1="72" x2="100" y2="218" stroke={accent} strokeWidth="1.5" opacity="0.25" />
            <line x1="115" y1="70" x2="115" y2="215" stroke={accent} strokeWidth="1.5" opacity="0.25" />
            <line x1="130" y1="65" x2="130" y2="212" stroke={accent} strokeWidth="1.5" opacity="0.25" />
            <path d="M 55,98 Q 57,150 58,211" fill="none" stroke={trim} strokeWidth="2" />
            <path d="M 145,98 Q 143,150 142,211" fill="none" stroke={trim} strokeWidth="2" />
          </>
        )}
        {activeKit === "third" && (
          <>
            <path d="M 65,80 Q 100,105 135,80" fill="none" stroke={accent} strokeWidth="3" opacity="0.85" strokeLinecap="round" />
            <path d="M 60,115 Q 100,145 140,115" fill="none" stroke={trim} strokeWidth="2" opacity="0.7" strokeLinecap="round" />
            <path d="M 58,150 Q 100,180 142,150" fill="none" stroke={accent} strokeWidth="3" opacity="0.85" strokeLinecap="round" />
            <path d="M 57,185 Q 100,210 143,185" fill="none" stroke={trim} strokeWidth="1.5" opacity="0.5" strokeLinecap="round" />
          </>
        )}

        {/* Collar */}
        <path
          d={
            side === "front"
              ? "M 75,45 Q 100,72 125,45 Q 100,38 75,45 Z"
              : "M 75,45 Q 100,50 125,45 Q 100,38 75,45 Z"
          }
          fill={trim}
        />

        {/* Front Elements */}
        {side === "front" && (
          <>
            <g transform="translate(75, 90) scale(0.65)">
              <circle cx="0" cy="0" r="18" fill={activeKit === "away" ? bg : "rgba(8,20,37,0.8)"} stroke={trim} strokeWidth="2.5" />
              <polygon points="0,-10 3,-3 10,-3 5,2 7,9 0,5 -7,9 -5,2 -10,-3 -3,-3" fill={accent} />
              <circle cx="0" cy="0" r="3" fill="#ffffff" />
            </g>
            <g transform="translate(125, 90) scale(0.65)">
              <path d="M-12,-4 Q0,8 12,-4 M-12,2 Q0,14 12,2" fill="none" stroke={sponsor} strokeWidth="3.5" strokeLinecap="round" />
            </g>
            <g transform="translate(100, 142)">
              <text x="0" y="0" textAnchor="middle" fill={sponsor} fontSize="13" fontWeight="bold" fontFamily="Barlow Condensed" letterSpacing="3.5">
                SIMPLE FC
              </text>
              <line x1="-30" y1="6" x2="30" y2="6" stroke={accent} strokeWidth="1.5" opacity="0.8" />
              <text x="0" y="14" textAnchor="middle" fill={sponsor} fontSize="6" opacity="0.6" fontFamily="Barlow Condensed" letterSpacing="1.5">
                PROUD &amp; UNITED
              </text>
            </g>
          </>
        )}

        {/* Back Elements */}
        {side === "back" && (
          <>
            <text x="100" y="95" textAnchor="middle" fill={text} fontSize="12" fontWeight="bold" fontFamily="Barlow Condensed" letterSpacing="2.5">
              {customName}
            </text>
            <text x="100" y="160" textAnchor="middle" fill={text} fontSize="52" fontWeight="900" fontFamily="Barlow Condensed" letterSpacing="-2">
              {customNumber}
            </text>
          </>
        )}
      </svg>
    );
  };

  return (
    <section
      id="kits"
      className="section-padding bg-surface container-custom relative overflow-hidden rounded-[var(--radius-card)] my-12 border border-border-default shadow-sm"
    >
      {/* Ambient accent glow */}
      <div
        className="absolute top-0 right-0 w-80 h-80 rounded-full opacity-10 transition-colors duration-1000 pointer-events-none"
        style={{ background: `radial-gradient(circle, ${activeDetails.colors.accent} 0%, transparent 70%)` }}
      />

      <div className="relative z-10">
        {/* Section Header */}
        <div className="text-center mb-14">
          <p className="section-label justify-center">{t("kits.badge")}</p>
          <h2 className="heading-xl text-text-primary">{t("kits.title")}</h2>
        </div>

        {/* Kit Selector Tabs */}
        <div className="flex justify-center mb-10">
          <div className="bg-background p-1.5 rounded-[10px] border border-border-default inline-flex gap-1">
            {(["home", "away", "third"] as KitType[]).map((kit) => (
              <button
                key={kit}
                onClick={() => {
                  setActiveKit(kit);
                  setIsFlipped(false);
                }}
                className={`px-8 py-2.5 text-sm font-bold uppercase tracking-wider rounded-lg transition-all duration-300 cursor-pointer ${
                  activeKit === kit
                    ? "bg-accent text-white shadow-sm"
                    : "text-text-secondary hover:text-text-primary"
                }`}
                style={{ fontFamily: "var(--font-display)" }}
              >
                {kitConfig[kit].name[language]}
              </button>
            ))}
          </div>
        </div>

        {/* Main Content: Jersey + Personalizer */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-3xl mx-auto">

          {/* Jersey 3D Flip Display */}
          <div className="flex flex-col items-center justify-center">
            <div className="perspective-container relative w-72 h-[340px]">
              <motion.div
                animate={{ rotateY: isFlipped ? 180 : 0 }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
                style={{ transformStyle: "preserve-3d" }}
                className="w-full h-full relative"
              >
                {/* FRONT */}
                <div
                  style={{ backfaceVisibility: "hidden" }}
                  className={`absolute inset-0 flex flex-col items-center justify-between rounded-3xl border p-6 shadow-2xl transition-all duration-500 ${
                    activeKit === "away"
                      ? "bg-stone-50 border-stone-200/50"
                      : "bg-[#0b1424]/90 border-white/10"
                  }`}
                >
                  <div className="w-full flex justify-between items-center text-[9px] font-bold tracking-widest opacity-50 text-stone-400 uppercase">
                    <span style={{ fontFamily: "var(--font-display)" }}>{activeDetails.name[language]}</span>
                    <span>{t("kits.front")}</span>
                  </div>
                  <div className="w-56 h-60 flex items-center justify-center">
                    {renderJerseySVG("front")}
                  </div>
                  <p
                    className="text-[10px] font-semibold tracking-widest uppercase"
                    style={{
                      color: activeDetails.colors.accent,
                      fontFamily: "var(--font-display)",
                    }}
                  >
                    {activeDetails.tagline[language]}
                  </p>
                </div>

                {/* BACK */}
                <div
                  style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
                  className={`absolute inset-0 flex flex-col items-center justify-between rounded-3xl border p-6 shadow-2xl transition-all duration-500 ${
                    activeKit === "away"
                      ? "bg-stone-50 border-stone-200/50"
                      : "bg-[#0b1424]/90 border-white/10"
                  }`}
                >
                  <div className="w-full flex justify-between items-center text-[9px] font-bold tracking-widest opacity-50 text-stone-400 uppercase">
                    <span style={{ fontFamily: "var(--font-display)" }}>{activeDetails.name[language]}</span>
                    <span>{t("kits.back")}</span>
                  </div>
                  <div className="w-56 h-60 flex items-center justify-center">
                    {renderJerseySVG("back")}
                  </div>
                  <p className="text-[9px] font-medium text-text-muted tracking-widest uppercase">
                    Custom Print Ready
                  </p>
                </div>
              </motion.div>
            </div>

            {/* Flip Button */}
            <button
              onClick={() => setIsFlipped(!isFlipped)}
              className="mt-6 flex items-center gap-2 px-6 py-2.5 rounded-full bg-surface border border-border-default hover:border-accent text-text-secondary hover:text-accent text-xs font-semibold uppercase tracking-wider shadow-sm transition-all duration-300 active:scale-95 cursor-pointer"
              style={{ fontFamily: "var(--font-display)" }}
            >
              <RotateCw className="w-4 h-4 animate-[spin_8s_linear_infinite]" />
              <span>{t("kits.flip")}</span>
            </button>
          </div>

          {/* Personalizer */}
          <div className="bg-background p-6 rounded-[16px] border border-border-default shadow-sm space-y-5">
            <h4
              className="text-base font-bold text-text-primary uppercase tracking-wider flex items-center gap-2"
              style={{ fontFamily: "var(--font-display)" }}
            >
              <Shirt className="w-4 h-4 text-text-secondary" />
              <span>{t("kits.personalize")}</span>
            </h4>

            <div className="space-y-4">
              {/* Name Input */}
              <div className="space-y-1.5">
                <label className="text-[11px] font-bold text-text-secondary uppercase tracking-wider">
                  {t("kits.label.name")}
                </label>
                <input
                  type="text"
                  placeholder="E.g., SAMI"
                  maxLength={12}
                  onChange={handleNameChange}
                  className="w-full bg-surface border border-border-default rounded-[10px] px-4 py-3 text-sm font-semibold tracking-widest text-text-primary focus:outline-none focus:border-border-active transition-all"
                />
              </div>

              {/* Number Input */}
              <div className="space-y-1.5">
                <label className="text-[11px] font-bold text-text-secondary uppercase tracking-wider">
                  {t("kits.label.number")}
                </label>
                <input
                  type="text"
                  placeholder="E.g., 10"
                  maxLength={2}
                  onChange={handleNumberChange}
                  className="w-full bg-surface border border-border-default rounded-[10px] px-4 py-3 text-sm font-semibold tracking-widest text-text-primary focus:outline-none focus:border-border-active transition-all"
                />
              </div>
            </div>

            <div className="text-[10px] text-text-secondary italic flex items-center gap-1.5 pt-1">
              <div className="w-1.5 h-1.5 bg-text-primary rounded-full opacity-40" />
              <span>{t("kits.note")}</span>
            </div>
          </div>

        </div>
      </div>

      <style jsx global>{`
        .perspective-container {
          perspective: 1200px;
        }
      `}</style>
    </section>
  );
}
