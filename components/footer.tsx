import Link from "next/link";
import Image from "next/image";

const navLinks = [
  { href: "/programs", label: "Programs" },
  { href: "/schedule", label: "Schedule" },
  { href: "/pricing", label: "Pricing" },
  { href: "/free-trial", label: "Free Trial" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
  { href: "/shop", label: "Shop" },
];

const socialLinks = [
  {
    href: "https://instagram.com/kvboxing",
    label: "Instagram",
    abbr: "IG",
  },
  {
    href: "https://facebook.com/kvboxing",
    label: "Facebook",
    abbr: "FB",
  },
  {
    href: "https://youtube.com/kvboxing",
    label: "YouTube",
    abbr: "YT",
  },
];

export default function Footer() {
  return (
    <footer className="bg-card border-t border-border/50 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <Image
              src="/logo.jpg"
              alt="KV Boxing"
              width={160}
              height={48}
              className="h-10 w-auto object-contain"
            />
            <p className="text-muted-foreground text-sm leading-relaxed max-w-xs">
              Discipline. Strength. Focus. Results. Train with purpose at KV
              Boxing — where champions are built.
            </p>
            <div className="flex items-center gap-3 pt-2">
              {socialLinks.map(({ href, label, abbr }) => (
                <a
                  key={href}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 flex items-center justify-center rounded border border-border/60 text-muted-foreground text-xs font-bold tracking-wider hover:text-primary hover:border-primary/60 transition-colors duration-200"
                >
                  {abbr}
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-xs font-medium uppercase tracking-widest text-muted-foreground mb-5">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xs font-medium uppercase tracking-widest text-muted-foreground mb-5">
              Contact
            </h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li>1 Market St, Quispamsis, NB</li>
              <li>
                <a
                  href="mailto:info@kvboxing.com"
                  className="hover:text-foreground transition-colors"
                >
                  info@kvboxing.com
                </a>
              </li>
              <li className="pt-1">
                <span className="text-xs uppercase tracking-wider text-muted-foreground/60">
                  Classes
                </span>
                <p className="mt-1">Mon–Wed: 7 PM &amp; 8 PM</p>
                <p>Saturdays: 9:30 AM, 10:15 AM, 1 PM</p>
                <p>Fight Like a Girl: 5 days/week</p>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border/40 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted-foreground/60">
          <p>© {new Date().getFullYear()} KV Boxing. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <Link
              href="/privacy"
              className="hover:text-muted-foreground transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="hover:text-muted-foreground transition-colors"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
