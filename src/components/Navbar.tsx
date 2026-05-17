import React from "react";

export function Navbar() {
  return (
    <nav className="bg-surface/80 dark:bg-surface/80 backdrop-blur-xl top-0 sticky z-50 border-b border-white/10 shadow-md">
      {/* Desktop Navbar */}
      <div className="hidden md:flex justify-between items-center px-16 w-full h-20 max-w-[1440px] mx-auto">
        <div className="font-display tracking-tighter text-on-surface text-3xl font-bold">
          SIMPLE FC
        </div>
        <div className="flex space-x-8">
          <a className="text-tertiary border-b-2 border-tertiary pb-1 font-bold text-sm tracking-widest uppercase" href="#">
            Home
          </a>
          <a className="text-on-surface-variant hover:text-tertiary transition-all duration-300 text-sm tracking-widest uppercase font-semibold" href="#">
            Matches
          </a>
          <a className="text-on-surface-variant hover:text-tertiary transition-all duration-300 text-sm tracking-widest uppercase font-semibold" href="#">
            News
          </a>
          <a className="text-on-surface-variant hover:text-tertiary transition-all duration-300 text-sm tracking-widest uppercase font-semibold" href="#">
            Squad
          </a>
          <a className="text-on-surface-variant hover:text-tertiary transition-all duration-300 text-sm tracking-widest uppercase font-semibold" href="#">
            Membership
          </a>
          <a className="text-on-surface-variant hover:text-tertiary transition-all duration-300 text-sm tracking-widest uppercase font-semibold" href="#">
            Shop
          </a>
        </div>
        <div className="flex space-x-4">
          <button className="text-tertiary scale-95 active:opacity-80 transition-transform cursor-pointer">
            <span className="material-symbols-outlined">search</span>
          </button>
        </div>
      </div>

      {/* Mobile Navbar */}
      <div className="flex justify-between items-center px-5 w-full h-16 md:hidden">
        <div className="font-display tracking-tighter text-on-surface text-2xl font-bold">
          STRIKER FC
        </div>
        <button className="text-tertiary scale-95 active:opacity-80 transition-transform cursor-pointer">
          <span className="material-symbols-outlined">menu</span>
        </button>
      </div>
    </nav>
  );
}
