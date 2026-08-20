"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/layouts/container";
import BlurText from "@/components/ui/blur-text";

const heroImageDesktop = "/images/Subtract.png";
const heroImageFull = "/images/Subtract2.png";

const teamAvatars = [
  "photo-1494790108377-be9c29b29330",
  "photo-1500648767791-00dcc994a43e",
  "photo-1507003211169-0a1dd7228f2d",
  "photo-1534528741775-53994a69daeb",
];

export const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative z-10 min-h-dvh overflow-hidden font-['Plus_Jakarta_Sans',sans-serif] pb-12 pt-24 sm:pt-28 lg:pb-16 lg:pt-32"
    >
      <div className="pointer-events-none absolute left-1/2 top-[-5%] h-[280px] w-[280px] -translate-x-1/2 rounded-full bg-[#b66900]/30 blur-[90px] sm:h-[350px] sm:w-[350px] lg:left-[-10%] lg:top-[-10%] lg:h-[500px] lg:w-[500px] lg:translate-x-0 lg:blur-[120px]" />
      <div className="pointer-events-none absolute right-[-5%] top-[10%] h-[200px] w-[200px] rounded-full bg-[#b66900]/20 blur-[80px] lg:right-[-10%] lg:top-[0%] lg:h-[400px] lg:w-[400px] lg:blur-[100px]" />

      <Container className="mx-auto max-w-6xl px-4 lg:px-6">
        <div className="flex flex-col gap-6 lg:gap-10">
          <div className="flex flex-col gap-3">
            <h1 className="text-3xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-[64px] lg:leading-[1.15]">
              <BlurText
                text="Real–Time Defect Detection"
                delay={120}
                animateBy="words"
                direction="top"
                className="text-3xl font-bold leading-tight text-white sm:text-5xl lg:text-[64px] lg:leading-[1.15]"
              />
            </h1>

            <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between lg:gap-8">
              <div className="order-2 w-full text-left text-base leading-relaxed text-[#d4d4d4] sm:text-base lg:order-1 lg:max-w-2xl lg:shrink-0 lg:text-lg">
                <BlurText
                  text="Detect defects instantly with AI-powered visual inspection. Improve accuracy, reduce waste, and maintain consistent product quality at scale. AI-powered visual inspection. Improve accuracy, reduce"
                  delay={30}
                  animateBy="words"
                  direction="top"
                  stepDuration={0.2}
                  className="text-left text-sm leading-relaxed text-[#d4d4d4] sm:text-base lg:text-lg"
                />
              </div>

              <div className="order-1 text-3xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:order-2 lg:text-[64px] lg:leading-[1.15]">
                <BlurText
                  text="with Vision AI"
                  delay={120}
                  animateBy="words"
                  direction="top"
                  className="text-3xl font-bold leading-tight text-white sm:text-5xl lg:text-[64px] lg:leading-[1.15]"
                />
              </div>
            </div>
          </div>

          <div className="relative flex w-full flex-col">
            <div className="z-20 mb-6 flex flex-wrap items-center gap-3 sm:gap-4 lg:absolute lg:left-0 lg:top-0 lg:z-30 lg:mb-0">
              <motion.div
                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <Button
                  type="button"
                  className="h-11 rounded-full border-2 border-[#b66900] bg-[#b66900] px-6 text-xs font-semibold text-white shadow-lg transition-all duration-300 hover:bg-transparent hover:text-white active:scale-95 sm:h-12 sm:px-8 sm:text-base"
                >
                  Request Demo
                </Button>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.55 }}
              >
                <Button
                  type="button"
                  className="h-11 rounded-full border-2 border-[#b66900] bg-transparent px-6 text-xs font-semibold text-white transition-all duration-300 hover:bg-[#b66900] active:scale-95 sm:h-12 sm:px-8 sm:text-base"
                >
                  View Solution
                </Button>
              </motion.div>
            </div>

            <div className="relative block lg:hidden">
              <motion.div
                initial={{ opacity: 0, scale: 1.03, y: 15 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative h-[320px] w-full overflow-hidden rounded-[24px] sm:h-[400px] sm:rounded-[32px]"
              >
                <Image
                  src={heroImageFull}
                  alt="Industrial Plant Inspection"
                  fill
                  priority
                  sizes="100vw"
                  className="object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />

                <div className="absolute -bottom-2 -right-2 z-30 rounded-tl-[24px] border-l border-t border-white/10 bg-black/90 px-5 py-3 backdrop-blur-md">
                  <div className="flex flex-col items-center justify-center gap-1.5">
                    <div className="flex items-center -space-x-3">
                      {teamAvatars.map((img, idx) => (
                        <div
                          key={img}
                          className="relative h-8 w-8 overflow-hidden rounded-full border-2 border-black shadow-md sm:h-10 sm:w-10"
                          style={{ zIndex: teamAvatars.length - idx }}
                        >
                          <Image
                            src={`https://images.unsplash.com/${img}?auto=format&fit=crop&w=120&q=80`}
                            alt="Expert Avatar"
                            fill
                            className="object-cover"
                          />
                        </div>
                      ))}
                    </div>
                    <span className="whitespace-nowrap text-xs font-semibold tracking-wide text-white">
                      150+ Expert Team
                    </span>
                  </div>
                </div>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 1.05, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.2,
                ease: [0.25, 0.1, 0.25, 1],
              }}
              className="relative hidden h-[520px] w-full overflow-hidden rounded-[44px] lg:block"
            >
              <Image
                src={heroImageDesktop}
                alt="Industrial Plant Inspection"
                fill
                priority
                sizes="100vw"
                className="object-cover object-center transition-transform duration-700 hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30" />

              <div className="absolute bottom-4 right-8 z-30 flex flex-col items-center justify-center gap-2">
                <div className="flex items-center -space-x-4">
                  {teamAvatars.map((img, idx) => (
                    <motion.div
                      key={img}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{
                        type: "spring",
                        stiffness: 260,
                        damping: 20,
                        delay: 0.65 + idx * 0.12,
                      }}
                      className="relative h-14 w-14 overflow-hidden rounded-full border-2 border-black/80 shadow-lg transition-transform duration-300 hover:scale-110"
                      style={{ zIndex: teamAvatars.length - idx }}
                    >
                      <Image
                        src={`https://images.unsplash.com/${img}?auto=format&fit=crop&w=120&q=80`}
                        alt="Expert Avatar"
                        fill
                        className="object-cover"
                      />
                    </motion.div>
                  ))}
                </div>

                <motion.span
                  initial={{ opacity: 0, filter: "blur(4px)" }}
                  animate={{ opacity: 1, filter: "blur(0px)" }}
                  transition={{ duration: 0.4, delay: 1.15 }}
                  className="whitespace-nowrap text-base font-medium tracking-wide text-[#e5e5e5]"
                >
                  150+ Expert Team
                </motion.span>
              </div>
            </motion.div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default HeroSection;