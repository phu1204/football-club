"use client";

import React from "react";
import Marquee from "react-fast-marquee";
import { motion } from "framer-motion";

type Player = {
  id: number;
  name: string;
  role: "Goalkeeper" | "Defender" | "Midfielder" | "Forward";
  img: string;
};

const players: Player[] = [
  { id: 1, name: "M. Al-Owais", role: "Goalkeeper", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCFSY6qOOeqYX7l_oXsU8GbCWQXF5v5yROkCC7eHW8H7f6IhgGdG7ax2NS8qa02Qq0N07gtL6E1DWVhLooja9EKfwAkPi6CU90LoIOZrh2YXmFx68egUf1zAcHO18ROm-t7JFFOiaUQw1sUPh__Yb-wCYzwi_9G7Ua-1HIEOG3DwnT0SJ8Ira9_DfnfrBIdQ9mfoy_zaGiCLsprVko_YNYt_KWZJJz52tJIAlqES5HwvJtyowTxSXDhjNp6f0eTkuwLsuwlyPVgqU4" },
  { id: 2, name: "Y. Al-Shahrani", role: "Defender", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCTJnhfdThKQ11qrJq5E1tL-RvFjPm3KOhAY7vaIegmZgqxwag84k0UzX8oY3FdB8ns-Ri2FMA0AIaa7pcWYQfOdCMZK8_NqgnpDSjToYBzM9Rt3LylP_2XmVtzeZ_prhcywJI1UsL9gu6RKbh1z1ER12mLWJcaW9TNbqXeBCLq2vEXwDzKTr0lHpKg3Pazvr91CFvYe7OKJ7ATungMuHxL19-VIUCyEuu17Li816vX1WcGVdLQsgfjexgnt3MTFl8LEgrSxiCTKpY" },
  { id: 3, name: "Ali Al-Bulaihi", role: "Defender", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAAUtDXDIvl-rH8V7WIkAtQCJnfyWbxCYnoIrRKeUkEk9T2i8EaCKkZLdsNj07yFE94yPAKm0NQ-XtBxvfz9bYTniAkVpA0mz3dtBPyB4ub6dNuvbpeV6oaPIviqI2mUXWUBdI8GDB3IalCa1klfxPjYeSJovOcavs1DVi7wBDEm8uFeiZFOMQv8sZMnrO6EDJj0VlFrOtvfkKBDm9qln_VszlbE9D6bJJkGLN_WW2Olv3LFfRz3LhF4jNMzrPRzjXBGtlnYjSaMac" },
  { id: 4, name: "Hassan Tambakti", role: "Defender", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCTJnhfdThKQ11qrJq5E1tL-RvFjPm3KOhAY7vaIegmZgqxwag84k0UzX8oY3FdB8ns-Ri2FMA0AIaa7pcWYQfOdCMZK8_NqgnpDSjToYBzM9Rt3LylP_2XmVtzeZ_prhcywJI1UsL9gu6RKbh1z1ER12mLWJcaW9TNbqXeBCLq2vEXwDzKTr0lHpKg3Pazvr91CFvYe7OKJ7ATungMuHxL19-VIUCyEuu17Li816vX1WcGVdLQsgfjexgnt3MTFl8LEgrSxiCTKpY" },
  { id: 5, name: "Saud Abdulhamid", role: "Defender", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCSIGlRnw58-_Jy0gq91h6kn79_sAZiyUS9OVynyp05YEFNG5XnNDaLKXAol-rrKJr41vkbRkNIQOv3g2tD9fYYG615bylQ_PWNCdZSBISR3JXnlOsTZN5WadhfREuNcEAX2JTmWiNKxf7P4grnnaDswFbVzUxdatnUOWPn7S66vIVJ_ecQNUsQG86rX7hIK-jk9JQYGU3gNeOgmSgcvZqIsTaaxf1iozaxe7GsQmiN0D3napSQgnbsSr6-9ZLmDyz6XBkCR6364jg" },
  { id: 6, name: "Kalidou Koulibaly", role: "Defender", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAkeVTlkqsf_oNYGCA8lr5SnAb3c8Xq8oZ44jbNZEVnIVC6hN38wupx2EhjyGDWXMkmSlMVUbP7HeA4KguSjP5H0JI-aA1KF5XwTPmaIudZwNlcL1uX3rV-VaLA-km7XWqe8BpY65Vr50EXVRtQpkhkpYbUkVSlTS4vXoB1sjG__Pr6a-XKTb4qjZuCBiq0OMXVJ8tesjiNVirVZT3aJclpUGiEUHLZL_AU07HYTqpK3TqWlkWPZM1_fw6us8GBY5-9nfFw3cLHlUI" },
  { id: 7, name: "Ruben Neves", role: "Midfielder", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBrj69jkJsCYICeZopegx7bpe9pNmpriLGXDxF7FrHL6wP2AQbmm8u4IZpVA3B-G0nwSKDOEijEuzZEm0h_vmN-WTCY1FjGMikoTnOmixOvyhT4SFSZo3NC7ujcKESD3BmYjoa0Grp0CHQYQ3j6ZR2ULtW0_9s0DK0_O94y15mr9eZQh0DLQvveG3AYmgYXIPKUhlfM5bfZZKFX-ky_8rxWI6hFR56rNSypZdazB5ehIOWd9TdSiMVcxLvYRPRaiHs4OH79-ub3P44" },
  { id: 8, name: "Sergej Milinkovic", role: "Midfielder", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDmf8uHn-ZQSELjobfRKgxirFSfTKKZGmGnqaZDSotFx11OnTjTLurWoDlSGYhlI-t4FWiXEne-iDfqhKkHnwVaEkuGyuk0QRai8Z2RdQJgr2IAs3-Ns-L71-MRQoMwpjgQaBs3P8l9KYRNlvPRi3p0Mu4wGk9FNFhYZRURuRoyCFdiMDwH1E77yctK_cvQgZE-D4_RjKYPmx_Oslm1UrU9VpqHYapYHUlqeJ2ctLIlcf-i95-uptOmQ8f3IsUS-raSBobJGYXR_uw" },
  { id: 9, name: "Nasser Al-Dawsari", role: "Midfielder", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCSIGlRnw58-_Jy0gq91h6kn79_sAZiyUS9OVynyp05YEFNG5XnNDaLKXAol-rrKJr41vkbRkNIQOv3g2tD9fYYG615bylQ_PWNCdZSBISR3JXnlOsTZN5WadhfREuNcEAX2JTmWiNKxf7P4grnnaDswFbVzUxdatnUOWPn7S66vIVJ_ecQNUsQG86rX7hIK-jk9JQYGU3gNeOgmSgcvZqIsTaaxf1iozaxe7GsQmiN0D3napSQgnbsSr6-9ZLmDyz6XBkCR6364jg" },
  { id: 10, name: "M. Al-Dawsari", role: "Forward", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCSIGlRnw58-_Jy0gq91h6kn79_sAZiyUS9OVynyp05YEFNG5XnNDaLKXAol-rrKJr41vkbRkNIQOv3g2tD9fYYG615bylQ_PWNCdZSBISR3JXnlOsTZN5WadhfREuNcEAX2JTmWiNKxf7P4grnnaDswFbVzUxdatnUOWPn7S66vIVJ_ecQNUsQG86rX7hIK-jk9JQYGU3gNeOgmSgcvZqIsTaaxf1iozaxe7GsQmiN0D3napSQgnbsSr6-9ZLmDyz6XBkCR6364jg" },
  { id: 11, name: "Saleh Al-Shehri", role: "Forward", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAAUtDXDIvl-rH8V7WIkAtQCJnfyWbxCYnoIrRKeUkEk9T2i8EaCKkZLdsNj07yFE94yPAKm0NQ-XtBxvfz9bYTniAkVpA0mz3dtBPyB4ub6dNuvbpeV6oaPIviqI2mUXWUBdI8GDB3IalCa1klfxPjYeSJovOcavs1DVi7wBDEm8uFeiZFOMQv8sZMnrO6EDJj0VlFrOtvfkKBDm9qln_VszlbE9D6bJJkGLN_WW2Olv3LFfRz3LhF4jNMzrPRzjXBGtlnYjSaMac" },
  { id: 12, name: "Aleksandar Mitrovic", role: "Forward", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAkeVTlkqsf_oNYGCA8lr5SnAb3c8Xq8oZ44jbNZEVnIVC6hN38wupx2EhjyGDWXMkmSlMVUbP7HeA4KguSjP5H0JI-aA1KF5XwTPmaIudZwNlcL1uX3rV-VaLA-km7XWqe8BpY65Vr50EXVRtQpkhkpYbUkVSlTS4vXoB1sjG__Pr6a-XKTb4qjZuCBiq0OMXVJ8tesjiNVirVZT3aJclpUGiEUHLZL_AU07HYTqpK3TqWlkWPZM1_fw6us8GBY5-9nfFw3cLHlUI" },
  { id: 13, name: "Malcom", role: "Forward", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBrj69jkJsCYICeZopegx7bpe9pNmpriLGXDxF7FrHL6wP2AQbmm8u4IZpVA3B-G0nwSKDOEijEuzZEm0h_vmN-WTCY1FjGMikoTnOmixOvyhT4SFSZo3NC7ujcKESD3BmYjoa0Grp0CHQYQ3j6ZR2ULtW0_9s0DK0_O94y15mr9eZQh0DLQvveG3AYmgYXIPKUhlfM5bfZZKFX-ky_8rxWI6hFR56rNSypZdazB5ehIOWd9TdSiMVcxLvYRPRaiHs4OH79-ub3P44" },
  { id: 14, name: "Michael Delgado", role: "Midfielder", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDmf8uHn-ZQSELjobfRKgxirFSfTKKZGmGnqaZDSotFx11OnTjTLurWoDlSGYhlI-t4FWiXEne-iDfqhKkHnwVaEkuGyuk0QRai8Z2RdQJgr2IAs3-Ns-L71-MRQoMwpjgQaBs3P8l9KYRNlvPRi3p0Mu4wGk9FNFhYZRURuRoyCFdiMDwH1E77yctK_cvQgZE-D4_RjKYPmx_Oslm1UrU9VpqHYapYHUlqeJ2ctLIlcf-i95-uptOmQ8f3IsUS-raSBobJGYXR_uw" },
  { id: 15, name: "Abdullah Al-Hamdan", role: "Forward", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAAUtDXDIvl-rH8V7WIkAtQCJnfyWbxCYnoIrRKeUkEk9T2i8EaCKkZLdsNj07yFE94yPAKm0NQ-XtBxvfz9bYTniAkVpA0mz3dtBPyB4ub6dNuvbpeV6oaPIviqI2mUXWUBdI8GDB3IalCa1klfxPjYeSJovOcavs1DVi7wBDEm8uFeiZFOMQv8sZMnrO6EDJj0VlFrOtvfkKBDm9qln_VszlbE9D6bJJkGLN_WW2Olv3LFfRz3LhF4jNMzrPRzjXBGtlnYjSaMac" },
  { id: 16, name: "Muteb Al-Harbi", role: "Defender", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCTJnhfdThKQ11qrJq5E1tL-RvFjPm3KOhAY7vaIegmZgqxwag84k0UzX8oY3FdB8ns-Ri2FMA0AIaa7pcWYQfOdCMZK8_NqgnpDSjToYBzM9Rt3LylP_2XmVtzeZ_prhcywJI1UsL9gu6RKbh1z1ER12mLWJcaW9TNbqXeBCLq2vEXwDzKTr0lHpKg3Pazvr91CFvYe7OKJ7ATungMuHxL19-VIUCyEuu17Li816vX1WcGVdLQsgfjexgnt3MTFl8LEgrSxiCTKpY" },
  { id: 17, name: "Mohammed Kanno", role: "Midfielder", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCSIGlRnw58-_Jy0gq91h6kn79_sAZiyUS9OVynyp05YEFNG5XnNDaLKXAol-rrKJr41vkbRkNIQOv3g2tD9fYYG615bylQ_PWNCdZSBISR3JXnlOsTZN5WadhfREuNcEAX2JTmWiNKxf7P4grnnaDswFbVzUxdatnUOWPn7S66vIVJ_ecQNUsQG86rX7hIK-jk9JQYGU3gNeOgmSgcvZqIsTaaxf1iozaxe7GsQmiN0D3napSQgnbsSr6-9ZLmDyz6XBkCR6364jg" },
  { id: 18, name: "Salem Al-Malki", role: "Forward", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAkeVTlkqsf_oNYGCA8lr5SnAb3c8Xq8oZ44jbNZEVnIVC6hN38wupx2EhjyGDWXMkmSlMVUbP7HeA4KguSjP5H0JI-aA1KF5XwTPmaIudZwNlcL1uX3rV-VaLA-km7XWqe8BpY65Vr50EXVRtQpkhkpYbUkVSlTS4vXoB1sjG__Pr6a-XKTb4qjZuCBiq0OMXVJ8tesjiNVirVZT3aJclpUGiEUHLZL_AU07HYTqpK3TqWlkWPZM1_fw6us8GBY5-9nfFw3cLHlUI" },
];

function PlayerCard({ player }: { player: Player }) {
  return (
    <motion.div
      className="group cursor-pointer mr-6 w-[240px] sm:w-[260px]"
      whileHover={{ y: -8, scale: 1.02 }}
      transition={{ type: "spring", stiffness: 220, damping: 16 }}
    >
      <div className="aspect-[3/4] overflow-hidden rounded-xl mb-4 relative bg-surface-container shadow-lg border border-white/10">
        <img
          alt={player.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-85 group-hover:opacity-100"
          src={player.img}
        />
        <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/90 via-black/50 to-transparent">
          <span className="text-tertiary font-display font-bold text-2xl tracking-tighter">#{player.id}</span>
        </div>
      </div>
      <h3 className="text-xl font-display font-bold group-hover:text-tertiary transition-colors leading-tight">
        {player.name}
      </h3>
      <p className="text-on-surface-variant text-xs mt-1 font-semibold tracking-[0.16em] uppercase">
        {player.role}
      </p>
    </motion.div>
  );
}

export function SquadSection() {
  const firstRow = players.slice(0, 9);
  const secondRow = players.slice(9, 18);

  return (
    <section className="py-20 px-5 md:px-16 max-w-[1440px] mx-auto text-on-surface overflow-hidden">
      <motion.div
        className="mb-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-sm font-bold text-tertiary uppercase tracking-widest mb-2">Team</h2>
        <h3 className="text-3xl md:text-5xl font-display font-bold">Meet the Squad</h3>
        <p className="text-on-surface-variant mt-3">18 players • Marquee showcase • Hover to pause</p>
      </motion.div>

      <div className="space-y-8 py-2">
        <Marquee gradient={false} speed={35} pauseOnHover pauseOnClick className="py-4">
          {firstRow.map((player) => (
            <PlayerCard key={player.id} player={player} />
          ))}
        </Marquee>

        <Marquee gradient={false} speed={32} direction="right" pauseOnHover pauseOnClick className="py-4">
          {secondRow.map((player) => (
            <PlayerCard key={player.id} player={player} />
          ))}
        </Marquee>
      </div>
    </section>
  );
}
