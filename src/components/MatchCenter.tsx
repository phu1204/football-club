import React from "react";

export function MatchCenter() {
  return (
    <section className="py-20 px-5 md:px-16 max-w-6xl mx-auto relative z-20 -mt-32">
      <div className="glass-panel rounded-xl p-8 flex flex-col md:flex-row justify-between items-center gap-8 shadow-[0px_12px_40px_rgba(0,0,0,0.6)]">
        <div className="flex-1">
          <h2 className="text-sm font-bold text-tertiary mb-2 uppercase tracking-widest flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-tertiary animate-pulse"></span>{" "}
            Next Match
          </h2>
          <div className="font-display text-3xl md:text-4xl text-on-surface font-semibold">
            Simple FC vs. City Rivals
          </div>
          <div className="text-base text-on-surface-variant mt-2 font-medium">
            Saturday, 20:00 GMT • Grand Arena
          </div>
        </div>
        <div className="font-display text-5xl text-on-surface-variant opacity-40 px-12 border-l border-white/10 hidden lg:block font-bold">
          VS
        </div>
        <div className="flex-1 flex justify-end w-full md:w-auto">
          <button className="w-full md:w-auto border border-white/20 bg-white/5 text-on-surface font-bold text-sm tracking-wider uppercase px-8 py-4 rounded-full hover:bg-white/10 transition-colors backdrop-blur-md cursor-pointer">
            Buy Tickets
          </button>
        </div>
      </div>
    </section>
  );
}
