import { type Viewport, type Metadata } from "next";
import { Inter } from "next/font/google";

import "~/lib/style/main.css";
import { SiteConfig } from "~/lib/config";

const interFont = Inter({
  display: "swap",
  subsets: ["latin"],
  variable: "--font-inter",
});

export const viewport: Viewport = {
  themeColor: "#ffffff",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(SiteConfig.baseUrl),
  title: {
    default: SiteConfig.title,
    template: `%s | ${SiteConfig.title}`,
  },
  description: SiteConfig.description,
  alternates: {
    canonical: SiteConfig.baseUrl,
  },
  manifest: "/site.webmanifest",
  icons: {
    icon: [{ url: "/favicon-96x96.png", sizes: "96x96" }],
    apple: {
      url: "/apple-touch-icon.png",
      sizes: "180x180",
    },
  },
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: {
      index: false,
      follow: false,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${interFont.variable}`}>
      <body>{children}</body>
    </html>
  );
}
