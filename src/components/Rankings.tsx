import React from "react";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

export function Rankings() {
  return (
    <section className="py-20 container mx-auto px-4">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-12 gap-4">
        <div>
          <h2 className="text-3xl font-display font-bold">Team Rankings</h2>
          <div className="flex flex-wrap gap-4 mt-4 text-xs font-bold text-slate-500 dark:text-slate-400 font-display">
            <span className="text-primary cursor-pointer border-b-2 border-primary pb-1">
              All Category
            </span>
            <span className="hover:text-primary cursor-pointer transition-colors">Men</span>
            <span className="hover:text-primary cursor-pointer transition-colors">Women</span>
            <span className="hover:text-primary cursor-pointer transition-colors">Youth</span>
          </div>
        </div>
        <Link
          href="#"
          className="flex items-center gap-2 text-xs font-bold text-slate-400 border border-slate-200 dark:border-slate-800 px-4 py-2 rounded hover:border-primary hover:text-primary transition-all font-display"
        >
          View All Ranking
          <ArrowUpRight className="w-4 h-4" />
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Ranking Card 1 */}
        <div className="bg-card-light dark:bg-card-dark p-6 border border-slate-200 dark:border-slate-800 rounded-lg shadow-sm hover:shadow-md transition-shadow">
          <div className="flex items-center gap-3 mb-6">
            <img
              alt="League Logo"
              className="h-6"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCMmZ03fwGBO0WsW8tcxBD4SLot02cqpNSnMV2E6kOGvgdG69ppqt77XxIA7liBPTp1v8dM10jEBIh4TnGQoGURm54JZjGtePcw5Ccei60HFJk1hm9jZV-g5eHzq7Z-Shb9dV1GYzr5DX4YtFTV1y9I8SJAEHmJ2VIieUq9V-z66zavV1mtGmldu4P2wbd3_z2CahlJOucJPEphpgAZhiqqn48YOVxt2jSV9i81rsGwa0p__xm5ljZ0hvtFUsbCKY6_NYYqx1f_zKw"
            />
            <span className="font-bold text-sm font-display">Roshn Saudi League</span>
          </div>
          <table className="w-full text-xs">
            <thead className="text-slate-400 border-b border-slate-100 dark:border-slate-800 font-display">
              <tr>
                <th className="text-left py-2 font-medium">Club</th>
                <th className="py-2 font-medium">M</th>
                <th className="py-2 font-medium">GD</th>
                <th className="py-2 font-medium">P</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-800 font-display">
              <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                <td className="py-3 flex items-center gap-2">
                  <span className="w-4 text-[10px] text-slate-400">1</span>
                  <div className="w-4 h-4 rounded-full bg-slate-200 dark:bg-slate-700"></div>
                  <span className="font-medium">Al Nassr-First Team</span>
                </td>
                <td className="text-center py-3">29</td>
                <td className="text-center py-3 text-primary">+36</td>
                <td className="text-center py-3 font-bold text-slate-800 dark:text-slate-200">68</td>
              </tr>
              <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                <td className="py-3 flex items-center gap-2">
                  <span className="w-4 text-[10px] text-slate-400">2</span>
                  <div className="w-4 h-4 rounded-full bg-slate-200 dark:bg-slate-700"></div>
                  <span className="font-medium">Al Bayraq-First Team</span>
                </td>
                <td className="text-center py-3">29</td>
                <td className="text-center py-3 text-primary">+45</td>
                <td className="text-center py-3 font-bold text-slate-800 dark:text-slate-200">62</td>
              </tr>
              <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                <td className="py-3 flex items-center gap-2">
                  <span className="w-4 text-[10px] text-slate-400">3</span>
                  <div className="w-4 h-4 rounded-full bg-slate-200 dark:bg-slate-700"></div>
                  <span className="font-medium">Al hammah-First Team</span>
                </td>
                <td className="text-center py-3">29</td>
                <td className="text-center py-3 text-primary">+29</td>
                <td className="text-center py-3 font-bold text-slate-800 dark:text-slate-200">60</td>
              </tr>
            </tbody>
          </table>
          <button className="w-full mt-6 py-2 flex items-center justify-center gap-2 text-white bg-primary rounded text-xs font-bold hover:opacity-90 transition-opacity font-display cursor-pointer">
            View full rank <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>

        {/* Ranking Card 2 */}
        <div className="bg-card-light dark:bg-card-dark p-6 border border-slate-200 dark:border-slate-800 rounded-lg shadow-sm hover:shadow-md transition-shadow">
          <div className="flex items-center gap-3 mb-6">
            <img
              alt="League Logo"
              className="h-6"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAZin8Cj1Y7n2nlImevZMkfaSwWPBY8_kGvcNcXParCJbH91VP0OLBV8VKx2eeOfyE566m7fVasjaQ99mHeAhU_v9mAGT8CZB3dGXDWJNB4_AOn45RG-DT3DejDigL_XHVYc3VNzHYxOZS_zdrTuk6Z6w3Q5LFhSsWrb4qD4Xe6u1hXkXY68OlXkM7WVQfac7JSQrSzICbh8bT-wGULOUTcmbWEmDAVmEXt6FZl4hsfpLWL2YFM7byNa5vNkEz2b6t3IjkxauHcxAQ"
            />
            <span className="font-bold text-sm font-display">Diriyah Saudi Super Cup</span>
          </div>
          <table className="w-full text-xs">
            <thead className="text-slate-400 border-b border-slate-100 dark:border-slate-800 font-display">
              <tr>
                <th className="text-left py-2 font-medium">Club</th>
                <th className="py-2 font-medium">M</th>
                <th className="py-2 font-medium">GD</th>
                <th className="py-2 font-medium">P</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-800 font-display">
              <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                <td className="py-3 flex items-center gap-2">
                  <span className="w-4 text-[10px] text-slate-400">1</span>
                  <div className="w-4 h-4 rounded-full bg-slate-200 dark:bg-slate-700"></div>
                  <span className="font-medium">Al Nassr-First Team</span>
                </td>
                <td className="text-center py-3">29</td>
                <td className="text-center py-3 text-primary">+36</td>
                <td className="text-center py-3 font-bold text-slate-800 dark:text-slate-200">68</td>
              </tr>
              <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                <td className="py-3 flex items-center gap-2">
                  <span className="w-4 text-[10px] text-slate-400">2</span>
                  <div className="w-4 h-4 rounded-full bg-slate-200 dark:bg-slate-700"></div>
                  <span className="font-medium">Al Bayraq-First Team</span>
                </td>
                <td className="text-center py-3">29</td>
                <td className="text-center py-3 text-primary">+45</td>
                <td className="text-center py-3 font-bold text-slate-800 dark:text-slate-200">62</td>
              </tr>
            </tbody>
          </table>
          <button className="w-full mt-6 py-2 flex items-center justify-center gap-2 text-white bg-primary rounded text-xs font-bold hover:opacity-90 transition-opacity font-display cursor-pointer">
            View full rank <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>

        {/* Ranking Card 3 */}
        <div className="bg-card-light dark:bg-card-dark p-6 border border-slate-200 dark:border-slate-800 rounded-lg shadow-sm hover:shadow-md transition-shadow">
          <div className="flex items-center gap-3 mb-6">
            <img
              alt="League Logo"
              className="h-6"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBRE9jRZQv2d8ma6AzvCfQm-cTfAVjCqsyyIp3unPTq8essbHtJgtYzezY_z_evpd6NDQDTLjG9TDKp2yWoRXJwAWxUZDP9ssQm-iB4LmKz0EAqT1XlEJa7M2fR59Awf-x1RVFx7kJOas3wyN6xO1wvVc8bBZnX6uY-NaBrtdyD2mqtgCd8SvbdaMZilcisw0GAlbSzBhKPBlUy9ldaeGAqVrWXL61i7R17GpvyokDMZNSg0RQ4qh93WEwC3nANdIDkX2J_DitoveA"
            />
            <span className="font-bold text-sm font-display">King Cup</span>
          </div>
          <table className="w-full text-xs">
            <thead className="text-slate-400 border-b border-slate-100 dark:border-slate-800 font-display">
              <tr>
                <th className="text-left py-2 font-medium">Club</th>
                <th className="py-2 font-medium">M</th>
                <th className="py-2 font-medium">GD</th>
                <th className="py-2 font-medium">P</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-800 font-display">
              <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                <td className="py-3 flex items-center gap-2">
                  <span className="w-4 text-[10px] text-slate-400">1</span>
                  <div className="w-4 h-4 rounded-full bg-slate-200 dark:bg-slate-700"></div>
                  <span className="font-medium">Al Nassr-First Team</span>
                </td>
                <td className="text-center py-3">29</td>
                <td className="text-center py-3 text-primary">+36</td>
                <td className="text-center py-3 font-bold text-slate-800 dark:text-slate-200">68</td>
              </tr>
            </tbody>
          </table>
          <button className="w-full mt-6 py-2 flex items-center justify-center gap-2 text-white bg-primary rounded text-xs font-bold hover:opacity-90 transition-opacity font-display cursor-pointer">
            View full rank <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
