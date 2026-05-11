"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

const links = [
  { href: "/programs", label: "Programs" },
  { href: "/schedule", label: "Schedule" },
  { href: "/pricing", label: "Pricing" },
  { href: "/coaches", label: "Coaches" },
  { href: "/events", label: "Events" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
  { href: "/shop", label: "Shop" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-background/95 backdrop-blur-md border-b border-border/60 py-3"
          : "bg-transparent py-5"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <Image
              src="/logo.jpg"
              alt="KV Boxing"
              width={160}
              height={48}
              className="h-10 w-auto object-contain"
              priority
            />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-200 uppercase tracking-wider"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="https://members.kvboxing.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center border border-border/60 text-foreground hover:border-primary/60 hover:text-primary uppercase tracking-widest text-xs px-4 py-2 rounded transition-colors duration-200"
              style={{ fontFamily: "var(--font-anton), sans-serif" }}
            >
              My Account
            </a>
            <Button
              render={<Link href="/free-trial" />}
              className="bg-primary text-primary-foreground hover:bg-gold-dark uppercase tracking-widest text-sm px-6 py-2.5 h-auto transition-transform duration-200 hover:scale-[1.03] active:scale-[0.97]"
              style={{ fontFamily: "var(--font-anton), sans-serif" }}
            >
              Book Free Trial
            </Button>
          </div>

          {/* Mobile My Account — always visible, no menu needed */}
          <a
            href="https://members.kvboxing.com"
            target="_blank"
            rel="noopener noreferrer"
            className="lg:hidden inline-flex items-center border border-border/60 text-foreground hover:border-primary/60 hover:text-primary uppercase tracking-widest text-[10px] px-3 py-1.5 rounded transition-colors duration-200"
            style={{ fontFamily: "var(--font-anton), sans-serif" }}
          >
            My Account
          </a>

          {/* Mobile menu */}
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger
              className="lg:hidden p-2 text-foreground bg-transparent border-0"
              aria-label="Open menu"
            >
              <Menu className="h-6 w-6" />
            </SheetTrigger>
            <SheetContent
              side="right"
              className="bg-background border-border w-[300px] px-6 py-8"
              showCloseButton={false}
            >
              <div className="flex items-center justify-between mb-8">
                <Image
                  src="/logo.jpg"
                  alt="KV Boxing"
                  width={140}
                  height={42}
                  className="h-9 w-auto object-contain"
                />
                <button
                  onClick={() => setOpen(false)}
                  className="p-2 text-muted-foreground hover:text-foreground"
                  aria-label="Close menu"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
              <nav className="flex flex-col gap-2">
                {links.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="py-3 text-lg font-medium text-muted-foreground hover:text-foreground border-b border-border/40 uppercase tracking-wider transition-colors"
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
              <Button
                render={<Link href="/free-trial" onClick={() => setOpen(false)} />}
                className="mt-8 w-full bg-primary text-primary-foreground hover:bg-gold-dark uppercase tracking-widest text-sm py-3 h-auto"
                style={{ fontFamily: "var(--font-anton), sans-serif" }}
              >
                Book Free Trial
              </Button>
              <a
                href="https://members.kvboxing.com"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 w-full flex items-center justify-center py-3 border border-border/60 rounded text-sm font-medium text-muted-foreground hover:text-foreground hover:border-border transition-colors uppercase tracking-wider"
                onClick={() => setOpen(false)}
              >
                My Account
              </a>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
