"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";

export function LatestHeadlines() {
  const { t } = useLanguage();

  return (
    <section className="section-padding bg-background">
      <div className="container-custom">
        <h2 className="heading-xl mb-10 text-text-primary">{t("news.headline")}</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* News 1 */}
          <div className="group cursor-pointer flex flex-col">
            <div className="overflow-hidden mb-5 rounded-[var(--radius-card)] shadow-sm">
              <img alt="News Headline" className="w-full h-[280px] object-cover group-hover:scale-105 transition-transform duration-700 ease-out" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBmocBxjIqbedfT__dAWMsiY9Xv1Ptq6UVMR25L3LZ2tUJFtp3_8PUTyVwQD8XK6pgLzTWBvzzR44vuPwn3swB7HwH7HP7i9LiWHQR0owOqk6-M7UeXfhAQuFMW6GfdL9uNp6OlZAivBhjXoeCyfJKasE-F6KhK-5-kL8kgANNZX5YU-uGTN8d05JHzpI2qpKLCJHIaNBhf-maW8BbMghiKdEvTWLqxo-kyBD5omPoY01a4xxIt_PIhGJZ3yYaqu6pQTvA_RTHqPUk"/>
            </div>
            <span className="text-[10px] text-text-secondary tracking-widest uppercase font-semibold">May 5, 2025</span>
            <h3 className="text-lg font-medium mt-2 leading-snug group-hover:text-accent transition-colors text-text-primary">{t("news.post1.title")}</h3>
          </div>
          
          {/* News 2 */}
          <div className="group cursor-pointer flex flex-col">
            <div className="overflow-hidden mb-5 rounded-[var(--radius-card)] shadow-sm">
              <img alt="News Headline" className="w-full h-[280px] object-cover group-hover:scale-105 transition-transform duration-700 ease-out" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBYZGUgpFwltkOAAXZFQAYfpXZIvImxhvg4x0xh2OaHETCti5JBo7nJgjDsh_TQqSrHJBs8OdW5E64GULPK8Q7EaY4PeWwE33hyDheSKvK2c7Pv9MQo_xJHqHoZrwmgjg8hXdWaxNVTQbV70lH2RhIhdEn0lwYWLmjAwCHaGTQ7CT4C9N5gQ0QoStyV2FVLKPaHZwchkZv589wtv-eNwTXgvDmcHM6OZEnA-wxUVLCf6JE51vnphhM3_jMmwTCgcdEjz_MJ2pntv0I"/>
            </div>
            <span className="text-[10px] text-text-secondary tracking-widest uppercase font-semibold">May 4, 2025</span>
            <h3 className="text-lg font-medium mt-2 leading-snug group-hover:text-accent transition-colors text-text-primary">{t("news.post2.title")}</h3>
          </div>
          
          {/* News 3 */}
          <div className="group cursor-pointer flex flex-col">
            <div className="overflow-hidden mb-5 rounded-[var(--radius-card)] shadow-sm">
              <img alt="News Headline" className="w-full h-[280px] object-cover group-hover:scale-105 transition-transform duration-700 ease-out" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAPJhIHaYUE-RKf-J-sIVtL9gjQ5dU-DHGrOJnXSnlko8O4wAJgqsIgiJbGBMKs7FC2oGyjYotvO_l_nRAmTHgOgSrxgTG1CYcjmbT498ITiZbcJ8d2jkpYO3-mjZ2l9HgBKawotarLmYBg_1UGU77E7RArsyGl_008MyUrYBz2GxylqmNOi_g14QgZzYpU0qs58i_lxToOq4Bf7Lcc8Pk4yDNkDl74uLLOKOtBsPtuLlbyFNOa2G1-uUK0ETzIKGRgvTw8HNXrFhc"/>
            </div>
            <span className="text-[10px] text-text-secondary tracking-widest uppercase font-semibold">May 4, 2025</span>
            <h3 className="text-lg font-medium mt-2 leading-snug group-hover:text-accent transition-colors text-text-primary">{t("news.post3.title")}</h3>
          </div>
        </div>
      </div>
    </section>
  );
}
