import { Navbar } from "@/components/layouts/navbar";
import { HeroSection } from "@/components/pages/home/section/hero";
import { PartnerSection } from "@/components/pages/home/section/partner";

export const HomePage = () => (
  <main className="min-h-screen bg-background">
    <Navbar />
    <HeroSection />
    <PartnerSection />
  </main>
);
