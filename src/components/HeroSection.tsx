"use client";

import React from "react";

export function HeroSection() {
  return (
    <section className="relative w-full h-screen overflow-hidden bg-[#050d18]">
      {/* Full-screen video */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src="/videos/hero.mp4"
        autoPlay
        loop
        muted
        playsInline
      />

      {/* Bottom vignette to blend into the next section */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundColor: 'rgba(0,0,0,0.5)'
        }}
      />
    </section>
  );
}
