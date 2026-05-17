import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { UpcomingMatches } from "@/components/UpcomingMatches";
import { LatestHeadlines } from "@/components/LatestHeadlines";
import { MatchHighlights } from "@/components/MatchHighlights";
import { SquadSection } from "@/components/SquadSection";
import { AboutSimpleFC } from "@/components/AboutSimpleFC";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-on-surface font-body selection:bg-tertiary selection:text-black">
      <Navbar />
      <HeroSection />
      <main>
        {/* Upcoming matches section */}
        <UpcomingMatches />
        
        {/* Latest headlines section */}
        <LatestHeadlines />
        
        {/* Match highlights video section */}
        <MatchHighlights />
        
        {/* Meet the squad section */}
        <SquadSection />
        
        {/* About Simple FC section */}
        <AboutSimpleFC />
      </main>
      <Footer />
    </main>
  );
}
