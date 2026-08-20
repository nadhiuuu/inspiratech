"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Container } from "@/components/layouts/container";

export const Footer = () => {
  return (
    <footer className="relative border-t border-white/10 bg-black font-['Plus_Jakarta_Sans',sans-serif] text-white">
      <Container className="mx-auto max-w-6xl px-4 py-10 sm:py-12 lg:px-6 lg:py-16">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-12 lg:gap-8">
          {/* Section Brand / Logo */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="flex flex-col gap-5 sm:gap-6 lg:col-span-4"
          >
            <Link href="/" className="flex items-center gap-3">
              <Image
                src="/images/Logo.svg"
                alt="InspiraTech Logo"
                width={36}
                height={36}
                className="h-8 w-8 sm:h-9 sm:w-9 object-contain"
              />
              <span className="text-xl sm:text-2xl font-semibold tracking-tight text-white">
                InspiraTech
              </span>
            </Link>

            <p className="max-w-sm text-xs sm:text-sm leading-relaxed text-[#a1a1a1]">
              AI-powered quality inspection system to improve accuracy and
              efficiency in manufacturing.
            </p>

            <div className="flex items-center gap-3 pt-1 sm:pt-2">
              <Link
                href="https://x.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-full bg-[#c67000] text-black transition-all duration-300 hover:scale-105 hover:bg-[#d87a00]"
                aria-label="Twitter / X"
              >
                <svg
                  className="h-4 w-4 fill-current"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </Link>

              <Link
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-full bg-[#c67000] text-black transition-all duration-300 hover:scale-105 hover:bg-[#d87a00]"
                aria-label="LinkedIn"
              >
                <svg
                  className="h-4 w-4 fill-current"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </Link>

              <Link
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-full bg-[#c67000] text-black transition-all duration-300 hover:scale-105 hover:bg-[#d87a00]"
                aria-label="YouTube"
              >
                <svg
                  className="h-4 w-4 fill-current"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </Link>
            </div>
          </motion.div>

          {/* Section Navigation Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
            className="grid grid-cols-2 gap-x-6 gap-y-8 sm:grid-cols-3 lg:col-span-8"
          >
            {/* Column 1 */}
            <div className="flex flex-col gap-3 sm:gap-4">
              <Link
                href="/"
                className="text-sm sm:text-base font-medium text-white transition-colors duration-200 hover:text-[#c67000]"
              >
                Homepage
              </Link>
              <Link
                href="/solutions"
                className="text-sm sm:text-base font-medium text-white transition-colors duration-200 hover:text-[#c67000]"
              >
                Solutions
              </Link>
              <Link
                href="/pricing"
                className="text-sm sm:text-base font-medium text-white transition-colors duration-200 hover:text-[#c67000]"
              >
                Pricing
              </Link>
              <Link
                href="/about-and-tech"
                className="text-sm sm:text-base font-medium text-white transition-colors duration-200 hover:text-[#c67000]"
              >
                About and Tech
              </Link>
            </div>

            {/* Column 2 */}
            <div className="flex flex-col gap-3 sm:gap-4">
              <Link
                href="/automotive-inspection"
                className="text-sm sm:text-base font-medium text-white transition-colors duration-200 hover:text-[#c67000]"
              >
                Automotive Inspection
              </Link>
              <Link
                href="/food-quality-control"
                className="text-sm sm:text-base font-medium text-white transition-colors duration-200 hover:text-[#c67000]"
              >
                Food Quality Control
              </Link>
              <Link
                href="/defect-detection"
                className="text-sm sm:text-base font-medium text-white transition-colors duration-200 hover:text-[#c67000]"
              >
                Defect Detection
              </Link>
              <Link
                href="/visual-inspection-ai"
                className="text-sm sm:text-base font-medium text-white transition-colors duration-200 hover:text-[#c67000]"
              >
                Visual Inspection AI
              </Link>
            </div>

            {/* Column 3 */}
            <div className="col-span-2 sm:col-span-1 flex flex-col gap-3 sm:gap-4">
              <Link
                href="/about-us"
                className="text-sm sm:text-base font-medium text-white transition-colors duration-200 hover:text-[#c67000]"
              >
                About Us
              </Link>
              <Link
                href="/our-team"
                className="text-sm sm:text-base font-medium text-white transition-colors duration-200 hover:text-[#c67000]"
              >
                Our Team
              </Link>
              <Link
                href="/careers"
                className="text-sm sm:text-base font-medium text-white transition-colors duration-200 hover:text-[#c67000]"
              >
                Careers
              </Link>
              <Link
                href="/case-studies"
                className="text-sm sm:text-base font-medium text-white transition-colors duration-200 hover:text-[#c67000]"
              >
                Case Studies
              </Link>
            </div>
          </motion.div>
        </div>
      </Container>

      {/* Bottom Bar */}
      <div className="border-t border-[#3a2000] bg-[#221200] py-4 text-xs font-normal text-[#d1d1d1]">
        <Container className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-4 sm:flex-row lg:px-6">
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
            <Link
              href="/privacy-policy"
              className="transition-colors duration-200 hover:text-white"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms-of-service"
              className="transition-colors duration-200 hover:text-white"
            >
              Terms of Service
            </Link>
          </div>

          <p className="text-center font-sans sm:text-right">© 2026 InspiraTech</p>
        </Container>
      </div>
    </footer>
  );
};

export default Footer;