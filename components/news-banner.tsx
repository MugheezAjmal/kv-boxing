"use client";

import { useState } from "react";
import { X } from "lucide-react";

export default function NewsBanner() {
  const [dismissed, setDismissed] = useState(false);
  if (dismissed) return null;

  return (
    <div className="relative z-[60] bg-primary text-primary-foreground py-2.5 px-4">
      <div className="max-w-7xl mx-auto flex items-center justify-center gap-3 pr-8">
        <span className="inline-block w-2 h-2 rounded-full bg-primary-foreground animate-pulse flex-shrink-0" />
        <p className="text-xs sm:text-sm font-medium text-center leading-snug" style={{ fontFamily: "var(--font-montserrat), sans-serif" }}>
          <span className="font-bold uppercase tracking-wider mr-2">Update:</span>
          Kickboxing program has been paused indefinitely.
          <span className="mx-2 opacity-50">•</span>
          Follow our{" "}
          <a
            href="https://www.facebook.com/kvboxing3/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-2 hover:opacity-80"
          >
            Facebook page
          </a>{" "}
          for updates.
        </p>
      </div>
      <button
        onClick={() => setDismissed(true)}
        aria-label="Dismiss"
        className="absolute right-3 top-1/2 -translate-y-1/2 p-1 hover:opacity-70 transition-opacity"
      >
        <X className="h-3.5 w-3.5" />
      </button>
    </div>
  );
}
