"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";

export function Footer() {
  const { t } = useLanguage();

  return (
    <>
      <footer className="bg-background w-full py-20 border-t border-border-default">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 container-custom">
          {/* Col 1: Brand */}
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <img alt="Simple FC" className="h-9 w-9" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD_SxJQ-BJnvyYeRZZF2Y7PTU8AOdy00BZDHJof4VpaDmAM2SeyUfrFRZue0pwPq9IHRoi9UWvkjrDNUIg-y_-NC2f7dUqMWGJEdq27hmtJSYoFoTASV_LzS4RgxuOkk6OlM9nwc_pywuJezQcEeyMYItsTMlbv69qNdmKEcOWWMBZe0Xrc37yz7hkMOuR4xQYdeiqHeDhu4DvYEKduhN9xOENwEMZgRe5ikiVICa_D8zT0xOK1GpW3qeSW-XZje4S5iQPErDi1FBc"/>
              <span className="text-xl text-text-primary font-semibold tracking-tight">Simple FC</span>
            </div>
            <p className="text-text-secondary text-sm leading-relaxed font-light">
              {t("footer.desc")}
            </p>
           
          </div>
          {/* Col 2: Quick Links */}
          <div className="md:pl-8">
            <h4 className="text-text-primary font-semibold mb-6 text-sm">{t("footer.col2.title")}</h4>
            <ul className="space-y-3 text-text-secondary text-sm">
              <li><a className="hover:text-text-primary transition-colors" href="#">{t("footer.fixtures")}</a></li>
              <li><a className="hover:text-text-primary transition-colors" href="#">{t("footer.clubs")}</a></li>
              <li><a className="hover:text-text-primary transition-colors" href="#">{t("footer.competitions")}</a></li>
              <li><a className="hover:text-text-primary transition-colors" href="#">{t("footer.news")}</a></li>
            </ul>
          </div>
          {/* Col 3: Legal */}
          <div>
            <h4 className="text-text-primary font-semibold mb-6 text-sm">{t("footer.col3.title")}</h4>
            <ul className="space-y-3 text-text-secondary text-sm">
              <li><a className="hover:text-text-primary transition-colors" href="#">{t("footer.privacy")}</a></li>
              <li><a className="hover:text-text-primary transition-colors" href="#">{t("footer.terms")}</a></li>
              <li><a className="hover:text-text-primary transition-colors" href="#">{t("footer.cookies")}</a></li>
              <li><a className="hover:text-text-primary transition-colors" href="#">{t("footer.contact")}</a></li>
              <li><a className="hover:text-text-primary transition-colors" href="#">{t("footer.sponsorship")}</a></li>
            </ul>
          </div>
          {/* Col 4: Follow Us */}
          <div>
            <h4 className="text-text-primary font-semibold mb-6 text-sm">{t("footer.col4.title")}</h4>
            <div className="flex gap-5 text-text-secondary text-sm">
              <a className="hover:text-text-primary transition-colors" href="#">Instagram</a>
              <a className="hover:text-text-primary transition-colors" href="#">Facebook</a>
              <a className="hover:text-text-primary transition-colors" href="#">YouTube</a>
            </div>
            <div className="mt-8 pt-8 border-t border-border-default">
              <p className="text-[10px] text-text-muted uppercase tracking-widest">{t("footer.copyright")}</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
