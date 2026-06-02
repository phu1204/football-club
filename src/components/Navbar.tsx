"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

const navLinks = [
  { key: "nav.home", href: "#" },
  { key: "nav.matches", href: "#matches" },
  // { key: "nav.news", href: "#" },
  { key: "nav.squad", href: "#squad" },
  // { key: "nav.membership", href: "#membership" },
  // { key: "nav.kits", href: "#kits" },
];

export function Navbar() {
  const { language, setLanguage, t } = useLanguage();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [active, setActive] = useState(0)

  return (
    <>
      {/* TOP NAVBAR */}
      <header className="sticky top-0 w-full z-50 bg-surface-glass backdrop-blur-md border-b border-white/20 shadow-sm transition-all duration-300">
        <div className="flex justify-between items-center h-[72px] px-[var(--spacing-container-padding)] max-w-[var(--spacing-container-max)] mx-auto">

          {/* Logo + Club Name */}
          <div className="flex items-center gap-3">
            <Image
              src="/images/logo-simple.png"
              alt="Simple Football Club"
              width={40}
              height={40}
              className="h-10 w-10 object-contain drop-shadow-sm hover:scale-105 transition-transform shrink-0 cursor-pointer"
              loading="eager"
            />
            <div className="flex flex-col leading-none cursor-pointer">
              <span
                className="text-[1.05rem] font-black tracking-[0.12em] text-text-primary uppercase leading-none"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Simple FC
              </span>
              <span className="text-[9px] tracking-[0.18em] text-text-muted uppercase mt-0.5 hidden sm:block">
                Official Club
              </span>
            </div>
          </div>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-8 text-[0.85rem] font-medium tracking-wide text-text-secondary">
            {navLinks.map((link, i) => (
              <a
                key={link.key}
                href={link.href}
                className={`relative transition-colors duration-200 after:content-[''] after:absolute after:-bottom-[6px] after:left-0 after:h-[2px] after:bg-accent after:rounded-full after:transition-all after:duration-300 ${
                  i === active
                    ? "text-text-primary font-semibold after:w-full"
                    : "hover:text-text-primary after:w-0 hover:after:w-full"
                }`}
                onClick={() => setActive(i)}
              >
                {t(link.key)}
              </a>
            ))}
          </nav>

          {/* Right Controls */}
          <div className="flex items-center gap-3 lg:gap-5">
            {/* Search — hidden on mobile to save space */}
            <button className="hidden sm:flex p-2 hover:bg-surface-elevated hover:shadow-sm rounded-full transition-all items-center justify-center shrink-0 text-text-secondary hover:text-text-primary">
              <span className="material-symbols-outlined text-[20px]">search</span>
            </button>

            {/* Login — hidden on mobile */}
            <button className="hidden sm:flex btn-primary shrink-0 text-[0.8rem] px-5 py-2">
              {t("nav.login")}
            </button>

            {/* Language Switcher */}
            <div className="relative bg-surface border border-border-default p-1 rounded-full flex items-center w-[76px] h-9 shrink-0 shadow-inner">
              <button
                onClick={() => setLanguage("vi")}
                className={`flex-1 text-center text-[10px] font-semibold transition-all duration-300 relative z-10 cursor-pointer select-none ${
                  language === "vi" ? "text-white" : "text-text-secondary hover:text-text-primary"
                }`}
              >
                VI
              </button>
              <button
                onClick={() => setLanguage("en")}
                className={`flex-1 text-center text-[10px] font-semibold transition-all duration-300 relative z-10 cursor-pointer select-none ${
                  language === "en" ? "text-white" : "text-text-secondary hover:text-text-primary"
                }`}
              >
                EN
              </button>
              {/* Sliding bubble */}
              <div
                className="absolute top-1 bottom-1 w-[32px] bg-accent rounded-full transition-all duration-300 ease-out shadow-sm"
                style={{ left: language === "vi" ? "4px" : "calc(100% - 36px)" }}
              />
            </div>

            {/* Hamburger — mobile only */}
            <button
              onClick={() => setMobileOpen((v) => !v)}
              className="md:hidden p-2 rounded-lg hover:bg-surface-elevated transition-colors text-text-primary cursor-pointer"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* MOBILE DRAWER */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            mobileOpen ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <nav className="flex flex-col border-t border-border-default bg-surface-glass backdrop-blur-md px-[var(--spacing-container-padding)] py-4 gap-1">
            {navLinks.map((link) => (
              <a
                key={link.key}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="py-3 px-4 rounded-xl text-[0.9rem] font-medium text-text-secondary hover:text-text-primary hover:bg-surface-elevated transition-all duration-200"
              >
                {t(link.key)}
              </a>
            ))}
            <div className="pt-3 border-t border-border-default mt-2">
              <button className="btn-primary w-full text-[0.85rem] py-3">
                {t("nav.login")}
              </button>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
}
