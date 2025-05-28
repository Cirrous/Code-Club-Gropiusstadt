import type { Metadata } from "next";
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
  title: "Code Club Gropiusstadt - Programmieren lernen für Kinder und Jugendliche",
  description: "Kostenloser Programmierclub für Kinder und Jugendliche von 7-17 Jahren in der Stadtbibliothek Gertrud-Junge-Bibliothek Berlin. Von Scratch bis Python - lerne programmieren in einer freundlichen Atmosphäre!",
  keywords: "Programmieren, Kinder, Jugendliche, Berlin, Code Club, Scratch, Python, Gropiusstadt, Stadtbibliothek",
  authors: [{ name: "Code Club Gropiusstadt" }],
  icons: {
    icon: '/Gropi.png',
    shortcut: '/Gropi.png',
    apple: '/Gropi.png',
  },
  openGraph: {
    title: "Code Club Gropiusstadt",
    description: "Programmieren lernen für Kinder und Jugendliche in Berlin",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
