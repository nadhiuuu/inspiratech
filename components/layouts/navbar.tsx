"use client";

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
    "relative rounded-none px-0 py-0 text-base leading-[1.75] font-medium text-white/90 transition-colors hover:bg-transparent hover:text-white focus:bg-transparent focus:text-white focus-visible:ring-2 focus-visible:ring-ring",
    active &&
      "font-bold text-white after:absolute after:-bottom-1 after:left-0 after:right-0 after:h-[2px] after:bg-white",
  );

export const Navbar = () => {
  return (
    <header className="relative z-20 py-5 sm:py-[34px] font-['Plus_Jakarta_Sans',sans-serif]">
      <Container className="mx-auto max-w-6xl  px-4 lg:px-6">
        <div className="flex items-center justify-between gap-4 text-left text-white">
          <Link
            href="#home"
            className="flex shrink-0 items-center gap-2.5 sm:gap-[12px]"
            aria-label="InspiraTech home"
          >
            <Image
              src="/images/Logo.svg"
              alt="InspiraTech"
              width={48}
              height={47}
              priority
              className="h-9 w-9 sm:h-[47px] sm:w-[48px] object-contain"
            />
            <b className="text-xl sm:text-2xl leading-[1.75]">InspiraTech</b>
          </Link>

          {/* Desktop Navigation */}
          <NavigationMenu viewport={false} className="hidden lg:flex">
            <NavigationMenuList className="gap-8 xl:gap-[64px]">
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

          {/* Desktop CTA Button */}
          <div className="hidden lg:block">
            <Button
              type="button"
              className="h-auto rounded-full bg-[#b66900] px-6 xl:px-[40px] py-[12px] text-lg xl:text-xl font-semibold leading-[1.75] text-white shadow-[0px_0px_80px_rgba(255,255,255,0.12)] transition-all hover:bg-[#b66900]/90"
            >
              Contact Us
            </Button>
          </div>

          {/* Mobile & Tablet Drawer Trigger */}
          <Sheet>
            <SheetTrigger asChild>
              <Button
                type="button"
                variant="ghost"
                size="icon"
                className="text-white hover:bg-white/10 hover:text-white lg:hidden"
                aria-label="Open navigation menu"
              >
                <Menu className="h-6 w-6" aria-hidden="true" />
              </Button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="w-[280px] sm:w-[350px] border-l border-white/10 bg-[#0d0d0d] text-white p-6"
            >
              <SheetHeader className="p-0 text-left">
                <SheetTitle className="text-xl text-white">
                  InspiraTech
                </SheetTitle>
              </SheetHeader>
              <nav
                className="mt-8 flex flex-col gap-3"
                aria-label="Mobile navigation"
              >
                {navItems.map((item, index) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={cn(
                      "rounded-lg px-3 py-2 text-base font-medium text-white/80 transition-colors hover:bg-white/5 hover:text-white",
                      index === 0 && "font-bold text-white underline underline-offset-4",
                    )}
                  >
                    {item.label}
                  </Link>
                ))}
                <Button
                  type="button"
                  className="mt-4 h-12 w-full rounded-full bg-[#b66900] text-base font-semibold text-white transition-all hover:bg-[#b66900]/90"
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