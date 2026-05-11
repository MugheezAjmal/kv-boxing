import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import AnimateIn from "@/components/animate-in";

export const metadata: Metadata = {
  title: "Policies",
  description:
    "KV Boxing gym policies — membership, payment, attendance, cancellation, safety, and liability.",
};

const policies = [
  {
    number: "01",
    title: "Registration & Annual Fee",
    body: "All participants must complete the Canadian Amateur Boxing Application for Registration. An annual Boxing NB fee applies: $30 for recreational members, or $70 for competitors, coaches, and officials. This fee covers registration, insurance, and program eligibility — we handle the paperwork, you just pay the fee.",
  },
  {
    number: "02",
    title: "Payment",
    body: "Membership fees are billed monthly and must be paid on time. Payments are non-refundable once processed. Any one-time fees (such as registration or sign-up fees) are clearly stated upfront before you join.",
  },
  {
    number: "03",
    title: "Attendance & Booking",
    body: "Members are encouraged to pre-book classes where required. Late arrivals may be denied entry to protect class quality and flow. Some programs have limited spots — book early to secure your place.",
  },
  {
    number: "04",
    title: "Cancellation & Membership Hold",
    body: "Members who wish to cancel must provide 30 days' written notice before the next billing date. Memberships can also be placed on hold for up to 2 months with prior notice — great if you're travelling or recovering from injury.",
  },
  {
    number: "05",
    title: "Health & Safety",
    body: "All members are expected to follow gym rules and maintain personal hygiene. KV Boxing reserves the right to refuse access to anyone who poses a risk to themselves, other members, or staff. Your safety — and everyone else's — comes first.",
  },
  {
    number: "06",
    title: "Code of Conduct",
    body: "Respect is non-negotiable. Every member, coach, and staff member deserves to train and work in a safe, supportive environment. Disrespectful, aggressive, or disruptive behaviour will result in immediate suspension or permanent removal from the gym — no exceptions.",
  },
  {
    number: "07",
    title: "Liability Waiver",
    body: "Boxing is a contact sport and carries inherent physical risk. All members participate at their own risk and must sign a liability waiver upon joining. KV Boxing is not responsible for injuries sustained during training, sparring, or any gym activity.",
  },
];

export default function PoliciesPage() {
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
            Gym Policies
          </p>
          <h1
            className="text-5xl sm:text-6xl lg:text-7xl text-foreground leading-tight mb-6"
            style={{ fontFamily: "var(--font-anton), sans-serif" }}
          >
            CLEAR RULES.
            <br />
            <span className="text-primary">NO SURPRISES.</span>
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl leading-relaxed">
            We keep things simple and transparent. Here&apos;s how KV Boxing operates so every member knows exactly what to expect.
          </p>
        </AnimateIn>
      </section>

      {/* Policies */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto space-y-6">
          {policies.map(({ number, title, body }, i) => (
            <AnimateIn key={number} delay={i * 60}>
              <div className="group bg-card border border-border/50 rounded p-7 hover:border-primary/30 hover:-translate-y-0.5 transition-[transform,border-color,box-shadow] duration-300 hover:shadow-[0_8px_32px_oklch(0.985_0_0_/_0.08)]">
                <div className="flex items-start gap-5">
                  <span
                    className="text-4xl text-primary/30 leading-none flex-shrink-0 mt-0.5"
                    style={{ fontFamily: "var(--font-anton), sans-serif" }}
                  >
                    {number}
                  </span>
                  <div>
                    <h2
                      className="text-xl text-foreground mb-3"
                      style={{ fontFamily: "var(--font-anton), sans-serif" }}
                    >
                      {title}
                    </h2>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {body}
                    </p>
                  </div>
                </div>
              </div>
            </AnimateIn>
          ))}
        </div>
      </section>

      {/* Questions CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 text-center">
        <h2
          className="text-3xl sm:text-4xl text-foreground mb-4"
          style={{ fontFamily: "var(--font-anton), sans-serif" }}
        >
          QUESTIONS ABOUT OUR POLICIES?
        </h2>
        <p className="text-muted-foreground mb-8 max-w-lg mx-auto leading-relaxed">
          We&apos;re happy to walk you through anything before you join. Reach out and we&apos;ll get back to you same day.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button
            render={<Link href="/contact" />}
            size="lg"
            className="bg-primary text-primary-foreground hover:bg-gold-dark uppercase tracking-widest text-sm px-10 py-4 h-auto transition-transform duration-200 hover:scale-[1.03]"
            style={{ fontFamily: "var(--font-anton), sans-serif" }}
          >
            Contact Us
          </Button>
          <Button
            render={<Link href="/free-trial" />}
            size="lg"
            variant="outline"
            className="border-border/60 text-foreground hover:bg-foreground/5 uppercase tracking-widest text-sm px-8 py-4 h-auto"
          >
            Book Free Trial
          </Button>
        </div>
      </section>
    </>
  );
}
