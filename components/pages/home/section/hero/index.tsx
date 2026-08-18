"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/layouts/container";

const heroImage = "/images/Subtract.png";

const teamAvatars = [
  "photo-1494790108377-be9c29b29330",
  "photo-1500648767791-00dcc994a43e",
  "photo-1507003211169-0a1dd7228f2d",
  "photo-1534528741775-53994a69daeb",
];

export const Hero = () => {
  return (
    <section
      id="home"
      className="relative z-10 mt-2 font-['Plus_Jakarta_Sans',sans-serif]"
    >
      <Container className="mx-auto max-w-6xl px-4 lg:px-6">
        <div className="flex flex-col gap-8 lg:gap-[40px]">
          <div className="flex flex-col gap-2.5">
            <h1 className="text-6xl font-semibold leading-[1.3] text-white sm:text-6xl lg:text-6xl lg:leading-[1.4]">
              Real-Time Defect Detection
            </h1>
            <div className="flex flex-col items-start justify-between gap-4 lg:flex-row lg:items-center lg:gap-8">
              <span className="order-1 text-6xl font-semibold leading-[1.3] text-white sm:text-6xl lg:order-2 lg:text-6xl lg:leading-[1.4]">
                with Vision AI
              </span>

              <p className="order-2 w-full text-justify text-base leading-[1.75] text-[#d4d4d4] sm:text-lg lg:order-1 lg:w-[653px] lg:shrink-0">
                Detect defects instantly with AI-powered visual inspection.
                Improve accuracy, reduce waste, and maintain consistent product
                quality at scale. AI-powered visual inspection. Improve
                accuracy, reduce
              </p>
            </div>
          </div>

          <div className="relative h-[380px] w-full overflow-hidden rounded-[20px] sm:h-[480px] sm:rounded-[30px] lg:h-[569px]">
            <Image
              src={heroImage}
              alt="Industrial Plant"
              fill
              priority
              sizes="100vw"
              className="object-cover object-center"
            />

            <div className="absolute left-4 top-4 z-20 flex flex-wrap items-center gap-3 sm:left-6 sm:top-6 sm:gap-4 lg:left-1 lg:top-[24px] lg:gap-[10px]">
              <Button
                type="button"
                className="h-10 rounded-full border-2 border-[#b66900] bg-[#b66900] px-5 text-sm font-medium text-white transition-all hover:bg-transparent sm:h-[54px] sm:px-8 sm:text-base"
              >
                Request Demo
              </Button>

              <Button
                type="button"
                className="h-10 rounded-full border-2 border-[#b66900] bg-transparent px-5 text-sm font-medium text-white transition-all hover:bg-[#b66900] sm:h-[54px] sm:px-8 sm:text-base"
              >
                View Solution
              </Button>
            </div>

            <div className="absolute bottom-4 right-4 z-20 flex flex-col items-center justify-center gap-1.5 rounded-2xl bg-black/50 p-2.5 backdrop-blur-md sm:gap-2 sm:p-3 lg:bottom-[20px] lg:right-[40px] lg:bg-transparent lg:p-0 lg:backdrop-blur-none">
              <div className="flex items-center -space-x-2 sm:-space-x-[14.8px]">
                {teamAvatars.map((img, idx) => (
                  <div
                    key={img}
                    className="relative h-8 w-8 overflow-hidden rounded-full border-[1.5px] border-white/40 sm:h-[45px] sm:w-[45px]"
                    style={{ zIndex: teamAvatars.length - idx }}
                  >
                    <Image
                      src={`https://images.unsplash.com/${img}?auto=format&fit=crop&w=96&q=80`}
                      alt="Expert Avatar"
                      fill
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
              <span className="whitespace-nowrap text-xs font-normal leading-[1.75] text-white sm:text-base lg:text-[18px]">
                150+ Expert Team
              </span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Hero;
