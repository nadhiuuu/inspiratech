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
];

export const PartnerSection = () => {
  const logoList = [...partners, ...partners, ...partners];

  return (
    <section className="relative w-full overflow-hidden bg-black py-12 sm:py-8">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-black to-transparent sm:w-40" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-black to-transparent sm:w-40" />

      <div className="group flex w-full overflow-hidden">
        <div className="flex w-max shrink-0 animate-[marquee_30s_linear_infinite] items-center gap-10 pr-10 group-hover:[animation-play-state:paused] sm:gap-16 sm:pr-16">
          {logoList.map((partner, index) => (
            <div
              key={`set1-${partner.id}-${index}`}
              className="relative flex h-14 w-44 shrink-0 items-center justify-center opacity-70 grayscale contrast-200 brightness-200 transition-all duration-300 hover:scale-110 hover:opacity-100 hover:grayscale-0 sm:h-20 sm:w-60"
            >
              <Image
                src={partner.src}
                alt={partner.name}
                fill
                sizes="(max-width: 640px) 176px, 240px"
                className="object-contain p-2"
                priority={index < 5}
              />
            </div>
          ))}
        </div>

        <div
          aria-hidden="true"
          className="flex w-max shrink-0 animate-[marquee_30s_linear_infinite] items-center gap-10 pr-10 group-hover:[animation-play-state:paused] sm:gap-16 sm:pr-16"
        >
          {logoList.map((partner, index) => (
            <div
              key={`set2-${partner.id}-${index}`}
              className="relative flex h-14 w-44 shrink-0 items-center justify-center opacity-70 grayscale contrast-200 brightness-200 transition-all duration-300 hover:scale-110 hover:opacity-100 hover:grayscale-0 sm:h-20 sm:w-60"
            >
              <Image
                src={partner.src}
                alt={partner.name}
                fill
                sizes="(max-width: 640px) 176px, 240px"
                className="object-contain p-2"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnerSection;