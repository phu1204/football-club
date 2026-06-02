"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { HeroVideoDialog } from "@/components/ui/hero-video-dialog"
import { getIdVideo, convertYoutubeUrl } from "@/lib/utils"
import { motion } from "framer-motion";

interface Hightlight {
  id: number;
  videoSrc: string;
}

const highlightsData : Hightlight[] = [
  {
    id: 1,
    videoSrc:"https://www.youtube.com/watch?v=9cSL9R14D2c"
  },
  {
    id: 2,
    videoSrc:'https://www.youtube.com/watch?v=wIPv7dLFvFc'
  },
  {
    id: 3,
    videoSrc:'https://www.youtube.com/watch?v=XZ-fipt2wBE'
  },
]

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } }
  };

export function MatchHighlights() {
  const { t } = useLanguage();

  return (
    <section className="section-padding bg-background border-t border-border-default">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6">
          <div>
            <h2 className="text-[10px] text-text-secondary uppercase tracking-widest font-semibold mb-2">{t("highlights.title")}</h2>
            <h3 className="heading-xl text-text-primary">{t("highlights.headline")}</h3>
          </div>
          <div>
            <a 
              href="#full-schedule" 
              className="group flex items-center gap-2 text-[11px] font-semibold uppercase tracking-wider text-text-secondary hover:text-accent transition-colors duration-200"
            >
              <span>{t("highlights.viewAll")}</span>
              <span className="transform group-hover:translate-x-1 transition-transform duration-200">↗</span>
            </a>
          </div>
        </div>
        <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}>
            {highlightsData.map((highlight) => {
              return (
                <motion.div key={highlight.id}
                  variants={itemVariants}>
                  <HeroVideoDialog
                    className="block dark:hidden relative group overflow-hidden h-full rounded-card shadow-sm transition-all duration-500"
                    animationStyle="top-in-bottom-out"
                    videoSrc={convertYoutubeUrl(highlight.videoSrc)}
                    thumbnailSrc={getIdVideo(highlight.videoSrc)}
                    thumbnailAlt="Hero Video"
                  />
                </motion.div>
              )
            })}
        </motion.div>
       
      </div>
    </section>
  );
}
