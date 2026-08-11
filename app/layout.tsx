import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

// Site-wide SEO metadata used by Next.js for the default document <head>.
export const metadata: Metadata = {
  title: "Softzino Technologies | Engineering Digital Products That Drive Business Growth",
  description:
    "Softzino Technologies helps startups and enterprises scale with custom software engineering, cloud, data, and augmented technical talent.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        {/* Header and footer wrap every page; page-specific content renders through children. */}
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
