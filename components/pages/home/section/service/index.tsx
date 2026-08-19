"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Container } from "@/components/layouts/container";
import BlurText from "@/components/ui/blur-text";

const services = [
  {
    id: 1,
    title: "Live Camera",
    description: "Real-time video feed monitoring with low-latency camera integration to stream high-quality visual data.",
    image: "/images/services/live-camera.jpg",
  },
  {
    id: 2,
    title: "AI Detection",
    description: "Advanced models analyze each image in real-time to identify defects with pinpoint precision.",
    image: "/images/services/ai-detection.jpg",
  },
  {
    id: 3,
    title: "Instant Decision",
    description: "Automated trigger system for quick sorting and immediate response based on real-time visual inspection.",
    image: "/images/services/instant-decision.jpg",
  },
];

export const ServicesSection = () => {
  const [hoveredId, setHoveredId] = useState<number | null>(2);

  return (
    <section
      id="solution"
      className="relative z-10 overflow-hidden font-['Plus_Jakarta_Sans',sans-serif] bg-black py-16 lg:py-24"
    >
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[450px] w-[450px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#b66900]/15 blur-[140px]" />

      <Container className="relative z-10 mx-auto max-w-6xl px-4 lg:px-6">
        <div className="flex flex-col items-center text-center">
          
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="mb-6 flex justify-center"
          >
            <Badge
              variant="outline"
              className="inline-flex items-center gap-2 rounded-full border border-[#b66900]/50 bg-black/40 px-8 py-4 text-sm font-normal text-[#f59e0b] backdrop-blur-md"
            >
              <span className="h-2 w-2 rounded-full bg-[#f59e0b] shadow-[0_0_8px_#f59e0b]" />
              Services
            </Badge>
          </motion.div>

          <h2 className="max-w-3xl text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-[48px] lg:leading-[1.2]">
            <BlurText
              text="AI–Powered Inspection, Built for Speed and Precision"
              delay={80}
              animateBy="words"
              direction="top"
              className="text-3xl font-bold text-white sm:text-4xl lg:text-[48px] lg:leading-[1.2]"
            />
          </h2>

          <div className="mt-12 mb-8 flex w-full items-center justify-between text-base text-[#888888]">
            <button
              type="button"
              className="transition-colors hover:text-white"
            >
              Previous
            </button>
            <div className="mx-6 h-[1px] flex-1 bg-gradient-to-r from-transparent via-[#333333] to-transparent" />
            <button
              type="button"
              className="transition-colors hover:text-white"
            >
              Next
            </button>
          </div>

          <div className="grid w-full grid-cols-1 gap-6 md:grid-cols-3">
            {services.map((service) => {
              const isHovered = hoveredId === service.id;

              return (
                <motion.div
                  key={service.id}
                  onMouseEnter={() => setHoveredId(service.id)}
                  onMouseLeave={() => setHoveredId(null)}
                  initial={false}
                  animate={{
                    y: isHovered ? -6 : 0,
                  }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  className="group relative h-[380px] w-full cursor-pointer overflow-hidden rounded-[24px] border border-white/10 bg-[#121212] sm:h-[420px]"
                >
                  <motion.div
                    className="relative h-full w-full"
                    animate={{ scale: isHovered ? 1.06 : 1 }}
                    transition={{ duration: 0.6, ease: [0.25, 1, 0.5, 1] }}
                  >
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover object-center"
                    />
                  </motion.div>

                  <motion.div
                    className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent"
                    animate={{
                      opacity: isHovered ? 0.9 : 0.6,
                    }}
                    transition={{ duration: 0.3 }}
                  />

                  <div className="absolute top-4 right-4 z-20">
                    <motion.div
                      animate={{
                        scale: isHovered ? 1.1 : 1,
                      }}
                      transition={{ duration: 0.2 }}
                      className="flex h-10 w-10 items-center justify-center rounded-full bg-[#b66900] text-white shadow-lg"
                    >
                      {isHovered ? (
                        <ArrowUpRight className="h-5 w-5" />
                      ) : (
                        <ArrowRight className="h-5 w-5" />
                      )}
                    </motion.div>
                  </div>

                  <div className="absolute bottom-6 left-6 right-6 z-20 text-left">
                    <h3 className="text-xl font-bold text-white sm:text-2xl">
                      {service.title}
                    </h3>

                    <AnimatePresence>
                      {isHovered && (
                        <motion.div
                          initial={{ opacity: 0, height: 0, marginTop: 0 }}
                          animate={{ opacity: 1, height: "auto", marginTop: 8 }}
                          exit={{ opacity: 0, height: 0, marginTop: 0 }}
                          transition={{ duration: 0.3, ease: "easeInOut" }}
                          className="overflow-hidden"
                        >
                          <p className="text-xs leading-relaxed text-[#d4d4d4] sm:text-sm">
                            {service.description}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </motion.div>
              );
            })}
          </div>

          <div className="mt-12 flex justify-center">
            <Button
              type="button"
              className="h-12 rounded-full border-2 border-[#b66900] bg-[#b66900] px-8 text-sm font-semibold text-white shadow-lg transition-all duration-300 hover:bg-transparent hover:text-white active:scale-95"
            >
              All Services
            </Button>
          </div>

        </div>
      </Container>
    </section>
  );
};

export default ServicesSection;