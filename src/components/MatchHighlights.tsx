"use client";

import React from "react";
import { Play } from "lucide-react";
import { motion } from "framer-motion";

export function MatchHighlights() {
  const highlights = [
    {
      id: 1,
      title: "Simple FC 4 - 3 Al Balad | Dramatic Final Minute Winner",
      date: "May 5, 2026",
      duration: "10:24",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAkeVTlkqsf_oNYGCA8lr5SnAb3c8Xq8oZ44jbNZEVnIVC6hN38wupx2EhjyGDWXMkmSlMVUbP7HeA4KguSjP5H0JI-aA1KF5XwTPmaIudZwNlcL1uX3rV-VaLA-km7XWqe8BpY65Vr50EXVRtQpkhkpYbUkVSlTS4vXoB1sjG__Pr6a-XKTb4qjZuCBiq0OMXVJ8tesjiNVirVZT3aJclpUGiEUHLZL_AU07HYTqpK3TqWlkWPZM1_fw6us8GBY5-9nfFw3cLHlUI",
    },
    {
      id: 2,
      title: "Riyadh Derby Highlights | Simple FC vs Al Hilal",
      date: "April 28, 2026",
      duration: "08:15",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBrj69jkJsCYICeZopegx7bpe9pNmpriLGXDxF7FrHL6wP2AQbmm8u4IZpVA3B-G0nwSKDOEijEuzZEm0h_vmN-WTCY1FjGMikoTnOmixOvyhT4SFSZo3NC7ujcKESD3BmYjoa0Grp0CHQYQ3j6ZR2ULtW0_9s0DK0_O94y15mr9eZQh0DLQvveG3AYmgYXIPKUhlfM5bfZZKFX-ky_8rxWI6hFR56rNSypZdazB5ehIOWd9TdSiMVcxLvYRPRaiHs4OH79-ub3P44",
    },
  ];

  return (
    <section className="py-20 px-5 md:px-16 max-w-[1440px] mx-auto text-on-surface">
      <motion.div
        className="mb-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-sm font-bold text-tertiary uppercase tracking-widest mb-2">Video</h2>
        <h3 className="text-3xl md:text-5xl font-display font-bold">Match Highlights</h3>
      </motion.div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {highlights.map((video, idx) => (
          <motion.div
            key={video.id}
            className="group cursor-pointer"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: idx * 0.15 }}
          >
            <div className="relative aspect-video rounded-xl overflow-hidden mb-4 shadow-[0px_15px_30px_rgba(0,0,0,0.5)]">
              <img
                alt={video.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-70 group-hover:opacity-90"
                src={video.image}
              />
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors"></div>
              
              {/* Play Button */}
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                  className="w-16 h-16 rounded-full bg-tertiary flex items-center justify-center shadow-[0px_0px_30px_rgba(0,227,131,0.5)]"
                  whileHover={{ scale: 1.15, rotate: 10 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 300, damping: 15 }}
                >
                  <Play className="w-6 h-6 text-black fill-black ml-1" />
                </motion.div>
              </div>
              
              {/* Duration Badge */}
              <span className="absolute bottom-4 right-4 bg-black/80 px-2 py-1 rounded text-xs font-bold text-white tracking-widest">
                {video.duration}
              </span>
            </div>
            
            <span className="text-xs text-tertiary font-bold tracking-wider">{video.date}</span>
            <h4 className="text-xl font-bold mt-2 font-display text-on-surface group-hover:text-tertiary transition-colors leading-snug">
              {video.title}
            </h4>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
