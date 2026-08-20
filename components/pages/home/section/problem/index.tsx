"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Container } from "@/components/layouts/container";
import { Badge } from "@/components/ui/badge";
import BlurText from "@/components/ui/blur-text";

interface ProblemCard {
  id: string;
  title: string;
  image: string;
}

const problems: ProblemCard[] = [
  {
    id: "1",
    title: "Human error",
    image: "/images/problems/human-error.jpg",
  },
  {
    id: "2",
    title: "Limited detection",
    image: "/images/problems/limited-detection.jpg",
  },
  {
    id: "3",
    title: "Inconsistent output",
    image: "/images/problems/inconsistent-output.jpg",
  },
  {
    id: "4",
    title: "High operational costs",
    image: "/images/problems/high-operational-costs.jpg",
  },
];

export const ProblemSection = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const handleScroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const cardWidth = window.innerWidth < 1024 ? container.clientWidth : 344;
      const scrollAmount = direction === "left" ? -cardWidth : cardWidth;

      container.scrollBy({
        left: scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="relative z-10 w-full overflow-hidden bg-black py-16 font-['Plus_Jakarta_Sans',sans-serif] lg:py-24">
      <div className="pointer-events-none absolute right-[-5%] top-[10%] h-[350px] w-[350px] rounded-full bg-[#b66900]/25 blur-[120px] lg:h-[500px] lg:w-[500px]" />

      <Container className="mx-auto max-w-6xl px-4 lg:px-8">
        <div className="grid grid-cols-1 gap-y-6 lg:grid-cols-12 lg:gap-x-8">
          {/* Badge Problem Header */}
          <div className="lg:col-span-2 xl:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <Badge
                variant="outline"
                className="inline-flex items-center gap-2 rounded-full border border-[#b66900]/50 bg-black/40 px-8 py-4 text-sm font-normal text-[#f59e0b] backdrop-blur-md"
              >
                <span className="h-2 w-2 rounded-full bg-[#f59e0b] shadow-[0_0_8px_#f59e0b]" />
                Problem
              </Badge>
            </motion.div>
          </div>

          <div className="flex flex-col lg:col-span-10 xl:col-span-10">
            <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
              <h2 className="max-w-2xl text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-[44px] lg:leading-[1.18]">
                <BlurText
                  text="Quality Control Still Relies on Manual Work"
                  delay={100}
                  animateBy="words"
                  direction="top"
                  className="max-w-2xl text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-[44px] lg:leading-[1.18]"
                />
              </h2>

              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 10 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
                className="flex items-center gap-2.5 self-end sm:self-auto"
              >
                <button
                  type="button"
                  onClick={() => handleScroll("left")}
                  aria-label="Previous slide"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-[#eae3d2] text-black transition-all duration-300 hover:bg-white active:scale-95"
                >
                  <ChevronLeft className="h-5 w-5 stroke-[2.5]" />
                </button>
                <button
                  type="button"
                  onClick={() => handleScroll("right")}
                  aria-label="Next slide"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-[#b66900] text-white transition-all duration-300 hover:bg-[#d97706] active:scale-95"
                >
                  <ChevronRight className="h-5 w-5 stroke-[2.5]" />
                </button>
              </motion.div>
            </div>
          </div>

          {/* Full-width Carousel spanning across col-span-12 */}
          <div className="mt-10 lg:col-span-12 lg:mt-12">
            <div
              ref={scrollContainerRef}
              className="no-scrollbar flex w-full snap-x snap-mandatory gap-6 overflow-x-auto scroll-smooth pb-4 pl-0 lg:snap-none lg:pl-[calc(100%/12*2+0.5rem)]"
            >
              {problems.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.12 }}
                  className="flex shrink-0 snap-center flex-col items-center gap-4 lg:snap-align-none lg:items-start"
                >
                  <div className="relative h-[290px] w-[270px] overflow-hidden rounded-[28px] sm:h-[330px] sm:w-[300px] lg:h-[350px] lg:w-[320px]">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      sizes="(max-width: 640px) 270px, (max-width: 1024px) 300px, 320px"
                      className="object-cover transition-transform duration-700 hover:scale-105"
                    />
                  </div>

                  <h3 className="text-center text-lg font-medium text-[#e5e5e5] sm:text-xl">
                    {item.title}
                  </h3>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ProblemSection;