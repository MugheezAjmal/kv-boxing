"use client";

import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    // Replace with actual form submission (GHL form, Resend, etc.)
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="bg-card border border-border/50 rounded p-8 flex flex-col items-center justify-center py-12 text-center">
        <div
          className="text-5xl text-primary mb-4"
          style={{ fontFamily: "var(--font-anton), sans-serif" }}
        >
          GOT IT.
        </div>
        <p className="text-muted-foreground text-sm leading-relaxed max-w-sm">
          Thanks for reaching out. We&apos;ll get back to you within a few
          hours. In the meantime, feel free to{" "}
          <Link href="/free-trial" className="text-primary hover:underline">
            book your free trial
          </Link>
          .
        </p>
      </div>
    );
  }

  return (
    <div className="bg-card border border-border/50 rounded p-8">
      <form onSubmit={handleSubmit} className="space-y-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="space-y-1.5">
            <Label
              htmlFor="name"
              className="text-xs uppercase tracking-wider text-muted-foreground"
            >
              Name
            </Label>
            <Input
              id="name"
              required
              placeholder="Your full name"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="bg-background border-border/60 text-foreground placeholder:text-muted-foreground/40 focus:border-primary/60"
            />
          </div>
          <div className="space-y-1.5">
            <Label
              htmlFor="phone"
              className="text-xs uppercase tracking-wider text-muted-foreground"
            >
              Phone (optional)
            </Label>
            <Input
              id="phone"
              type="tel"
              placeholder="(555) 000-0000"
              value={form.phone}
              onChange={(e) => setForm({ ...form, phone: e.target.value })}
              className="bg-background border-border/60 text-foreground placeholder:text-muted-foreground/40 focus:border-primary/60"
            />
          </div>
        </div>
        <div className="space-y-1.5">
          <Label
            htmlFor="email"
            className="text-xs uppercase tracking-wider text-muted-foreground"
          >
            Email
          </Label>
          <Input
            id="email"
            type="email"
            required
            placeholder="you@example.com"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            className="bg-background border-border/60 text-foreground placeholder:text-muted-foreground/40 focus:border-primary/60"
          />
        </div>
        <div className="space-y-1.5">
          <Label
            htmlFor="message"
            className="text-xs uppercase tracking-wider text-muted-foreground"
          >
            Message
          </Label>
          <Textarea
            id="message"
            required
            placeholder="Tell us what you're looking for..."
            rows={5}
            value={form.message}
            onChange={(e) =>
              setForm({ ...form, message: e.target.value })
            }
            className="bg-background border-border/60 text-foreground placeholder:text-muted-foreground/40 focus:border-primary/60 resize-none"
          />
        </div>
        <Button
          type="submit"
          className="w-full bg-primary text-primary-foreground hover:bg-gold-dark uppercase tracking-widest text-sm py-3 h-auto transition-transform duration-200 hover:scale-[1.02] active:scale-[0.98]"
          style={{ fontFamily: "var(--font-anton), sans-serif" }}
        >
          Send Message
        </Button>
      </form>
    </div>
  );
}
