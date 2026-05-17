import React from "react";

export function Footer() {
  return (
    <footer className="bg-surface-container-lowest border-t border-white/10 mt-24">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 py-20 px-5 md:px-16 max-w-[1440px] mx-auto">
        <div className="col-span-1">
          <div className="font-display text-3xl text-on-surface mb-6 font-bold tracking-tight">
            STRIKER FC
          </div>
          <p className="text-xs text-on-surface-variant uppercase tracking-widest">
            © 2026 SIMPLE FOOTBALL CLUB. ALL RIGHTS RESERVED.
          </p>
        </div>

        <div className="col-span-1 md:col-span-3 grid grid-cols-2 md:grid-cols-3 gap-8">
          <div className="flex flex-col space-y-4">
            <a className="text-sm text-on-surface-variant hover:text-tertiary underline-offset-4 hover:underline transition-all" href="#">Privacy Policy</a>
            <a className="text-sm text-on-surface-variant hover:text-tertiary underline-offset-4 hover:underline transition-all" href="#">Terms of Service</a>
          </div>
          <div className="flex flex-col space-y-4">
            <a className="text-sm text-on-surface-variant hover:text-tertiary underline-offset-4 hover:underline transition-all" href="#">Contact Us</a>
            <a className="text-sm text-on-surface-variant hover:text-tertiary underline-offset-4 hover:underline transition-all" href="#">Careers</a>
          </div>
          <div className="flex flex-col space-y-4">
            <a className="text-sm text-on-surface-variant hover:text-tertiary underline-offset-4 hover:underline transition-all" href="#">Official Partners</a>
            <a className="text-sm text-on-surface-variant hover:text-tertiary underline-offset-4 hover:underline transition-all" href="#">Global Newsletter</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
