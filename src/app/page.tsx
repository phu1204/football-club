import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { UpcomingMatches } from "@/components/UpcomingMatches";
import { LatestHeadlines } from "@/components/LatestHeadlines";
import { MatchHighlights } from "@/components/MatchHighlights";
import { SquadSection } from "@/components/SquadSection";
import { PlayerStats } from "@/components/PlayerStats";
import { TeamKits } from "@/components/TeamKits";
import { BossOfClub } from "@/components/BossOfClub";
import { AboutSimpleFC } from "@/components/AboutSimpleFC";
import { Sponsors } from "@/components/Sponsors";
import { Testimonial } from "@/components/Testimonial";
import { Footer } from "@/components/Footer";
import { LineUp } from "@/components/LineUp";

export default function Home() {
  return (
    <div className="min-h-screen selection:bg-surface selection:text-text-primary font-sans animated-gradient-bg">
      <Navbar />
      <HeroSection />
      <main>
        {/* Upcoming matches section */}
        <UpcomingMatches />
        
        {/* Latest headlines section */}
        <LineUp />
        {/* <LatestHeadlines /> */}
        
        {/* Match highlights video section */}
        <MatchHighlights />
        
        {/* Meet the squad section */}
        <SquadSection />

        {/* Player stats section */}
        <PlayerStats />

        {/* Partner Logos section */}
        <Testimonial />

        {/* Official Club Kits section */}
        {/* <TeamKits /> */}

        {/* Boss of Club section */}
        <BossOfClub />
        
        {/* About Simple FC section */}
        <AboutSimpleFC />

        {/* Sponsor section */}
        <Sponsors />
      </main>
      <Footer />
    </div>
  );
}
