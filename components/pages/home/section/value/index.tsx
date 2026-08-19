"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Container } from "@/components/layouts/container";
import BlurText from "@/components/ui/blur-text";

export const ValueSection = () => {
  return (
    <section
      id="value"
      className="relative z-10 overflow-hidden font-['Plus_Jakarta_Sans',sans-serif] bg-black py-20 lg:py-32 text-white"
    >
      <div className="pointer-events-none absolute -left-40 top-1/2 h-[600px] w-[600px] -translate-y-1/2 rounded-full bg-[#b66900]/20 blur-[180px]" />
      <div className="pointer-events-none absolute -right-40 top-1/2 h-[600px] w-[600px] -translate-y-1/2 rounded-full bg-[#b66900]/15 blur-[180px]" />

      <Container className="relative z-10 mx-auto max-w-6xl px-4 lg:px-6">
        <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-12 lg:gap-12">
          <div className="flex flex-col items-start text-left lg:col-span-7">
            <h2 className="max-w-2xl text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-[48px] lg:leading-[1.15]">
              <BlurText
                text="Deliver Measurable"
                delay={80}
                animateBy="words"
                direction="top"
                className="block text-3xl font-bold text-white sm:text-4xl lg:text-[48px] lg:leading-[1.15]"
              />
              <BlurText
                text="Impact Your Production"
                delay={80}
                animateBy="words"
                direction="top"
                className="block text-3xl font-bold text-white sm:text-4xl lg:text-[48px] lg:leading-[1.15]"
              />
            </h2>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
              className="mt-6 flex justify-start"
            >
              <Badge
                variant="outline"
                className="inline-flex items-center gap-2 rounded-full border border-[#b66900]/50 bg-black/40 px-8 py-4 text-sm font-normal text-[#f59e0b] backdrop-blur-md"
              >
                <span className="h-2 w-2 rounded-full bg-[#f59e0b] shadow-[0_0_8px_#f59e0b]" />
                Why It Matters
              </Badge>
            </motion.div>
          </div>

          <div className="flex items-center lg:col-span-5 lg:pt-18">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: "easeOut", delay: 0.3 }}
              className="text-xs text-left leading-relaxed text-[#9e9e9e] sm:text-base"
            >
              Improve efficiency, reduce defects, and maintain consistent
              quality with AI-driven inspection designed for modern
              manufacturing environments.
            </motion.p>
          </div>
        </div>

        <div className="mt-12 grid grid-cols-1 items-start gap-6 md:grid-cols-12 lg:mt-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="group relative h-[380px] w-full overflow-hidden rounded-[24px] border border-white/10 bg-[#121212] sm:h-[420px] md:col-span-5 lg:h-[460px]"
          >
            <Image
              src="/images/value/image-1.png"
              alt="Container Visual Inspection"
              fill
              sizes="(max-width: 768px) 100vw, 40vw"
              className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="group relative h-[220px] w-full overflow-hidden rounded-[24px] border border-white/10 bg-[#121212] sm:h-[380px] md:col-span-7 md:mt-16 lg:h-[380px] lg:mt-20"
          >
            <Image
              src="/images/value/image-2.svg"
              alt="Conveyor Box Line"
              fill
              sizes="(max-width: 768px) 100vw, 60vw"
              className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
          </motion.div>
        </div>
      </Container>
    </section>
  );
};

export default ValueSection;
