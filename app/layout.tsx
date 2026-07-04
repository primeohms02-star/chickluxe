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

  title: "CHICKLUXE | Premium Luxury Handbags",

  description:
    "Discover elegant handbags crafted for confident women who love timeless fashion, premium quality and everyday luxury.",

  keywords: [
    "luxury handbags",
    "designer handbags",
    "women handbags",
    "fashion bags",
    "premium handbags",
    "CHICKLUXE",
    "Nigeria handbags",
  ],

  authors: [
    {
      name: "CHICKLUXE",
    },
  ],

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
    title: "CHICKLUXE | Premium Luxury Handbags",
    description:
      "Elegant handbags for confident women. Premium quality. Nationwide delivery.",

    url: "https://chickluxe.store",

    siteName: "CHICKLUXE",

    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "CHICKLUXE Luxury Handbags",
      },
    ],

    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",

    title: "CHICKLUXE | Premium Luxury Handbags",

    description:
      "Elegant handbags for confident women. Premium quality. Nationwide delivery.",

    images: ["/og-image.jpg"],
  },
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
                "Premium luxury handbags for elegant women. Nationwide delivery across Nigeria.",
              telephone: "+2349166964067",
              email: "chickluxehq@gmail.com",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Lagos",
                addressCountry: "NG",
              },
            }),
          }}
        />
      </body>
    </html>
  );
}