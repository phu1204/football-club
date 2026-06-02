"use client";

import React from "react";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import SoccerLineUp, { type Team } from 'react-soccer-lineup';
import { useLanguage } from "@/context/LanguageContext";

const team: Team = {
    squad: {
      gk: { number: 1, name: 'Chau Hung', offset: { x: -4 }},
      df: [
        { number: 6, name: 'Brown', offset: { x: 7 } },
        { number: 5, name: 'Ferdinand', offset: { x: -6 }  },
        { number: 3, name: 'Evra', offset: { x: 7 } },
      ],
      cm: [
        { number: 18, name: 'Scholes', offset: { y: -6, x: 5 } },
        { number: 4, name: 'Hargreaves', offset: { x: 5 }},
      ],
      fw: [
        { number: 10, name: 'Rooney', offset: { x: 4 } },
    ],
    },
    style: {
      color: '#000',
      borderColor: '#fff',
      numberColor: '#fff',
      nameColor: '#ffffff',
      nameBackgroundColor: '#11111166',
    }
  };

export function LineUp() {
  const { t } = useLanguage();
  return (
    <section className="py-24 mx-auto px-4 border-t border-border-default">
      <div className="flex flex-col container-custom md:flex-row justify-between items-start md:items-end mb-12 gap-6">
        <div>
          <h2 className="text-[10px] text-text-secondary uppercase tracking-widest font-semibold mb-2">{t("line.center")}</h2>
          <h3 className="heading-xl text-text-primary">{t("line.upcoming")}</h3>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row items-center gap-16 container-custom">
        <div className="lg:w/2 flex justify-center">
          <SoccerLineUp
              size="small"
              color="#4a7d32"
              pattern="squares"
              homeTeam={team}
            />
        </div>
        <div className="lg:w-1/2">
         
        </div>
      </div>
    </section>
  );
}
