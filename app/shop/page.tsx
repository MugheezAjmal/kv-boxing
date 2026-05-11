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

      {/* Featured products preview */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 border-t border-border/50">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-10">
            <h2
              className="text-3xl text-foreground"
              style={{ fontFamily: "var(--font-anton), sans-serif" }}
            >
              FEATURED GEAR
            </h2>
            <a
              href="https://store.kvboxing.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-primary hover:underline flex items-center gap-1"
            >
              View all <ExternalLink className="h-3.5 w-3.5" />
            </a>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 mb-10">
            {featured.map(({ name, price, img }) => (
              <a
                key={name}
                href="https://store.kvboxing.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-card border border-border/50 rounded overflow-hidden hover:border-primary/40 transition-all duration-300"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={img}
                    alt={name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    unoptimized
                  />
                  <div className="absolute inset-0 bg-primary/10 mix-blend-multiply" />
                </div>
                <div className="p-4">
                  <h3 className="text-sm font-medium text-foreground mb-1">
                    {name}
                  </h3>
                  <p className="text-primary text-sm font-medium">{price}</p>
                </div>
              </a>
            ))}
          </div>

          {/* Redirect CTA */}
          <div className="bg-card border border-primary/20 rounded p-8 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-[0_0_40px_oklch(0.985_0_0_/_0.06)]">
            <div>
              <h3
                className="text-2xl text-foreground mb-2"
                style={{ fontFamily: "var(--font-anton), sans-serif" }}
              >
                FULL STORE ON STORE.KVBOXING.COM
              </h3>
              <p className="text-muted-foreground text-sm">
                Browse our full range of training gear, apparel, and supplements
                at our official store.
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

      {/* Member discount callout */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 border-t border-border/50">
        <div className="max-w-3xl mx-auto text-center">
          <h2
            className="text-3xl text-foreground mb-3"
            style={{ fontFamily: "var(--font-anton), sans-serif" }}
          >
            MEMBERS GET 20% OFF
          </h2>
          <p className="text-muted-foreground text-sm mb-6">
            Active KV Boxing members receive an exclusive discount on all store
            purchases. Log in to your member portal to access your code.
          </p>
          <Button
            variant="outline"
            className="border-border/60 text-foreground hover:bg-foreground/5 uppercase tracking-widest text-xs px-6 py-2.5 h-auto"
            render={<Link href="/pricing" />}
          >
            Become a Member
          </Button>
        </div>
      </section>
    </>
  );
}
