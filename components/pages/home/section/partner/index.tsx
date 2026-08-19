"use client";

import Image from "next/image";

interface PartnerLogo {
  id: string;
  name: string;
  src: string;
}

const partners: PartnerLogo[] = [
  { id: "1", name: "jsfiddle", src: "/images/partners/jsfiddle-ar21.svg" },
  { id: "2", name: "katacoda", src: "/images/partners/katacoda-ar21.svg" },
  { id: "3", name: "opengl", src: "/images/partners/opengl-ar21.svg" },
  { id: "4", name: "replit", src: "/images/partners/replit-ar21.svg" },
  { id: "5", name: "spotify", src: "/images/partners/spotify-ar21.svg" },
  { id: "6", name: "klarna", src: "/images/partners/klarna-ar21.svg" },
  { id: "7", name: "letsencrypt", src: "/images/partners/letsencrypt-ar21.svg" },
  { id: "8", name: "acer", src: "/images/partners/acer-ar21.svg" },
  { id: "9", name: "bbt", src: "/images/partners/bbt-ar21.svg" },
  { id: "10", name: "grab", src: "/images/partners/grab-ar21.svg" },
];

export const PartnerSection = () => {
  const logoList = [...partners, ...partners];

  return (
    <section className="relative w-full overflow-hidden bg-black py-8 sm:py-5">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-black to-transparent sm:w-32" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-black to-transparent sm:w-32" />

      <div className="group flex w-full overflow-hidden">
        <div className="flex w-max shrink-0 animate-[marquee_60s_linear_infinite] items-center gap-4 pr-4 group-hover:[animation-play-state:paused] sm:gap-6 sm:pr-6">
          {logoList.map((partner, index) => (
            <div
              key={`set1-${partner.id}-${index}`}
              className="relative flex h-14 w-36 shrink-0 items-center justify-center opacity-60 transition-all duration-300 hover:scale-105 hover:opacity-100 sm:h-20 sm:w-52"
            >
              <Image
                src={partner.src}
                alt={partner.name}
                fill
                sizes="(max-width: 640px) 144px, 208px"
                className="object-contain p-2 grayscale invert transition-all duration-300 hover:grayscale-0 hover:invert-0"
                priority={index < 5}
              />
            </div>
          ))}
        </div>

        <div
          aria-hidden="true"
          className="flex w-max shrink-0 animate-[marquee_60s_linear_infinite] items-center gap-4 pr-4 group-hover:[animation-play-state:paused] sm:gap-6 sm:pr-6"
        >
          {logoList.map((partner, index) => (
            <div
              key={`set2-${partner.id}-${index}`}
              className="relative flex h-14 w-36 shrink-0 items-center justify-center opacity-60 transition-all duration-300 hover:scale-105 hover:opacity-100 sm:h-20 sm:w-52"
            >
              <Image
                src={partner.src}
                alt={partner.name}
                fill
                sizes="(max-width: 640px) 144px, 208px"
                className="object-contain p-2 grayscale invert transition-all duration-300 hover:grayscale-0 hover:invert-0"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnerSection;