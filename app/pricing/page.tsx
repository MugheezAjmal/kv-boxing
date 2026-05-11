import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";
import AnimateIn from "@/components/animate-in";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "KV Boxing membership pricing — kids from $50/month, adults $70/month. No contracts, gloves provided, free trial included.",
};

const kidsTiers = [
  {
    name: "Little Ninjas",
    ages: "Ages 3–5",
    price: "$50",
    schedule: "Saturdays 9:30 AM",
    features: [
      "Saturday morning class",
      "Age-appropriate curriculum",
      "Gloves provided",
      "Cancel anytime",
    ],
  },
  {
    name: "Silver Gloves",
    ages: "Ages 5–7",
    price: "$60",
    schedule: "Saturdays 1:00 PM",
    features: [
      "Saturday afternoon class",
      "Boxing fundamentals",
      "Gloves provided",
      "Cancel anytime",
    ],
  },
  {
    name: "Amateur Boxing",
    ages: "Ages 8+",
    price: "$60",
    schedule: "Mon, Tue, Wed at 7:00 PM",
    features: [
      "3 sessions per week",
      "Boxing technique & fitness",
      "Competition pathway available",
      "Gloves provided",
      "Cancel anytime",
    ],
  },
];

const adultTiers = [
  {
    name: "Adult Boxing",
    tagline: "Ages 16+",
    price: "$70",
    schedule: "Mon, Tue, Wed at 8:00 PM",
    highlight: true,
    features: [
      "3 sessions per week",
      "Non-contact boxing",
      "Optional sparring available",
      "Gloves provided",
      "No long-term contract",
      "Cancel anytime",
    ],
  },
  {
    name: "Fight Like a Girl",
    tagline: "Women Only",
    price: "$70",
    schedule: "5 sessions/week — mornings, evenings & Saturday",
    highlight: false,
    features: [
      "Multiple weekly sessions",
      "Mornings, evenings & Saturday",
      "All fitness levels welcome",
      "Gloves provided",
      "No long-term contract",
      "Cancel anytime",
    ],
  },
  {
    name: "Kickboxing",
    tagline: "Muay Thai-Inspired",
    price: "$70",
    schedule: "Mon & Wed at 8:00 PM",
    highlight: false,
    features: [
      "2 sessions per week",
      "Striking & conditioning",
      "Self-defence focused",
      "Gloves provided",
      "No long-term contract",
      "Cancel anytime",
    ],
  },
];

const faqs = [
  {
    q: "Is the free trial really free?",
    a: "Yes — completely free, no credit card required. Come try any class before committing to a membership.",
  },
  {
    q: "What is the Boxing NB registration fee?",
    a: "All KV Boxing members pay a one-time annual Boxing NB fee of $30. This covers your insurance and program eligibility under Boxing New Brunswick. We handle the registration — you just pay the fee when you join.",
  },
  {
    q: "Can I do more than one program?",
    a: "Yes. Some members train in both Adult Boxing and Kickboxing, and women often transition between Fight Like a Girl and Adult Boxing. Talk to us about the best fit for your goals.",
  },
  {
    q: "Are there any contracts?",
    a: "None. All memberships are month-to-month. Cancel before your next billing date and you won't be charged again.",
  },
  {
    q: "Do I need to bring my own gloves?",
    a: "Nope — gloves are always available at the gym for every class. Once you're a regular member, many people choose to get their own, but it's never required.",
  },
  {
    q: "What payment methods do you accept?",
    a: "Online payment through the website is preferred. We also accept e-transfer and in-person cash.",
  },
  {
    q: "Is there a drop-in option?",
    a: "Yes. A $15 drop-in rate is available for select programs. Great for visitors or those who want to try before buying a stamp card or monthly membership.",
  },
  {
    q: "What is the Stamp Card?",
    a: "The Stamp Card gives you 8 adult classes for $70 — giving you flexibility without a monthly commitment. Each class you attend gets a stamp.",
  },
];

export default function PricingPage() {
  return (
    <>
      {/* Header */}
      <section className="relative pt-32 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            background:
              "radial-gradient(ellipse 60% 60% at 50% 30%, oklch(0.985 0 0 / 0.4) 0%, transparent 60%)",
          }}
        />
        <AnimateIn className="relative max-w-7xl mx-auto text-center">
          <p className="text-xs uppercase tracking-widest text-primary font-medium mb-4">
            Membership & Pricing
          </p>
          <h1
            className="text-5xl sm:text-6xl lg:text-7xl text-foreground leading-tight mb-6"
            style={{ fontFamily: "var(--font-anton), sans-serif" }}
          >
            SIMPLE PRICING.
            <br />
            <span className="text-primary">NO SURPRISES.</span>
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
            Month-to-month memberships, no contracts. Gloves always provided.
            First class is always free.
          </p>
        </AnimateIn>
      </section>

      {/* Kids Programs */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2
            className="text-2xl text-foreground mb-6"
            style={{ fontFamily: "var(--font-anton), sans-serif" }}
          >
            KIDS &amp; YOUTH PROGRAMS
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {kidsTiers.map(({ name, ages, price, schedule, features }, i) => (
              <AnimateIn key={name} delay={i * 80}>
              <div
                className="flex flex-col bg-card border border-border/50 rounded p-6 hover:border-primary/30 hover:-translate-y-1.5 transition-[transform,border-color,box-shadow] duration-300 hover:shadow-[0_8px_32px_oklch(0.985_0_0_/_0.08)] h-full"
              >
                <div className="mb-5">
                  <p className="text-xs text-primary uppercase tracking-wider mb-1">
                    {ages}
                  </p>
                  <h3
                    className="text-xl text-foreground mb-1"
                    style={{ fontFamily: "var(--font-anton), sans-serif" }}
                  >
                    {name}
                  </h3>
                  <p className="text-xs text-muted-foreground">{schedule}</p>
                  <div className="flex items-end gap-1 mt-3">
                    <span
                      className="text-4xl text-foreground"
                      style={{ fontFamily: "var(--font-anton), sans-serif" }}
                    >
                      {price}
                    </span>
                    <span className="text-muted-foreground text-sm mb-1">
                      /month
                    </span>
                  </div>
                </div>
                <ul className="space-y-2 flex-1 mb-5">
                  {features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm">
                      <CheckCircle className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{f}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  render={<Link href="/free-trial" />}
                  className="w-full bg-primary/10 text-primary hover:bg-primary/20 border border-primary/30 uppercase tracking-widest text-xs py-2.5 h-auto"
                  style={{ fontFamily: "var(--font-anton), sans-serif" }}
                >
                  Book Free Trial
                </Button>
              </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* Adult Programs */}
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2
            className="text-2xl text-foreground mb-6"
            style={{ fontFamily: "var(--font-anton), sans-serif" }}
          >
            ADULT PROGRAMS
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {adultTiers.map(({ name, tagline, price, schedule, features, highlight }, i) => (
              <AnimateIn key={name} delay={i * 80}>
              <div
                className={`flex flex-col rounded p-6 hover:-translate-y-1.5 transition-[transform,border-color,box-shadow] duration-300 h-full ${
                  highlight
                    ? "bg-card border border-primary/50 shadow-[0_0_40px_oklch(0.985_0_0_/_0.14)]"
                    : "bg-card border border-border/50 hover:border-primary/30 hover:shadow-[0_8px_32px_oklch(0.985_0_0_/_0.08)]"
                }`}
              >
                <div className="mb-5">
                  <p className="text-xs text-primary uppercase tracking-wider mb-1">
                    {tagline}
                  </p>
                  <h3
                    className="text-xl text-foreground mb-1"
                    style={{ fontFamily: "var(--font-anton), sans-serif" }}
                  >
                    {name}
                  </h3>
                  <p className="text-xs text-muted-foreground">{schedule}</p>
                  <div className="flex items-end gap-1 mt-3">
                    <span
                      className="text-4xl text-foreground"
                      style={{ fontFamily: "var(--font-anton), sans-serif" }}
                    >
                      {price}
                    </span>
                    <span className="text-muted-foreground text-sm mb-1">
                      /month
                    </span>
                  </div>
                </div>
                <ul className="space-y-2 flex-1 mb-5">
                  {features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm">
                      <CheckCircle
                        className={`h-4 w-4 flex-shrink-0 mt-0.5 ${
                          highlight ? "text-primary" : "text-muted-foreground"
                        }`}
                      />
                      <span className="text-muted-foreground">{f}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  render={<Link href="/free-trial" />}
                  className={
                    highlight
                      ? "w-full bg-primary text-primary-foreground hover:bg-gold-dark uppercase tracking-widest text-xs py-2.5 h-auto transition-transform duration-200 hover:scale-[1.02]"
                      : "w-full bg-secondary text-secondary-foreground hover:bg-secondary/80 uppercase tracking-widest text-xs py-2.5 h-auto border border-border/60"
                  }
                  style={{ fontFamily: "var(--font-anton), sans-serif" }}
                >
                  Book Free Trial
                </Button>
              </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* Drop-in & Stamp Card */}
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div className="bg-card border border-border/50 rounded p-6">
            <h3
              className="text-xl text-foreground mb-1"
              style={{ fontFamily: "var(--font-anton), sans-serif" }}
            >
              Drop-In
            </h3>
            <p className="text-xs text-muted-foreground mb-3 uppercase tracking-wider">
              Pay per class
            </p>
            <div className="flex items-end gap-1 mb-3">
              <span
                className="text-4xl text-primary"
                style={{ fontFamily: "var(--font-anton), sans-serif" }}
              >
                $15
              </span>
              <span className="text-muted-foreground text-sm mb-1">
                / class
              </span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Available for select programs. Great for visitors or first-timers
              who want to try before committing.
            </p>
          </div>

          <div className="bg-card border border-border/50 rounded p-6">
            <h3
              className="text-xl text-foreground mb-1"
              style={{ fontFamily: "var(--font-anton), sans-serif" }}
            >
              Stamp Card
            </h3>
            <p className="text-xs text-muted-foreground mb-3 uppercase tracking-wider">
              Flexible adult option
            </p>
            <div className="flex items-end gap-1 mb-3">
              <span
                className="text-4xl text-primary"
                style={{ fontFamily: "var(--font-anton), sans-serif" }}
              >
                $70
              </span>
              <span className="text-muted-foreground text-sm mb-1">
                / 8 classes
              </span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              For adult members who train on their own schedule. Use 8 classes
              at your pace — no monthly commitment.
            </p>
          </div>
        </div>
      </section>

      {/* Boxing NB note */}
      <section className="py-4 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="bg-primary/5 border border-primary/20 rounded p-5">
            <h3
              className="text-sm text-foreground mb-1"
              style={{ fontFamily: "var(--font-anton), sans-serif" }}
            >
              Boxing NB Annual Registration — $30
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              All members are required to register with Boxing NB at a
              one-time annual fee of $30. This covers insurance and program
              eligibility. Required for all programs.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="light-section py-20 px-4 sm:px-6 lg:px-8 mt-8">
        <div className="max-w-3xl mx-auto">
          <AnimateIn>
            <h2
              className="text-4xl text-foreground mb-10 text-center"
              style={{ fontFamily: "var(--font-anton), sans-serif" }}
            >
              COMMON QUESTIONS
            </h2>
          </AnimateIn>
          <div className="space-y-6">
            {faqs.map(({ q, a }, i) => (
              <AnimateIn key={q} delay={i * 40}>
              <div
                className="border-b border-border/50 pb-6 last:border-0"
              >
                <h3 className="text-foreground font-medium mb-2 text-sm">
                  {q}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {a}
                </p>
              </div>
              </AnimateIn>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-muted-foreground text-sm mb-4">
              Still have questions? We&apos;re happy to help.
            </p>
            <Button
              render={<Link href="/contact" />}
              className="bg-primary text-primary-foreground hover:bg-gold-dark uppercase tracking-widest text-xs px-8 py-3 h-auto transition-transform duration-200 hover:scale-[1.03]"
              style={{ fontFamily: "var(--font-anton), sans-serif" }}
            >
              Contact Us
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
