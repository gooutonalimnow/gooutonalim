import React from "react"
import type { Metadata, Viewport } from "next"
import { Inter, Playfair_Display } from "next/font/google"
import Script from "next/script"

import "./globals.css"

const GA_MEASUREMENT_ID = "G-BR5KQCZCFZ"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
})

const siteUrl = "https://www.gooutonalim.com"

export const metadata: Metadata = {
  title: "Go Out On A LIM | Travel, Beyond The Algorithm",
  description:
    "130 countries. 2.8 million miles. Travel beyond the algorithm with thoughtful journeys built on experience. Premium travel advisory by a seasoned traveler.",
  keywords: [
    "travel beyond the algorithm",
    "travel advisory",
    "premium travel",
    "food travel",
    "luxury travel planning",
    "travel concierge",
    "travel consultant",
    "bespoke travel",
  ],
  metadataBase: new URL(siteUrl),
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: "/favicon.png",
    apple: "/favicon.png",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Go Out On A LIM",
    title: "Go Out On A LIM | Travel, Beyond The Algorithm",
    description:
      "130 countries. 2.8 million miles. Travel beyond the algorithm with thoughtful journeys built on experience. Premium travel advisory by a seasoned traveler.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Go Out On A LIM - Travel Concierge & Planning Advisory",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Go Out On A LIM | Travel, Beyond The Algorithm",
    description:
      "130 countries. 2.8 million miles. Travel beyond the algorithm with thoughtful journeys built on experience.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "eDNtDUKMNRSSekmOjeZ4sfDSelBY-yNX5ItqlXS62kM",
  },
}

export const viewport: Viewport = {
  themeColor: "#1e2d3d",
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Go Out On A LIM",
  description:
    "Travel beyond the algorithm. Premium travel advisory and concierge services. 130 countries. 2.8 million miles. Thoughtful journeys built on experience.",
  url: siteUrl,
  logo: `${siteUrl}/og-image.png`,
  image: `${siteUrl}/og-image.png`,
  founder: {
    "@type": "Person",
    name: "Andrew Lim",
    jobTitle: "Travel Concierge & Advisor",
  },
  serviceType: ["Travel Advisory", "Travel Concierge", "Trip Planning"],
  areaServed: "Worldwide",
  sameAs: [
    "https://instagram.com/go.out.on.a.lim",
    "https://youtube.com/channel/UCURKuPfOZgqTE90Jw8mBQ7Q",
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}');
          `}
        </Script>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${inter.variable} ${playfair.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  )
}
