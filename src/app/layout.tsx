import type { Metadata } from "next";
import { Playfair_Display, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { LangProvider } from "@/context/LangContext";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  weight: ["700", "900"],
  style: ["normal", "italic"],
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Compile | Sigorta Yazılım Çözümleri",
  description:
    "Compile, sigorta sektörüne özel yazılım çözümleri geliştiren 20 yıllık deneyimli bir teknoloji şirketidir. Provizyon sistemleri, anlaşmalı kurum yönetimi, e-fatura entegrasyonu ve daha fazlası.",
  keywords: [
    "sigorta yazılımı",
    "provizyon sistemi",
    "anlaşmalı kurum yönetimi",
    "e-fatura entegrasyonu",
    "sigorta teknolojisi",
    "insurance software",
    "health insurance platform",
  ],
  authors: [{ name: "Compile" }],
  openGraph: {
    title: "Compile | Sigorta Yazılım Çözümleri",
    description:
      "Sigorta sektörüne özel provizyon, e-fatura, anlaşmalı kurum yönetimi ve daha fazlası.",
    url: "https://compile.com.tr",
    siteName: "Compile",
    locale: "tr_TR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Compile | Sigorta Yazılım Çözümleri",
    description:
      "Sigorta sektörüne özel provizyon, e-fatura, anlaşmalı kurum yönetimi ve daha fazlası.",
  },
  icons: {
    icon: "/favicon.ico",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${playfair.variable} ${jakarta.variable}`}
        suppressHydrationWarning
      >
        <LangProvider>{children}</LangProvider>
      </body>
    </html>
  );
}
