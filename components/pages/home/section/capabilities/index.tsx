"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Container } from "@/components/layouts/container";
import BlurText from "@/components/ui/blur-text";

const capabilities = [
  {
    number: "01",
    title: "Live Monitoring",
    description: "Monitor inspection processes in real-time with continuous visual feedback from the production line.",
    image: "/images/capabilities/live-monitoring.jpg",
    imagePosition: "right",
    rotateDeg: 4,
  },
  {
    number: "02",
    title: "Quality Analytics",
    description: "In response to increasing domestic energy demand, we led a critical upgrade of the Delta Refinery's processing units.",
    image: "/images/capabilities/quality-analytics.jpg",
    imagePosition: "left",
    rotateDeg: -4,
  },
  {
    number: "03",
    title: "Seamless System Integration",
    description: "Supporting remote drilling operations in the dense Borneo interior, we established a resilient fuel and logistics network.",
    image: "/images/capabilities/seamless-system-integration.jpg",
    imagePosition: "right",
    rotateDeg: 4,
  },
];

export const KeyCapabilitiesSection = () => {
  return (
    <section
      id="capabilities"
      className="relative z-10 overflow-hidden font-['Plus_Jakarta_Sans',sans-serif] bg-black py-20 lg:py-32 text-white"
    >
      <div className="pointer-events-none absolute left-1/2 top-1/3 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#b66900]/15 blur-[160px]" />

      <Container className="relative z-10 mx-auto max-w-5xl px-4 lg:px-6">
        <div className="flex flex-col items-start text-left sm:items-center sm:text-center">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="mb-6 flex justify-start sm:justify-center"
          >
            <Badge
              variant="outline"
              className="inline-flex items-center gap-2 rounded-full border border-[#b66900]/50 bg-black/40 px-8 py-4 text-sm font-normal text-[#f59e0b] backdrop-blur-md"
            >
              <span className="h-2 w-2 rounded-full bg-[#f59e0b] shadow-[0_0_8px_#f59e0b]" />
              Key Capabilities
            </Badge>
          </motion.div>

          <h2 className="max-w-3xl text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-[44px] lg:leading-[1.2]">
            <BlurText
              text="Smarter Quality Control with AI"
              delay={80}
              animateBy="words"
              direction="top"
              className="text-3xl font-bold text-white sm:text-4xl lg:text-[44px] lg:leading-[1.2]"
            />
          </h2>

          <p className="mt-4 max-w-xl text-xs sm:text-sm leading-relaxed text-[#9e9e9e] text-left sm:text-center">
            Monitor, detect, and optimize inspection in real-time with a powerful AI-driven system.
          </p>
        </div>

        <div className="mt-16 flex flex-col space-y-12 lg:space-y-16">
          {capabilities.map((item, index) => (
            <div key={item.number} className="flex flex-col">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="group grid grid-cols-1 items-center gap-8 md:grid-cols-12 cursor-pointer"
              >
                {item.imagePosition === "left" && (
                  <div className="order-2 md:order-1 md:col-span-4 lg:col-span-4">
                    <motion.div
                      whileHover={{
                        rotate: item.rotateDeg,
                        scale: 1.03,
                      }}
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 20,
                      }}
                      className="relative h-[180px] w-full overflow-hidden rounded-[20px] sm:h-[200px]"
                    >
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 33vw"
                        className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                      />
                    </motion.div>
                  </div>
                )}

                <div
                  className={`order-1 flex flex-col justify-center space-y-2 text-left md:col-span-8 lg:col-span-8 ${
                    item.imagePosition === "left"
                      ? "md:order-2 md:pl-6 text-left md:text-right"
                      : "md:order-1 md:pr-6"
                  }`}
                >
                  <div
                    className={`flex items-baseline space-x-4 ${
                      item.imagePosition === "left" ? "md:flex-row-reverse md:space-x-reverse" : "flex-row"
                    }`}
                  >
                    <span className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white transition-colors duration-300 group-hover:text-[#f59e0b]">
                      {item.number}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold text-white transition-colors duration-300 group-hover:text-[#f59e0b]">
                      {item.title}
                    </h3>
                  </div>

                  <p
                    className={`text-xs sm:text-sm leading-relaxed text-[#8e8e8e] max-w-lg transition-colors duration-300 group-hover:text-[#d4d4d4] ${
                      item.imagePosition === "left" ? "md:ml-auto" : ""
                    }`}
                  >
                    {item.description}
                  </p>
                </div>

                {item.imagePosition === "right" && (
                  <div className="order-2 md:order-2 md:col-span-4 lg:col-span-4">
                    <motion.div
                      whileHover={{
                        rotate: item.rotateDeg,
                        scale: 1.03,
                      }}
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 20,
                      }}
                      className="relative h-[180px] w-full overflow-hidden rounded-[20px] sm:h-[200px]"
                    >
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 33vw"
                        className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                      />
                    </motion.div>
                  </div>
                )}
              </motion.div>

              {index < capabilities.length - 1 && (
                <div className="mt-12 h-[1px] w-full bg-[#222222]" />
              )}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default KeyCapabilitiesSection;