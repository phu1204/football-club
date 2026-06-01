import React from "react";

export function PartnerLogos() {
  return (
    <section className="py-16 bg-background border-t border-border-default">
      <div className="container-custom">
        <p className="text-center text-[10px] text-text-muted uppercase tracking-widest font-medium mb-10">Official Partners & Governing Bodies</p>
        <div className="flex flex-wrap justify-around items-center gap-12 opacity-50 hover:opacity-100 transition-all duration-500">
          <span className="text-xl font-black text-text-secondary hover:text-accent transition-colors cursor-pointer tracking-wider">WAFF</span>
          <span className="text-xl font-black text-text-secondary hover:text-accent transition-colors cursor-pointer tracking-wider">AFC</span>
          <span className="text-xl font-black text-text-secondary hover:text-accent transition-colors cursor-pointer tracking-wider">FIFA</span>
          <span className="text-xl font-black text-text-secondary hover:text-accent transition-colors cursor-pointer tracking-wider">UAFA</span>
          <span className="text-xl font-black text-text-secondary hover:text-accent transition-colors cursor-pointer tracking-wider">SFF</span>
        </div>
      </div>
    </section>
  );
}
