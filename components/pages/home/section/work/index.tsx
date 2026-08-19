"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ScanSquare, Brain, Target, Monitor } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/layouts/container";
import BlurText from "@/components/ui/blur-text";

const steps = [
  {
    number: "1",
    title: "Data Capture",
    description:
      "High-resolution cameras capture product images directly from the production line in real-time, ensuring consistent and continuous data input.",
    icon: ScanSquare,
  },
  {
    number: "2",
    title: "AI Processing",
    description:
      "Advanced computer vision models analyze each image instantly to detect defects, anomalies, and quality deviations and with high accuracy.",
    icon: Brain,
  },
  {
    number: "3",
    title: "Decision & Classification",
    description:
      "The system automatically classifies each product as pass or reject based on predefined quality standards and AI predictions in real-time operations",
    icon: Target,
  },
  {
    number: "4",
    title: "Monitoring & Insights",
    description:
      "All inspection results are displayed in a centralized dashboard, then providing real-time monitoring and actionable the insights for optimization",
    icon: Monitor,
  },
];

export const HowItWorksSection = () => {
  return (
    <section
      id="how-it-works"
      className="relative z-10 overflow-hidden font-['Plus_Jakarta_Sans',sans-serif] bg-black py-20 lg:py-32 text-white"
    >
      <div className="pointer-events-none absolute -right-40 top-1/2 h-[600px] w-[600px] -translate-y-1/2 rounded-full bg-[#b66900]/15 blur-[180px]" />
      <div className="pointer-events-none absolute -left-40 top-1/3 h-[500px] w-[500px] -translate-y-1/2 rounded-full bg-[#b66900]/10 blur-[160px]" />

      <Container className="relative z-10 mx-auto max-w-6xl px-4 lg:px-6">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-8">
          <div className="flex flex-col justify-between lg:col-span-5">
            <div>
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="mb-6 flex justify-start"
              >
                <Badge
                  variant="outline"
                  className="inline-flex items-center gap-2 rounded-full border border-[#b66900]/50 bg-black/40 px-8 py-4 text-sm font-normal text-[#f59e0b] backdrop-blur-md"
                >
                  <span className="h-2 w-2 rounded-full bg-[#f59e0b] shadow-[0_0_8px_#f59e0b]" />
                  How It Works
                </Badge>
              </motion.div>

              <h2 className="flex flex-col text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-[44px] lg:leading-[1.15]">
                <BlurText
                  text="Our Working"
                  delay={80}
                  animateBy="words"
                  direction="top"
                  className="text-3xl font-bold text-white sm:text-4xl lg:text-[44px] lg:leading-[1.15]"
                />
                <BlurText
                  text="Process"
                  delay={80}
                  animateBy="words"
                  direction="top"
                  className="text-3xl font-bold text-white sm:text-4xl lg:text-[44px] lg:leading-[1.15]"
                />
              </h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
                className="mt-6 max-w-md text-xs sm:text-sm leading-relaxed text-[#9e9e9e]"
              >
                A simple and efficient workflow to automate quality inspection using AI—from data capture to real-time decision making.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, ease: "easeOut", delay: 0.3 }}
                className="mt-8"
              >
                <Button
                  type="button"
                  className="h-12 rounded-full border-2 border-[#b66900] bg-[#b66900] px-8 text-sm font-semibold text-white shadow-lg transition-all duration-300 hover:bg-transparent hover:text-white active:scale-95"
                >
                  Explore System
                </Button>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="group relative mt-12 h-[320px] w-full overflow-hidden rounded-[24px] border border-white/10 bg-[#121212] sm:h-[380px] lg:mt-12 lg:h-[400px]"
            >
              <Image
                src="/images/work/image-work.png"
                alt="AI Working Process Visual"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
            </motion.div>
          </div>

          <div className="relative lg:col-span-7">
            <div className="absolute left-[19px] top-6 bottom-6 w-[2px] -translate-x-1/2 bg-[#333333] sm:left-5 lg:left-6" />

            <div className="flex flex-col space-y-6 sm:space-y-8">
              {steps.map((step, index) => {
                const IconComponent = step.icon;
                return (
                  <motion.div
                    key={step.number}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.15 }}
                    className="relative flex flex-row items-center gap-4 sm:gap-6"
                  >
                    <div className="z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#f59e0b] text-sm font-extrabold text-white shadow-[0_0_12px_rgba(245,158,11,0.4)] lg:h-12 lg:w-12 lg:text-base">
                      {step.number}
                    </div>

                    <div className="w-full flex-1 rounded-[20px] border border-[#b66900]/40 bg-black/60 p-5 backdrop-blur-sm transition-all duration-300 hover:border-[#f59e0b]/70 sm:p-7">
                      <div className="mb-3 flex items-center gap-3">
                        <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#b66900]/20 text-[#f59e0b]">
                          <IconComponent className="h-5 w-5" />
                        </div>
                        <h3 className="text-base font-bold text-white sm:text-xl">
                          {step.title}
                        </h3>
                      </div>
                      <p className="text-xs sm:text-sm leading-relaxed text-[#8e8e8e]">
                        {step.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default HowItWorksSection;