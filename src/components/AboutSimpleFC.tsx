import React from "react";

export function AboutSimpleFC() {
  return (
    <section className="py-20 bg-surface-container text-on-surface">
      <div className="px-5 md:px-16 max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div>
          <h2 className="text-sm font-bold text-tertiary uppercase tracking-widest mb-2">Since 2026</h2>
          <h3 className="text-3xl md:text-5xl font-display font-bold mb-6">About Simple FC</h3>
          <div className="space-y-4 text-base md:text-lg text-on-surface-variant font-light leading-relaxed">
            <p>
              Welcome to Simple FC, the digital home of modern football. Founded with a vision to redefine the fan experience, Simple FC brings live matches, in-depth analysis, and exclusive behind-the-scenes content directly to supporters worldwide.
            </p>
            <p>
              At Simple FC, we celebrate the passion and community of football. Our state-of-the-art platform is built to connect global fans with their favorite players, fostering a legacy of excellence on and off the pitch.
            </p>
          </div>
          <button className="bg-tertiary text-black font-bold text-sm tracking-wider uppercase px-6 py-3 rounded-full hover:bg-tertiary-fixed transition-colors mt-8 cursor-pointer">
            Read Our Story
          </button>
        </div>

        {/* Right Image Overlay */}
        <div className="relative rounded-xl overflow-hidden aspect-[4/3] shadow-[0px_20px_50px_rgba(0,0,0,0.6)]">
          <img
            alt="High impact action stadium shot"
            className="w-full h-full object-cover opacity-80"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAkeVTlkqsf_oNYGCA8lr5SnAb3c8Xq8oZ44jbNZEVnIVC6hN38wupx2EhjyGDWXMkmSlMVUbP7HeA4KguSjP5H0JI-aA1KF5XwTPmaIudZwNlcL1uX3rV-VaLA-km7XWqe8BpY65Vr50EXVRtQpkhkpYbUkVSlTS4vXoB1sjG__Pr6a-XKTb4qjZuCBiq0OMXVJ8tesjiNVirVZT3aJclpUGiEUHLZL_AU07HYTqpK3TqWlkWPZM1_fw6us8GBY5-9nfFw3cLHlUI"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent"></div>
          <div className="absolute bottom-6 left-6 right-6 z-10">
            <h4 className="font-display text-2xl font-bold text-on-surface mb-1 uppercase">Grand Arena Stadium</h4>
            <p className="text-sm text-tertiary font-bold tracking-wider">The Heart of Simple FC</p>
          </div>
        </div>
      </div>
    </section>
  );
}
