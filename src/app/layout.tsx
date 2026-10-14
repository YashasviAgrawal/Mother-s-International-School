import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Ticker } from "@/components/Ticker";
import { Footer } from "@/components/Footer";
import { BackToTop } from "@/components/BackToTop";
import { photos, school } from "@/data/site";

const display = Cormorant_Garamond({ subsets: ["latin"], weight: ["500", "600", "700"], style: ["normal", "italic"], variable: "--font-display" });
const body = Manrope({ subsets: ["latin"], variable: "--font-body" });

export const metadata: Metadata = {
  metadataBase: new URL("https://themis.in"),
  title: {
    default: `${school.name}, New Delhi | CBSE School since 1956`,
    template: `%s | ${school.name}`,
  },
  description:
    "The Mother's International School, Sri Aurobindo Marg, New Delhi — a CBSE co-educational day school (Balvatika to Class XII) founded in 1956, offering integral education on a 9.28-acre green campus.",
  keywords: ["Mother's International School", "MIS Delhi", "CBSE school South Delhi", "nursery admission Delhi", "Sri Aurobindo Marg school", "integral education"],
  openGraph: {
    type: "website",
    siteName: school.name,
    locale: "en_IN",
    images: [{ url: photos.building, width: 1140, height: 350, alt: `${school.name} main building` }],
  },
};

export const viewport: Viewport = {
  themeColor: "#2272b6",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "School",
  name: school.name,
  foundingDate: String(school.founded),
  address: {
    "@type": "PostalAddress",
    streetAddress: school.address.line1,
    addressLocality: "New Delhi",
    postalCode: "110016",
    addressCountry: "IN",
  },
  telephone: school.phones[0],
  email: school.emails.office,
  url: "https://themis.in",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <body>
        <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-white focus:px-4 focus:py-2 focus:shadow-lift">
          Skip to content
        </a>
        <Header />
        <Ticker />
        <main id="main">{children}</main>
        <Footer />
        <BackToTop />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </body>
    </html>
  );
}
