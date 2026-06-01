import React from "react";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export function Rankings() {
  return (
    <section className="py-24 bg-surface text-on-surface border-t border-white/5">
      <div className="container mx-auto px-6 max-w-6xl">
        <motion.div 
          className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-16 gap-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div>
            <h2 className="text-3xl md:text-5xl font-display">Team Rankings</h2>
            <div className="flex flex-wrap gap-6 mt-6 text-xs font-body uppercase tracking-[0.15em] text-white/50">
              <span className="text-primary cursor-pointer border-b border-primary pb-1">
                All Category
              </span>
              <span className="hover:text-primary cursor-pointer transition-colors pb-1">Men</span>
              <span className="hover:text-primary cursor-pointer transition-colors pb-1">Women</span>
              <span className="hover:text-primary cursor-pointer transition-colors pb-1">Youth</span>
            </div>
          </div>
          <Link
            href="#"
            className="flex items-center gap-3 text-[10px] font-body uppercase tracking-[0.2em] text-white/50 border border-white/10 px-5 py-3 rounded-sm hover:border-primary hover:text-primary transition-all"
          >
            View All Ranking
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Ranking Card 1 */}
          <motion.div 
            className="bg-black/30 p-8 border border-white/5 rounded-lg shadow-2xl hover:border-primary/30 transition-colors duration-500"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="flex items-center gap-4 mb-8">
              <img
                alt="League Logo"
                className="h-8 grayscale opacity-80"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCMmZ03fwGBO0WsW8tcxBD4SLot02cqpNSnMV2E6kOGvgdG69ppqt77XxIA7liBPTp1v8dM10jEBIh4TnGQoGURm54JZjGtePcw5Ccei60HFJk1hm9jZV-g5eHzq7Z-Shb9dV1GYzr5DX4YtFTV1y9I8SJAEHmJ2VIieUq9V-z66zavV1mtGmldu4P2wbd3_z2CahlJOucJPEphpgAZhiqqn48YOVxt2jSV9i81rsGwa0p__xm5ljZ0hvtFUsbCKY6_NYYqx1f_zKw"
              />
              <span className="font-display text-lg tracking-wide">Roshn Saudi League</span>
            </div>
            <table className="w-full text-sm font-body">
              <thead className="text-white/40 border-b border-white/10 text-xs uppercase tracking-wider">
                <tr>
                  <th className="text-left py-3 font-normal">Club</th>
                  <th className="py-3 font-normal">M</th>
                  <th className="py-3 font-normal">GD</th>
                  <th className="py-3 font-normal">Pts</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                <tr className="hover:bg-white/5 transition-colors group">
                  <td className="py-4 flex items-center gap-3">
                    <span className="w-4 text-xs text-primary font-bold">1</span>
                    <div className="w-1.5 h-1.5 rounded-full bg-primary shadow-[0_0_8px_rgba(212,175,55,0.8)]"></div>
                    <span className="font-medium group-hover:text-primary transition-colors">Al Nassr</span>
                  </td>
                  <td className="text-center py-4 text-white/70">29</td>
                  <td className="text-center py-4 text-primary font-medium">+36</td>
                  <td className="text-center py-4 font-bold text-white">68</td>
                </tr>
                <tr className="hover:bg-white/5 transition-colors group">
                  <td className="py-4 flex items-center gap-3">
                    <span className="w-4 text-xs text-white/40">2</span>
                    <div className="w-1.5 h-1.5 rounded-full bg-white/20"></div>
                    <span className="font-medium text-white/80">Al Bayraq</span>
                  </td>
                  <td className="text-center py-4 text-white/70">29</td>
                  <td className="text-center py-4 text-primary font-medium">+45</td>
                  <td className="text-center py-4 font-bold text-white">62</td>
                </tr>
                <tr className="hover:bg-white/5 transition-colors group">
                  <td className="py-4 flex items-center gap-3">
                    <span className="w-4 text-xs text-white/40">3</span>
                    <div className="w-1.5 h-1.5 rounded-full bg-white/20"></div>
                    <span className="font-medium text-white/80">Al Hammah</span>
                  </td>
                  <td className="text-center py-4 text-white/70">29</td>
                  <td className="text-center py-4 text-primary font-medium">+29</td>
                  <td className="text-center py-4 font-bold text-white">60</td>
                </tr>
              </tbody>
            </table>
            <button className="w-full mt-8 py-3.5 flex items-center justify-center gap-2 text-black bg-primary/90 rounded-sm text-[10px] font-body uppercase tracking-[0.2em] font-bold hover:bg-primary transition-colors cursor-pointer shadow-[0_0_20px_rgba(212,175,55,0.15)]">
              Full Standings <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </motion.div>

          {/* Ranking Card 2 */}
          <motion.div 
            className="bg-black/30 p-8 border border-white/5 rounded-lg shadow-2xl hover:border-primary/30 transition-colors duration-500"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="flex items-center gap-4 mb-8">
              <img
                alt="League Logo"
                className="h-8 grayscale opacity-80"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAZin8Cj1Y7n2nlImevZMkfaSwWPBY8_kGvcNcXParCJbH91VP0OLBV8VKx2eeOfyE566m7fVasjaQ99mHeAhU_v9mAGT8CZB3dGXDWJNB4_AOn45RG-DT3DejDigL_XHVYc3VNzHYxOZS_zdrTuk6Z6w3Q5LFhSsWrb4qD4Xe6u1hXkXY68OlXkM7WVQfac7JSQrSzICbh8bT-wGULOUTcmbWEmDAVmEXt6FZl4hsfpLWL2YFM7byNa5vNkEz2b6t3IjkxauHcxAQ"
              />
              <span className="font-display text-lg tracking-wide">Saudi Super Cup</span>
            </div>
            <table className="w-full text-sm font-body">
              <thead className="text-white/40 border-b border-white/10 text-xs uppercase tracking-wider">
                <tr>
                  <th className="text-left py-3 font-normal">Club</th>
                  <th className="py-3 font-normal">M</th>
                  <th className="py-3 font-normal">GD</th>
                  <th className="py-3 font-normal">Pts</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                <tr className="hover:bg-white/5 transition-colors group">
                  <td className="py-4 flex items-center gap-3">
                    <span className="w-4 text-xs text-primary font-bold">1</span>
                    <div className="w-1.5 h-1.5 rounded-full bg-primary shadow-[0_0_8px_rgba(212,175,55,0.8)]"></div>
                    <span className="font-medium group-hover:text-primary transition-colors">Al Nassr</span>
                  </td>
                  <td className="text-center py-4 text-white/70">29</td>
                  <td className="text-center py-4 text-primary font-medium">+36</td>
                  <td className="text-center py-4 font-bold text-white">68</td>
                </tr>
                <tr className="hover:bg-white/5 transition-colors group">
                  <td className="py-4 flex items-center gap-3">
                    <span className="w-4 text-xs text-white/40">2</span>
                    <div className="w-1.5 h-1.5 rounded-full bg-white/20"></div>
                    <span className="font-medium text-white/80">Al Bayraq</span>
                  </td>
                  <td className="text-center py-4 text-white/70">29</td>
                  <td className="text-center py-4 text-primary font-medium">+45</td>
                  <td className="text-center py-4 font-bold text-white">62</td>
                </tr>
              </tbody>
            </table>
            <button className="w-full mt-8 py-3.5 flex items-center justify-center gap-2 text-white border border-white/20 rounded-sm text-[10px] font-body uppercase tracking-[0.2em] font-bold hover:bg-white/5 hover:border-white/40 transition-colors cursor-pointer">
              Full Standings <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </motion.div>

          {/* Ranking Card 3 */}
          <motion.div 
            className="bg-black/30 p-8 border border-white/5 rounded-lg shadow-2xl hover:border-primary/30 transition-colors duration-500"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="flex items-center gap-4 mb-8">
              <img
                alt="League Logo"
                className="h-8 grayscale opacity-80"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBRE9jRZQv2d8ma6AzvCfQm-cTfAVjCqsyyIp3unPTq8essbHtJgtYzezY_z_evpd6NDQDTLjG9TDKp2yWoRXJwAWxUZDP9ssQm-iB4LmKz0EAqT1XlEJa7M2fR59Awf-x1RVFx7kJOas3wyN6xO1wvVc8bBZnX6uY-NaBrtdyD2mqtgCd8SvbdaMZilcisw0GAlbSzBhKPBlUy9ldaeGAqVrWXL61i7R17GpvyokDMZNSg0RQ4qh93WEwC3nANdIDkX2J_DitoveA"
              />
              <span className="font-display text-lg tracking-wide">King Cup</span>
            </div>
            <table className="w-full text-sm font-body">
              <thead className="text-white/40 border-b border-white/10 text-xs uppercase tracking-wider">
                <tr>
                  <th className="text-left py-3 font-normal">Club</th>
                  <th className="py-3 font-normal">M</th>
                  <th className="py-3 font-normal">GD</th>
                  <th className="py-3 font-normal">Pts</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                <tr className="hover:bg-white/5 transition-colors group">
                  <td className="py-4 flex items-center gap-3">
                    <span className="w-4 text-xs text-primary font-bold">1</span>
                    <div className="w-1.5 h-1.5 rounded-full bg-primary shadow-[0_0_8px_rgba(212,175,55,0.8)]"></div>
                    <span className="font-medium group-hover:text-primary transition-colors">Al Nassr</span>
                  </td>
                  <td className="text-center py-4 text-white/70">29</td>
                  <td className="text-center py-4 text-primary font-medium">+36</td>
                  <td className="text-center py-4 font-bold text-white">68</td>
                </tr>
              </tbody>
            </table>
            <button className="w-full mt-8 py-3.5 flex items-center justify-center gap-2 text-white border border-white/20 rounded-sm text-[10px] font-body uppercase tracking-[0.2em] font-bold hover:bg-white/5 hover:border-white/40 transition-colors cursor-pointer">
              Full Standings <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
