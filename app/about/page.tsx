import type { Metadata } from "next";
import {
  ArrowRight,
  Calendar,
  CheckCircle2,
  ClipboardCheck,
  Scale,
  ShieldCheck,
} from "lucide-react";
import Breadcrumb from "@/components/Breadcrumb";
import RecognitionSection from "@/components/about/RecognitionSection";

export const metadata: Metadata = {
  title: "About Us | Softzino Technologies",
  description:
    "Empowering global enterprises through intelligent software engineering. Learn about Softzino's mission, awards, partnerships, and certifications.",
};

// Large credibility numbers shown in the About hero.
const stats = [
  { value: "10+", label: "Years of Excellence" },
  { value: "100+", label: "Enterprise Projects" },
  { value: "5.0", label: "Clutch Rating" },
];

// Technology partner names displayed in the partnership card grid.
const partners = ["Odoo", "AWS", "Azure", "Google Cloud"];

// Certification cards; GDPR is rendered separately because it spans the full row.
const certifications = [
  {
    icon: ShieldCheck,
    title: "ISO 27001",
    desc: "Certified Information Security Management System, ensuring the highest standards of data protection and risk management.",
  },
  {
    icon: ClipboardCheck,
    title: "ISO 9001",
    desc: "Quality Management System certification demonstrating our commitment to consistent, high-quality software delivery.",
  },
];

// Bullet points shown beside the consultation widget.
const consultationItems = [
  "Direct access to senior enterprise architects",
  "Tailored technology roadmap discussion",
  "Security & compliance architecture review",
];

export default function AboutPage() {
  return (
    <>
      {/* Breadcrumb keeps secondary pages connected back to Home. */}
      <div className="mx-auto max-w-content px-4 pt-8 md:px-8 lg:px-16">
        <Breadcrumb current="About Us" />
      </div>

      {/* Hero: mission statement and top-level company stats. */}
      <section className="bg-bg-cream">
        <div className="mx-auto max-w-content px-4 py-16 md:px-8 md:py-20 lg:px-16 lg:py-24">
          <h1 className="max-w-4xl break-words text-3xl font-bold leading-tight text-navy-deep md:text-4xl lg:text-5xl">
            Empowering Global Enterprises Through Intelligent Software Engineering
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-body-text">
            At Softzino Technologies, we engineer robust, scalable, and secure digital
            architectures for enterprises that demand excellence. Our mission is to transform
            complex operational challenges into streamlined, high-performance technological
            assets.
          </p>

          <div className="mt-10 flex flex-wrap gap-x-16 gap-y-8 border-t border-border-light pt-8">
            {stats.map((stat) => (
              <div key={stat.label}>
                <p className="text-4xl font-bold text-gold lg:text-5xl">{stat.value}</p>
                <p className="mt-3 font-mono text-xs uppercase tracking-wide text-body-text">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <RecognitionSection />

      {/* Partnerships: simple partner tiles matching the Figma card layout. */}
      <section className="bg-bg-cream">
        <div className="mx-auto max-w-content px-4 py-16 md:px-8 lg:px-16">
          <p className="font-mono text-xs uppercase tracking-wide text-gold">
            {"// Partnerships"}
          </p>
          <h2 className="mt-2 text-2xl font-bold text-navy-deep md:text-3xl">
            Strategic Technology Partnerships
          </h2>

          <div className="mt-12 grid grid-cols-2 gap-6 lg:grid-cols-4">
            {partners.map((name) => (
              <div
                key={name}
                className="flex h-32 min-w-0 items-center justify-center rounded-card border border-border-lighter bg-white px-3 text-center shadow-card-sm sm:h-40"
              >
                <span className="break-words text-xl font-bold text-navy-deep sm:text-2xl">{name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance: certifications plus the full-width GDPR standard card. */}
      <section className="bg-bg-cream">
        <div className="mx-auto max-w-content px-4 py-16 md:px-8 lg:px-16">
          <p className="font-mono text-xs uppercase tracking-wide text-gold">
            {"// Compliance"}
          </p>
          <h2 className="mt-2 text-2xl font-bold text-navy-deep md:text-3xl">
            Certifications &amp; Quality Standards
          </h2>

          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
            {certifications.map(({ icon: Icon, title, desc }) => (
              <article
                key={title}
                className="flex min-w-0 flex-col gap-4 rounded-card border border-border-lighter bg-white p-6 shadow-card-sm sm:flex-row sm:gap-6 md:p-8"
              >
                <Icon size={28} className="shrink-0 text-gold" />
                <div>
                  <h3 className="break-words text-xl font-bold text-navy-deep">{title}</h3>
                  <p className="mt-2 text-body-text">{desc}</p>
                </div>
              </article>
            ))}
          </div>
          <article className="mt-6 flex min-w-0 flex-col gap-4 rounded-card border border-border-lighter bg-white p-6 shadow-card-sm sm:flex-row sm:gap-6 md:p-8">
            <Scale size={28} className="shrink-0 text-gold" />
            <div>
              <h3 className="break-words text-xl font-bold text-navy-deep">GDPR Compliant</h3>
              <p className="mt-2 text-body-text">
                Strict adherence to global data protection regulations, ensuring privacy by design
                and default in all our software architectures.
              </p>
            </div>
          </article>
        </div>
      </section>

      {/* Consultation CTA: dark booking block linked to the request form. */}
      <section className="bg-bg-cream pb-16 md:pb-24">
        <div className="mx-auto max-w-content px-4 md:px-8 lg:px-16">
          <div className="flex flex-col items-center gap-10 rounded-card bg-navy-header p-6 shadow-card-md sm:p-8 md:p-12 lg:flex-row lg:p-16">
            <div className="min-w-0">
              <p className="font-mono text-xs uppercase tracking-wide text-gold">
                {"// Consultation"}
              </p>
              <h2 className="mt-2 text-2xl font-bold text-white md:text-3xl">Schedule a Call</h2>
              <p className="mt-4 max-w-md text-lg text-[#B7C6EE]">
                Connect with our executive technology consultants to discuss your strategic
                objectives and operational challenges.
              </p>
              <ul className="mt-6 flex flex-col gap-4">
                {consultationItems.map((item) => (
                  <li key={item} className="flex min-w-0 items-start gap-4 text-base text-[#8392B7]">
                    <CheckCircle2 size={18} className="shrink-0 text-gold" />
                    <span className="min-w-0 break-words">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="w-full max-w-md rounded-card border border-border-lighter bg-white p-5 shadow-card-lg sm:p-8">
              <div className="flex min-h-[180px] flex-col items-center justify-center gap-4 rounded-card border-2 border-dashed border-border-light bg-bg-cream px-4 py-12 text-center sm:min-h-[220px] sm:px-8 sm:py-16">
                <Calendar size={28} className="text-body-text/45" />
                <p className="font-mono text-xs tracking-[0.28em] text-body-text/70">
                  Consultation Request
                </p>
              </div>
              <a
                href="/hire-developers#request-talent"
                className="mt-8 flex min-h-12 w-full max-w-full items-center justify-center gap-2 rounded-sm4 bg-teal-secondary px-5 py-4 text-center text-sm font-semibold text-white transition-colors hover:bg-teal-primary sm:px-8"
              >
                Confirm Booking <ArrowRight size={16} />
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
