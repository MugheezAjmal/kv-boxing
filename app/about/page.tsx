import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Heart, Shield, Users, Trophy } from "lucide-react";

export const metadata: Metadata = {
  title: "About",
  description:
    "KV Boxing is a community boxing gym in Quispamsis, NB — built for all ages and levels, from preschoolers to competitive fighters.",
};

const values = [
  {
    Icon: Heart,
    title: "Community-First",
    body: "We built KV Boxing for Quispamsis. Every decision — from the programs we run to the way we coach — is designed to serve this community.",
  },
  {
    Icon: Users,
    title: "Truly For Everyone",
    body: "From 3-year-old Little Ninjas to adults in their 60s. From beginners to competitive athletes. We mean it when we say all levels are welcome.",
  },
  {
    Icon: Shield,
    title: "Real Boxing. Real Coaching.",
    body: "Not fitness theatre. Every class is built on proper boxing technique — because learning it right is what makes the workout effective.",
  },
  {
    Icon: Trophy,
    title: "Confidence & Results",
    body: "Whether the goal is fitness, competition, self-defence, or confidence — our members leave better than they arrived. That's the only metric we care about.",
  },
];

const policies = [
  { label: "Free Trial", detail: "For every new member — no commitment, no card required" },
  { label: "No Contracts", detail: "Month-to-month memberships, cancel anytime" },
  { label: "Gloves Provided", detail: "Always available at the gym — no gear purchase required to start" },
  { label: "All Ages", detail: "Programs from age 3 through adult" },
  { label: "Family Friendly", detail: "Parents can train while kids take class" },
  { label: "Boxing NB", detail: "$30 annual registration required for insurance and eligibility" },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            background:
              "radial-gradient(ellipse 70% 60% at 20% 50%, oklch(0.985 0 0 / 0.4) 0%, transparent 60%)",
          }}
        />
        <div className="relative max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-xs uppercase tracking-widest text-primary font-medium mb-4">
              Our Story
            </p>
            <h1
              className="text-5xl sm:text-6xl lg:text-7xl text-foreground leading-tight mb-6"
              style={{ fontFamily: "var(--font-anton), sans-serif" }}
            >
              BUILT FOR
              <br />
              <span className="text-primary">THIS COMMUNITY.</span>
            </h1>
            <p className="text-muted-foreground text-lg leading-relaxed mb-4">
              KV Boxing was built with a simple goal: to give Quispamsis a
              serious boxing gym that still felt like home. A place where
              a 4-year-old can take their first class on Saturday morning,
              and a competitive fighter can prepare for their next bout on a
              Tuesday night.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              We believe boxing is one of the best tools in the world for
              building fitness, discipline, confidence, and self-defence skills.
              And we believe those benefits shouldn&apos;t be reserved for people
              already in the sport.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              That&apos;s why we built programs for preschoolers, a women-only
              class that runs five days a week, drop-in options, no-contract
              memberships, and a free trial for everyone who walks through the
              door. KV Boxing is a community — and we&apos;d love for you to be
              part of it.
            </p>
          </div>

          <div className="relative">
            <div className="relative h-80 lg:h-[420px] rounded overflow-hidden">
              <Image
                src="/tim-hayes.jpg"
                alt="Tim Hayes — Head Coach, KV Boxing"
                fill
                className="object-cover object-top"
                unoptimized
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/70 to-transparent" />
              <div className="absolute inset-0 bg-primary/10 mix-blend-multiply" />
              <div className="absolute bottom-4 left-4 right-4">
                <p className="text-foreground font-medium text-sm" style={{ fontFamily: "var(--font-anton), sans-serif" }}>TIM HAYES</p>
                <p className="text-primary text-xs uppercase tracking-wider">Head Coach · Level 3 NCCP</p>
              </div>
            </div>

            <div className="absolute -bottom-5 -right-5 bg-primary text-primary-foreground p-5 rounded hidden lg:block">
              <div
                className="text-3xl"
                style={{ fontFamily: "var(--font-anton), sans-serif" }}
              >
                QUISPAMSIS
              </div>
              <div className="text-xs uppercase tracking-widest opacity-80 mt-0.5">
                New Brunswick
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Head Coach */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 border-t border-border/50">
        <div className="max-w-7xl mx-auto">
          <p className="text-xs uppercase tracking-widest text-primary font-medium mb-3">Head Coach</p>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-4xl sm:text-5xl text-foreground leading-tight mb-4" style={{ fontFamily: "var(--font-anton), sans-serif" }}>
                TIM HAYES
              </h2>
              <p className="text-primary text-sm uppercase tracking-widest mb-5">Level 3 NCCP Boxing Coach · Sport NB Lifetime Achievement Award (2018)</p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                A decorated coach with decades of experience, Tim is a Level 3 NCCP boxing coach and recipient of the Sport NB Lifetime Achievement Award (2018). With certifications across boxing, gymnastics, trampoline, and children&apos;s fitness, Tim brings unparalleled expertise to every class and every athlete who walks through the door.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Tim built KV Boxing from the ground up with one belief: that this community deserved a real boxing gym. The programs, the culture, and the results speak for themselves.
              </p>
            </div>
            <div className="relative h-72 lg:h-96 rounded overflow-hidden">
              <Image
                src="/tim-hayes.jpg"
                alt="Tim Hayes — Head Coach, KV Boxing"
                fill
                className="object-cover object-top"
                unoptimized
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              <div className="absolute inset-0 bg-primary/10 mix-blend-multiply" />
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-card/40 border-y border-border/50">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12 text-center">
            <h2
              className="text-4xl sm:text-5xl text-foreground"
              style={{ fontFamily: "var(--font-anton), sans-serif" }}
            >
              WHAT WE STAND FOR
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map(({ Icon, title, body }) => (
              <div
                key={title}
                className="bg-card border border-border/50 rounded p-6 hover:border-primary/30 transition-all duration-300"
              >
                <div className="w-10 h-10 flex items-center justify-center rounded bg-primary/10 text-primary mb-4">
                  <Icon className="h-5 w-5" />
                </div>
                <h3
                  className="text-base text-foreground mb-2"
                  style={{ fontFamily: "var(--font-anton), sans-serif" }}
                >
                  {title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Programs overview */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <p className="text-xs uppercase tracking-widest text-primary font-medium mb-3">
                Our Programs
              </p>
              <h2
                className="text-4xl sm:text-5xl text-foreground leading-tight mb-6"
                style={{ fontFamily: "var(--font-anton), sans-serif" }}
              >
                SOMETHING FOR
                <br />
                EVERY STAGE
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We run 7 distinct programs spanning every age and interest.
                Parents train while their kids take Little Ninjas. Women come
                to Fight Like a Girl three mornings a week. Teenagers who
                started at age 8 grow into competitive boxers. It&apos;s a
                through-line we&apos;re incredibly proud of.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-8">
                We&apos;re affiliated with Boxing NB and all competitive members
                train under official amateur boxing guidelines.
              </p>
              <Button
                render={<Link href="/programs" />}
                className="bg-primary text-primary-foreground hover:bg-gold-dark uppercase tracking-widest text-xs px-8 py-3 h-auto transition-transform duration-200 hover:scale-[1.03]"
                style={{ fontFamily: "var(--font-anton), sans-serif" }}
              >
                See All Programs
              </Button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { name: "Little Ninjas", ages: "Ages 3–5", price: "$50/mo" },
                { name: "Silver Gloves", ages: "Ages 5–7", price: "$60/mo" },
                { name: "Amateur Boxing", ages: "Ages 8+", price: "$60/mo" },
                { name: "Adult Boxing", ages: "Ages 16+", price: "$70/mo" },
                { name: "Fight Like a Girl", ages: "Women Only", price: "$70/mo" },
                { name: "Kickboxing", ages: "Ages 16+", price: "$70/mo" },
              ].map(({ name, ages, price }) => (
                <div
                  key={name}
                  className="bg-card border border-border/50 rounded p-4 hover:border-primary/30 transition-colors"
                >
                  <h3
                    className="text-sm text-foreground mb-0.5"
                    style={{ fontFamily: "var(--font-anton), sans-serif" }}
                  >
                    {name}
                  </h3>
                  <p className="text-xs text-muted-foreground">{ages}</p>
                  <p className="text-xs text-primary mt-1.5 font-medium">
                    {price}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Policies */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-card/40 border-y border-border/50">
        <div className="max-w-7xl mx-auto">
          <h2
            className="text-3xl text-foreground mb-8 text-center"
            style={{ fontFamily: "var(--font-anton), sans-serif" }}
          >
            HOW WE OPERATE
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {policies.map(({ label, detail }) => (
              <div
                key={label}
                className="bg-card border border-border/50 rounded p-5"
              >
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                  <div>
                    <h3
                      className="text-sm text-foreground mb-0.5"
                      style={{ fontFamily: "var(--font-anton), sans-serif" }}
                    >
                      {label}
                    </h3>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      {detail}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 text-center">
        <h2
          className="text-4xl sm:text-5xl text-foreground mb-4"
          style={{ fontFamily: "var(--font-anton), sans-serif" }}
        >
          COME TRAIN WITH US.
        </h2>
        <p className="text-muted-foreground mb-8 max-w-lg mx-auto leading-relaxed">
          The best way to understand KV Boxing is to walk in. Your first
          class is free. 1 Market St, Quispamsis, NB.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button
            render={<Link href="/free-trial" />}
            size="lg"
            className="bg-primary text-primary-foreground hover:bg-gold-dark uppercase tracking-widest text-sm px-10 py-4 h-auto transition-transform duration-200 hover:scale-[1.03]"
            style={{ fontFamily: "var(--font-anton), sans-serif" }}
          >
            Book Free Trial
          </Button>
          <Button
            render={<Link href="/contact" />}
            size="lg"
            variant="outline"
            className="border-border/60 text-foreground hover:bg-foreground/5 uppercase tracking-widest text-sm px-8 py-4 h-auto"
          >
            Get In Touch
          </Button>
        </div>
      </section>
    </>
  );
}
