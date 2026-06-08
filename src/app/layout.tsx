import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const siteName = "Kenya AI & Digital Rights Observatory";
const siteUrl = "https://geraldkombo.github.io/kenya-ai-rights-observatory/";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteName,
    template: `%s | ${siteName}`,
  },
  description:
    "Mapping algorithmic systems, surveillance infrastructure, and digital rights risks across Kenya's 47 counties using open data.",
  openGraph: {
    title: siteName,
    description:
      "Mapping algorithmic systems, surveillance infrastructure, and digital rights risks across Kenya's 47 counties.",
    url: siteUrl,
    locale: "en_KE",
    siteName,
    type: "website",
    images: [{ url: "/og-image.svg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: siteName,
    description:
      "Mapping algorithmic systems, surveillance infrastructure, and digital rights risks across Kenya's 47 counties.",
    images: ["/og-image.svg"],
  },
  icons: {
    icon: { url: "/icon.svg", type: "image/svg+xml" },
    apple: { url: "/icon-192.svg", type: "image/svg+xml" },
  },
  manifest: "/manifest.json",
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} antialiased`}>
      <body className="min-h-[100svh] bg-[#FDFBF7] text-[#292524]">
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
