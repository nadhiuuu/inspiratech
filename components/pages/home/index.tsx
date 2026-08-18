import { Navbar } from "@/components/layouts/navbar";
import { Hero } from "@/components/pages/home/section/hero";

export const HomePage = () => (
  <main className="min-h-screen bg-background">
    <Navbar />
    <Hero />
  </main>
);
