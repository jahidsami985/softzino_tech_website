import type { Metadata } from "next";
import {
  ArrowRight,
  Award,
  Calendar,
  CheckCircle2,
  ClipboardCheck,
  Globe2,
  Scale,
  ShieldCheck,
  Trophy,
} from "lucide-react";
import Breadcrumb from "@/components/Breadcrumb";

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

// Award cards shown in the Recognition section.
const awards = [
  {
    icon: Trophy,
    title: "Tech Innovator Award 2023",
    desc: "Recognized for outstanding contributions to enterprise cloud architecture and digital transformation.",
  },
  {
    icon: Award,
    title: "Top B2B Service Provider",
    desc: "Voted a top partner for mission-critical software development by leading industry analysts.",
  },
  {
    icon: Globe2,
    title: "Global Excellence in IT",
    desc: "Awarded for consistent delivery of secure, compliant, and highly available systems worldwide.",
  },
];

// Partner logo placeholders. Replace these strings with logo components/assets later if needed.
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
      <div className="mx-auto max-w-content px-4 pt-8 md:px-16">
        <Breadcrumb current="About Us" />
      </div>

      {/* Hero: mission statement and top-level company stats. */}
      <section className="bg-bg-cream">
        <div className="mx-auto max-w-content px-4 py-16 md:px-16 md:py-24">
          <h1 className="max-w-4xl text-3xl font-bold leading-tight text-navy-deep md:text-5xl">
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
                <p className="text-4xl font-bold text-gold md:text-5xl">{stat.value}</p>
                <p className="mt-3 font-mono text-xs uppercase tracking-wide text-body-text">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recognition: award cards generated from the awards array above. */}
      <section className="border-t border-border-light bg-bg-cream">
        <div className="mx-auto max-w-content px-4 py-16 md:px-16">
          <p className="font-mono text-xs uppercase tracking-wide text-gold">
            {"// Recognition"}
          </p>
          <h2 className="mt-2 text-2xl font-bold text-navy-deep md:text-3xl">
            Industry Recognition &amp; Awards
          </h2>

          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
            {awards.map(({ icon: Icon, title, desc }) => (
              <article
                key={title}
                className="rounded-card border border-border-lighter bg-white p-8 shadow-card-sm"
              >
                <Icon size={28} className="text-teal-secondary" />
                <h3 className="mt-4 text-xl font-bold text-navy-deep">{title}</h3>
                <p className="mt-2 text-body-text">{desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Partnerships: simple partner tiles matching the Figma card layout. */}
      <section className="bg-bg-cream">
        <div className="mx-auto max-w-content px-4 py-16 md:px-16">
          <p className="font-mono text-xs uppercase tracking-wide text-gold">
            {"// Partnerships"}
          </p>
          <h2 className="mt-2 text-2xl font-bold text-navy-deep md:text-3xl">
            Strategic Technology Partnerships
          </h2>

          <div className="mt-12 grid grid-cols-2 gap-6 md:grid-cols-4">
            {partners.map((name) => (
              <div
                key={name}
                className="flex h-40 items-center justify-center rounded-card border border-border-lighter bg-white text-center shadow-card-sm"
              >
                <span className="text-2xl font-bold text-navy-deep">{name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance: certifications plus the full-width GDPR standard card. */}
      <section className="bg-bg-cream">
        <div className="mx-auto max-w-content px-4 py-16 md:px-16">
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
                className="flex gap-6 rounded-card border border-border-lighter bg-white p-8 shadow-card-sm"
              >
                <Icon size={28} className="shrink-0 text-gold" />
                <div>
                  <h3 className="text-xl font-bold text-navy-deep">{title}</h3>
                  <p className="mt-2 text-body-text">{desc}</p>
                </div>
              </article>
            ))}
          </div>
          <article className="mt-6 flex gap-6 rounded-card border border-border-lighter bg-white p-8 shadow-card-sm">
            <Scale size={28} className="shrink-0 text-gold" />
            <div>
              <h3 className="text-xl font-bold text-navy-deep">GDPR Compliant</h3>
              <p className="mt-2 text-body-text">
                Strict adherence to global data protection regulations, ensuring privacy by design
                and default in all our software architectures.
              </p>
            </div>
          </article>
        </div>
      </section>

      {/* Consultation CTA: dark booking block with a placeholder calendar widget. */}
      <section className="bg-bg-cream pb-16 md:pb-24">
        <div className="mx-auto max-w-content px-4 md:px-16">
          <div className="flex flex-col items-center gap-10 rounded-card bg-navy-header p-8 shadow-card-md md:flex-row md:p-16">
            <div>
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
                  <li key={item} className="flex items-center gap-4 text-base text-[#8392B7]">
                    <CheckCircle2 size={18} className="shrink-0 text-gold" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="w-full max-w-md rounded-card border border-border-lighter bg-white p-8 shadow-card-lg">
              <div className="flex min-h-[220px] flex-col items-center justify-center gap-4 rounded-card border-2 border-dashed border-border-light bg-bg-cream px-8 py-16 text-center">
                <Calendar size={28} className="text-body-text/45" />
                <p className="font-mono text-xs tracking-[0.28em] text-body-text/70">
                  [ Interactive Calendar Widget ]
                </p>
              </div>
              <a
                href="/hire-developers#request-talent"
                className="mt-8 flex items-center justify-center gap-2 rounded-sm4 bg-teal-secondary px-8 py-4 text-sm font-semibold text-white transition-colors hover:bg-teal-primary"
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
