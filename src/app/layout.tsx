import type { Metadata, Viewport } from "next";
import { Fraunces, Figtree, IBM_Plex_Mono } from "next/font/google";
import { site } from "@/content/site";
import { Announcement } from "@/components/layout/Announcement";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { RevealObserver } from "@/components/ui/RevealObserver";
import "@/styles/globals.css";

const fraunces = Fraunces({ subsets: ["latin"], variable: "--font-fraunces", axes: ["SOFT", "WONK", "opsz"], style: ["normal", "italic"] });
const figtree = Figtree({ subsets: ["latin"], variable: "--font-figtree" });
const plexMono = IBM_Plex_Mono({ subsets: ["latin"], weight: ["400", "500"], variable: "--font-plex-mono" });

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: `${site.name} — Helping independent pharmacies grow`, template: `%s · ${site.name}` },
  description: site.description,
  icons: { icon: "/images/brand/upn-logo.png" },
  openGraph: { type: "website", siteName: site.name, images: ["/images/site/hero-banner.png"] },
};

export const viewport: Viewport = { themeColor: "#f5f0e6" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${fraunces.variable} ${figtree.variable} ${plexMono.variable}`}>
      <body>
        <Announcement />
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <RevealObserver />
      </body>
    </html>
  );
}
