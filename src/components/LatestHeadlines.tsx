"use client";

import React from "react";
import { motion, Variants } from "framer-motion";

const container: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export function LatestHeadlines() {
  return (
    <motion.section
      className="bg-surface-container-lowest py-20 text-on-surface"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.15 }}
      variants={container}
    >
      <div className="px-5 md:px-16 max-w-[1440px] mx-auto">
        <motion.div className="mb-12" variants={item}>
          <h2 className="text-sm font-bold text-tertiary uppercase tracking-widest mb-2">Newsroom</h2>
          <h3 className="text-3xl md:text-5xl font-display font-bold">Latest Headlines</h3>
        </motion.div>
        
        <motion.div className="grid grid-cols-1 md:grid-cols-3 gap-8" variants={container}>
          {/* Headline 1 */}
          <motion.div className="group cursor-pointer" variants={item}>
            <div className="aspect-video overflow-hidden rounded-xl mb-4 relative shadow-lg">
              <img
                alt="Training headline"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-80 group-hover:opacity-100"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuD4pOKtH2G22jDS6SbkhYkwa5VVlLEro1uV7sj8qdHu-TTDF9Yh7as_voUthyTrmEVn9sDRbC8VQgrCMSkxqptkFR4WQHorb-7bbD_2oVkhBc7MPFIuUAyarXymrbufhAh_x7DKt9I-3D9R1c62AAPrUg7LqcinzVIXfOhdBw3hmj1Po8vIBk94kAfjCHVWKHWSkAgi5qFfthYQR2fv4yVGeBP7oUMtJ4g2y-LEnb9_53AggzQ7Kb87glVMqZmt-NBCLuXaOcCos7g"
              />
            </div>
            <span className="text-xs text-tertiary font-bold uppercase tracking-wider">
              May 5, 2026
            </span>
            <h3 className="text-xl font-bold mt-2 group-hover:text-tertiary transition-colors font-display leading-snug">
              Simple FC Opens First International Football School in Riyadh
            </h3>
          </motion.div>

          {/* Headline 2 */}
          <motion.div className="group cursor-pointer" variants={item}>
            <div className="aspect-video overflow-hidden rounded-xl mb-4 relative shadow-lg">
              <img
                alt="Match headline"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-80 group-hover:opacity-100"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBrj69jkJsCYICeZopegx7bpe9pNmpriLGXDxF7FrHL6wP2AQbmm8u4IZpVA3B-G0nwSKDOEijEuzZEm0h_vmN-WTCY1FjGMikoTnOmixOvyhT4SFSZo3NC7ujcKESD3BmYjoa0Grp0CHQYQ3j6ZR2ULtW0_9s0DK0_O94y15mr9eZQh0DLQvveG3AYmgYXIPKUhlfM5bfZZKFX-ky_8rxWI6hFR56rNSypZdazB5ehIOWd9TdSiMVcxLvYRPRaiHs4OH79-ub3P44"
              />
            </div>
            <span className="text-xs text-tertiary font-bold uppercase tracking-wider">
              May 4, 2026
            </span>
            <h3 className="text-xl font-bold mt-2 group-hover:text-tertiary transition-colors font-display leading-snug">
              Simple FC Extends Lead at the Top with Decisive Win Over Al Ahli
            </h3>
          </motion.div>

          {/* Headline 3 */}
          <motion.div className="group cursor-pointer" variants={item}>
            <div className="aspect-video overflow-hidden rounded-xl mb-4 relative shadow-lg">
              <img
                alt="Women team headline"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-80 group-hover:opacity-100"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDmf8uHn-ZQSELjobfRKgxirFSfTKKZGmGnqaZDSotFx11OnTjTLurWoDlSGYhlI-t4FWiXEne-iDfqhKkHnwVaEkuGyuk0QRai8Z2RdQJgr2IAs3-Ns-L71-MRQoMwpjgQaBs3P8l9KYRNlvPRi3p0Mu4wGk9FNFhYZRURuRoyCFdiMDwH1E77yctK_cvQgZE-D4_RjKYPmx_Oslm1UrU9VpqHYapYHUlqeJ2ctLIlcf-i95-uptOmQ8f3IsUS-raSBobJGYXR_uw"
              />
            </div>
            <span className="text-xs text-tertiary font-bold uppercase tracking-wider">
              May 4, 2026
            </span>
            <h3 className="text-xl font-bold mt-2 group-hover:text-tertiary transition-colors font-display leading-snug">
              The Simple FC Women's U-20 Team Concludes Training Camp
            </h3>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
}
