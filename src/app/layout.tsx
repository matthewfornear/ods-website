import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { CartProvider } from "./context/CartContext";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "OmniData Solutions",
  description: "Transform your business data into actionable insights",
  icons: {
    icon: '/svg/favicon.svg', // Consider adding a PNG/ICO fallback for maximum compatibility
  },
  openGraph: {
    title: 'OmniData Solutions',
    description: 'Transform your business data into actionable insights',
    url: 'https://omnidata-solutions.com',
    siteName: 'OmniData Solutions',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'OmniData Solutions',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'OmniData Solutions',
    description: 'Transform your business data into actionable insights',
    site: '@fixitorgotojail',
    images: ['/og-image.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <CartProvider>
          {children}
        </CartProvider>
        <Analytics />
      </body>
    </html>
  );
}
