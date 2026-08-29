import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://maella.fr"),
  title: "MAELLA — Du produit à la production",
  description:
    "MAELLA déploie, connecte et exploite vos applications SaaS : infrastructure, automatisation, intégrations et mise en production.",
  keywords: [
    "déploiement SaaS",
    "mise en production",
    "infrastructure",
    "automatisation",
    "applications métier",
    "cloud",
  ],
  authors: [{ name: "MAELLA", url: "https://maella.fr" }],
  creator: "MAELLA",
  publisher: "MAELLA",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "/",
    siteName: "MAELLA",
    title: "MAELLA — Votre produit. En production.",
    description:
      "Déploiement SaaS, infrastructure, automatisation et intégrations. Du produit à son exploitation.",
  },
  twitter: {
    card: "summary_large_image",
    title: "MAELLA — Votre produit. En production.",
    description:
      "Déploiement SaaS, infrastructure, automatisation et intégrations.",
  },
};

export const viewport: Viewport = {
  themeColor: "#0b0c0e",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body>{children}</body>
    </html>
  );
}
