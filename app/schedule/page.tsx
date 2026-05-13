import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import BookingWidget from "@/components/booking-widget";

export const metadata: Metadata = {
  title: "Schedule",
  description:
    "KV Boxing weekly class schedule — Little Ninjas, Silver Gloves, Amateur Boxing, Adult Boxing, Fight Like a Girl, and Kickboxing.",
};

const schedule = [
  {
    day: "Monday",
    classes: [
      { time: "10:30 AM", program: "Fight Like a Girl", note: "Morning session" },
      { time: "5:50 PM", program: "Fight Like a Girl", note: "Evening session" },
      { time: "7:00 PM", program: "Amateur & Competitive Boxing", note: "Ages 8+" },
      { time: "8:00 PM", program: "Adult Boxing", note: "Ages 16+" },
      { time: "8:00 PM", program: "Kickboxing", note: "Ages 16+" },
    ],
  },
  {
    day: "Tuesday",
    classes: [
      { time: "5:50 PM", program: "Fight Like a Girl", note: "Evening session" },
      { time: "7:00 PM", program: "Amateur & Competitive Boxing", note: "Ages 8+" },
      { time: "8:00 PM", program: "Adult Boxing", note: "Ages 16+" },
    ],
  },
  {
    day: "Wednesday",
    classes: [
      { time: "10:30 AM", program: "Fight Like a Girl", note: "Morning session" },
      { time: "5:50 PM", program: "Fight Like a Girl", note: "Evening session" },
      { time: "7:00 PM", program: "Amateur & Competitive Boxing", note: "Ages 8+" },
      { time: "8:00 PM", program: "Adult Boxing", note: "Ages 16+" },
      { time: "8:00 PM", program: "Kickboxing", note: "Ages 16+" },
    ],
  },
  {
    day: "Thursday",
    classes: [
      { time: "5:50 PM", program: "Fight Like a Girl", note: "Evening session" },
      { time: "8:00 PM", program: "Adult Boxing", note: "Ages 16+" },
    ],
  },
  {
    day: "Friday",
    classes: [
      { time: "10:30 AM", program: "Fight Like a Girl", note: "Morning session" },
      { time: "5:50 PM", program: "Fight Like a Girl", note: "Evening session" },
    ],
  },
  {
    day: "Saturday",
    classes: [
      { time: "9:30 AM", program: "Little Ninjas", note: "Ages 3–5" },
      { time: "10:15 AM", program: "Fight Like a Girl", note: "Saturday morning session" },
      { time: "1:00 PM", program: "Silver Gloves", note: "Ages 5–7" },
    ],
  },
];

const programColors: Record<string, string> = {
  "Fight Like a Girl": "text-primary border-primary/30 bg-primary/10",
  "Little Ninjas": "text-amber-400 border-amber-400/30 bg-amber-400/10",
  "Silver Gloves": "text-amber-400 border-amber-400/30 bg-amber-400/10",
  "Amateur & Competitive Boxing": "text-foreground border-border/60 bg-card",
  "Adult Boxing": "text-foreground border-border/60 bg-card",
  "Kickboxing": "text-foreground border-border/60 bg-card",
};

export default function SchedulePage() {
  return (
    <>
      {/* Header */}
      <section className="relative pt-32 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            background:
              "radial-gradient(ellipse 60% 60% at 80% 50%, oklch(0.985 0 0 / 0.4) 0%, transparent 60%)",
          }}
        />
        <div className="relative max-w-7xl mx-auto">
          <p className="text-xs uppercase tracking-widest text-primary font-medium mb-4">
            Class Schedule
          </p>
          <h1
            className="text-5xl sm:text-6xl lg:text-7xl text-foreground leading-tight mb-6"
            style={{ fontFamily: "var(--font-anton), sans-serif" }}
          >
            FIND A CLASS
            <br />
            <span className="text-primary">THAT FITS</span>
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl leading-relaxed">
            Classes running Monday through Saturday across all programs. Morning
            and evening options available. Something for everyone, every day.
          </p>
        </div>
      </section>

      {/* Schedule */}
      <section className="py-8 px-4 sm:px-6 lg:px-8 pb-20">
        <div className="max-w-7xl mx-auto">

          {/* GHL Live Booking Widget */}
          <div className="bg-card border border-border/50 rounded overflow-hidden mb-12">
            <div className="bg-card border-b border-border/50 px-6 py-4">
              <p className="text-xs uppercase tracking-widest text-muted-foreground font-medium">
                Book a Class Online
              </p>
            </div>
            <BookingWidget minHeight={800} />
          </div>

          {/* Weekly overview */}
          <h2
            className="text-2xl text-foreground mb-6"
            style={{ fontFamily: "var(--font-anton), sans-serif" }}
          >
            WEEKLY CLASS OVERVIEW
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
            {schedule.map(({ day, classes }) => (
              <div
                key={day}
                className="bg-card border border-border/50 rounded p-5"
              >
                <h3
                  className="text-lg text-primary mb-4 pb-3 border-b border-border/50"
                  style={{ fontFamily: "var(--font-anton), sans-serif" }}
                >
                  {day}
                </h3>
                <div className="space-y-2">
                  {classes.map(({ time, program, note }) => (
                    <div
                      key={`${time}-${program}`}
                      className={`flex items-start gap-2 rounded border px-2.5 py-2 text-xs ${
                        programColors[program] ?? "text-foreground border-border/40 bg-card"
                      }`}
                    >
                      <span className="font-bold shrink-0 w-16">{time}</span>
                      <div>
                        <div className="font-medium">{program}</div>
                        <div className="opacity-60">{note}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Legend */}
          <div className="bg-card border border-border/50 rounded p-5 mb-10">
            <h3 className="text-xs uppercase tracking-widest text-muted-foreground font-medium mb-3">
              Program Notes
            </h3>
            <ul className="text-sm text-muted-foreground space-y-1.5">
              <li>• <strong className="text-foreground">Little Ninjas</strong> (Ages 3–5) — Saturdays only</li>
              <li>• <strong className="text-foreground">Silver Gloves</strong> (Ages 5–7) — Saturdays only</li>
              <li>• <strong className="text-foreground">Fight Like a Girl</strong> — Women only, multiple times weekly</li>
              <li>• <strong className="text-foreground">Amateur Boxing</strong> — Ages 8+, runs same slot as Competitive Boxing</li>
              <li>• <strong className="text-foreground">Adult Boxing & Kickboxing</strong> — Ages 16+, some sessions share the floor</li>
              <li>• All times are subject to change — check the booking calendar above for live availability</li>
            </ul>
          </div>

          <div className="text-center">
            <Button
              render={<Link href="/free-trial" />}
              className="bg-primary text-primary-foreground hover:bg-gold-dark uppercase tracking-widest text-sm px-10 py-3 h-auto transition-transform duration-200 hover:scale-[1.03] active:scale-[0.97]"
              style={{ fontFamily: "var(--font-anton), sans-serif" }}
            >
              Book Your First Class Free
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
