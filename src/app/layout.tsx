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
  title: {
    default: "Code Club Gropiusstadt - Programmieren lernen für Kinder und Jugendliche",
    template: "%s | Code Club Gropiusstadt"
  },
  description: "Kostenloser Programmierclub für Kinder und Jugendliche von 7-17 Jahren in der Stadtbibliothek Gertrud-Junge-Bibliothek Berlin. Von Scratch bis Python - lerne programmieren in einer freundlichen Atmosphäre!",
  keywords: "Programmieren, Kinder, Jugendliche, Berlin, Code Club, Scratch, Python, Gropiusstadt, Stadtbibliothek, Gertrud-Junge-Bibliothek, kostenlos, Workshop, Coding, STEM, Bildung, Neukölln, Informatik, Algorithmus, Robotik",
  authors: [{ name: "Code Club Gropiusstadt", url: "https://code-club-gropiusstadt.de" }],
  creator: "Code Club Gropiusstadt",
  publisher: "Code Club Gropiusstadt",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://code-club-gropiusstadt.de'),
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
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
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Code Club Gropiusstadt - Programmieren lernen für Kinder",
    description: "Kostenloser Programmierclub für Kinder und Jugendliche von 7-17 Jahren in Berlin",
    images: ["/Gropi.png"],
    creator: "@code_club_gropiusstadt",
    site: "@code_club_gropiusstadt",
  },
  verification: {
    google: "your-google-verification-code", // Replace with actual verification code
    yandex: "your-yandex-verification-code",
    yahoo: "your-yahoo-verification-code",
  },
  alternates: {
    canonical: "https://code-club-gropiusstadt.de",
    languages: {
      'de-DE': 'https://code-club-gropiusstadt.de',
    },
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
  },
  category: 'education',
  classification: 'Programming Education for Children',
  other: {
    "geo.region": "DE-BE",
    "geo.placename": "Berlin",
    "geo.position": "52.4272;13.4286",
    "ICBM": "52.4272, 13.4286",
    "rating": "general",
    "distribution": "global",
    "revisit-after": "7 days",
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
        
        {/* Performance und SEO Hints */}
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="dns-prefetch" href="//www.google-analytics.com" />
        <link rel="dns-prefetch" href="//pretix.eu" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* Schema.org für bessere Indexierung */}
        <meta name="google-site-verification" content="your-google-verification-code" />
        <meta name="msvalidate.01" content="your-bing-verification-code" />
        
        {/* Zusätzliche SEO Meta Tags */}
        <meta name="language" content="de" />
        <meta name="content-language" content="de-DE" />
        <meta name="audience" content="all" />
        <meta name="distribution" content="global" />
        <meta name="rating" content="general" />
        <meta name="document-type" content="Public" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
