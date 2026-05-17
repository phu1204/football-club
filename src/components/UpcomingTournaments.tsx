import React from "react";
import { Bell } from "lucide-react";

export function UpcomingTournaments() {
  return (
    <section className="py-20 bg-slate-50 dark:bg-slate-900/50 border-y border-slate-100 dark:border-slate-800">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-display font-bold mb-4">Upcoming Tournaments</h2>
        <p className="text-slate-500 dark:text-slate-400 mb-12 font-display">
          Roshn Saudi League 2025/2026
        </p>
        <div className="flex items-center justify-center gap-8 md:gap-12 overflow-x-auto hide-scrollbar pb-12 w-full">
          <img
            alt="Tournament Logo"
            className="h-16 md:h-20 grayscale opacity-40 hover:opacity-100 hover:grayscale-0 transition-all cursor-pointer"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBJu8aqfUo0dEuoPwME1U6QR3eXZOl7Xe42eegstu3vS7NA2yNmVSkYxOdxPzMvPDAxXBza3jX7UwdqatrtsoiE7mzXelKmKWDHJlF3WSVGl2DWedvYNsYE3PmfqApyckj6NnzKjGp125fydW24khj6CtcZI3eTWfdmew47xXRB50B2VKi2f-DOH9Gk5hdNWhx4LRmDarQXN8hBGyIK0m2KxhMfD7QLTjFRlrAGc_Wf6Clkq32Axg6aiQLu_dDpk0bMMn3mX-Dduds"
          />
          <img
            alt="Tournament Logo"
            className="h-16 md:h-20 grayscale opacity-40 hover:opacity-100 hover:grayscale-0 transition-all cursor-pointer"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuB7ZCrFXZ4EJ6g4ciHLfBGo8ZZv_vag-PwyOw3GmNJUAv4iulo4AIu0pIszrNquPogjM5zUwE7i6C8QnMKplAWxY7-GRbWQ_NWzoP_xGhrEUsCYkbFVeLMavXawTT9lIeRGRyDOP1haiCiIBLAz1KThf2rTohk-8Uw4c_LVBzuO_grgf9gsKMh5pXs5xizawcotsoePY6fHLd_zEimGNS_7m9zRLsPV4ShcoYD3LLqEjMDPl8wbguXKMjX7EZY9MPV94Nqe0YBWGdg"
          />
          <img
            alt="Main League Logo"
            className="h-24 md:h-32 transform scale-110"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDcqS6d4h6TlHCLG1b1fXkKM2GmBJ2OHoJmB5FFfcHm6OMlzHi3yQGGy4TaD45JhpZOWQJt_uGtn-Ha8kEKYqtI-15ktYoVfa2bVSnnmvNcGK7Al4rqMFKFKdPLm1KDpnypkhHE1JICqsv5L_MIR6ywzruJW23KKxzfcS2FKZs0AvHE30ru4jn73S15T3UdTN019iTXNfVwBz4SfSq4_aB3MximTA3wMJMPzK92A8tkx1unCSQTPNrdg_na5I1GwRVj-oXnJQM6hss"
          />
          <img
            alt="Tournament Logo"
            className="h-16 md:h-20 grayscale opacity-40 hover:opacity-100 hover:grayscale-0 transition-all cursor-pointer"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCKjWcmr1wCx3BwFc99d80_tNj4YmFvLEjgA-LSEbgfg_hby8yqBh3Pq3QRrwsDtrPR3uCX5AcMwU3uabRKk5QY3j-PnYPC6sQZtU4wpmjpDBIQkdjw4l1yfmO2NEX5nKJ7ley-Pj7-JDRYVw1-j2PjbIxdVfzR3K2wIZWhDR9s4FTwYYy9RKZBlBc2Nufd5_TcbT9wO2xAZqJ-NIOFKQqjtOYRNqx2qKz0plz-v36HqrPeZrHoaJ-eJv-LatI5HMUaK6r6q0av99U"
          />
          <img
            alt="Tournament Logo"
            className="h-16 md:h-20 grayscale opacity-40 hover:opacity-100 hover:grayscale-0 transition-all cursor-pointer"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuC2UHUf4RWn6D4ru3sBGeNGTJBSfj5XxK7JYB6-gPnZ5SAssvw4dtH4u-paeVVg5St7jJw7y8yE3-Izd4SfbI5HXBYwnbzxjseVwygcDyuFdIPdZc_YslMVbPrsOldt4BedZYV0F7b7Yrc-K1BEr-m3b8cvvmBp_yAJ83ckZLVdJNH7WIDODjH7rm5zTysxVaFvX3zxtlm6bXyU_G6lz-Ni_s6cWy0-ovTYl5dsej-I7QJjlm-V1zxPo6UHCg9kFZEvZrjwqbl30BY"
          />
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto border-t border-slate-200 dark:border-slate-800 pt-12">
          <div className="text-center bg-white dark:bg-card-dark p-4 rounded-lg shadow-sm border border-slate-100 dark:border-slate-800">
            <span className="block text-4xl font-display font-bold mb-1 text-primary">48</span>
            <span className="text-xs font-bold text-slate-400 uppercase tracking-widest font-display">Days</span>
          </div>
          <div className="text-center bg-white dark:bg-card-dark p-4 rounded-lg shadow-sm border border-slate-100 dark:border-slate-800">
            <span className="block text-4xl font-display font-bold mb-1 text-primary">22</span>
            <span className="text-xs font-bold text-slate-400 uppercase tracking-widest font-display">Hours</span>
          </div>
          <div className="text-center bg-white dark:bg-card-dark p-4 rounded-lg shadow-sm border border-slate-100 dark:border-slate-800">
            <span className="block text-4xl font-display font-bold mb-1 text-primary">32</span>
            <span className="text-xs font-bold text-slate-400 uppercase tracking-widest font-display">Minutes</span>
          </div>
          <div className="text-center bg-white dark:bg-card-dark p-4 rounded-lg shadow-sm border border-slate-100 dark:border-slate-800">
            <span className="block text-4xl font-display font-bold mb-1 text-primary">06</span>
            <span className="text-xs font-bold text-slate-400 uppercase tracking-widest font-display">Seconds</span>
          </div>
        </div>
        
        <button className="mt-12 px-6 py-3 border border-slate-200 dark:border-slate-700 rounded-full text-xs font-bold flex items-center gap-2 mx-auto hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors font-display cursor-pointer">
          <Bell className="w-4 h-4" />
          Add to watchlist
        </button>
      </div>
    </section>
  );
}
