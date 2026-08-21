"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Container } from "@/components/layouts/container";
import BlurText from "@/components/ui/blur-text";

interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  avatar: string;
  rating: number;
}

const testimonialsData: Testimonial[] = [
  {
    id: "1",
    quote:
      "We've worked with many suppliers in the energy sector, but none match the consistency and professionalism we've experienced here. Their solutions are not only reliable—they're ahead of the curve.",
    author: "David Roberts",
    role: "Operations Manager",
    avatar: "/images/testimonials/avatar.jpg",
    rating: 5,
  },
  {
    id: "2",
    quote:
      "Implementing their Vision AI solution reduced our defect identification time by over 70%. The real-time accuracy and automated reporting have completely transformed our production pipeline.",
    author: "Sarah Jenkins",
    role: "Head of Quality Assurance",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80",
    rating: 5,
  },
  {
    id: "3",
    quote:
      "The seamless integration into our existing assembly line was impressive. We saw an immediate ROI within the first quarter, alongside a dramatic decrease in waste and manual errors.",
    author: "Michael Chen",
    role: "Chief Technology Officer",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
    rating: 5,
  },
];

// Varian animasi sesuai arah tombol
const slideVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 80 : -80,
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => ({
    x: direction < 0 ? 80 : -80,
    opacity: 0,
  }),
};

export const TestimonialSection = () => {
  const [[page, direction], setPage] = useState([0, 0]);

  // Kalkulasi index aktif agar looping lancar
  const currentIndex = Math.abs(page % testimonialsData.length);

  const handleNext = () => {
    setPage([page + 1, 1]); // Direction 1 = Geser dari Kanan ke Kiri
  };

  const handlePrev = () => {
    setPage([page - 1, -1]); // Direction -1 = Geser dari Kiri ke Kanan
  };

  const currentTestimonial = testimonialsData[currentIndex];

  return (
    <section
      id="testimonials"
      className="relative z-10 overflow-hidden bg-black font-['Plus_Jakarta_Sans',sans-serif] py-12 text-white sm:py-20 lg:py-32"
    >
      <div className="pointer-events-none absolute -left-40 top-1/2 h-[600px] w-[600px] -translate-y-1/2 rounded-full bg-[#b66900]/15 blur-[180px]" />
      <div className="pointer-events-none absolute -right-40 top-1/3 h-[500px] w-[500px] -translate-y-1/2 rounded-full bg-[#b66900]/10 blur-[160px]" />

      <Container className="relative z-10 mx-auto max-w-6xl px-4 lg:px-6">
        {/* Header Section */}
        <div className="grid grid-cols-1 items-start gap-4 lg:grid-cols-12 lg:gap-12">
          <div className="flex flex-col items-start text-left lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="mb-4 flex justify-start sm:mb-6"
            >
              <Badge
                variant="outline"
                className="inline-flex items-center gap-2 rounded-full border border-[#b66900]/50 bg-black/40 px-5 py-2.5 text-xs font-normal text-[#f59e0b] backdrop-blur-md sm:px-8 sm:py-4 sm:text-sm"
              >
                <span className="h-2 w-2 rounded-full bg-[#f59e0b] shadow-[0_0_8px_#f59e0b]" />
                Success Stories
              </Badge>
            </motion.div>

            <h2 className="max-w-2xl text-2xl font-bold tracking-tight text-white sm:text-4xl lg:text-[48px] lg:leading-[1.15]">
              <BlurText
                text="Whats Our Clients Say"
                delay={80}
                animateBy="words"
                direction="top"
                className="block text-2xl font-bold text-white sm:text-4xl lg:text-[48px] lg:leading-[1.15]"
              />
            </h2>
          </div>

          <div className="flex items-center lg:col-span-5 lg:pt-28">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: "easeOut", delay: 0.3 }}
              className="text-left text-xs leading-relaxed text-[#9e9e9e] sm:text-base"
            >
              Hear how our partners and clients trust us to power progress and deliver lasting impact.
            </motion.p>
          </div>
        </div>

        {/* Layout Utama */}
        <div className="mt-8 grid grid-cols-1 gap-8 sm:mt-12 lg:mt-16 lg:grid-cols-12 lg:gap-8">
          
          {/* GAMBAR STATIS (TIDAK BERUBAH) */}
          <div className="order-1 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-6 lg:order-2 lg:col-span-6 lg:justify-end">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="group relative h-[260px] w-full max-w-[282px] overflow-hidden rounded-[20px] border border-white/10 bg-[#121212] sm:h-[320px] sm:rounded-[24px] lg:mt-12 lg:h-[362px]"
            >
              <Image
                src="/images/testimonials/image-1.jpg"
                alt="Client Satisfaction Feedback"
                fill
                sizes="(max-width: 640px) 100vw, 282px"
                className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="group relative h-[260px] w-full max-w-[282px] overflow-hidden rounded-[20px] border border-white/10 bg-[#121212] sm:h-[320px] sm:rounded-[24px] lg:-mt-20 lg:h-[362px]"
            >
              <Image
                src="/images/testimonials/image-2.jpg"
                alt="Quality Assurance Guarantee"
                fill
                sizes="(max-width: 640px) 100vw, 282px"
                className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
            </motion.div>
          </div>

          {/* KOMEN + PROFIL + NAVIGASI (DINAMIS DENGAN ANIMASI DIRECTION) */}
          <div className="order-2 flex flex-col justify-between lg:order-1 lg:col-span-6">
            <div className="relative min-h-[260px] sm:min-h-[280px]">
              <div className="mb-4 sm:mb-6">
                <Quote className="h-8 w-8 fill-[#CFCFCF] text-[#CFCFCF] sm:h-10 sm:w-10" />
              </div>

              {/* AnimatePresence dengan custom direction */}
              <AnimatePresence mode="wait" custom={direction}>
                <motion.div
                  key={page}
                  custom={direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.35, ease: "easeInOut" }}
                >
                  {/* Komen Text */}
                  <p className="text-xs italic leading-relaxed text-[#d1d1d1] sm:text-base lg:text-lg">
                    &quot;{currentTestimonial.quote}&quot;
                  </p>

                  {/* Rating Bintang */}
                  <div className="mt-4 flex items-center gap-1 sm:mt-6">
                    {[...Array(currentTestimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-3.5 w-3.5 fill-[#f59e0b] text-[#f59e0b] sm:h-4 sm:w-4"
                      />
                    ))}
                  </div>

                  {/* Profile Client */}
                  <div className="mt-4 flex items-center gap-3 sm:mt-6 sm:gap-4">
                    <div className="relative h-10 w-10 flex-shrink-0 overflow-hidden rounded-full border border-white/20 sm:h-12 sm:w-12">
                      <Image
                        src={currentTestimonial.avatar}
                        alt={currentTestimonial.author}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-white sm:text-lg">
                        {currentTestimonial.author}
                      </h3>
                      <p className="text-[11px] text-[#8e8e8e] sm:text-sm">
                        {currentTestimonial.role}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Garis & Navigasi Tombol */}
            <div className="mt-8 flex items-center gap-4 sm:mt-12 sm:gap-6">
              <div className="h-[1px] flex-1 bg-[#333333]" />
              <div className="flex items-center gap-2 sm:gap-3">
                <button
                  type="button"
                  onClick={handlePrev}
                  aria-label="Previous testimonial"
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-black transition-all duration-300 hover:bg-white/80 active:scale-95 sm:h-10 sm:w-10"
                >
                  <ChevronLeft className="h-4 w-4 sm:h-5 sm:w-5" />
                </button>
                <button
                  type="button"
                  onClick={handleNext}
                  aria-label="Next testimonial"
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-[#f59e0b] text-black transition-all duration-300 hover:bg-[#b66900] hover:text-white active:scale-95 sm:h-10 sm:w-10"
                >
                  <ChevronRight className="h-4 w-4 sm:h-5 sm:w-5" />
                </button>
              </div>
            </div>
          </div>

        </div>
      </Container>
    </section>
  );
};

export default TestimonialSection;