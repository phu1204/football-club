import React from "react";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

export function AboutSection() {
  return (
    <section className="py-24 container mx-auto px-4">
      <div className="flex flex-col lg:flex-row items-center gap-16">
        <div className="lg:w-1/2 flex justify-center">
          <div className="w-80 h-80 relative flex items-center justify-center bg-primary/10 rounded-full">
            <div className="w-64 h-64 border-4 border-primary/20 rounded-full absolute animate-[ping_3s_ease-in-out_infinite]"></div>
            <div className="w-72 h-72 border-2 border-primary/10 rounded-full absolute animate-[ping_4s_ease-in-out_infinite]"></div>
            <div className="w-48 h-48 bg-primary rounded-full flex items-center justify-center text-white shadow-2xl shadow-primary/50 relative z-10">
              <span className="text-4xl font-black font-display tracking-wider">SAFF</span>
            </div>
          </div>
        </div>
        <div className="lg:w-1/2">
          <h2 className="text-4xl font-display font-bold mb-6">About SAFF</h2>
          <div className="space-y-4 text-slate-500 dark:text-slate-400 leading-relaxed text-lg">
            <p>
              Welcome to SAFF+, the official Over-The-Top (OTT) platform brought to you by the Saudi Football Federation. SAFF+ is dedicated to bringing the heart of Saudi football right into your home. With an unwavering commitment to enhancing the fan experience, SAFF+ offers an exclusive gateway to live matches, in-depth analysis, behind-the-scenes content, and much more.
            </p>
            <p>
              At SAFF+, we celebrate the passion and spirit of Saudi football. Our platform is designed to connect fans across the globe with their favorite teams and players like never before. From the thrill of the Saudi Leagues to the excitement of national team matches, SAFF+ ensures you don't miss a moment of the action.
            </p>
          </div>
          <button className="mt-8 px-8 py-3 bg-primary text-white font-bold rounded flex items-center gap-2 hover:opacity-90 transition-opacity font-display cursor-pointer hover:shadow-lg hover:shadow-primary/30">
            Read More <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
