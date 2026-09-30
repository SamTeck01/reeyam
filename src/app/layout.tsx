import type { Metadata, Viewport } from "next";
import type { CSSProperties, ReactNode } from "react";
import { Newsreader, IBM_Plex_Mono } from "next/font/google";
import { site } from "@/content/site";
import "./globals.css";

const newsreader = Newsreader({
  subsets: ["latin"],
  weight: "variable",
  style: ["normal", "italic"],
  axes: ["opsz"],
  display: "swap",
  variable: "--font-newsreader",
});
const plex = IBM_Plex_Mono({ subsets: ["latin"], weight: ["400", "500"], display: "swap", variable: "--font-plex" });

export const metadata: Metadata = {
  title: site.meta.title,
  description: site.meta.description,
  robots: { index: false, follow: false },
  openGraph: {
    title: site.meta.title,
    description: site.meta.description,
    type: "website",
    ...(site.hero.photo.src ? { images: [{ url: site.hero.photo.src }] } : {}),
  },
};

export const viewport: Viewport = { themeColor: site.colors.paper, viewportFit: "cover" };

const vars = Object.fromEntries(Object.entries(site.colors).map(([k, v]) => [`--c-${k}`, v])) as CSSProperties;

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" style={vars} className={`${newsreader.variable} ${plex.variable}`}>
      <body>{children}</body>
    </html>
  );
}
