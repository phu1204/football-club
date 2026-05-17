import React from "react";
import { ArrowUpRight } from "lucide-react";

export function LatestNews() {
  return (
    <section className="bg-background-dark py-20 text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-display font-bold mb-12">Latest News & Stories</h2>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          <div className="lg:col-span-4 group cursor-pointer">
            <div className="aspect-[4/5] overflow-hidden rounded-lg mb-4 relative">
              <img
                alt="News Story"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDu-oxlOTKlHGdBz8LYV4ttmQEh0eVTdwIHAcp7aUrcuKGfHypWVxtj-Jqs4XtaDbMcRkHUgRC6Ab5V3uxK320IPfilX7EU5TPiPGuMCXgpdhZlub9T2j1X4aqNq1Q4TtTCJ7wmPUMiMEKEtH5Wwh9ixbCqpeg3XD4oedW4EE40ZdcJZ7Y7JZBj-dq3H9I1Ep3bPrSWQTJFLBCIMZxmWBzkc1Yr9Xcq_RPDE8YlXSHNPJmvubyTQF_VMdeR4llmpyPZDkpJHBhjkcs"
              />
              <div className="absolute inset-0 gradient-overlay"></div>
            </div>
            <span className="text-xs text-white/50 font-bold font-display tracking-wider">
              May 4, 2025
            </span>
            <h3 className="text-xl font-bold mt-2 font-display group-hover:text-primary transition-colors leading-snug">
              The NT continue preparations for Japan, and Renard speaks to the media
            </h3>
          </div>
          <div className="lg:col-span-4 group cursor-pointer">
            <div className="aspect-[4/5] overflow-hidden rounded-lg mb-4 relative">
              <img
                alt="News Story"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuA9mriyDWvvXg-mr7VqoZAjv2ZqnLoz7LjhXWVvjabhc9Yq62Fi_Hg2r_aQ4qcWxVBQtjSzUHV2JsYOoL6UO9y3nsiKNQlFLv7dTIKCdfgy0rpjMKn6Lc0GZGf74uhul4KRh6hlq7n2boz-cmq1rQE-z4p4pwcVeNo5zf_e9iTaXcQfbYkjZWEEfb2RRcK0DSm5IY69MEt6QmT7NvJ4NBPvHMB4Wsrz7dzO5_3K6Ek0twtgalRzpx5hYErF9IHclBzqFZ02WaCxtG8"
              />
              <div className="absolute inset-0 bg-primary/40 group-hover:bg-primary/20 transition-colors"></div>
              <div className="absolute inset-0 flex flex-col justify-center items-center text-center p-8">
                <h3 className="text-3xl font-display font-black tracking-tighter mb-4">
                  GROUP (A)
                </h3>
                <div className="grid grid-cols-3 gap-4 font-display text-xs w-full max-w-[200px]">
                  <div className="bg-white/20 p-2 backdrop-blur rounded font-bold">KSA</div>
                  <div className="bg-white/20 p-2 backdrop-blur rounded font-bold">PRK</div>
                  <div className="bg-white/20 p-2 backdrop-blur rounded font-bold">NEP</div>
                  <div className="bg-white/20 p-2 backdrop-blur rounded font-bold">BHU</div>
                  <div className="bg-white/20 p-2 backdrop-blur rounded font-bold">MNG</div>
                </div>
              </div>
            </div>
            <span className="text-xs text-white/50 font-bold font-display tracking-wider">
              May 3, 2025
            </span>
            <h3 className="text-xl font-bold mt-2 font-display group-hover:text-primary transition-colors leading-snug">
              The draw for the 2026 AFC U-20 Women's Asian Cup qualifiers places the NT U-20 in Group A
            </h3>
          </div>
          <div className="lg:col-span-4 group cursor-pointer">
            <div className="aspect-[4/5] overflow-hidden rounded-lg mb-4 relative">
              <img
                alt="News Story"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCBLubwLchYlhb6iWZ5Ueztnf6596UgWnr0HCeHTxfW_FL3GF8QVfIbFzNqWil_jaxTg9QPFY8bksNdoqHMxt4y4PLUYlpLcCRE01WRBLIhyTeSX2UMke-aCRjDoDeOmuXiLAzA_YHiXDm-g7mHITlNH0Eb0nXodlUJ1vH-1zvW4D6nIUyYpnqpGOVjWFzRpPyQgHf0_tnzohQm7R65Fk6WRIYb9-msM5TPa4urHjFYozFO7o3N3ivt4zTBGNTEKMD5TsCKbhSUXq4"
              />
              <div className="absolute inset-0 gradient-overlay"></div>
            </div>
            <span className="text-xs text-white/50 font-bold font-display tracking-wider">
              May 1, 2025
            </span>
            <h3 className="text-xl font-bold mt-2 font-display group-hover:text-primary transition-colors leading-snug">
              Sunday: NT returns to training camp in Riyadh to prepare for China match
            </h3>
          </div>
        </div>
        <div className="flex justify-center mt-12">
          <button className="px-8 py-3 border border-white/20 rounded flex items-center gap-2 text-sm font-bold hover:bg-white/5 hover:border-primary hover:text-primary transition-all font-display cursor-pointer">
            View All News <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
