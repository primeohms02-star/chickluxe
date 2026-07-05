import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "./style/responsive.css";
import { ThemeProvider } from "./context/ThemeContext";
import Script from "next/script";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://chickluxe.store"),

  title: {
    default: "CHICKLUXE | Premium Luxury Handbags in Nigeria",
    template: "%s | CHICKLUXE",
  },

  description:
    "Shop premium luxury handbags for women in Nigeria. Discover elegant totes, shoulder bags, crossbody bags and timeless fashion accessories with nationwide delivery.",

  applicationName: "CHICKLUXE",

  keywords: [
    "Luxury handbags Nigeria",
    "Premium handbags Nigeria",
    "Designer handbags Lagos",
    "Women's handbags",
    "Luxury bags",
    "Crossbody bags",
    "Shoulder bags",
    "Tote bags",
    "Elegant handbags",
    "Fashion accessories",
    "Luxury fashion Nigeria",
    "CHICKLUXE",
  ],

  authors: [
    {
      name: "CHICKLUXE",
      url: "https://chickluxe.store",
    },
  ],

  creator: "CHICKLUXE",
  publisher: "CHICKLUXE",

  alternates: {
    canonical: "/",
  },

  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-image-preview": "large",
      "max-video-preview": -1,
      "max-snippet": -1,
    },
  },

  manifest: "/site.webmanifest",

  icons: {
    icon: [
      {
        url: "/favicon.ico",
        sizes: "any",
      },
      {
        url: "/favicon.svg",
        type: "image/svg+xml",
      },
      {
        url: "/favicon-96x96.png",
        sizes: "96x96",
        type: "image/png",
      },
    ],

    shortcut: "/favicon.ico",

    apple: "/apple-touch-icon.png",
  },

  openGraph: {
    title: "CHICKLUXE | Premium Luxury Handbags in Nigeria",

    description:
      "Discover premium handbags for confident women. Elegant designs, luxury craftsmanship and nationwide delivery across Nigeria.",

    url: "https://chickluxe.store",

    siteName: "CHICKLUXE",

    locale: "en_US",

    type: "website",

    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "CHICKLUXE Premium Luxury Handbags",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: "CHICKLUXE | Premium Luxury Handbags",

    description:
      "Premium handbags crafted for confident women. Nationwide delivery across Nigeria.",

    images: ["/og-image.jpg"],
  },

  category: "Fashion",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <>
  <Script
    src="https://www.googletagmanager.com/gtag/js?id=G-0PJQ7LFCVD"
    strategy="afterInteractive"
  />

  <Script id="google-analytics" strategy="afterInteractive">
    {`
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());

      gtag('config', 'G-0PJQ7LFCVD');
    `}
  </Script>
</>
        <ThemeProvider>{children}</ThemeProvider>

      <script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Store",
      name: "CHICKLUXE",
      url: "https://chickluxe.store",
      logo: "https://chickluxe.store/logo.png",
      image: "https://chickluxe.store/og-image.jpg",
      description:
        "Premium luxury handbags for elegant women with nationwide delivery across Nigeria.",
      telephone: "+2349166964067",
      email: "chickluxehq@gmail.com",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Lagos",
        addressCountry: "NG",
      },
      areaServed: "Nigeria",
      priceRange: "$$",
      sameAs: [
        "https://www.instagram.com/_chickluxe"
      ]
    }),
  }}
/>

      </body>
    </html>
  );
}  