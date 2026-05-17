import React from "react";

export function HeartSection() {
  return (
    <div className="w-full h-[400px] relative overflow-hidden group">
      <img
        alt="High Impact Stadium View"
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
        src="https://lh3.googleusercontent.com/aida/ADBb0ujB5HQ5gB4Ln5odalGfYe5RZOW03tHxoHUJ_bXZDchnXR8zif_r0YMm5VK6g06A-kv2-jsZtBRSScCYfmOeFa6cYLXqrvVHh8KL3XwaNoZJaHs7rngd-DXhgDsBKJ8XsMK2g_gNwtD5a0UW1cwtfzjl5jta-W7CficIbtlEYJ06Oqz7m3cc_IPWZGGoK5Z8DmiviCy4mPAEaXlRHtCbgKmI6pk7XpMsBl_j0IKsgc37elxU0aeTsMMs526e0R28eJPlHA2OBezvRQ"
      />
      <div className="absolute inset-0 bg-primary/30 mix-blend-multiply"></div>
      <div className="absolute inset-0 bg-black/30"></div>
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-white text-center p-4">
          <h2 className="text-5xl md:text-7xl font-display font-black tracking-tighter drop-shadow-2xl mb-4">
            THE HEART OF SAUDI FOOTBALL
          </h2>
          <p className="text-lg md:text-2xl font-display font-medium max-w-2xl mx-auto drop-shadow-lg text-white/90">
            Experience the game like never before with exclusive access to the nation's biggest sporting events.
          </p>
        </div>
      </div>
    </div>
  );
}
