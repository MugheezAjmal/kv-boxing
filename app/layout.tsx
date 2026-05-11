import type { Metadata } from "next";
import { Anton, Montserrat } from "next/font/google";
import "./globals.css";
import Nav from "@/components/nav";
import Footer from "@/components/footer";
import NewsBanner from "@/components/news-banner";

const anton = Anton({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-anton",
  display: "swap",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "KV Boxing | Premium Boxing & Martial Arts Gym",
    template: "%s | KV Boxing",
  },
  description:
    "Train with the best. KV Boxing offers world-class boxing, Muay Thai, kickboxing, and MMA classes. Book your free trial today.",
  keywords: [
    "boxing gym",
    "Muay Thai",
    "kickboxing",
    "MMA",
    "martial arts",
    "KV Boxing",
    "boxing classes",
    "fight gym",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "KV Boxing",
    title: "KV Boxing | Premium Boxing & Martial Arts Gym",
    description:
      "Train with the best. KV Boxing offers world-class boxing, Muay Thai, kickboxing, and MMA classes. Book your free trial today.",
  },
  twitter: {
    card: "summary_large_image",
    title: "KV Boxing | Premium Boxing & Martial Arts Gym",
    description:
      "Train with the best. KV Boxing offers world-class boxing, Muay Thai, kickboxing, and MMA classes.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${anton.variable} ${montserrat.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <NewsBanner />
        <Nav />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
