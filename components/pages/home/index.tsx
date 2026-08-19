import { Navbar } from "@/components/layouts/navbar";
import { HeroSection } from "@/components/pages/home/section/hero";
import { PartnerSection } from "@/components/pages/home/section/partner";
import { ProblemSection } from "@/components/pages/home/section/problem";
import { ServicesSection } from "@/components/pages/home/section/service";
import { KeyCapabilitiesSection } from "@/components/pages/home/section/capabilities";
import { ValueSection } from "@/components/pages/home/section/value";
import { HowItWorksSection } from "@/components/pages/home/section/work";

export const HomePage = () => (
  <main className="min-h-screen bg-background">
    <Navbar />
    <HeroSection />
    <PartnerSection />
    <ProblemSection />
    <ServicesSection />
    <KeyCapabilitiesSection />
    <ValueSection />
    <HowItWorksSection />
  </main>
);
