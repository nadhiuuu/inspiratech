"use client";

import { useState, useEffect } from "react";
import { SplashScreen } from "@/components/ui/splash-screen";

export function AppWrapper({ children }: { children: React.ReactNode }) {
  const [isLoading, setIsLoading] = useState(true);

  // Kunci scroll body saat splash screen berjalan
  useEffect(() => {
    if (isLoading) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isLoading]);

  return (
    <>
      {isLoading && <SplashScreen onFinish={() => setIsLoading(false)} />}
      <div
        className={
          isLoading
            ? "opacity-0 pointer-events-none"
            : "opacity-100 transition-opacity duration-700 flex flex-col min-h-full"
        }
      >
        {children}
      </div>
    </>
  );
}