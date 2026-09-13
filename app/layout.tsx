import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Analytics from "@/components/Analytics";
import {
  defaultOgImage,
  jsonLd,
  organizationJsonLd,
  productionOrigin,
  robotsMeta,
  siteName,
  websiteJsonLd,
} from "@/lib/seo";

// Site-wide SEO metadata used by Next.js for the default document <head>.
export const metadata: Metadata = {
  metadataBase: new URL(productionOrigin),
  title: "Software Development Company | Softzino Technologies",
  description:
    "Softzino Technologies builds custom software, cloud, AI, data, and dedicated engineering teams for startups and enterprises.",
  alternates: {
    canonical: "/",
  },
  robots: robotsMeta,
  openGraph: {
    title: "Software Development Company | Softzino Technologies",
    description:
      "Softzino Technologies builds custom software, cloud, AI, data, and dedicated engineering teams for startups and enterprises.",
    url: "/",
    siteName,
    type: "website",
    images: [
      {
        url: defaultOgImage,
        width: 1200,
        height: 630,
        alt: "Softzino Technologies preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Software Development Company | Softzino Technologies",
    description:
      "Softzino Technologies builds custom software, cloud, AI, data, and dedicated engineering teams for startups and enterprises.",
    images: [defaultOgImage],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        {/* Header and footer wrap every page; page-specific content renders through children. */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: jsonLd(organizationJsonLd()) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: jsonLd(websiteJsonLd()) }}
        />
        <Analytics />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
