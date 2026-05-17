"use client";

import React from "react";
import { motion } from "framer-motion";

export function HeroSection() {
  return (
    <header className="relative w-full min-h-[80vh] flex items-center justify-center overflow-hidden">
      <motion.div
        className="absolute inset-0 w-full h-full"
        initial={{ scale: 1.08, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        {/* static base layer */}
        <img
          alt="Cinematic wide shot of a modern football stadium at night"
          className="w-full h-full object-cover opacity-30"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuAkeVTlkqsf_oNYGCA8lr5SnAb3c8Xq8oZ44jbNZEVnIVC6hN38wupx2EhjyGDWXMkmSlMVUbP7HeA4KguSjP5H0JI-aA1KF5XwTPmaIudZwNlcL1uX3rV-VaLA-km7XWqe8BpY65Vr50EXVRtQpkhkpYbUkVSlTS4vXoB1sjG__Pr6a-XKTb4qjZuCBiq0OMXVJ8tesjiNVirVZT3aJclpUGiEUHLZL_AU07HYTqpK3TqWlkWPZM1_fw6us8GBY5-9nfFw3cLHlUI"
        />

        {/* looping football video layer (super lightweight, GPU accelerated & smooth) */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-50"
        >
          <source
            src="https://assets.mixkit.co/videos/preview/mixkit-slow-motion-of-a-soccer-ball-entering-into-the-goal-net-34241-large.mp4"
            type="video/mp4"
          />
        </video>

        {/* subtle overlay */}
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent"></div>
      </motion.div>

      <div className="relative z-10 text-center px-5 md:px-16 max-w-[1440px] mx-auto flex flex-col items-center">
        <motion.h1
          className="font-display text-5xl md:text-7xl text-on-surface mb-6 text-glow font-extrabold tracking-tight"
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          THE SPIRIT OF SIMPLE FC
        </motion.h1>

        <motion.p
          className="text-lg md:text-xl text-on-surface-variant max-w-2xl mb-10 font-light"
          initial={{ y: 24, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.45, ease: "easeOut" }}
        >
          Experience the pinnacle of modern football. Join the legacy, feel the passion.
        </motion.p>

        <motion.button
          className="bg-tertiary text-black font-bold text-sm tracking-wider uppercase px-8 py-4 rounded-full hover:bg-tertiary-fixed transition-all duration-300 shadow-[0px_12px_40px_rgba(0,227,131,0.3)] transform hover:-translate-y-1 cursor-pointer"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.65, ease: "easeOut" }}
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.98 }}
        >
          Discover More
        </motion.button>
      </div>
    </header>
  );
}
