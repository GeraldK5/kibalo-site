"use client";

import Link from "next/link";
import Image from "next/image";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
  SheetTitle,
} from "@/components/ui/sheet";

const navLinks = [
  { label: "How It Works", href: "/#how-it-works" },
  { label: "FAQs", href: "/faqs" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  return (
    <nav className="w-full bg-[#F2F2F2] sticky top-0 z-50 border-b border-black/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 h-16 flex items-center justify-between">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <Image src="/logos/logo.svg" alt="Kibalo logo" width={32} height={32} className="rounded-lg" />
          <span className="text-[#172023] font-semibold text-xl tracking-tight" style={{ fontFamily: "var(--font-sora)" }}>
            Kibalo App
          </span>
        </Link>

        {/* Desktop links */}
        <div
          className="hidden md:flex items-center gap-8 text-sm font-medium text-[#172023]/70"
          style={{ fontFamily: "var(--font-dm-sans)" }}
        >
          {navLinks.map((link) => (
            <Link key={link.label} href={link.href} className="hover:text-[#FF5F15] transition-colors duration-200">
              {link.label}
            </Link>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="#"
            className="flex items-center gap-2.5 px-4 py-2 rounded-xl bg-dark hover:bg-primary transition-all duration-200 shadow-sm hover:shadow-md"
          >
            <svg className="w-4 h-4 text-white flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
              <path d="M3.18 23.76c.37.21.8.22 1.18.04l12.2-6.86-2.61-2.61-10.77 9.43zM.5 1.4A1.5 1.5 0 0 0 0 2.5v19c0 .42.16.81.5 1.1l.1.08 10.64-10.64v-.25L.6 1.32.5 1.4zm16.55 11.65L13.74 9.7l2.61-2.61 3.8 2.14c1.08.61 1.08 1.6 0 2.21l-3.1 1.61zm-3.47 1.95L2.2 24l-.04-.04 11.28-11.28 2.64 2.64-.5.28z" />
            </svg>
            <div>
              <p className="text-white/50 text-[9px] leading-none" style={{ fontFamily: "var(--font-dm-sans)" }}>Download on</p>
              <p className="text-white font-semibold text-xs leading-tight" style={{ fontFamily: "var(--font-sora)" }}>Google Play</p>
            </div>
          </a>
        </div>

        {/* Mobile — Sheet trigger */}
        <Sheet>
          <SheetTrigger asChild>
            <button
              className="md:hidden flex flex-col gap-1.5 p-2"
              aria-label="Open menu"
            >
              <span className="block w-5 h-0.5 bg-[#172023]" />
              <span className="block w-5 h-0.5 bg-[#172023]" />
              <span className="block w-5 h-0.5 bg-[#172023]" />
            </button>
          </SheetTrigger>

          <SheetContent side="right" className="w-72 bg-dark border-l border-white/10 flex flex-col p-0">
            <SheetTitle className="sr-only">Navigation Menu</SheetTitle>

            {/* Sheet header */}
            <div className="flex items-center justify-between px-6 py-5 border-b border-white/10">
              <Link href="/" className="flex items-center gap-2">
                <Image src="/logos/logo.svg" alt="Kibalo logo" width={32} height={32} className="rounded-lg" />
                <span className="text-secondary font-bold text-xl tracking-tight" style={{ fontFamily: "var(--font-sora)" }}>
                  Kibalo
                </span>
              </Link>
            </div>

            {/* Nav links */}
            <nav className="flex flex-col px-4 py-6 gap-1 flex-1" style={{ fontFamily: "var(--font-dm-sans)" }}>
              {navLinks.map((link) => (
                <SheetClose asChild key={link.label}>
                  <Link
                    href={link.href}
                    className="px-3 py-3 rounded-xl text-secondary/70 hover:text-white hover:bg-white/8 text-sm font-medium transition-all duration-200"
                  >
                    {link.label}
                  </Link>
                </SheetClose>
              ))}
            </nav>

            {/* Download buttons at bottom */}
            <div className="px-4 pb-8 flex flex-col gap-3 border-t border-white/10 pt-5">
              <SheetClose asChild>
                <a
                  href="#"
                  className="flex items-center gap-3 px-4 py-3 rounded-xl bg-white/8 hover:bg-primary border border-white/10 hover:border-primary transition-all duration-200"
                >
                  <svg className="w-5 h-5 text-white flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M3.18 23.76c.37.21.8.22 1.18.04l12.2-6.86-2.61-2.61-10.77 9.43zM.5 1.4A1.5 1.5 0 0 0 0 2.5v19c0 .42.16.81.5 1.1l.1.08 10.64-10.64v-.25L.6 1.32.5 1.4zm16.55 11.65L13.74 9.7l2.61-2.61 3.8 2.14c1.08.61 1.08 1.6 0 2.21l-3.1 1.61zm-3.47 1.95L2.2 24l-.04-.04 11.28-11.28 2.64 2.64-.5.28z" />
                  </svg>
                  <div>
                    <p className="text-secondary/50 text-[10px] leading-none">Download on</p>
                    <p className="text-secondary font-semibold text-sm leading-tight" style={{ fontFamily: "var(--font-sora)" }}>Google Play</p>
                  </div>
                </a>
              </SheetClose>
              <SheetClose asChild>
                <a
                  href="#"
                  className="flex items-center gap-3 px-4 py-3 rounded-xl bg-white/8 hover:bg-primary border border-white/10 hover:border-primary transition-all duration-200"
                >
                  <svg className="w-5 h-5 text-white flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98l-.09.06c-.22.14-2.18 1.27-2.16 3.8.03 3.02 2.65 4.03 2.68 4.04l-.07.28zM13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                  </svg>
                  <div>
                    <p className="text-secondary/50 text-[10px] leading-none">Download on</p>
                    <p className="text-secondary font-semibold text-sm leading-tight" style={{ fontFamily: "var(--font-sora)" }}>App Store</p>
                  </div>
                </a>
              </SheetClose>
            </div>

          </SheetContent>
        </Sheet>

      </div>
    </nav>
  );
}
