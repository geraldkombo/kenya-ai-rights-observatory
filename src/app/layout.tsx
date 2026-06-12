import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const siteName = "Kenya Digital Rights Risk Atlas";
const siteUrl = "https://geraldkombo.github.io/kenya-ai-rights-observatory/";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteName,
    template: `%s | ${siteName}`,
  },
  description:
    "Mapping surveillance infrastructure, data privacy risks, and digital rights across Kenya's 47 counties using open data.",
  openGraph: {
    title: siteName,
    description:
      "Mapping surveillance infrastructure, data privacy risks, and digital rights across Kenya's 47 counties.",
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
      "Mapping surveillance infrastructure, data privacy risks, and digital rights across Kenya's 47 counties.",
    images: ["/og-image.svg"],
  },
  icons: {
    icon: [
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/icons/icon-192.png", type: "image/png", sizes: "192x192" },
      { url: "/icons/icon-512.png", type: "image/png", sizes: "512x512" },
    ],
    apple: [
      { url: "/icons/icon-192.png", sizes: "192x192", type: "image/png" },
    ],
  },
  other: {
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "default",
    "apple-mobile-web-app-title": "Digital Rights KE",
    "mobile-web-app-capable": "yes",
  },
  robots: { index: true, follow: true },
};

const BASE = "/kenya-ai-rights-observatory";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} antialiased`}>
      <head>
        <link rel="manifest" href={`${BASE}/manifest.json`} />
        <meta httpEquiv="Cache-Control" content="no-cache, no-store, must-revalidate" />
      </head>
      <body className="min-h-[100svh] bg-stone-50 text-stone-800">
        <Header />
        <main>{children}</main>
        <script
          dangerouslySetInnerHTML={{
            __html: `if("serviceWorker"in navigator){window.addEventListener("load",function(){navigator.serviceWorker.register("${BASE}/sw.js",{updateViaCache:"none"}).catch(function(){})})}`,
          }}
        />
      </body>
    </html>
  );
}
