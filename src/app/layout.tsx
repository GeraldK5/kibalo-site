import type { Metadata } from "next";
import { Sora, DM_Sans, Geist } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import Providers from "./providers";
import { Toaster } from "@/components/ui/sonner"

const geist = Geist({ subsets: ['latin'], variable: '--font-sans' });

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://kibalo.stipab.org'),
  title: {
    default: 'Kibalo',
    template: '%s | Kibalo',
  },
  description: 'Kibalo is a mobile application that helps you know if your business can make profits before you start, or track profitability as you grow.',
  openGraph: {
    title: 'Kibalo',
    description: 'Kibalo is a mobile application that helps you know if your business can make profits before you start, or track profitability as you grow.',
    url: 'https://kibalo.stipab.org',
    siteName: 'Kibalo',
    locale: 'en_UG',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kibalo — Know Your Business Profitability',
    description: 'Kibalo is a mobile application that helps you know if your business can make profits before you start, or track profitability as you grow.',
  },
  robots: {
    index: true,
    follow: true,
  },
  other: {
    'geo.region': 'UG',
    'geo.placename': 'Uganda',
  },
  verification: {
    google: 'Bx8yfvcV7INmjKzc0EqTqVLUV8m06tDpI7b418h5dvs'
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Kibalo',
  url: 'https://kibalo.stipab.org',
  logo: 'https://kibalo.stipab.org/logos/logo.svg',
  sameAs: [
    'https://twitter.com/science-technology-and-innovation-secretariat',
    'https://linkedin.com/company/science-technology-and-innovation-secretariat',
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn("font-sans", geist.variable)}>
      <body className={`${sora.variable} ${dmSans.variable} antialiased`}>
        <Providers>
          {children}
          <Toaster />
        </Providers>
      </body>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </html>
  );
}