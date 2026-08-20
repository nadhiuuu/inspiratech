"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Container } from "@/components/layouts/container";
import BlurText from "@/components/ui/blur-text";

export const TestimonialSection = () => {
  return (
    <section
      id="testimonials"
      className="relative z-10 overflow-hidden font-['Plus_Jakarta_Sans',sans-serif] bg-black py-20 lg:py-32 text-white"
    >
      <div className="pointer-events-none absolute -left-40 top-1/2 h-[600px] w-[600px] -translate-y-1/2 rounded-full bg-[#b66900]/15 blur-[180px]" />
      <div className="pointer-events-none absolute -right-40 top-1/3 h-[500px] w-[500px] -translate-y-1/2 rounded-full bg-[#b66900]/10 blur-[160px]" />

      <Container className="relative z-10 mx-auto max-w-6xl px-4 lg:px-6">
        <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-12 lg:gap-12">
          <div className="flex flex-col items-start text-left lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
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
                Success Stories
              </Badge>
            </motion.div>

            <h2 className="max-w-2xl text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-[48px] lg:leading-[1.15]">
              <BlurText
                text="Whats Our Clients Say"
                delay={80}
                animateBy="words"
                direction="top"
                className="block text-3xl font-bold text-white sm:text-4xl lg:text-[48px] lg:leading-[1.15]"
              />
            </h2>
          </div>

          <div className="flex items-center lg:col-span-5 lg:pt-28">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: "easeOut", delay: 0.3 }}
              className="text-xs text-left leading-relaxed text-[#9e9e9e] sm:text-base"
            >
              Hear how our partners and clients trust us to power progress and deliver lasting impact.
            </motion.p>
          </div>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-8 lg:mt-16">
          <div className="flex flex-col justify-between lg:col-span-6">
            <div>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
                className="mb-6"
              >
                <Quote className="h-10 w-10 text-[#CFCFCF] fill-[#CFCFCF]" />
              </motion.div>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-sm italic leading-relaxed text-[#d1d1d1] sm:text-base lg:text-lg"
              >
                &quot;We&apos;ve worked with many suppliers in the energy sector, but none match the consistency and professionalism we&apos;ve experienced here. Their solutions are not only reliable—they&apos;re ahead of the curve.&quot;
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="mt-6 flex items-center gap-1"
              >
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-4 w-4 fill-[#f59e0b] text-[#f59e0b]"
                  />
                ))}
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="mt-6 flex items-center gap-4"
              >
                <div className="relative h-12 w-12 overflow-hidden rounded-full border border-white/20">
                  <Image
                    src="/images/testimonials/avatar.jpg"
                    alt="David Roberts"
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-base font-bold text-white sm:text-lg">
                    David Roberts
                  </h3>
                  <p className="text-xs text-[#8e8e8e] sm:text-sm">
                    Operations Manager
                  </p>
                </div>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mt-12 flex items-center gap-6"
            >
              <div className="h-[1px] flex-1 bg-[#333333]" />
              <div className="flex items-center gap-3">
                <button
                  type="button"
                  aria-label="Previous testimonial"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-black transition-all duration-300 hover:bg-white/80 active:scale-95"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>
                <button
                  type="button"
                  aria-label="Next testimonial"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-[#f59e0b] text-black transition-all duration-300 hover:bg-[#b66900] hover:text-white active:scale-95"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
              </div>
            </motion.div>
          </div>

          <div className="flex flex-col items-center justify-center gap-6 sm:flex-row lg:col-span-6 lg:justify-end">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="group relative h-[362px] w-full max-w-[282px] overflow-hidden rounded-[24px] border border-white/10 bg-[#121212] lg:mt-12"
            >
              <Image
                src="/images/testimonials/image-1.jpg"
                alt="Client Satisfaction Feedback"
                fill
                sizes="282px"
                className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="group relative h-[362px] w-full max-w-[282px] overflow-hidden rounded-[24px] border border-white/10 bg-[#121212] lg:-mt-20"
            >
              <Image
                src="/images/testimonials/image-2.jpg"
                alt="Quality Assurance Guarantee"
                fill
                sizes="282px"
                className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
            </motion.div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default TestimonialSection;