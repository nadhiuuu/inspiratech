"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/layouts/container";
import BlurText from "@/components/ui/blur-text";

export const CtaSection = () => {
  return (
    <section
      id="cta"
      className="relative z-10 overflow-hidden font-['Plus_Jakarta_Sans',sans-serif] bg-black py-16 lg:py-24 text-white"
    >
      <Container className="relative z-10 mx-auto max-w-6xl px-4 lg:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="relative aspect-[16/7] sm:aspect-[16/6.5] lg:aspect-[16/5.8] w-full overflow-hidden rounded-lg border border-white/10 p-6 sm:p-10 lg:p-14 flex items-center"
        >
          <Image
            src="/images/CTA/background2.png"
            alt="Improve Your Production Quality Background"
            fill
            priority
            sizes="(max-width: 1200px) 100vw, 1200px"
            className="object-cover object-center scale-110 sm:scale-100 lg:scale-110"
          />

          <div className="relative z-10 max-w-lg lg:max-w-2xl">
            <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl lg:text-[40px] lg:leading-[1.12]">
              <BlurText
                text="Improve Your"
                delay={80}
                animateBy="words"
                direction="top"
                className="block text-2xl font-medium text-white sm:text-3xl lg:text-6xl lg:leading-[1.12]"
              />
              <BlurText
                text="Production Quality"
                delay={80}
                animateBy="words"
                direction="top"
                className="block text-2xl font-medium text-white sm:text-3xl lg:text-6xl lg:leading-[1.12]"
              />
            </h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
              className="mt-4 text-xs leading-relaxed text-[#d1d1d1] sm:text-sm lg:text-lg"
            >
              Detect defects faster, reduce waste, and optimize production
              performance with an integrated AI powered inspection system.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: "easeOut", delay: 0.3 }}
              className="mt-6 flex flex-wrap items-center gap-3.5"
            >
              <Button
                type="button"
                className="h-10 rounded-full border border-[#c67000] bg-[#c67000] px-6 text-xs font-medium text-white shadow-md transition-all duration-300 hover:border-[#c67000] hover:bg-transparent hover:text-white active:scale-95 sm:h-11 sm:px-7 sm:text-sm"
              >
                Start Free Demo
              </Button>
              <Button
                type="button"
                variant="outline"
                className="h-10 rounded-full border border-[#c67000]/80 bg-transparent px-6 text-xs font-medium text-white backdrop-blur-sm transition-all duration-300 hover:border-[#c67000] hover:bg-[#c67000] hover:text-white active:scale-95 sm:h-11 sm:px-7 sm:text-sm"
              >
                Contact Us
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
};

export default CtaSection;