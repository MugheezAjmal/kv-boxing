import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import AnimateIn from "@/components/animate-in";

export const metadata: Metadata = {
  title: "Coaches",
  description:
    "Meet the KV Boxing coaching team — experienced, certified, and passionate about developing every athlete.",
};

const headCoach = {
  name: "Tim Hayes",
  title: "Head Coach",
  credentials: "Level 3 NCCP · Sport NB Lifetime Achievement Award (2018)",
  bio: "A decorated coach with decades of experience, Tim is a Level 3 NCCP boxing coach and recipient of the Sport NB Lifetime Achievement Award (2018). With certifications across boxing, gymnastics, trampoline, and children's fitness, Tim brings unparalleled expertise to every class and every athlete who walks through the door.",
  img: "/tim-hayes.jpg",
};

const coaches = [
  {
    name: "Jacob Martell",
    title: "Former Provincial Champion",
    bio: "A former provincial champion, Jacob brings passion and expertise to training the next generation of athletes.",
  },
  {
    name: "Mujin (John) Lee",
    title: "Former Provincial Champion",
    bio: "A skilled competitor with a focus on technical mastery and high-performance boxing.",
  },
  {
    name: "Ryan Doucet",
    title: "Certified Coach & Competitor",
    bio: "As a certified coach and active competitor, Ryan brings both teaching and in-ring experience to the gym.",
  },
  {
    name: "Brandon Craft",
    title: "Certified Coach & Competitor",
    bio: "An active competitor and certified coach, Brandon's sessions are a blend of technical skills and competitive edge.",
  },
  {
    name: "(Jaguar) Jack Kelly",
    title: "Current Competitor",
    bio: "A dynamic competitor, Jack Kelly motivates others by leading through example in every session.",
  },
  {
    name: "Nigel Flood",
    title: "Kickboxing Coach",
    bio: "A former competitive kickboxer, Nigel trains members in traditional Muay Thai techniques for fitness and self-defense.",
  },
];

function Initials({ name }: { name: string }) {
  const parts = name.replace(/[()]/g, "").split(" ");
  const initials = parts.length >= 2
    ? parts[0][0] + parts[parts.length - 1][0]
    : parts[0][0];
  return (
    <div className="w-full h-full flex items-center justify-center bg-primary/10 text-primary text-4xl" style={{ fontFamily: "var(--font-anton), sans-serif" }}>
      {initials.toUpperCase()}
    </div>
  );
}

export default function CoachesPage() {
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
        <AnimateIn className="relative max-w-7xl mx-auto">
          <p className="text-xs uppercase tracking-widest text-primary font-medium mb-4">
            Our Team
          </p>
          <h1
            className="text-5xl sm:text-6xl lg:text-7xl text-foreground leading-tight mb-6"
            style={{ fontFamily: "var(--font-anton), sans-serif" }}
          >
            THE COACHES
            <br />
            <span className="text-primary">BEHIND KV BOXING</span>
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl leading-relaxed">
            Champions, certified coaches, and active competitors — every coach at KV Boxing trains alongside you and pushes you to your best.
          </p>
        </AnimateIn>
      </section>

      {/* Head Coach */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 border-t border-border/50">
        <div className="max-w-7xl mx-auto">
          <AnimateIn>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center bg-card border border-primary/30 rounded p-8 lg:p-12 shadow-[0_0_60px_oklch(0.985_0_0_/_0.08)]">
              <div className="relative h-72 lg:h-96 rounded overflow-hidden order-2 lg:order-1">
                <Image
                  src={headCoach.img}
                  alt={headCoach.name}
                  fill
                  className="object-cover object-top"
                  unoptimized
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute inset-0 bg-primary/10 mix-blend-multiply" />
              </div>
              <div className="order-1 lg:order-2">
                <p className="text-xs uppercase tracking-widest text-primary font-medium mb-3">Head Coach</p>
                <h2
                  className="text-4xl sm:text-5xl text-foreground mb-2 leading-tight"
                  style={{ fontFamily: "var(--font-anton), sans-serif" }}
                >
                  {headCoach.name}
                </h2>
                <p className="text-primary text-xs uppercase tracking-wider mb-5">{headCoach.credentials}</p>
                <p className="text-muted-foreground leading-relaxed">{headCoach.bio}</p>
              </div>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* Coaching Team */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <AnimateIn className="mb-12">
            <h2
              className="text-3xl sm:text-4xl text-foreground"
              style={{ fontFamily: "var(--font-anton), sans-serif" }}
            >
              COACHING TEAM
            </h2>
          </AnimateIn>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {coaches.map(({ name, title, bio }, i) => (
              <AnimateIn key={name} delay={i * 70}>
                <div className="group bg-card border border-border/50 rounded overflow-hidden hover:border-primary/40 hover:-translate-y-1.5 transition-[transform,border-color,box-shadow] duration-300 hover:shadow-[0_8px_40px_oklch(0.985_0_0_/_0.10)]">
                  <div className="h-48 overflow-hidden bg-card">
                    <Initials name={name} />
                  </div>
                  <div className="p-6">
                    <h3
                      className="text-xl text-foreground mb-1"
                      style={{ fontFamily: "var(--font-anton), sans-serif" }}
                    >
                      {name}
                    </h3>
                    <p className="text-xs text-primary uppercase tracking-wider mb-3">{title}</p>
                    <p className="text-sm text-muted-foreground leading-relaxed">{bio}</p>
                  </div>
                </div>
              </AnimateIn>
            ))}
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
            TRAIN WITH THE BEST.
          </h2>
          <p className="text-muted-foreground mb-8 leading-relaxed">
            Your first class is free. Come meet the team in person.
          </p>
          <Button
            render={<Link href="/free-trial" />}
            size="lg"
            className="bg-primary text-primary-foreground hover:bg-gold-dark uppercase tracking-widest text-sm px-10 py-4 h-auto transition-transform duration-200 hover:scale-[1.03]"
            style={{ fontFamily: "var(--font-anton), sans-serif" }}
          >
            Book Free Trial
          </Button>
        </div>
      </section>
    </>
  );
}
