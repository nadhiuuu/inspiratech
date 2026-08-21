"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

interface SplashScreenProps {
  onFinish?: () => void;
}

const BlurTextReveal = ({ text }: { text: string }) => {
  const words = text.split(" ");
  return (
    <h1 className="text-2xl font-bold tracking-tight text-white sm:text-4xl">
      {words.map((word, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0, filter: "blur(10px)", y: 10 }}
          animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
          transition={{
            duration: 0.8,
            delay: 0.2 + index * 0.2,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="inline-block"
        >
          {word === "Tech" ? (
            <span className="text-[#f59e0b] ml-0.5">{word}</span>
          ) : (
            word
          )}
        </motion.span>
      ))}
    </h1>
  );
};

const ShinySubtitle = ({ text }: { text: string }) => {
  return (
    <motion.p
      initial={{ opacity: 0, y: 5 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.8 }}
      className="relative text-xs uppercase tracking-[0.25em] text-[#a3a3a3] sm:text-sm"
    >
      <span
        className="inline-block bg-gradient-to-r from-neutral-500 via-neutral-100 to-neutral-500 bg-[length:200%_100%] bg-clip-text text-transparent animate-shiny-text"
        style={{ animationDuration: "3s" }}
      >
        {text}
      </span>
    </motion.p>
  );
};

export const SplashScreen = ({ onFinish }: SplashScreenProps) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      if (onFinish) {
        setTimeout(onFinish, 800);
      }
    }, 2800);

    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <AnimatePresence mode="wait">
      {isVisible && (
        <motion.div
          key="splash-screen"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: -20, filter: "blur(5px)" }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-black px-6 py-10 font-['Plus_Jakarta_Sans',sans-serif] text-white"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="pointer-events-none absolute left-1/2 top-1/2 h-[350px] w-[350px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#b66900]/15 blur-[130px] sm:h-[500px] sm:w-[500px] lg:h-[600px] lg:w-[600px] lg:blur-[160px]"
          />

          <div className="relative z-10 flex flex-col items-center gap-6 text-center sm:gap-8">
            <motion.div
              initial={{ scale: 0.5, opacity: 0, filter: "blur(10px)" }}
              animate={{ scale: 1, opacity: 1, filter: "blur(0px)" }}
              transition={{
                duration: 0.8,
                delay: 0.1,
                ease: [0.34, 1.56, 0.64, 1],
              }}
              className="relative flex h-20 w-20 items-center justify-center overflow-hidden rounded-[24px] border border-white/10 bg-black/40 p-4 backdrop-blur-2xl shadow-[0_0_40px_-5px_rgba(182,105,0,0.25)] sm:h-24 sm:w-24 sm:p-5"
            >
              <Image
                src="/images/Logo.svg" 
                alt="InspiraTech Logo"
                fill
                className="object-contain p-3"
                priority
              />
            </motion.div>

            <div className="flex flex-col items-center gap-2">
              <BlurTextReveal text="InspiraTech" />
              <ShinySubtitle text="Smart Industrial Quality Platform" />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
