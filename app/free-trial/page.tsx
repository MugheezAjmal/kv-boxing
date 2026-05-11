import type { Metadata } from "next";
import { CheckCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Book Your Free Trial",
  description:
    "Book your free trial class at KV Boxing. No commitment, no gear required — just show up.",
};

const reassurances = [
  "No experience needed — beginners always welcome",
  "No gear required — gloves are always provided at the gym",
  "No commitment, no credit card required",
  "Programs for kids, women, and adults — we'll match you to the right one",
  "Show up at 1 Market St, Quispamsis, NB — we'll take care of the rest",
];

export default function FreeTrialPage() {
  return (
    <>
      <section className="min-h-screen relative pt-24 pb-16 px-4 sm:px-6 lg:px-8 flex items-start">
        <div
          className="absolute inset-0 opacity-10 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 70% 60% at 30% 40%, oklch(0.985 0 0 / 0.4) 0%, transparent 60%)",
          }}
        />

        <div className="relative w-full max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start pt-8">
            {/* Left: copy + reassurances */}
            <div>
              <p className="text-xs uppercase tracking-widest text-primary font-medium mb-4">
                Start Here
              </p>
              <h1
                className="text-5xl sm:text-6xl text-foreground leading-tight mb-6"
                style={{ fontFamily: "var(--font-anton), sans-serif" }}
              >
                YOUR FIRST CLASS
                <br />
                <span className="text-primary">IS FREE.</span>
              </h1>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                Pick a class, show up, and let the gym speak for itself. No
                pressure, no pitch, no commitment. Just the best hour of
                training you&apos;ve had.
              </p>

              <ul className="space-y-3 mb-10">
                {reassurances.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>

              <div className="bg-card border border-border/50 rounded p-5">
                <p className="text-xs uppercase tracking-widest text-muted-foreground font-medium mb-2">
                  Find Us
                </p>
                <p className="text-sm text-muted-foreground mb-2">
                  <strong className="text-foreground">1 Market St, Quispamsis, NB</strong>
                </p>
                <p className="text-sm text-muted-foreground">
                  Questions? Email us at{" "}
                  <a
                    href="mailto:info@kvboxing.com"
                    className="text-primary hover:underline"
                  >
                    info@kvboxing.com
                  </a>
                </p>
              </div>
            </div>

            {/* Right: GHL calendar embed */}
            <div className="bg-card border border-border/50 rounded overflow-hidden">
              <div className="bg-surface-elevated border-b border-border/50 px-6 py-4">
                <p className="text-xs uppercase tracking-widest text-muted-foreground font-medium">
                  Select a Class &amp; Time
                </p>
              </div>

              {/*
                Replace this div with your GHL calendar embed:
                <iframe
                  src="YOUR_GHL_FREE_TRIAL_CALENDAR_URL"
                  width="100%"
                  height="600"
                  frameBorder="0"
                  title="Book Free Trial"
                />
              */}
              <div className="flex flex-col items-center justify-center py-24 px-8 text-center">
                <div
                  className="text-4xl text-primary/20 mb-4"
                  style={{ fontFamily: "var(--font-anton), sans-serif" }}
                >
                  BOOK HERE
                </div>
                <p className="text-muted-foreground mb-2 text-sm">
                  GHL calendar booking widget goes here.
                </p>
                <p className="text-muted-foreground/60 text-xs max-w-sm">
                  Replace this with your GoHighLevel free trial calendar embed
                  (iframe or JS widget).
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
