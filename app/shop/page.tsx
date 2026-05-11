import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ExternalLink, ShoppingBag } from "lucide-react";

export const metadata: Metadata = {
  title: "Shop",
  description:
    "KV Boxing gear, apparel, and equipment. Shop the official KV Boxing store.",
};

const featured = [
  {
    name: "KV Boxing Gloves",
    price: "$79",
    img: "https://placehold.co/400x400/141414/C9A227?text=Gloves",
  },
  {
    name: "KV Training Shorts",
    price: "$49",
    img: "https://placehold.co/400x400/141414/C9A227?text=Shorts",
  },
  {
    name: "KV Rashguard",
    price: "$55",
    img: "https://placehold.co/400x400/141414/C9A227?text=Rashguard",
  },
  {
    name: "KV Hand Wraps (Pair)",
    price: "$19",
    img: "https://placehold.co/400x400/141414/C9A227?text=Hand+Wraps",
  },
];

export default function ShopPage() {
  return (
    <>
      {/* Header */}
      <section className="relative pt-32 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            background:
              "radial-gradient(ellipse 60% 60% at 70% 40%, oklch(0.985 0 0 / 0.4) 0%, transparent 60%)",
          }}
        />
        <div className="relative max-w-7xl mx-auto">
          <p className="text-xs uppercase tracking-widest text-primary font-medium mb-4">
            Gear &amp; Apparel
          </p>
          <h1
            className="text-5xl sm:text-6xl lg:text-7xl text-foreground leading-tight mb-6"
            style={{ fontFamily: "var(--font-anton), sans-serif" }}
          >
            KV BOXING
            <br />
            <span className="text-primary">STORE</span>
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl leading-relaxed mb-8">
            Official KV Boxing gear — gloves, apparel, wraps, and more. Gear
            you can actually train in, from a gym that trains for real.
          </p>
          <Button
            render={<a href="https://store.kvboxing.com" target="_blank" rel="noopener noreferrer" />}
            size="lg"
            className="bg-primary text-primary-foreground hover:bg-gold-dark uppercase tracking-widest text-sm px-8 py-4 h-auto transition-transform duration-200 hover:scale-[1.03] active:scale-[0.97] shadow-[0_0_30px_oklch(0.985_0_0_/_0.25)] flex items-center gap-2"
            style={{ fontFamily: "var(--font-anton), sans-serif" }}
          >
            <ShoppingBag className="h-5 w-5" />
            Shop All Products
            <ExternalLink className="h-4 w-4 opacity-70" />
          </Button>
        </div>
      </section>

      {/* Store redirect CTA */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 border-t border-border/50">
        <div className="max-w-7xl mx-auto">
          <div className="bg-card border border-primary/20 rounded p-8 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-[0_0_40px_oklch(0.985_0_0_/_0.06)]">
            <div>
              <h3
                className="text-2xl text-foreground mb-2"
                style={{ fontFamily: "var(--font-anton), sans-serif" }}
              >
                SHOP ALL PRODUCTS AT STORE.KVBOXING.COM
              </h3>
              <p className="text-muted-foreground text-sm">
                Browse our full range of training gear, apparel, and supplements at our official store.
              </p>
            </div>
            <Button
              render={<a href="https://store.kvboxing.com" target="_blank" rel="noopener noreferrer" />}
              className="flex-shrink-0 bg-primary text-primary-foreground hover:bg-gold-dark uppercase tracking-widest text-xs px-8 py-3 h-auto transition-transform duration-200 hover:scale-[1.03] flex items-center gap-2"
              style={{ fontFamily: "var(--font-anton), sans-serif" }}
            >
              Go to Store <ExternalLink className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
