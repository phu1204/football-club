import React from "react";

export function ExperienceSection() {
  return (
    <section className="pb-32 px-5 md:px-16 max-w-6xl mx-auto">
      <div className="relative rounded-xl overflow-hidden aspect-[21/9] md:aspect-[3/1] flex items-center shadow-[0px_20px_50px_rgba(0,0,0,0.5)]">
        <img
          alt="Panoramic view of cheering fans in a vibrant, neon-lit stadium"
          className="absolute inset-0 w-full h-full object-cover opacity-40 mix-blend-luminosity"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuAkeVTlkqsf_oNYGCA8lr5SnAb3c8Xq8oZ44jbNZEVnIVC6hN38wupx2EhjyGDWXMkmSlMVUbP7HeA4KguSjP5H0JI-aA1KF5XwTPmaIudZwNlcL1uX3rV-VaLA-km7XWqe8BpY65Vr50EXVRtQpkhkpYbUkVSlTS4vXoB1sjG__Pr6a-XKTb4qjZuCBiq0OMXVJ8tesjiNVirVZT3aJclpUGiEUHLZL_AU07HYTqpK3TqWlkWPZM1_fw6us8GBY5-9nfFw3cLHlUI"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent"></div>
        <div className="relative z-10 p-8 md:p-16 max-w-xl">
          <h2 className="font-display text-3xl md:text-5xl text-on-surface mb-4 font-bold tracking-tight">
            Join the Roar
          </h2>
          <p className="text-base md:text-lg text-on-surface-variant mb-8 font-light">
            Feel the unmatched energy of the Grand Arena. Be part of history.
          </p>
          <button className="bg-tertiary text-black font-bold text-sm tracking-wider uppercase px-6 py-3 rounded-full hover:bg-tertiary-fixed transition-colors cursor-pointer">
            Explore Experiences
          </button>
        </div>
      </div>
    </section>
  );
}
