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
  keywords: "Programmieren, Kinder, Jugendliche, Berlin, Code Club, Scratch, Python, Gropiusstadt, Stadtbibliothek, Gertrud-Junge-Bibliothek, kostenlos, Workshop, Coding",
  authors: [{ name: "Code Club Gropiusstadt" }],
  creator: "Code Club Gropiusstadt",
  publisher: "Code Club Gropiusstadt",
  robots: "index, follow",
  icons: {
    icon: '/Gropi.png', // Fallback for browsers that don't support dynamic icons
    shortcut: '/Gropi.png',
    apple: '/Gropi.png', // Fallback for Apple devices
  },
  openGraph: {
    title: "Code Club Gropiusstadt - Programmieren lernen für Kinder und Jugendliche",
    description: "Kostenloser Programmierclub für Kinder und Jugendliche von 7-17 Jahren in Berlin. Von Scratch bis Python - lerne programmieren!",
    type: "website",
    locale: "de_DE",
    url: "https://code-club-gropiusstadt.de",
    siteName: "Code Club Gropiusstadt",
    images: [
      {
        url: "/Gropi.png",
        width: 800,
        height: 600,
        alt: "Code Club Gropiusstadt Maskottchen",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Code Club Gropiusstadt - Programmieren lernen für Kinder",
    description: "Kostenloser Programmierclub für Kinder und Jugendliche von 7-17 Jahren in Berlin",
    images: ["/Gropi.png"],
  },
  verification: {
    google: "your-google-verification-code", // Replace with actual verification code
  },
  alternates: {
    canonical: "https://code-club-gropiusstadt.de",
  },
  viewport: "width=device-width, initial-scale=1",
  other: {
    "geo.region": "DE-BE",
    "geo.placename": "Berlin",
    "geo.position": "52.4272;13.4286",
    "ICBM": "52.4272, 13.4286",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <head>
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#4f46e5" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Code Club" />
        <link rel="apple-touch-icon" href="/Gropi.png" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
