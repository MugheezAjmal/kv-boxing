import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import ContactForm from "@/components/contact-form";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with KV Boxing — location, hours, phone, email, or send us a message.",
};

const hours = [
  { day: "Monday – Wednesday", time: "Classes at 7:00 PM & 8:00 PM" },
  { day: "Monday, Wed, Fri", time: "Fight Like a Girl at 10:30 AM" },
  { day: "Weekday evenings", time: "Fight Like a Girl at 5:50 PM" },
  { day: "Saturday", time: "9:30 AM · 10:15 AM · 1:00 PM" },
];

export default function ContactPage() {
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
        <div className="relative max-w-7xl mx-auto">
          <p className="text-xs uppercase tracking-widest text-primary font-medium mb-4">
            Get In Touch
          </p>
          <h1
            className="text-5xl sm:text-6xl lg:text-7xl text-foreground leading-tight mb-6"
            style={{ fontFamily: "var(--font-anton), sans-serif" }}
          >
            WE&apos;D LOVE TO
            <br />
            <span className="text-primary">HEAR FROM YOU</span>
          </h1>
          <p className="text-muted-foreground text-lg max-w-xl leading-relaxed">
            Questions about programs, pricing, or your first visit? Drop us a
            message and we&apos;ll get back to you same day.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 pb-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Form (client component) */}
          <ContactForm />

          {/* Info */}
          <div className="space-y-6">
            {/* Location */}
            <div className="bg-card border border-border/50 rounded p-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 flex-shrink-0 flex items-center justify-center rounded bg-primary/10 text-primary">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <h3
                    className="text-sm text-foreground mb-1"
                    style={{ fontFamily: "var(--font-anton), sans-serif" }}
                  >
                    Location
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    1 Market St
                    <br />
                    Quispamsis, NB
                  </p>
                  <a
                    href="https://maps.google.com/?q=1+Market+St,+Quispamsis,+NB"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-primary hover:underline mt-2 inline-block"
                  >
                    Get directions →
                  </a>
                </div>
              </div>
            </div>

            {/* Phone & Email */}
            <div className="bg-card border border-border/50 rounded p-6 space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 flex-shrink-0 flex items-center justify-center rounded bg-primary/10 text-primary">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground uppercase tracking-wider mb-0.5">
                    Phone
                  </p>
                  <a
                    href="tel:+15551234567"
                    className="text-foreground text-sm hover:text-primary transition-colors"
                  >
                    (555) 123-4567
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 flex-shrink-0 flex items-center justify-center rounded bg-primary/10 text-primary">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground uppercase tracking-wider mb-0.5">
                    Email
                  </p>
                  <a
                    href="mailto:info@kvboxing.com"
                    className="text-foreground text-sm hover:text-primary transition-colors"
                  >
                    info@kvboxing.com
                  </a>
                </div>
              </div>
            </div>

            {/* Hours */}
            <div className="bg-card border border-border/50 rounded p-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 flex-shrink-0 flex items-center justify-center rounded bg-primary/10 text-primary">
                  <Clock className="h-5 w-5" />
                </div>
                <div className="flex-1">
                  <h3
                    className="text-sm text-foreground mb-3"
                    style={{ fontFamily: "var(--font-anton), sans-serif" }}
                  >
                    Gym Hours
                  </h3>
                  <div className="space-y-2">
                    {hours.map(({ day, time }) => (
                      <div
                        key={day}
                        className="flex justify-between items-center text-sm"
                      >
                        <span className="text-muted-foreground">{day}</span>
                        <span className="text-foreground font-medium">
                          {time}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Map placeholder */}
            <div className="bg-card border border-border/50 rounded overflow-hidden">
              <div className="h-48 flex items-center justify-center bg-card text-muted-foreground/40">
                {/* Replace with: <iframe src="YOUR_GOOGLE_MAPS_EMBED" width="100%" height="192" frameBorder="0" /> */}
                <div className="text-center">
                  <MapPin className="h-8 w-8 mx-auto mb-2 opacity-20" />
                  <p className="text-xs">Google Maps embed goes here</p>
                </div>
              </div>
            </div>

            <Button
              className="w-full bg-primary text-primary-foreground hover:bg-gold-dark uppercase tracking-widest text-xs py-3 h-auto transition-transform duration-200 hover:scale-[1.02]"
              style={{ fontFamily: "var(--font-anton), sans-serif" }}
              render={<Link href="/free-trial" />}
            >
              Book Your Free Trial
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
