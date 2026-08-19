"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Container } from "@/components/layouts/container";
import { cn } from "@/lib/utils";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "Solution", href: "#solution" },
  { label: "Pricing", href: "#pricing" },
  { label: "About", href: "#about" },
];

const navLinkClass = (active = false) =>
  cn(
    "relative rounded-none px-0 py-0 text-sm md:text-base leading-relaxed font-medium text-white/80 transition-colors hover:bg-transparent hover:text-white focus:bg-transparent focus:text-white focus-visible:outline-none",
    active &&
      "font-bold text-white after:absolute after:-bottom-1 after:left-0 after:right-0 after:h-[2px] after:bg-white"
  );

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  // Deteksi scroll untuk memberikan efek background transparan & border tipis
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 py-3 transition-all duration-300 font-['Plus_Jakarta_Sans',sans-serif]",
        isScrolled
          ? "border-b border-white/10 bg-black/60 backdrop-blur-md py-2.5 shadow-lg shadow-black/20"
          : "bg-transparent py-3.5"
      )}
    >
      <Container className="mx-auto max-w-6xl px-4 lg:px-6">
        <div className="flex items-center justify-between gap-4 text-left text-white">
          <Link
            href="#home"
            className="flex shrink-0 items-center gap-2 sm:gap-3"
            aria-label="InspiraTech home"
          >
            <Image
              src="/images/Logo.svg"
              alt="InspiraTech"
              width={40}
              height={40}
              priority
              className="h-7 w-7 sm:h-9 sm:w-9 object-contain"
            />
            <b className="text-lg sm:text-xl font-bold tracking-tight">
              InspiraTech
            </b>
          </Link>
          <NavigationMenu viewport={false} className="hidden lg:flex">
            <NavigationMenuList className="gap-6 xl:gap-12">
              {navItems.map((item, index) => (
                <NavigationMenuItem key={item.href}>
                  <NavigationMenuLink
                    asChild
                    className={navLinkClass(index === 0)}
                  >
                    <Link href={item.href}>{item.label}</Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
          <div className="hidden lg:block">
            <Button
              type="button"
              className="h-10 sm:h-11 rounded-full bg-[#b66900] px-5 xl:px-8 text-sm xl:text-base font-semibold text-white shadow-md transition-all hover:bg-[#b66900]/90 active:scale-95"
            >
              Contact Us
            </Button>
          </div>
          <Sheet>
            <SheetTrigger asChild>
              <Button
                type="button"
                variant="ghost"
                size="icon"
                className="h-9 w-9 text-white hover:bg-white/10 hover:text-white lg:hidden"
                aria-label="Open navigation menu"
              >
                <Menu className="h-5 w-5" aria-hidden="true" />
              </Button>
            </SheetTrigger>
            
            <SheetContent
              side="right"
              className="w-[260px] sm:w-[320px] border-l border-white/10 bg-[#0d0d0d] text-white p-6"
            >
              <SheetHeader className="p-0 text-left">
                <SheetTitle className="text-lg font-bold text-white">
                  InspiraTech
                </SheetTitle>
              </SheetHeader>
              
              <nav
                className="mt-6 flex flex-col gap-2"
                aria-label="Mobile navigation"
              >
                {navItems.map((item, index) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={cn(
                      "rounded-lg px-3 py-2 text-sm font-medium text-white/80 transition-colors hover:bg-white/10 hover:text-white",
                      index === 0 && "font-bold text-white bg-white/5"
                    )}
                  >
                    {item.label}
                  </Link>
                ))}
                
                <Button
                  type="button"
                  className="mt-4 h-10 w-full rounded-full bg-[#b66900] text-sm font-semibold text-white transition-all hover:bg-[#b66900]/90 active:scale-95"
                >
                  Contact Us
                </Button>
              </nav>
            </SheetContent>
          </Sheet>

        </div>
      </Container>
    </header>
  );
};

export default Navbar;