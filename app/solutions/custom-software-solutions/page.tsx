import {
  absoluteUrl,
  createPageMetadata,
  jsonLd,
  productionOrigin,
  siteName,
} from "@/lib/seo";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Blocks,
  CheckCircle2,
  ClipboardList,
  Code2,
  LayoutDashboard,
  LifeBuoy,
  Network,
  Rocket,
  Settings,
  ShieldCheck,
  Smartphone,
  Workflow,
} from "lucide-react";
import Breadcrumb from "@/components/Breadcrumb";
import { assetPath } from "@/lib/site-paths";

const pagePath = "/solutions/custom-software-solutions";
const pageUrl = absoluteUrl(pagePath);
const title = "Custom Software Development Company | Softzino";
const description =
  "Build secure, scalable software around your business requirements. Softzino provides end-to-end custom software development, testing, deployment and support.";
const contactHref = "/hire-developers#request-talent";

const services = [
  {
    icon: ClipboardList,
    title: "Business Analysis",
    desc: "Clarify goals, users, workflows, requirements, risks, and success criteria before development starts.",
  },
  {
    icon: LayoutDashboard,
    title: "Product and UX Design",
    desc: "Translate business requirements into usable product flows, prototypes, interfaces, and design systems.",
  },
  {
    icon: Code2,
    title: "Custom Web Applications",
    desc: "Build secure, scalable web platforms, portals, dashboards, and workflow applications.",
  },
  {
    icon: Smartphone,
    title: "Mobile Applications",
    desc: "Create native and cross-platform mobile apps that connect with your existing systems and data.",
  },
  {
    icon: Blocks,
    title: "Enterprise Software",
    desc: "Develop internal platforms, ERP-style workflows, operational tools, and business-specific systems.",
  },
  {
    icon: Network,
    title: "System Integration",
    desc: "Connect disconnected software, APIs, databases, and third-party platforms into cleaner workflows.",
  },
  {
    icon: ShieldCheck,
    title: "Quality Assurance",
    desc: "Add manual testing, automation testing, performance checks, and release validation to the build process.",
  },
  {
    icon: Rocket,
    title: "Deployment",
    desc: "Prepare production releases, cloud environments, CI/CD workflows, and launch support.",
  },
  {
    icon: LifeBuoy,
    title: "Maintenance and Support",
    desc: "Continue improving the software after launch with monitoring, fixes, enhancements, and support.",
  },
];

const requirements = [
  "Automate manual processes that slow down teams.",
  "Integrate disconnected systems so data can move cleanly.",
  "Improve workflows around approvals, reporting, fulfillment, and operations.",
  "Modernize legacy platforms without losing business-critical logic.",
  "Prepare systems for more users, more data, and more complex workflows.",
  "Build functionality around the way the business actually works.",
];

const processSteps = [
  {
    title: "Discovery and Analysis",
    desc: "Softzino works with stakeholders to understand the business problem, users, systems, constraints, and success goals.",
  },
  {
    title: "Design",
    desc: "Product flows, UX direction, and interface requirements are shaped before the core engineering work begins.",
  },
  {
    title: "Architecture and Planning",
    desc: "The team defines the software architecture, integrations, delivery plan, release approach, and technical priorities.",
  },
  {
    title: "Development",
    desc: "Custom software developers build the application with maintainable code, modern frameworks, and practical collaboration.",
  },
  {
    title: "Testing",
    desc: "Quality checks cover core workflows, edge cases, integrations, performance, usability, and release readiness.",
  },
  {
    title: "Deployment",
    desc: "Softzino supports production setup, deployment workflows, launch readiness, and handover documentation.",
  },
  {
    title: "Support and Continuous Improvement",
    desc: "After launch, the software can be maintained, improved, and adapted as business requirements evolve.",
  },
];

const relatedLinks = [
  {
    label: "Web application development services",
    href: "/services/web-application-development",
    desc: "Build complex customer-facing and internal web products.",
  },
  {
    label: "Mobile app development services",
    href: "/services/mobile-app-development",
    desc: "Create native and cross-platform mobile experiences.",
  },
  {
    label: "API development services",
    href: "/services/api-development",
    desc: "Connect products, platforms, and business systems.",
  },
  {
    label: "Quality engineering services",
    href: "/services/quality-engineering",
    desc: "Improve release confidence with QA and testing.",
  },
  {
    label: "DevOps engineering services",
    href: "/services/devops",
    desc: "Support deployment automation and delivery reliability.",
  },
  {
    label: "System integration services",
    href: "/services/system-integration",
    desc: "Connect applications, APIs, data, and business workflows.",
  },
];

const projectContexts = [
  "Internal workflow software",
  "Customer and partner portals",
  "Operational dashboards",
  "Business system integrations",
  "Legacy application modernization",
  "Custom SaaS products",
];

const differentiators = [
  {
    title: "Requirement-first planning",
    desc: "Custom software work starts with the business problem, users, workflows, systems, and constraints.",
  },
  {
    title: "Connected engineering coverage",
    desc: "Softzino service areas cover product design, web, mobile, cloud, data, AI, DevOps, QA, integration, and engineering teams.",
  },
  {
    title: "Flexible delivery models",
    desc: "Softzino offers project delivery, dedicated teams, staff augmentation, managed engineering teams, and team extension models.",
  },
  {
    title: "Support beyond launch",
    desc: "Custom software work can include testing, deployment, maintenance, and continuous improvement after release.",
  },
];

const relatedNeeds = [
  {
    title: "Workflow Automation",
    desc: "Replace repetitive manual steps with software that supports the way teams already operate.",
  },
  {
    title: "Platform Modernization",
    desc: "Improve aging tools while protecting the business logic and data that still matter.",
  },
  {
    title: "System Integration",
    desc: "Connect existing applications, databases, APIs, and third-party platforms into cleaner processes.",
  },
  {
    title: "Product Expansion",
    desc: "Add new product features, user roles, reporting, and operational tools as requirements evolve.",
  },
];

const faqItems = [
  {
    question: "What is custom software development?",
    answer:
      "Custom software development is the process of designing, building, testing, deploying, and improving software around a specific company's workflows, users, data, and business requirements instead of forcing the business into a generic tool.",
  },
  {
    question: "How much does custom software development cost?",
    answer:
      "Cost depends on scope, features, integrations, design complexity, team size, timeline, security needs, and support requirements. A discovery conversation is the safest way to estimate a custom build accurately.",
  },
  {
    question: "How long does custom software development take?",
    answer:
      "Timelines vary by project size and complexity. A focused MVP may move faster, while enterprise custom software development with integrations, permissions, reporting, and testing usually needs a longer phased plan.",
  },
  {
    question: "How do I choose a custom software development company?",
    answer:
      "Look for a team that can understand your business requirements, explain its process, show relevant experience, plan architecture carefully, test thoroughly, communicate clearly, and support the software after launch.",
  },
  {
    question: "Does Softzino provide maintenance after launch?",
    answer:
      "Yes. Softzino's custom software development services can include post-launch maintenance, support, fixes, enhancements, deployment improvements, and continuous product improvement.",
  },
];

export const metadata = createPageMetadata("/solutions/custom-software-solutions");

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Custom Software Development Services",
  serviceType: "Custom software development",
  description,
  url: pageUrl,
  provider: {
    "@type": "Organization",
    name: siteName,
    url: productionOrigin,
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Custom software development services",
    itemListElement: services.map((service) => ({
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: service.title,
        description: service.desc,
      },
    })),
  },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: absoluteUrl("/"),
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Custom Software Solutions",
      item: pageUrl,
    },
  ],
};

export default function CustomSoftwareSolutionsPage() {
  return (
    <>
      <JsonLd data={serviceJsonLd} />
      <JsonLd data={breadcrumbJsonLd} />

      <div className="mx-auto max-w-content px-4 pt-8 md:px-8 lg:px-16">
        <Breadcrumb current="Custom Software Solutions" />
      </div>

      <section className="bg-bg-offwhite">
        <div className="mx-auto grid w-full max-w-content grid-cols-1 items-center gap-10 px-4 py-16 md:px-8 md:py-20 lg:grid-cols-[1fr_0.9fr] lg:px-16 lg:py-24">
          <div className="min-w-0 max-w-full lg:max-w-3xl">
            <p className="font-mono text-xs font-bold uppercase tracking-wide text-teal-primary">
              Custom Software Solutions
            </p>
            <h1 className="mt-4 max-w-full break-words text-3xl font-bold leading-tight text-navy-deep md:text-4xl lg:text-5xl">
              <span className="block">Custom Software</span>
              <span className="block">Development Company</span>
            </h1>
            <p className="mt-6 max-w-full break-words text-lg leading-relaxed text-body-text">
              Softzino is a custom software development company helping businesses turn unique
              requirements into secure, scalable software. The team supports end-to-end custom
              software development from discovery to support.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link
                href={contactHref}
                className="inline-flex min-h-12 w-full max-w-full items-center justify-center gap-2 rounded-sm4 bg-navy-deep px-5 py-4 text-center text-sm font-bold uppercase tracking-wide text-white transition-colors hover:bg-navy-header sm:w-auto sm:px-8"
              >
                <span className="min-w-0 break-words">Discuss Your Software Project</span>
                <ArrowRight size={16} className="shrink-0" />
              </Link>
              <Link
                href="/services"
                className="inline-flex min-h-12 w-full max-w-full items-center justify-center rounded-sm4 border border-teal-secondary px-5 py-4 text-center text-sm font-bold text-teal-secondary transition-colors hover:bg-teal-secondary/5 sm:w-auto sm:px-8"
              >
                Explore Related Services
              </Link>
            </div>
          </div>

          <div className="overflow-hidden rounded-card border border-border-lighter bg-white shadow-card-md">
            <Image
              src={assetPath("/img1/planning-session.jpeg")}
              alt="Softzino team planning a custom software development project"
              width={650}
              height={480}
              priority
              className="aspect-[4/3] w-full object-cover"
            />
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto w-full max-w-content px-4 py-16 md:px-8 md:py-20 lg:px-16 lg:py-24">
          <div className="max-w-full lg:max-w-3xl">
            <p className="font-mono text-xs font-bold uppercase tracking-wide text-teal-primary">
              Services
            </p>
            <h2 className="mt-4 max-w-full break-words text-3xl font-bold leading-tight text-text-dark md:text-4xl">
              Custom Software Development Services
            </h2>
            <p className="mt-5 max-w-full break-words text-lg leading-relaxed text-body-text">
              Softzino plans and builds custom application development projects around business
              workflows, product goals, users, data, integrations, testing, deployment, and
              long-term support.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map(({ icon: Icon, title: serviceTitle, desc }) => (
              <article
                key={serviceTitle}
                className="min-w-0 rounded-card border border-border-lighter bg-bg-card-gray p-6 shadow-card-sm md:p-8"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-sm4 bg-teal-mint text-teal-primary">
                  <Icon size={20} aria-hidden="true" />
                </div>
                <h3 className="mt-6 break-words text-xl font-bold text-navy-deep">
                  {serviceTitle}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-body-text">{desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-bg-offwhite">
        <div className="mx-auto grid max-w-content grid-cols-1 gap-10 px-4 py-16 md:px-8 md:py-20 lg:grid-cols-[0.85fr_1.15fr] lg:gap-12 lg:px-16 lg:py-24">
          <div className="min-w-0">
            <p className="font-mono text-xs font-bold uppercase tracking-wide text-teal-primary">
              Business Fit
            </p>
            <h2 className="mt-4 text-3xl font-bold leading-tight text-text-dark md:text-4xl">
              Software Tailored to Business Requirements
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-body-text">
              A custom software solutions company should start with how your business works, not
              with a fixed template. Softzino shapes software around processes, integrations,
              users, reporting needs, and future growth.
            </p>
          </div>

          <div className="grid gap-4">
            {requirements.map((item) => (
              <div key={item} className="flex gap-4 rounded-card bg-white p-5 shadow-card-sm">
                <CheckCircle2 size={20} className="mt-1 shrink-0 text-teal-secondary" />
                <p className="text-base leading-relaxed text-body-text">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-content px-4 py-16 text-center md:px-8 md:py-20 lg:px-16 lg:py-24">
          <p className="font-mono text-xs font-bold uppercase tracking-wide text-teal-primary">
            Process
          </p>
          <h2 className="mt-4 text-3xl font-bold text-text-dark md:text-4xl lg:text-5xl">
            Custom Software Development Process
          </h2>
          <p className="mx-auto mt-5 max-w-3xl text-lg leading-relaxed text-body-text">
            End-to-end custom software development works best when discovery, design,
            architecture, development, testing, deployment, and support are connected from the
            beginning.
          </p>
          <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((step, index) => (
              <article key={step.title} className="min-w-0">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-card bg-navy-deep font-mono text-sm font-bold text-white shadow-card-sm">
                  {String(index + 1).padStart(2, "0")}
                </div>
                <h3 className="mt-5 break-words text-lg font-bold text-navy-deep">
                  {step.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-body-text">{step.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-bg-offwhite">
        <div className="mx-auto max-w-content px-4 py-16 md:px-8 md:py-20 lg:px-16 lg:py-24">
          <div className="max-w-3xl">
            <p className="font-mono text-xs font-bold uppercase tracking-wide text-teal-primary">
              Related Expertise
            </p>
            <h2 className="mt-4 text-3xl font-bold leading-tight text-text-dark md:text-4xl">
              Connected Engineering Services
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-body-text">
              Custom software often combines product design, web and mobile engineering, quality
              assurance, DevOps, and system integration.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {relatedLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="group min-w-0 rounded-card border border-border-light bg-white p-6 shadow-card-sm transition-colors hover:border-teal-primary hover:bg-bg-offwhite md:p-8"
              >
                <h3 className="break-words text-xl font-bold text-navy-deep group-hover:text-teal-primary">
                  {item.label}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-body-text">{item.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto grid max-w-content grid-cols-1 gap-10 px-4 py-16 md:px-8 md:py-20 lg:grid-cols-2 lg:gap-12 lg:px-16 lg:py-24">
          <div className="min-w-0">
            <p className="font-mono text-xs font-bold uppercase tracking-wide text-teal-primary">
              Project Contexts
            </p>
            <h2 className="mt-4 text-3xl font-bold leading-tight text-text-dark md:text-4xl">
              Common Custom Software Needs
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-body-text">
              Custom software is usually useful when standard tools do not fit the team,
              workflow, data, integrations, or product direction.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              {projectContexts.map((context) => (
                <span
                  key={context}
                  className="max-w-full break-words rounded-card border border-border-light bg-bg-offwhite px-4 py-3 text-sm font-medium text-text-dark"
                >
                  {context}
                </span>
              ))}
            </div>
          </div>

          <div className="min-w-0 rounded-card bg-navy-deep p-6 text-white shadow-card-md md:p-8">
            <p className="font-mono text-xs font-bold uppercase tracking-wide text-teal-mint">
              Why Softzino
            </p>
            <h2 className="mt-4 text-3xl font-bold leading-tight md:text-4xl">
              Why Work With Softzino
            </h2>
            <div className="mt-8 grid gap-6">
              {differentiators.map((item) => (
                <article key={item.title} className="flex gap-4">
                  <Settings size={20} className="mt-1 shrink-0 text-teal-mint" />
                  <div>
                    <h3 className="font-bold text-white">{item.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-footer-muted">{item.desc}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-bg-offwhite">
        <div className="mx-auto max-w-content px-4 py-16 md:px-8 md:py-20 lg:px-16 lg:py-24">
          <div className="flex flex-col justify-between gap-6 border-b border-border-light pb-8 md:flex-row md:items-end">
            <div className="max-w-3xl">
              <p className="font-mono text-xs font-bold uppercase tracking-wide text-teal-primary">
                Use Cases
              </p>
              <h2 className="mt-4 text-3xl font-bold leading-tight text-text-dark md:text-4xl">
                Where Custom Software Helps
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-body-text">
                Buyers usually look for custom software when their work spans multiple teams,
                tools, data sources, user roles, or approval paths.
              </p>
            </div>
            <Link
              href="/services"
              className="inline-flex min-h-12 w-full max-w-full items-center justify-center gap-2 rounded-sm4 border border-teal-primary px-5 py-4 text-center text-sm font-bold text-teal-primary transition-colors hover:bg-teal-primary hover:text-white sm:w-auto sm:px-6"
            >
              <span className="min-w-0 break-words">Explore Services</span>
              <ArrowRight size={16} className="shrink-0" />
            </Link>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {relatedNeeds.map((item) => (
              <article key={item.title} className="min-w-0 rounded-card bg-white p-6 shadow-card-sm">
                <h3 className="break-words text-xl font-bold text-navy-deep">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-body-text">{item.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-content px-4 py-16 md:px-8 md:py-20 lg:px-16 lg:py-24">
          <div className="mx-auto max-w-3xl text-center">
            <p className="font-mono text-xs font-bold uppercase tracking-wide text-teal-primary">
              FAQ
            </p>
            <h2 className="mt-4 text-3xl font-bold text-text-dark md:text-4xl">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="mx-auto mt-12 grid max-w-4xl gap-4">
            {faqItems.map((item) => (
              <details
                key={item.question}
                className="group rounded-card border border-border-lighter bg-bg-offwhite p-5 shadow-card-sm open:bg-white md:p-6"
              >
                <summary className="flex cursor-pointer list-none items-start justify-between gap-4 text-left">
                  <h3 className="break-words text-lg font-bold text-navy-deep">{item.question}</h3>
                  <ArrowRight
                    size={18}
                    className="mt-1 shrink-0 text-teal-primary transition-transform group-open:rotate-90"
                    aria-hidden="true"
                  />
                </summary>
                <p className="mt-4 text-sm leading-relaxed text-body-text">{item.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-navy-deep">
        <div className="mx-auto max-w-content px-4 py-16 text-center md:px-8 md:py-20 lg:px-16 lg:py-24">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-card bg-white/10 text-teal-mint">
            <Workflow size={26} aria-hidden="true" />
          </div>
          <h2 className="mx-auto mt-6 max-w-3xl text-3xl font-bold leading-tight text-white md:text-4xl lg:text-5xl">
            Ready to Build Software Around Your Business?
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-footer-muted">
            Tell Softzino about your workflow, users, systems, and goals. The team can help you
            assess the right path for a custom software build.
          </p>
          <Link
            href={contactHref}
            className="mt-10 inline-flex min-h-12 w-full max-w-full items-center justify-center gap-2 rounded-sm4 bg-[#F5CF74] px-5 py-4 text-center text-sm font-bold uppercase tracking-wide text-navy-deep transition-colors hover:bg-[#FFD978] sm:w-auto sm:px-8"
          >
            <span className="min-w-0 break-words">Discuss Your Software Project</span>
            <ArrowRight size={16} className="shrink-0" />
          </Link>
        </div>
      </section>
    </>
  );
}

function JsonLd({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: jsonLd(data),
      }}
    />
  );
}
