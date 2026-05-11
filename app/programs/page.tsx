import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import AnimateIn from "@/components/animate-in";
import { Clock, Users, DollarSign, ChevronRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Programs",
  description:
    "KV Boxing programs for all ages — Little Ninjas (3–5), Silver Gloves (5–7), Amateur Boxing, Adult Boxing, Fight Like a Girl, and Kickboxing.",
};

const programs = [
  {
    title: "Preschool Little Ninjas",
    tagline: "Ages 3–5",
    description:
      "A fun, energetic introduction to martial arts for the youngest athletes. Little Ninjas focuses on movement, coordination, balance, and confidence-building through age-appropriate drills and games. No experience needed — just a willingness to move and have fun.",
    whoFor: "Ages 3–5, all skill levels",
    schedule: "Saturdays at 9:30 AM",
    price: "$50/month",
    img: "/programs/little-ninjas.webp",
    badge: "Ages 3–5",
    highlight: false,
    disabled: false,
    storeUrl: "https://store.kvboxing.com/product-details/product/preschoollittleninjas",
  },
  {
    title: "Silver Gloves",
    tagline: "Ages 5–7",
    description:
      "Silver Gloves is where young boxers start learning the real stuff — stance, movement, and basic technique — in a structured but fun environment. Small class sizes ensure every child gets individual attention from the coach.",
    whoFor: "Ages 5–7, beginner friendly",
    schedule: "Saturdays at 1:00 PM",
    price: "$60/month",
    img: "/programs/silver-gloves.webp",
    badge: "Ages 5–7",
    highlight: false,
    disabled: false,
    storeUrl: "https://store.kvboxing.com/product-details/product/silvergloves",
  },
  {
    title: "Amateur Boxing",
    tagline: "Ages 8+ | Teens & Adults",
    description:
      "A structured program teaching proper boxing fundamentals — footwork, punching technique, defence, and ring strategy — alongside serious fitness conditioning. Perfect for kids and teens looking for a sport to commit to, with an optional pathway to competitive amateur boxing.",
    whoFor: "Ages 8+, beginners to competitive",
    schedule: "Monday, Tuesday & Wednesday at 7:00 PM",
    price: "$60/month",
    img: "/programs/amateur-boxing.webp",
    badge: null,
    highlight: false,
    disabled: false,
    storeUrl: "https://store.kvboxing.com/product-details/product/amateurboxing",
  },
  {
    title: "Adult Boxing",
    tagline: "Ages 16+",
    description:
      "Our flagship adult program. Non-contact boxing focused on fitness, technique, and skill development. Learn to move, punch, and defend like a boxer — all while getting in the best shape of your life. Optional sparring available for those who want to take it further.",
    whoFor: "Ages 16+, all experience levels",
    schedule: "Monday, Tuesday & Wednesday at 8:00 PM",
    price: "$70/month",
    img: "/programs/adult-boxing.webp",
    badge: "Most Popular",
    highlight: true,
    disabled: false,
    storeUrl: "https://store.kvboxing.com/product-details/product/adultboxingmembership",
  },
  {
    title: "Fight Like a Girl",
    tagline: "Women Only",
    description:
      "A boxing-based fitness program created specifically for women of all levels and backgrounds. Whether you're coming for fitness, self-defence, stress relief, or something new — Fight Like a Girl is a welcoming, empowering, and seriously effective workout. Multiple session times to fit your schedule.",
    whoFor: "Women of all fitness levels and experience",
    schedule:
      "Weekday evenings at 5:50 PM · Mon/Wed/Fri mornings at 10:30 AM · Saturdays at 10:15 AM",
    price: "$70/month",
    img: "/programs/fight-like-a-girl.webp",
    badge: "Women Only",
    highlight: false,
    disabled: false,
    storeUrl: "https://store.kvboxing.com/product-details/product/fightlikeagirl",
  },
  {
    title: "Kickboxing",
    tagline: "Muay Thai-Inspired",
    description:
      "A dynamic, Muay Thai-inspired kickboxing class combining punching and kicking techniques for a full-body workout. Great for self-defence, conditioning, and anyone who wants to train striking in a structured environment. Suitable for all fitness levels.",
    whoFor: "All levels, all ages (16+)",
    schedule: "Monday & Wednesday at 8:00 PM",
    price: "$70/month",
    img: "/programs/kickboxing.webp",
    badge: null,
    highlight: false,
    disabled: true,
    storeUrl: null,
  },
  {
    title: "Competitive Boxing",
    tagline: "For Serious Athletes",
    description:
      "Ready to take it to the next level? Our competitive boxing program prepares members for amateur and recreational boxing events under Boxing NB. Focused on ring craft, strategy, sparring, and peak conditioning. Available to members who have progressed through the Amateur Boxing program.",
    whoFor: "Teens & adults with boxing experience",
    schedule: "Monday, Tuesday & Wednesday at 7:00 PM",
    price: "$60/month",
    img: "/programs/amateur-boxing.webp",
    badge: null,
    highlight: false,
    disabled: false,
    storeUrl: null,
  },
];

export default function ProgramsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            background:
              "radial-gradient(ellipse 60% 60% at 20% 50%, oklch(0.985 0 0 / 0.4) 0%, transparent 60%)",
          }}
        />
        <AnimateIn className="relative max-w-7xl mx-auto">
          <p className="text-xs uppercase tracking-widest text-primary font-medium mb-4">
            Programs
          </p>
          <h1
            className="text-5xl sm:text-6xl lg:text-7xl text-foreground leading-tight mb-6"
            style={{ fontFamily: "var(--font-anton), sans-serif" }}
          >
            A CLASS FOR
            <br />
            <span
              style={{
                WebkitTextStroke: "2px oklch(0.985 0 0)",
                color: "transparent",
              }}
            >
              EVERY FIGHTER
            </span>
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl leading-relaxed mb-8">
            From preschoolers taking their first steps in Little Ninjas, to adults
            competing under Boxing NB — KV Boxing has a program built for where
            you are right now.
          </p>
          <Button
            render={<Link href="/free-trial" />}
            className="bg-primary text-primary-foreground hover:bg-gold-dark uppercase tracking-widest text-sm px-8 py-3 h-auto transition-transform duration-200 hover:scale-[1.03] active:scale-[0.97]"
            style={{ fontFamily: "var(--font-anton), sans-serif" }}
          >
            Book a Free Trial Class
          </Button>
        </AnimateIn>
      </section>

      {/* Programs */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-10">
          {programs.map(({ title, tagline, description, whoFor, schedule, price, img, badge, highlight, disabled, storeUrl }, i) => (
            <AnimateIn key={title} delay={i * 60}>
            <div
              className={`group grid grid-cols-1 lg:grid-cols-2 gap-0 bg-card rounded overflow-hidden hover:-translate-y-1 transition-[transform,border-color,box-shadow] duration-300 ${
                highlight
                  ? "border border-primary/50 shadow-[0_0_40px_oklch(0.985_0_0_/_0.12)]"
                  : "border border-border/50 hover:border-primary/30 hover:shadow-[0_8px_40px_oklch(0.985_0_0_/_0.09)]"
              }`}
            >
              <div className="relative h-56 lg:h-auto overflow-hidden">
                <Image
                  src={img}
                  alt={title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  unoptimized
                />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-card/20 lg:from-transparent lg:to-card/40" />
                <div className="absolute inset-0 bg-primary/10 mix-blend-multiply" />
                {badge && (
                  <Badge
                    className={`absolute top-4 left-4 text-xs uppercase tracking-wider ${
                      badge === "Most Popular"
                        ? "bg-primary text-primary-foreground"
                        : "bg-background/80 text-foreground border border-border/60"
                    }`}
                  >
                    {badge}
                  </Badge>
                )}
              </div>
              <div className="p-8 lg:p-10 flex flex-col justify-center">
                <p className="text-xs text-primary uppercase tracking-widest mb-1 font-medium">
                  {tagline}
                </p>
                <h2
                  className="text-3xl lg:text-4xl text-foreground mb-4"
                  style={{ fontFamily: "var(--font-anton), sans-serif" }}
                >
                  {title}
                </h2>
                <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                  {description}
                </p>
                <div className="space-y-2.5 mb-6">
                  <div className="flex items-start gap-3 text-sm">
                    <Users className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">
                      <span className="text-foreground font-medium">Who it&apos;s for: </span>
                      {whoFor}
                    </span>
                  </div>
                  <div className="flex items-start gap-3 text-sm">
                    <Clock className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">
                      <span className="text-foreground font-medium">Schedule: </span>
                      {schedule}
                    </span>
                  </div>
                  <div className="flex items-start gap-3 text-sm">
                    <DollarSign className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">
                      <span className="text-foreground font-medium">Price: </span>
                      {price}
                    </span>
                  </div>
                </div>
                <div className="flex flex-wrap gap-3">
                  <Button
                    render={<Link href="/free-trial" />}
                    className="bg-primary text-primary-foreground hover:bg-gold-dark uppercase tracking-widest text-xs px-6 py-2.5 h-auto transition-transform duration-200 hover:scale-[1.03] active:scale-[0.97] flex items-center gap-2"
                    style={{ fontFamily: "var(--font-anton), sans-serif" }}
                  >
                    Try a Class Free <ChevronRight className="h-4 w-4" />
                  </Button>
                  {disabled ? (
                    <span
                      className="inline-flex items-center cursor-not-allowed opacity-40 bg-muted text-muted-foreground border border-border/40 uppercase tracking-widest text-xs px-6 py-2.5 rounded"
                      style={{ fontFamily: "var(--font-anton), sans-serif" }}
                    >
                      Temporarily Unavailable
                    </span>
                  ) : storeUrl ? (
                    <a
                      href={storeUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center border border-primary/50 text-primary hover:bg-primary/10 uppercase tracking-widest text-xs px-6 py-2.5 rounded transition-colors duration-200"
                      style={{ fontFamily: "var(--font-anton), sans-serif" }}
                    >
                      Get Membership
                    </a>
                  ) : null}
                </div>
              </div>
            </div>
            </AnimateIn>
          ))}
        </div>
      </section>

      {/* Boxing NB note */}
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="bg-card border border-border/50 rounded p-6 flex flex-col sm:flex-row gap-4 items-start sm:items-center">
            <div className="flex-1">
              <h3
                className="text-lg text-foreground mb-1"
                style={{ fontFamily: "var(--font-anton), sans-serif" }}
              >
                Boxing NB Registration
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                All KV Boxing members require a one-time annual Boxing NB
                registration of{" "}
                <span className="text-foreground font-medium">$30/year</span>.
                This covers insurance and program eligibility. We handle the
                process — you just pay the fee.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="light-section py-20 px-4 sm:px-6 lg:px-8 mt-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2
            className="text-4xl sm:text-5xl text-foreground mb-4"
            style={{ fontFamily: "var(--font-anton), sans-serif" }}
          >
            NOT SURE WHERE TO START?
          </h2>
          <p className="text-muted-foreground mb-8 leading-relaxed">
            Book a free trial and our coaches will point you toward the right
            program. Zero pressure, zero commitment — just come in and see.
          </p>
          <Button
            render={<Link href="/free-trial" />}
            size="lg"
            className="bg-primary text-primary-foreground hover:bg-gold-dark uppercase tracking-widest text-sm px-10 py-4 h-auto transition-transform duration-200 hover:scale-[1.03] active:scale-[0.97]"
            style={{ fontFamily: "var(--font-anton), sans-serif" }}
          >
            Book Free Trial
          </Button>
        </div>
      </section>
    </>
  );
}
