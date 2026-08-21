import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Award,
  BarChart3,
  CheckCircle2,
  Cloud,
  Code2,
  Compass,
  FlaskConical,
  Globe2,
  Hammer,
  HeartHandshake,
  LifeBuoy,
  PenTool,
  RefreshCw,
  Repeat2,
  Rocket,
  Search,
  ShieldCheck,
  Users2,
  ClipboardList,
} from "lucide-react";
import Reveal from "@/components/home/Reveal";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import { assetPath } from "@/lib/site-paths";

// Homepage service cards. Edit this array to change the "What We Do" grid.
const whatWeDo = [
  {
    icon: Code2,
    title: "Product Engineering",
    desc: "End-to-end software product development from ideation to deployment.",
  },
  {
    icon: Repeat2,
    title: "Digital Transformation",
    desc: "Modernize legacy systems and adopt digital-first operational models.",
  },
  {
    icon: Cloud,
    title: "Cloud Engineering",
    desc: "Scalable cloud architectures, migration, and optimization services.",
  },
  {
    icon: BarChart3,
    title: "Data Analytics",
    desc: "Unlock insights with advanced data engineering and analytics solutions.",
  },
  {
    icon: Users2,
    title: "Co-Creation",
    desc: "Collaborative innovation partnering with your internal teams.",
  },
  {
    icon: Compass,
    title: "Consultancy",
    desc: "Strategic technical guidance to align IT with business objectives.",
  },
];

// Homepage value props. These render in the "Why Choose Softzino" section.
const whyChoose = [
  {
    icon: Users2,
    title: "Experienced Teams",
    desc: "Vetted senior engineers and domain experts.",
  },
  {
    icon: RefreshCw,
    title: "Agile Methodology",
    desc: "Iterative delivery with full transparency.",
  },
  {
    icon: Globe2,
    title: "Global Collaboration",
    desc: "Seamless communication across time zones.",
  },
  {
    icon: ShieldCheck,
    title: "Security-First",
    desc: "Robust security practices embedded in SDLC.",
  },
  {
    icon: Award,
    title: "Quality Engineering",
    desc: "Automated testing and continuous integration.",
  },
  {
    icon: HeartHandshake,
    title: "Long-Term Partnership",
    desc: "Committed to your sustained business growth.",
  },
];

// Compact proof points shown below the hero image.
const trustMetrics = [
  { icon: Award, value: "2015", label: "Founded", tone: "text-gold" },
  { icon: Users2, value: "100+", label: "Professionals", tone: "text-teal-secondary" },
  { icon: Globe2, value: "4", label: "Office Regions", tone: "text-navy-header" },
  { icon: RefreshCw, value: "Agile", label: "Delivery", tone: "text-teal-secondary" },
  { icon: CheckCircle2, value: "QA", label: "Testing Practice", tone: "text-gold" },
];

// Steps used by the dark engineering-process timeline.
const process = [
  { icon: Search, label: "Discover" },
  { icon: ClipboardList, label: "Plan" },
  { icon: PenTool, label: "Design" },
  { icon: Hammer, label: "Develop" },
  { icon: FlaskConical, label: "Test" },
  { icon: Rocket, label: "Deploy" },
  { icon: LifeBuoy, label: "Support" },
];

// Product teasers shown on the homepage before linking to the full Solutions page.
const products = [
  {
    name: "ERP Systems",
    image: "/img1/open-office-wide.jpeg",
    desc: "Enterprise resource planning systems for business operations and management workflows.",
  },
  {
    name: "Hishabi",
    image: "/img1/engineering-floor.jpeg",
    desc: "Inventory and POS management software for sales, stock, and store operations.",
  },
  {
    name: "Bidyava",
    image: "/img1/team-desks.jpeg",
    desc: "Education technology platform supporting digital learning and student engagement.",
  },
];

// Short company highlights rendered in the homepage About section.
const aboutHighlights = [
  { title: "Founded", desc: "Softzino Technologies began in 2015." },
  { title: "Team Strength", desc: "A diverse team of 100+ skilled professionals." },
  { title: "Global Offices", desc: "Bangladesh, Singapore, USA, and Australia." },
];

export default function HomePage() {
  return (
    <>
      {/* Hero: primary headline, two CTAs, and the main engineering-office image. */}
      <section className="bg-bg-cream">
        <div className="mx-auto grid w-full min-w-0 max-w-content grid-cols-1 items-center gap-10 overflow-hidden px-4 py-16 md:px-8 md:py-20 lg:grid-cols-2 lg:px-16 lg:py-24">
          <div className="flex w-full min-w-0 max-w-xl flex-col gap-6">
            <h1
              className="home-hero-fade-up max-w-full text-2xl font-bold leading-tight text-navy-deep [overflow-wrap:anywhere] sm:text-3xl md:text-4xl"
              style={{ animationDelay: "80ms" }}
            >
              Engineering Digital Products That Drive Business Growth
            </h1>
            <p
              className="home-hero-fade-up text-lg leading-relaxed text-body-text"
              style={{ animationDelay: "160ms" }}
            >
              Supporting startups and enterprises with scalable software, web, mobile, and cloud
              engineering.
            </p>
            <div
              className="home-hero-fade-up flex flex-col gap-4 sm:flex-row sm:flex-wrap"
              style={{ animationDelay: "240ms" }}
            >
              <Link
                href="/hire-developers#request-talent"
                className="inline-flex min-h-12 w-full max-w-full justify-center rounded-2xl bg-teal-primary px-5 py-4 text-center text-sm font-bold uppercase tracking-wide text-white transition-all duration-200 ease-out hover:-translate-y-0.5 hover:bg-teal-secondary active:translate-y-0 sm:w-auto sm:px-8"
              >
                Contact Us
              </Link>
              <Link
                href="/services"
                className="inline-flex min-h-12 w-full max-w-full justify-center rounded-2xl border-2 border-teal-primary px-5 py-4 text-center text-sm font-bold uppercase tracking-wide text-teal-primary transition-all duration-200 ease-out hover:-translate-y-0.5 hover:bg-teal-primary/5 active:translate-y-0 sm:w-auto sm:px-8"
              >
                Explore Services
              </Link>
            </div>
          </div>
          <div
            className="home-hero-scale-in min-w-0 max-w-full overflow-hidden rounded-card shadow-card-sm"
            style={{ animationDelay: "150ms" }}
          >
            <div className="home-hero-visual-float">
              <Image
                src={assetPath("/img1/homepage-banner.jpeg")}
                alt="Softzino Technologies office building"
                width={552}
                height={501}
                priority
                className="aspect-[4/3] w-full object-cover object-top"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Trust bar: quick credibility metrics immediately below the hero. */}
      <section className="border-y border-border-lighter bg-white">
        <Reveal className="mx-auto grid max-w-content grid-cols-2 items-center justify-center gap-x-6 gap-y-5 px-4 py-8 sm:flex sm:flex-wrap sm:gap-x-10 sm:gap-y-4 md:px-8 lg:px-16">
          {trustMetrics.map(({ icon: Icon, value, label, tone }) => (
            <div key={label} className="flex min-w-0 items-center gap-2 text-sm font-medium text-navy-deep">
              <Icon size={18} className={tone} />
              <div>
                <p className="leading-none">{value}</p>
                <p className="mt-1 font-mono text-[10px] uppercase tracking-wide text-body-text sm:text-xs">
                  {label}
                </p>
              </div>
            </div>
          ))}
        </Reveal>
      </section>

      {/* What We Do: service cards generated from the whatWeDo array above. */}
      <section className="bg-bg-warm-gray">
        <div className="mx-auto max-w-content px-4 py-16 md:px-8 md:py-20 lg:px-16">
          <Reveal className="mx-auto max-w-2xl text-center">
            <h2 className="text-2xl font-bold text-navy-deep md:text-3xl">What We Do</h2>
            <p className="mt-3 text-body-text">
              Comprehensive software engineering services to scale your business.
            </p>
          </Reveal>
          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {whatWeDo.map(({ icon: Icon, title, desc }, index) => (
              <Reveal
                key={title}
                delay={Math.min(index, 5) * 70}
                className="min-w-0"
              >
                <div
                  className="h-full min-w-0 rounded-card border border-border-lighter bg-white p-6 shadow-card-sm transition-all duration-300 ease-out hover:-translate-y-1 hover:border-teal-primary hover:shadow-card-md md:p-8"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-card bg-bg-warm-gray">
                    <Icon size={22} className="text-teal-secondary" />
                  </div>
                  <h3 className="mt-4 break-words text-lg font-bold text-navy-deep">{title}</h3>
                  <p className="mt-4 text-base leading-relaxed text-body-text">{desc}</p>
                  <Link
                    href="/services"
                    className="group mt-4 inline-flex items-center gap-1 text-sm font-medium text-teal-primary hover:underline"
                  >
                    Learn More{" "}
                    <ArrowRight
                      size={14}
                      className="transition-transform duration-200 ease-out group-hover:translate-x-1"
                    />
                  </Link>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose: value props generated from the whyChoose array above. */}
      <section className="bg-white">
        <div className="mx-auto max-w-content px-4 py-16 md:px-8 md:py-20 lg:px-16">
          <Reveal className="mx-auto max-w-2xl text-center">
            <h2 className="text-2xl font-bold text-navy-deep md:text-3xl">Why Choose Softzino</h2>
            <p className="mt-3 text-body-text">
              Delivering excellence through our core principles.
            </p>
          </Reveal>
          <div className="mt-12 grid grid-cols-1 gap-x-10 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-16">
            {whyChoose.map(({ icon: Icon, title, desc }, index) => (
              <Reveal
                key={title}
                delay={Math.min(index, 5) * 60}
                className="flex items-start gap-4"
              >
                <Icon size={24} className="mt-1 shrink-0 text-teal-secondary" />
                <div>
                  <h3 className="text-base font-bold text-navy-deep">{title}</h3>
                  <p className="mt-2 text-base leading-relaxed text-body-text">{desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <Reveal>
        <TestimonialsSection animated />
      </Reveal>

      {/* Engineering process: grid on compact screens, connected row on desktop. */}
      <section className="bg-navy-header">
        <div className="mx-auto max-w-content px-4 py-16 md:px-8 md:py-20 lg:px-16">
          <Reveal className="mx-auto max-w-2xl text-center">
            <h2 className="text-2xl font-bold text-white md:text-3xl">Our Engineering Process</h2>
            <p className="mt-3 text-white/70">
              A proven methodology to deliver successful digital products.
            </p>
          </Reveal>
          <div className="mt-12 grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-3 lg:flex lg:items-start lg:justify-between lg:gap-0">
            {process.map(({ icon: Icon, label }, index) => (
              <Reveal
                key={label}
                delay={Math.min(index, 5) * 55}
                className="flex min-w-0 items-center justify-center lg:flex-1"
              >
                <div className="flex flex-col items-center gap-5">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-teal-secondary">
                    <Icon size={22} className="text-white" />
                  </div>
                  <span className="break-words text-center text-sm font-bold text-white">{label}</span>
                </div>
                {index < process.length - 1 && (
                  <div className="mx-1 mt-7 hidden h-px flex-1 bg-white/25 lg:block" />
                )}
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Product teaser cards: links visitors to the full off-the-shelf solutions page. */}
      <section className="bg-bg-offwhite">
        <div className="mx-auto max-w-content px-4 py-16 md:px-8 md:py-20 lg:px-16">
          <Reveal className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <p className="font-mono text-xs uppercase tracking-wide text-teal-primary">
                Off-the-Shelf Solutions
              </p>
              <h2 className="mt-2 text-2xl font-bold text-navy-deep md:text-3xl">
                Ready-to-deploy enterprise platforms.
              </h2>
            </div>
            <Link
              href="/off-the-shelf-solutions"
              className="group inline-flex items-center gap-1 font-bold text-teal-primary hover:underline"
            >
              View All Solutions{" "}
              <ArrowRight
                size={16}
                className="transition-transform duration-200 ease-out group-hover:translate-x-1"
              />
            </Link>
          </Reveal>
          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {products.map((product, index) => (
              <Reveal
                key={product.name}
                delay={Math.min(index, 5) * 70}
                className="min-w-0"
              >
                <div className="h-full overflow-hidden rounded-card border border-border-light bg-white shadow-card-sm transition-all duration-300 ease-out hover:-translate-y-1 hover:border-teal-primary hover:shadow-card-md">
                  <Image
                    src={assetPath(product.image)}
                    alt={`${product.name} dashboard preview`}
                    width={367}
                    height={160}
                    className="h-40 w-full object-cover"
                  />
                  <div className="p-6 md:p-8">
                    <h3 className="break-words text-lg font-medium text-navy-deep">{product.name}</h3>
                    <p className="mt-2 min-h-[72px] text-sm leading-relaxed text-body-text">
                      {product.desc}
                    </p>
                    <Link
                      href="/off-the-shelf-solutions"
                      className="mt-4 inline-flex h-10 w-full items-center justify-center rounded-sm4 border border-teal-primary text-sm font-bold text-teal-primary transition-all duration-200 ease-out hover:-translate-y-0.5 hover:bg-teal-primary/5 active:translate-y-0"
                    >
                      Learn More
                    </Link>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* About preview: short company intro plus two supporting photos. */}
      <section className="bg-white">
        <div className="mx-auto grid max-w-content grid-cols-1 items-center gap-10 px-4 py-16 md:px-8 md:py-20 lg:grid-cols-2 lg:px-16">
          <Reveal>
            <p className="font-mono text-xs uppercase tracking-wide text-gold">About Softzino</p>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-body-text">
              We are a collective of passionate technologists, strategists, and designers dedicated
              to solving complex business challenges through innovative software engineering.
            </p>
            <div className="mt-8 grid max-w-xl grid-cols-1 gap-4 sm:grid-cols-2">
              {aboutHighlights.map((item, index) => (
                <div
                  key={item.title}
                  className={`rounded-card border border-border-lighter bg-bg-warm-gray p-5 ${
                    index === 2 ? "sm:col-span-2" : ""
                  }`}
                >
                  <p className="text-base font-bold text-navy-deep">{item.title}</p>
                  <p className="mt-2 text-sm text-body-text">{item.desc}</p>
                </div>
              ))}
            </div>
            <Link
              href="/about"
              className="mt-8 inline-flex min-h-12 w-full max-w-full items-center justify-center rounded-2xl border border-navy-deep px-5 text-center text-sm font-bold uppercase tracking-wide text-navy-deep transition-all duration-200 ease-out hover:-translate-y-0.5 hover:bg-navy-deep hover:text-white active:translate-y-0 sm:w-auto sm:px-7"
            >
              Learn About Us
            </Link>
          </Reveal>
          <Reveal delay={120} className="grid grid-cols-2 items-center gap-5">
            <Image
              src={assetPath("/img1/planning-session.jpeg")}
              alt="Softzino team collaborating around a workshop table"
              width={262}
              height={178}
              className="w-full rounded-card object-cover shadow-card-sm"
            />
            <Image
              src={assetPath("/img1/open-office-collaboration.jpeg")}
              alt="Softzino open office workspace"
              width={258}
              height={178}
              className="mt-14 w-full rounded-card object-cover shadow-card-sm"
            />
          </Reveal>
        </div>
      </section>

      {/* Hiring CTA: promotes the dedicated Hire Developers route. */}
      <section className="bg-teal-primary">
        <Reveal className="mx-auto max-w-content px-4 py-16 text-center md:px-8 md:py-20 lg:px-16">
          <h2 className="text-2xl font-bold text-white md:text-3xl">
            Scale Your Engineering Team Faster
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-base leading-relaxed text-white/90">
            Augment your internal teams with skilled software engineers, UI/UX designers, SQA
            engineers, and project managers.
          </p>
          <Link
            href="/hire-developers"
            className="mt-6 inline-flex min-h-12 w-full max-w-full items-center justify-center rounded-2xl bg-navy-header px-5 py-4 text-center text-sm font-bold uppercase tracking-wide text-white transition-all duration-200 ease-out hover:-translate-y-0.5 hover:bg-navy-deep active:translate-y-0 sm:w-auto sm:px-8"
          >
            Hire Developers
          </Link>
        </Reveal>
      </section>

      {/* Final CTA: wraps the homepage with consultation and contact actions. */}
      <section className="bg-bg-warm-gray">
        <div className="mx-auto max-w-content px-4 py-16 md:px-8 lg:px-16">
          <Reveal className="mx-auto flex max-w-3xl flex-col items-center gap-4 rounded-card border border-border-light bg-white p-6 text-center shadow-card-sm sm:p-8 md:p-10">
            <h2 className="text-xl font-bold text-navy-deep md:text-2xl">
              Ready to Build Your Next Digital Product?
            </h2>
            <p className="text-base text-body-text">
              Let&apos;s discuss how Softzino can accelerate your digital initiatives.
            </p>
            <div className="mt-4 flex w-full flex-col justify-center gap-4 sm:w-auto sm:flex-row sm:flex-wrap">
              <Link
                href="/hire-developers#request-talent"
                className="inline-flex min-h-12 w-full max-w-full items-center justify-center rounded-2xl bg-navy-header px-5 py-3 text-center text-sm font-bold uppercase tracking-wide text-white transition-all duration-200 ease-out hover:-translate-y-0.5 hover:bg-navy-deep active:translate-y-0 sm:w-auto sm:px-6"
              >
                Schedule a Consultation
              </Link>
              <Link
                href="/hire-developers#request-talent"
                className="inline-flex min-h-12 w-full max-w-full items-center justify-center rounded-2xl border border-navy-deep px-5 py-3 text-center text-sm font-bold uppercase tracking-wide text-navy-deep transition-all duration-200 ease-out hover:-translate-y-0.5 hover:bg-navy-deep hover:text-white active:translate-y-0 sm:w-auto sm:px-6"
              >
                Contact Us
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
