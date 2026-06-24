import type { Metadata } from "next";
import { Anton, Montserrat } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Nav from "@/components/nav";
import Footer from "@/components/footer";
import NewsBanner from "@/components/news-banner";

const GA_MEASUREMENT_ID = "G-8NTFKP70X1";

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
        {/* Google Analytics 4 */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}', {
              page_path: window.location.pathname,
            });
          `}
        </Script>

        {/* LocalBusiness structured data for Google Business Profile */}
        <Script id="local-business-jsonld" type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SportsActivityLocation",
            name: "KV Boxing",
            description:
              "Premium boxing and martial arts gym offering boxing, Muay Thai, kickboxing, and MMA classes for all levels.",
            url: "https://kvboxing.com",
            telephone: "+15066457976",
            email: "kvboxing3@gmail.com",
            address: {
              "@type": "PostalAddress",
              streetAddress: "1 Market St",
              addressLocality: "Quispamsis",
              addressRegion: "NB",
              postalCode: "E2E 4B1",
              addressCountry: "CA",
            },
            geo: {
              "@type": "GeoCoordinates",
              latitude: "45.4334",
              longitude: "-65.9527",
            },
            openingHoursSpecification: [
              {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: ["Monday", "Wednesday", "Friday"],
                opens: "10:00",
                closes: "21:00",
              },
              {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: ["Tuesday", "Thursday"],
                opens: "17:00",
                closes: "21:00",
              },
              {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: ["Saturday"],
                opens: "09:30",
                closes: "14:00",
              },
            ],
            priceRange: "$$",
            image: "https://kvboxing.com/logo.jpg",
            sameAs: [
              "https://www.instagram.com/kvboxingclub/",
              "https://www.facebook.com/kvboxing3",
              "https://www.youtube.com/@KVBoxing",
            ],
          })}
        </Script>

        <NewsBanner />
        <Nav />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
