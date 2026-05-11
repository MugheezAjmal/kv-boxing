import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import AnimateIn from "@/components/animate-in";
import { MapPin, Clock, Ticket, Calendar } from "lucide-react";

export const metadata: Metadata = {
  title: "Events",
  description:
    "KV Boxing events — live amateur boxing nights, competitions, and community events in Quispamsis, NB.",
};

export default function EventsPage() {
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
            Events
          </p>
          <h1
            className="text-5xl sm:text-6xl lg:text-7xl text-foreground leading-tight mb-6"
            style={{ fontFamily: "var(--font-anton), sans-serif" }}
          >
            LIVE BOXING.
            <br />
            <span className="text-primary">REAL ACTION.</span>
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl leading-relaxed">
            From amateur bouts to community fight nights — KV Boxing brings live boxing to the KV region.
          </p>
        </AnimateIn>
      </section>

      {/* Past Event: Hampton Throwdown */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 border-t border-border/50">
        <div className="max-w-5xl mx-auto">
          <AnimateIn>
            <div className="flex items-center gap-3 mb-8">
              <h2
                className="text-2xl text-foreground"
                style={{ fontFamily: "var(--font-anton), sans-serif" }}
              >
                PAST EVENTS
              </h2>
              <div className="flex-1 h-px bg-border/50" />
            </div>
          </AnimateIn>

          <AnimateIn delay={80}>
            <div className="bg-card border border-border/50 rounded overflow-hidden hover:border-primary/30 transition-[border-color,box-shadow] duration-300 hover:shadow-[0_8px_40px_oklch(0.985_0_0_/_0.10)]">
              {/* Event Header */}
              <div className="relative bg-gradient-to-br from-card to-background border-b border-border/50 p-8 lg:p-10">
                <div
                  className="absolute inset-0 opacity-5"
                  style={{
                    background:
                      "radial-gradient(ellipse 80% 80% at 50% 50%, oklch(0.985 0 0 / 1) 0%, transparent 70%)",
                  }}
                />
                <div className="relative flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                  <div>
                    <Badge className="bg-primary/10 text-primary border border-primary/30 text-xs uppercase tracking-wider mb-3">
                      Past Event
                    </Badge>
                    <h3
                      className="text-3xl sm:text-4xl text-foreground leading-tight"
                      style={{ fontFamily: "var(--font-anton), sans-serif" }}
                    >
                      Hampton Throwdown
                    </h3>
                    <p className="text-primary text-sm uppercase tracking-wider mt-1">
                      Live Amateur Boxing Night
                    </p>
                  </div>
                </div>
              </div>

              {/* Event Details */}
              <div className="p-8 lg:p-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 border-b border-border/50">
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 flex-shrink-0 flex items-center justify-center rounded bg-primary/10 text-primary">
                    <Calendar className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground uppercase tracking-wider mb-0.5">Date</p>
                    <p className="text-foreground text-sm font-medium">Saturday, May 10, 2025</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 flex-shrink-0 flex items-center justify-center rounded bg-primary/10 text-primary">
                    <Clock className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground uppercase tracking-wider mb-0.5">Time</p>
                    <p className="text-foreground text-sm font-medium">Doors 6:00 PM · First Bout 7:00 PM</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 flex-shrink-0 flex items-center justify-center rounded bg-primary/10 text-primary">
                    <MapPin className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground uppercase tracking-wider mb-0.5">Venue</p>
                    <p className="text-foreground text-sm font-medium">Mike Murphy Memorial Field House</p>
                    <p className="text-muted-foreground text-xs">(formerly Hampton Community Centre)</p>
                  </div>
                </div>
              </div>

              {/* Ticket Tiers */}
              <div className="p-8 lg:p-10 border-b border-border/50">
                <div className="flex items-center gap-2 mb-5">
                  <Ticket className="h-4 w-4 text-primary" />
                  <h4
                    className="text-base text-foreground"
                    style={{ fontFamily: "var(--font-anton), sans-serif" }}
                  >
                    TICKET OPTIONS
                  </h4>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {[
                    { tier: "General Admission", price: "$25", detail: "Per person" },
                    { tier: "Secondary Tables", price: "$250", detail: "Up to 8 people" },
                    { tier: "Ringside Tables", price: "$300", detail: "Best view · Up to 8 people", featured: true },
                  ].map(({ tier, price, detail, featured }) => (
                    <div
                      key={tier}
                      className={`rounded p-4 border ${
                        featured
                          ? "border-primary/50 bg-primary/5"
                          : "border-border/50 bg-background/40"
                      }`}
                    >
                      {featured && (
                        <Badge className="bg-primary text-primary-foreground text-xs mb-2">Best View</Badge>
                      )}
                      <p
                        className="text-2xl text-foreground mb-0.5"
                        style={{ fontFamily: "var(--font-anton), sans-serif" }}
                      >
                        {price}
                      </p>
                      <p className="text-sm text-foreground font-medium">{tier}</p>
                      <p className="text-xs text-muted-foreground mt-0.5">{detail}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Highlight video */}
              <div className="p-8 lg:p-10">
                <h4
                  className="text-base text-foreground mb-5"
                  style={{ fontFamily: "var(--font-anton), sans-serif" }}
                >
                  EVENT HIGHLIGHTS
                </h4>
                <div className="relative w-full rounded overflow-hidden bg-black" style={{ paddingBottom: "56.25%" }}>
                  <iframe
                    className="absolute inset-0 w-full h-full"
                    src="https://www.youtube.com/embed/videoseries?list=PLxxxxxxx"
                    title="Hampton Throwdown Highlights"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
                <p className="text-xs text-muted-foreground mt-3">
                  Video coming soon — check our{" "}
                  <a
                    href="https://www.facebook.com/kvboxing3/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    Facebook page
                  </a>{" "}
                  for the latest.
                </p>
              </div>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* Stay Updated CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 text-center">
        <h2
          className="text-4xl sm:text-5xl text-foreground mb-4"
          style={{ fontFamily: "var(--font-anton), sans-serif" }}
        >
          STAY IN THE LOOP.
        </h2>
        <p className="text-muted-foreground mb-8 max-w-lg mx-auto leading-relaxed">
          Follow us on Facebook for upcoming fight nights, event announcements, and gym news.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a
            href="https://www.facebook.com/kvboxing3/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center bg-primary text-primary-foreground hover:bg-gold-dark uppercase tracking-widest text-sm px-10 py-4 h-auto rounded transition-[transform,background-color] duration-200 hover:scale-[1.03]"
            style={{ fontFamily: "var(--font-anton), sans-serif" }}
          >
            Follow on Facebook
          </a>
          <Button
            render={<Link href="/contact" />}
            size="lg"
            variant="outline"
            className="border-border/60 text-foreground hover:bg-foreground/5 uppercase tracking-widest text-sm px-8 py-4 h-auto"
          >
            Contact Us
          </Button>
        </div>
      </section>
    </>
  );
}
