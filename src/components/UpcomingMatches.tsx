"use client";

import React from "react";
import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

// --- Custom High-Fidelity SVG Logo Components ---


const AlBaladLogo = () => (
  <svg viewBox="0 0 100 100" className="w-6 h-6 drop-shadow-sm inline-block select-none" aria-hidden="true">
    <circle cx="50" cy="50" r="45" fill="#78350f" stroke="#fbbf24" strokeWidth="4" />
    <circle cx="50" cy="50" r="35" fill="none" stroke="#f59e0b" strokeWidth="2" strokeDasharray="5,3" />
    <polygon points="50,20 58,38 78,38 62,50 68,70 50,58 32,70 38,50 22,38 42,38" fill="#fbbf24" />
  </svg>
);

// --- Match Data Definition ---

interface Team {
  name: string;
  logo: React.ComponentType;
}

interface Match {
  id: number;
  competition: string;
  dateText: string;
  fullDateTimeText: string;
  isPast?: boolean;
  isHighlight?: boolean;
  team1: Team;
  team2: Team;
  location: string;
}

const matchesData: Match[] = [
  {
    id: 1,
    competition: "Women's 1st Div.",
    dateText: "4 - 3",
    fullDateTimeText: "COMPLETED • MAY 1, 2025",
    isPast: true,
    team1: { name: "Al Batin", logo: AlBaladLogo },
    team2: { name: "Al Balad", logo: AlBaladLogo },
    location: "Al-Batin Club Stadium",
    isHighlight: true,
  },
  {
    id: 2,
    competition: "King Cup",
    dateText: "6 May",
    fullDateTimeText: "MAY 6, 2025 • 8:15 PM",
    team1: { name: "Al Qadsiyah", logo: AlBaladLogo },
    team2: { name: "Al Ettifaq", logo: AlBaladLogo },
    location: "Prince Mohamed bin Fahd Stadium",
  },
  {
    id: 3,
    competition: "King Cup",
    dateText: "8 May",
    fullDateTimeText: "MAY 8, 2025 • 10:30 PM",
    team1: { name: "Al Ittihad", logo: AlBaladLogo },
    team2: { name: "Al Shabab", logo: AlBaladLogo },
    location: "King Abdullah Sports City",
  },
  {
    id: 4,
    competition: "Diriyah Saudi Cup",
    dateText: "11 May",
    fullDateTimeText: "MAY 11, 2025 • 9:45 PM",
    team1: { name: "Al Nassr", logo: AlBaladLogo },
    team2: { name: "Al Wehda", logo: AlBaladLogo },
    location: "Al-Awwal Park Stadium",
  },
];

export function UpcomingMatches() {
  const { t } = useLanguage();

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
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.1 } }
  };

  return (
    <section className="section-padding bg-surface container-custom relative" id="matches">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6">
        <div>
          <h2 className="text-[10px] text-text-secondary uppercase tracking-widest font-semibold mb-2">{t("match.center")}</h2>
          <h3 className="heading-xl text-text-primary">{t("match.upcoming")}</h3>
        </div>
        <div>
          <a 
            href="#full-schedule" 
            className="group flex items-center gap-2 text-[11px] font-semibold uppercase tracking-wider text-text-secondary hover:text-accent transition-colors duration-200"
          >
            <span>{t("match.viewFull")}</span>
            <span className="transform group-hover:translate-x-1 transition-transform duration-200">↗</span>
          </a>
        </div>
      </div>
      
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
      >
        {matchesData.toReversed().map((match) => {
          const Logo1 = match.team1.logo;
          const Logo2 = match.team2.logo;

          if (match.isHighlight) {
            return (
              <motion.div 
                key={match.id}
                variants={itemVariants}
                whileHover={{ y: -8, boxShadow: "0 20px 40px rgba(0,0,0,0.12)" }}
                transition={{ duration: 0.25 }} 
                className="card-style !p-6 border-accent relative cursor-pointer flex flex-col justify-between"
              >
                  <div className="absolute top-4 right-4 w-2 h-2 bg-accent rounded-full animate-pulse"></div>
                
                <div>
                  <p className="text-[10px] text-accent mb-4 uppercase tracking-widest font-semibold">{match.competition}</p>
                  <div className="mb-6">
                    <span className="text-4xl font-bold text-text-primary">{match.dateText}</span>
                    <p className="text-[10px] text-accent mt-2 tracking-wider">{match.fullDateTimeText}</p>
                  </div>
                  <div className="space-y-4 text-sm text-text-primary font-medium">
                    <div className="flex items-center gap-3">
                      <Logo1 />
                      <span>{match.team1.name}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Logo2 />
                      <span>{match.team2.name}</span>
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-border-default flex items-center gap-2 text-[10px] text-accent font-medium">
                  <MapPin className="w-3.5 h-3.5 text-accent shrink-0" />
                  <span className="truncate" title={match.location}>{match.location}</span>
                </div>
              </motion.div>
            );
          }

          return (
            <motion.div 
              key={match.id}
              variants={itemVariants}
              transition={{ duration: 0.25 }}
              className="card-style relative !p-6 flex flex-col justify-between"
            >
              <div>
                <p className="text-[10px] text-text-secondary mb-4 uppercase tracking-widest">{match.competition}</p>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-text-primary">{match.dateText}</span>
                  <p className="text-[10px] text-text-secondary mt-2 tracking-wider">{match.fullDateTimeText}</p>
                </div>
                <div className="space-y-4 text-sm text-text-primary">
                  <div className="flex items-center gap-3">
                    <Logo1 />
                    <span className="font-medium">{match.team1.name}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Logo2 />
                    <span className="font-medium">{match.team2.name}</span>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-border-default flex items-center gap-2 text-[10px] text-text-secondary">
                <MapPin className="w-3.5 h-3.5 text-text-secondary shrink-0" />
                <span className="truncate" title={match.location}>{match.location}</span>
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
}
