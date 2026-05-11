import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import AnimateIn from "@/components/animate-in";
import {
  Zap,
  Users,
  Heart,
  Star,
  ChevronRight,
  Target,
  Flame,
} from "lucide-react";

const stats = [
  { value: "7+", label: "Programs Offered" },
  { value: "All", label: "Ages & Levels" },
  { value: "20+", label: "Weekly Classes" },
  { value: "NB", label: "Quispamsis Based" },
];

const valueProps = [
  {
    Icon: Target,
    title: "Real Boxing Technique",
    body: "Every class is built around proper boxing fundamentals — footwork, combinations, defence, and conditioning. Not just cardio with gloves on.",
  },
  {
    Icon: Users,
    title: "All Ages Welcome",
    body: "From Preschool Little Ninjas starting at age 3, through to Adult Boxing and Fight Like a Girl — there's a program for every stage of life.",
  },
  {
    Icon: Zap,
    title: "No Long-Term Contracts",
    body: "Month-to-month memberships, no lock-in. We keep you because you love it — not because you're locked in.",
  },
  {
    Icon: Heart,
    title: "Community-First Gym",
    body: "KV Boxing is a community where members build confidence, improve fitness, and support each other — from first-timers to competitive fighters.",
  },
];

const programs = [
  {
    title: "Little Ninjas",
    description: "Ages 3–5. Fun intro to movement, coordination, and confidence. Saturdays at 9:30 AM.",
    img: "/programs/little-ninjas.webp",
    badge: "Ages 3–5",
  },
  {
    title: "Silver Gloves",
    description: "Ages 5–7. Beginner boxing — balance, basic technique, and tons of fun. Saturdays at 1:00 PM.",
    img: "/programs/silver-gloves.webp",
    badge: "Ages 5–7",
  },
  {
    title: "Amateur Boxing",
    description: "Ages 8+. Boxing fundamentals, fitness, and discipline — with an optional path to competition.",
    img: "/programs/amateur-boxing.webp",
    badge: null,
  },
  {
    title: "Adult Boxing",
    description: "Ages 16+. Non-contact boxing program focused on fitness, technique, and optional sparring.",
    img: "/programs/adult-boxing.webp",
    badge: "Most Popular",
  },
  {
    title: "Fight Like a Girl",
    description: "Women-only boxing fitness. Strength, endurance, and self-defence in a supportive, empowering space.",
    img: "/programs/fight-like-a-girl.webp",
    badge: "Women Only",
  },
  {
    title: "Kickboxing",
    description: "Muay Thai-inspired striking — great for self-defence and getting in serious shape.",
    img: "/programs/kickboxing.webp",
    badge: null,
  },
];

const testimonials = [
  {
    name: "Sarah M.",
    since: "Fight Like a Girl member",
    quote:
      "I was nervous to walk in, but after my first trial class I was hooked. The coaches are so encouraging and the women in the class genuinely lift each other up.",
  },
  {
    name: "David K.",
    since: "Adult Boxing member",
    quote:
      "Best workout I've ever had. It's challenging, technical, and the community is second to none. My kids do Silver Gloves on Saturdays — we're a KV family now.",
  },
  {
    name: "Emma T.",
    since: "Parent of Little Ninjas student",
    quote:
      "My 4-year-old absolutely loves Saturday mornings. She's so much more confident and focused since she started. Would recommend to any parent.",
  },
];

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          {/* Desktop: low x% shows left portion of image → fighter (image center) lands on right half */}
          <Image
            src="/hero-desktop.webp"
            alt="KV Boxing fighter training"
            fill
            className="object-cover hidden sm:block"
            style={{ objectPosition: "15% 42%" }}
            priority
            unoptimized
          />
          {/* Mobile: center crop, pull down slightly to show upper fighters */}
          <Image
            src="/hero-mobile.jpg"
            alt="KV Boxing fighters sparring"
            fill
            className="object-cover block sm:hidden"
            style={{ objectPosition: "center 20%" }}
            priority
            unoptimized
          />
          {/* Base dark scrim */}
          <div className="absolute inset-0 bg-black/40" />
          {/* Desktop: heavier dark on left side where text sits */}
          <div className="absolute inset-0 hidden sm:block bg-gradient-to-r from-black/55 via-black/10 to-transparent" />
          {/* Both: fade bottom into page background */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-background" />
          {/* Subtle white glow pulse */}
          <div
            className="absolute inset-0 opacity-10 animate-pulse-glow"
            style={{
              background:
                "radial-gradient(ellipse 70% 50% at 50% 40%, oklch(0.985 0 0 / 0.4) 0%, transparent 70%)",
            }}
          />
          <svg
            className="absolute inset-0 w-full h-full opacity-[0.03]"
            xmlns="http://www.w3.org/2000/svg"
          >
            <filter id="grain">
              <feTurbulence
                type="fractalNoise"
                baseFrequency="0.65"
                numOctaves="3"
                stitchTiles="stitch"
              />
              <feColorMatrix type="saturate" values="0" />
            </filter>
            <rect width="100%" height="100%" filter="url(#grain)" />
          </svg>
        </div>

        {/* Mobile layout: content pinned to bottom-center */}
        <div className="relative z-10 flex sm:hidden min-h-screen flex-col justify-end items-center text-center pb-16 px-6">
          <AnimateIn onMount delay={100}>
            <div className="inline-flex items-center gap-2 mb-5 px-3 py-1.5 rounded border border-primary/30 bg-primary/10 text-primary text-xs font-medium uppercase tracking-widest">
              <Flame className="h-3 w-3" />
              <span>Quispamsis, New Brunswick</span>
            </div>
          </AnimateIn>
          <AnimateIn onMount delay={250}>
            <h1
              className="text-5xl text-foreground mb-6 leading-none tracking-wide"
              style={{ fontFamily: "var(--font-anton), sans-serif" }}
            >
              REAL COACHES!
              <br />
              <span style={{ WebkitTextStroke: "2px oklch(0.985 0 0)", color: "transparent" }}>
                REAL FIGHTERS!
              </span>
              <br />
              REAL TRAINING!
            </h1>
          </AnimateIn>
          <AnimateIn onMount delay={420} className="flex flex-col items-center gap-3 w-full">
            <Button
              render={<Link href="/free-trial" />}
              size="lg"
              className="w-full bg-primary text-primary-foreground hover:bg-gold-dark uppercase tracking-widest text-base px-10 py-4 h-auto transition-transform duration-200 hover:scale-[1.03] active:scale-[0.97] shadow-[0_0_40px_oklch(0.985_0_0_/_0.3)]"
              style={{ fontFamily: "var(--font-anton), sans-serif" }}
            >
              Book Your Free Trial
            </Button>
            <Button
              render={<Link href="/programs" />}
              size="lg"
              variant="outline"
              className="w-full border-border/60 text-foreground hover:bg-foreground/5 uppercase tracking-widest text-base px-10 py-4 h-auto"
            >
              View Programs
            </Button>
          </AnimateIn>
        </div>

        {/* Desktop layout: content on left, vertically centered */}
        <div className="relative z-10 hidden sm:flex min-h-screen flex-col justify-center max-w-7xl mx-auto px-6 lg:px-8 pt-24 pb-16">
          <AnimateIn onMount delay={100}>
            <div className="inline-flex items-center gap-2 mb-6 px-3 py-1.5 rounded border border-primary/30 bg-primary/10 text-primary text-xs font-medium uppercase tracking-widest w-fit">
              <Flame className="h-3 w-3" />
              <span>Quispamsis, New Brunswick</span>
            </div>
          </AnimateIn>
          <AnimateIn onMount delay={250}>
            <h1
              className="text-7xl lg:text-8xl xl:text-9xl text-foreground mb-8 leading-none tracking-wide"
              style={{
                fontFamily: "var(--font-anton), sans-serif",
                textShadow: "0 0 80px oklch(0.985 0 0 / 0.12)",
              }}
            >
              REAL COACHES!
              <br />
              <span style={{ WebkitTextStroke: "2px oklch(0.985 0 0)", color: "transparent" }}>
                REAL FIGHTERS!
              </span>
              <br />
              REAL TRAINING!
            </h1>
          </AnimateIn>
          <AnimateIn onMount delay={420} className="flex flex-row items-center gap-4">
            <Button
              render={<Link href="/free-trial" />}
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-gold-dark uppercase tracking-widest text-base px-10 py-4 h-auto transition-transform duration-200 hover:scale-[1.03] active:scale-[0.97] shadow-[0_0_40px_oklch(0.985_0_0_/_0.3)]"
              style={{ fontFamily: "var(--font-anton), sans-serif" }}
            >
              Book Your Free Trial
            </Button>
            <Button
              render={<Link href="/programs" />}
              size="lg"
              variant="outline"
              className="border-border/60 text-foreground hover:bg-foreground/5 uppercase tracking-widest text-base px-10 py-4 h-auto"
            >
              View Programs
            </Button>
          </AnimateIn>
        </div>
      </section>

      {/* MARQUEE STRIP */}
      <div className="overflow-hidden border-y border-border/40 bg-card py-5 select-none">
        <div className="flex animate-marquee-right whitespace-nowrap">
          {[...Array(2)].flatMap((_, di) =>
            ["BOXING", "KICKBOXING", "FIGHT LIKE A GIRL", "LITTLE NINJAS", "SILVER GLOVES", "COMPETITIVE BOXING", "FREE TRIAL", "QUISPAMSIS NB"].map((item) => (
              <span key={`${di}-${item}`} className="inline-flex items-center">
                <span
                  className="text-2xl sm:text-3xl font-medium tracking-widest uppercase text-foreground/20 px-6"
                  style={{ fontFamily: "var(--font-anton), sans-serif" }}
                >
                  {item}
                </span>
                <span className="text-primary/40 text-lg">✦</span>
              </span>
            ))
          )}
        </div>
      </div>

      {/* STATS STRIP */}
      <section className="light-section border-y border-black/8 py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-0 lg:divide-x lg:divide-border/50">
            {stats.map(({ value, label }, i) => (
              <AnimateIn key={label} delay={i * 80} className="text-center px-6">
                <div
                  className="text-4xl lg:text-5xl text-primary mb-1"
                  style={{ fontFamily: "var(--font-anton), sans-serif" }}
                >
                  {value}
                </div>
                <div className="text-xs uppercase tracking-widest text-muted-foreground font-medium">
                  {label}
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* WHY KV BOXING */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <AnimateIn className="mb-14 max-w-2xl">
            <p className="text-xs uppercase tracking-widest text-primary font-medium mb-3">
              Why KV Boxing
            </p>
            <h2
              className="text-4xl sm:text-5xl lg:text-6xl text-foreground leading-tight"
              style={{ fontFamily: "var(--font-anton), sans-serif" }}
            >
              MORE THAN
              <br />A GYM.
            </h2>
          </AnimateIn>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {valueProps.map(({ Icon, title, body }, i) => (
              <AnimateIn key={title} delay={i * 90}>
                <div className="group bg-card border border-border/50 rounded p-6 hover:border-primary/40 hover:-translate-y-1.5 transition-[transform,border-color,box-shadow] duration-300 hover:shadow-[0_8px_40px_oklch(0.985_0_0_/_0.10)] h-full">
                  <div className="w-10 h-10 flex items-center justify-center rounded bg-primary/10 text-primary mb-4 group-hover:bg-primary/20 transition-colors">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3
                    className="text-lg text-foreground mb-2"
                    style={{ fontFamily: "var(--font-anton), sans-serif" }}
                  >
                    {title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {body}
                  </p>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* CLASS TYPES PREVIEW */}
      <section className="py-24 bg-card/40 border-y border-border/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateIn>
            <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-14 gap-4">
              <div>
                <p className="text-xs uppercase tracking-widest text-primary font-medium mb-3">
                  Our Programs
                </p>
                <h2
                  className="text-4xl sm:text-5xl text-foreground leading-tight"
                  style={{ fontFamily: "var(--font-anton), sans-serif" }}
                >
                  A CLASS FOR EVERYONE
                </h2>
              </div>
              <Button
                render={<Link href="/programs" />}
                variant="outline"
                className="border-border/60 text-muted-foreground hover:text-foreground self-start sm:self-auto flex items-center gap-2"
              >
                All Programs <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </AnimateIn>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {programs.map(({ title, description, img, badge }, i) => (
              <AnimateIn key={title} delay={i * 70}>
                <Link
                  href="/programs"
                  className="group relative overflow-hidden rounded bg-card border border-border/50 hover:border-primary/40 hover:-translate-y-1.5 transition-[transform,border-color,box-shadow] duration-300 hover:shadow-[0_8px_40px_oklch(0.985_0_0_/_0.10)] block"
                >
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={img}
                      alt={title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      unoptimized
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-card via-card/30 to-transparent" />
                    {badge && (
                      <Badge className="absolute top-3 right-3 bg-primary text-primary-foreground text-xs uppercase tracking-wider">
                        {badge}
                      </Badge>
                    )}
                  </div>
                  <div className="p-5">
                    <h3
                      className="text-xl text-foreground mb-1.5"
                      style={{ fontFamily: "var(--font-anton), sans-serif" }}
                    >
                      {title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {description}
                    </p>
                    <div className="mt-4 flex items-center text-primary text-sm font-medium gap-1 group-hover:gap-2 transition-[gap] duration-200">
                      Learn more <ChevronRight className="h-4 w-4" />
                    </div>
                  </div>
                </Link>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* COMMUNITY SECTION */}
      <section className="light-section py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <AnimateIn>
              <p className="text-xs uppercase tracking-widest text-primary font-medium mb-3">
                Our Community
              </p>
              <h2
                className="text-4xl sm:text-5xl text-foreground leading-tight mb-6"
                style={{ fontFamily: "var(--font-anton), sans-serif" }}
              >
                BUILT FOR
                <br />
                <span className="text-primary">QUISPAMSIS</span>
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                KV Boxing started as a community gym, and that&apos;s what it
                remains. We&apos;re not a franchise. We&apos;re not a big box gym. We&apos;re
                your neighbours — and we built something here because we
                believed this community deserved a serious boxing gym.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Parents train while their kids take Silver Gloves. Women come
                for Fight Like a Girl and stay for years. Teenagers who started
                at 8 in Amateur Boxing grow into competitive fighters. That&apos;s
                the KV Boxing story — and it&apos;s still being written.
              </p>
              <div className="flex flex-wrap gap-3">
                {["Free Trial Available", "No Long-Term Contracts", "Gloves Provided", "All Ages"].map((tag) => (
                  <span
                    key={tag}
                    className="text-xs bg-primary/10 text-primary border border-primary/20 rounded px-3 py-1.5 uppercase tracking-wider"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </AnimateIn>

            <AnimateIn delay={150} className="relative h-80 lg:h-96 rounded overflow-hidden">
              <Image
                src="/programs/kv-boxing-overall.webp"
                alt="KV Boxing Community"
                fill
                className="object-cover"
                unoptimized
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              <div className="absolute inset-0 bg-black/10 mix-blend-multiply" />
            </AnimateIn>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-24 bg-card/40 border-y border-border/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateIn className="mb-14 text-center">
            <p className="text-xs uppercase tracking-widest text-primary font-medium mb-3">
              Member Stories
            </p>
            <h2
              className="text-4xl sm:text-5xl text-foreground"
              style={{ fontFamily: "var(--font-anton), sans-serif" }}
            >
              REAL PEOPLE. REAL RESULTS.
            </h2>
          </AnimateIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map(({ name, since, quote }, i) => (
              <AnimateIn key={name} delay={i * 100} className="flex flex-col">
                <div className="bg-card border border-border/50 rounded p-6 flex flex-col gap-4 flex-1 hover:-translate-y-1.5 hover:border-primary/30 transition-[transform,border-color,box-shadow] duration-300 hover:shadow-[0_8px_32px_oklch(0.985_0_0_/_0.07)]">
                  <div className="flex gap-1">
                    {Array.from({ length: 5 }).map((_, si) => (
                      <Star key={si} className="h-4 w-4 fill-primary text-primary" />
                    ))}
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed flex-1">
                    &ldquo;{quote}&rdquo;
                  </p>
                  <div>
                    <p className="text-sm font-medium text-foreground">{name}</p>
                    <p className="text-xs text-muted-foreground/60">{since}</p>
                  </div>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="relative py-28 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div
          className="absolute inset-0 opacity-15 animate-pulse-glow"
          style={{
            background:
              "radial-gradient(ellipse 60% 80% at 50% 50%, oklch(0.985 0 0 / 0.5) 0%, transparent 70%)",
          }}
        />
        <AnimateIn className="relative z-10 max-w-3xl mx-auto text-center">
          <p className="text-xs uppercase tracking-widest text-primary font-medium mb-4">
            Start Today
          </p>
          <h2
            className="text-5xl sm:text-6xl lg:text-7xl text-foreground mb-6 leading-tight"
            style={{ fontFamily: "var(--font-anton), sans-serif" }}
          >
            YOUR FIRST CLASS
            <br />
            IS ON US.
          </h2>
          <p className="text-muted-foreground text-lg mb-10 leading-relaxed">
            No commitment. Gloves provided. No experience needed. Just show up
            at 1 Market St, Quispamsis and let us take care of the rest.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              render={<Link href="/free-trial" />}
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-gold-dark uppercase tracking-widest text-base px-10 py-4 h-auto transition-transform duration-200 hover:scale-[1.03] active:scale-[0.97] shadow-[0_0_40px_oklch(0.985_0_0_/_0.3)]"
              style={{ fontFamily: "var(--font-anton), sans-serif" }}
            >
              Book Free Trial
            </Button>
            <Button
              render={<Link href="/schedule" />}
              size="lg"
              variant="outline"
              className="border-border/60 text-foreground hover:bg-foreground/5 uppercase tracking-widest text-sm px-8 py-4 h-auto"
            >
              View Schedule
            </Button>
          </div>
        </AnimateIn>
      </section>
    </>
  );
}
