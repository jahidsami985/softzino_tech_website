import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, ChevronRight } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { getServiceHref } from "@/lib/services-data";
import { assetPath } from "@/lib/site-paths";

type SummaryItem = {
  title: string;
  desc: string;
};

type IconCard = {
  icon: LucideIcon;
  title: string;
  desc?: string;
  tone?: "navy" | "teal" | "gold" | "muted";
};

type EngagementModel = {
  title: string;
  desc: string;
  points: string[];
  accent?: "navy" | "teal" | "gold" | "black";
};

type ProcessStep = {
  title: string;
  desc: string;
};

type RelatedService = {
  title: string;
  desc: string;
};

type StandardServiceData = {
  variant: "standard";
  title: string;
  category: string;
  categoryHref: string;
  eyebrow: string;
  headline: string;
  intro: string;
  image: string;
  imageAlt: string;
  summary: SummaryItem[];
  offerings: IconCard[];
  whyChoose: IconCard[];
  engagementModels: EngagementModel[];
  technologies: string[];
  processSteps: ProcessStep[];
  relatedServices: RelatedService[];
  ctaTitle: string;
  ctaText: string;
};

type TrainingServiceData = {
  variant: "training";
  title: string;
  category: string;
  categoryHref: string;
  headline: string;
  intro: string;
  approachText: string;
  ecosystemTitle: string;
  ecosystemText: string;
  ecosystemImage: string;
  outcomes: IconCard[];
  domains: string[];
  offerings: IconCard[];
  technologies: string[];
  whyImage: string;
  whyChoose: { title: string; desc: string }[];
  engagementModels: EngagementModel[];
  processSteps: ProcessStep[];
  relatedServices: RelatedService[];
  ctaTitle: string;
  ctaText: string;
};

export type ServiceDetailData = StandardServiceData | TrainingServiceData;

const toneClasses: Record<NonNullable<IconCard["tone"]>, string> = {
  navy: "bg-navy-header text-white",
  teal: "bg-teal-mint text-teal-primary",
  gold: "bg-gold text-white",
  muted: "bg-border-lighter text-body-text",
};

const accentClasses: Record<NonNullable<EngagementModel["accent"]>, string> = {
  navy: "border-t-navy-header",
  teal: "border-t-teal-secondary",
  gold: "border-t-gold",
  black: "border-t-black",
};

export default function ServiceDetailPage({ data }: { data: ServiceDetailData }) {
  if (data.variant === "training") {
    return <TrainingServicePage data={data} />;
  }

  return <StandardServicePage data={data} />;
}

function StandardServicePage({ data }: { data: StandardServiceData }) {
  return (
    <>
      {/* Breadcrumb and hero follow the service detail template from the Figma reference. */}
      <section className="bg-bg-offwhite">
        <div className="mx-auto max-w-content px-4 py-12 md:px-16 md:py-20">
          <ServiceBreadcrumb
            category={data.category}
            categoryHref={data.categoryHref}
            current={data.title}
          />

          <div className="mt-12 grid grid-cols-1 items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
            <div className="max-w-3xl">
              <p className="inline-flex rounded-sm4 bg-teal-mint/60 px-3 py-1 font-mono text-xs font-bold uppercase tracking-wide text-teal-primary">
                {data.eyebrow}
              </p>
              <h1 className="mt-6 text-3xl font-bold leading-tight text-navy-deep md:text-5xl">
                {data.headline}
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-body-text">
                {data.intro}
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <PrimaryButton>Talk to an Expert</PrimaryButton>
                <SecondaryButton>Get a Quote</SecondaryButton>
              </div>
            </div>

            <div className="overflow-hidden rounded-card border border-border-lighter bg-white shadow-card-sm">
              <Image
                src={assetPath(data.image)}
                alt={data.imageAlt}
                width={540}
                height={510}
                priority
                className="aspect-[4/3] w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Summary strip: short service definition, value, outcomes, and target industries. */}
      <section className="border-y border-border-lighter bg-white">
        <div className="mx-auto grid max-w-content grid-cols-1 gap-8 px-4 py-12 md:grid-cols-2 md:px-16 lg:grid-cols-4">
          {data.summary.map((item) => (
            <article key={item.title}>
              <h2 className="text-base font-bold text-navy-deep">{item.title}</h2>
              <p className="mt-3 text-sm leading-relaxed text-body-text">{item.desc}</p>
            </article>
          ))}
        </div>
      </section>

      <OfferingsSection cards={data.offerings} />
      <WhyChooseSection cards={data.whyChoose} />
      <EngagementModelsSection models={data.engagementModels} />
      <TechnologiesSection technologies={data.technologies} />
      <ProcessSection steps={data.processSteps} darkNumbers={data.title === "Semiconductor Testing"} />
      <RelatedServicesSection services={data.relatedServices} />
      <StandardCta title={data.ctaTitle} text={data.ctaText} />
    </>
  );
}

function TrainingServicePage({ data }: { data: TrainingServiceData }) {
  return (
    <>
      {/* Dark hero from the Skill Development reference. */}
      <section className="bg-black">
        <div className="mx-auto max-w-content px-4 py-12 md:px-16 md:py-20">
          <ServiceBreadcrumb
            category={data.category}
            categoryHref={data.categoryHref}
            current={data.title}
            dark
          />
          <div className="mt-16 max-w-2xl">
            <h1 className="text-3xl font-bold leading-tight text-white md:text-5xl">
              {data.headline}
            </h1>
            <p className="mt-6 text-base leading-relaxed text-footer-muted">{data.intro}</p>
            <div className="mt-8">
              <GoldButton>Schedule a Consultation</GoldButton>
            </div>
          </div>
        </div>
      </section>

      {/* Consultancy-first statement block. */}
      <section className="bg-white">
        <div className="mx-auto grid max-w-content grid-cols-1 gap-10 px-4 py-16 md:px-16 lg:grid-cols-[0.55fr_1fr]">
          <p className="font-mono text-xs font-bold uppercase tracking-wide text-body-text">
            The Softzino Approach
          </p>
          <h2 className="text-2xl font-bold leading-tight text-text-dark md:text-4xl">
            {data.approachText}
          </h2>
        </div>
      </section>

      {/* Learning ecosystem section with the cropped workshop image. */}
      <section className="bg-bg-offwhite">
        <div className="mx-auto grid max-w-content grid-cols-1 items-center gap-10 px-4 py-16 md:px-16 md:py-24 lg:grid-cols-2">
          <div>
            <h2 className="text-2xl font-bold text-text-dark md:text-3xl">
              {data.ecosystemTitle}
            </h2>
            <p className="mt-5 text-sm leading-relaxed text-body-text">{data.ecosystemText}</p>
          </div>
          <Image
            src={assetPath(data.ecosystemImage)}
            alt="Softzino engineers conducting a technical training session"
            width={560}
            height={410}
            className="w-full rounded-card object-cover shadow-card-md"
          />
        </div>
      </section>

      <section className="bg-bg-offwhite">
        <div className="mx-auto max-w-content px-4 pb-16 text-center md:px-16 md:pb-24">
          <SectionHeading title="Mitigate Technical Obsolescence" />
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-body-text">
            Foster a culture of innovation within your internal teams to secure your competitive
            advantage and reduce technical debt through superior engineering practices.
          </p>
          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
            {data.outcomes.map((item) => (
              <IconCardView key={item.title} card={item} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-navy-deep py-12 text-center">
        <p className="text-sm font-bold text-white">Specialized for Complex Domains</p>
        <div className="mt-6 flex flex-wrap justify-center gap-3 px-4">
          {data.domains.map((domain) => (
            <span
              key={domain}
              className="rounded-full bg-white/10 px-5 py-2 font-mono text-xs uppercase tracking-wide text-white/70"
            >
              {domain}
            </span>
          ))}
        </div>
      </section>

      <OfferingsSection
        cards={data.offerings}
        title="Our Training Offerings"
        intro="Bespoke modules designed for varying levels of technical maturity across your organization."
      />

      <section className="bg-border-lighter">
        <div className="mx-auto grid max-w-content grid-cols-1 gap-8 px-4 py-12 md:px-16 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <h2 className="text-base font-bold text-text-dark">Technologies We Master</h2>
            <p className="mt-3 text-sm leading-relaxed text-body-text">
              Our instructors are active, senior practitioners in leading enterprise stacks.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            {data.technologies.map((tech) => (
              <TechPill key={tech}>{tech}</TechPill>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-black">
        <div className="mx-auto grid max-w-content grid-cols-1 items-center gap-12 px-4 py-16 md:px-16 md:py-24 lg:grid-cols-2">
          <Image
            src={assetPath(data.whyImage)}
            alt="Modern architectural staircase representing engineering growth"
            width={550}
            height={520}
            className="w-full rounded-card object-cover"
          />
          <div>
            <h2 className="text-3xl font-bold text-white md:text-4xl">
              Why Choose Softzino?
            </h2>
            <ul className="mt-8 flex flex-col gap-6">
              {data.whyChoose.map((item) => (
                <li key={item.title} className="flex gap-4">
                  <CheckCircle2 size={20} className="mt-1 shrink-0 text-teal-secondary" />
                  <div>
                    <h3 className="font-bold text-white">{item.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-footer-muted">{item.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <EngagementModelsSection models={data.engagementModels} title="Engagement Models" />
      <ProcessSection steps={data.processSteps} title="The Training Lifecycle" darkNumbers />
      <RelatedServicesSection services={data.relatedServices} muted />

      <section className="bg-[#2A1D00]">
        <div className="mx-auto max-w-content px-4 py-20 text-center md:px-16 md:py-24">
          <h2 className="text-3xl font-bold text-gold md:text-4xl">{data.ctaTitle}</h2>
          <p className="mx-auto mt-6 max-w-2xl text-sm leading-relaxed text-[#A99043]">
            {data.ctaText}
          </p>
          <div className="mt-10">
            <Link
              href="/hire-developers#request-talent"
              className="inline-flex items-center gap-2 rounded-sm4 bg-black px-8 py-4 text-sm font-bold uppercase tracking-wide text-white"
            >
              Talk to an Expert <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

function ServiceBreadcrumb({
  category,
  categoryHref,
  current,
  dark = false,
}: {
  category: string;
  categoryHref: string;
  current: string;
  dark?: boolean;
}) {
  const color = dark ? "text-white/60" : "text-body-text";
  const currentColor = dark ? "text-white" : "text-navy-deep";

  return (
    <nav className={`flex flex-wrap items-center gap-2 font-mono text-xs tracking-wide ${color}`}>
      <Link href="/" className="hover:text-teal-secondary">
        Home
      </Link>
      <ChevronRight size={12} />
      <Link href="/services" className="hover:text-teal-secondary">
        Services
      </Link>
      <ChevronRight size={12} />
      <Link href={categoryHref} className="hover:text-teal-secondary">
        {category}
      </Link>
      <ChevronRight size={12} />
      <span className={`font-bold ${currentColor}`}>{current}</span>
    </nav>
  );
}

function OfferingsSection({
  cards,
  title = "Our Offerings",
  intro,
}: {
  cards: IconCard[];
  title?: string;
  intro?: string;
}) {
  return (
    <section className="bg-bg-offwhite">
      <div className="mx-auto max-w-content px-4 py-16 md:px-16 md:py-24">
        <SectionHeading title={title} />
        {intro && <p className="mt-4 max-w-xl text-sm leading-relaxed text-body-text">{intro}</p>}
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {cards.map((card) => (
            <IconCardView key={card.title} card={card} />
          ))}
        </div>
      </div>
    </section>
  );
}

function IconCardView({ card }: { card: IconCard }) {
  const Icon = card.icon;
  const tone = card.tone ?? "navy";

  return (
    <article className="rounded-card border border-border-lighter bg-bg-card-gray p-8 shadow-card-sm">
      <div className={`flex h-10 w-10 items-center justify-center rounded-sm4 ${toneClasses[tone]}`}>
        <Icon size={18} />
      </div>
      <h3 className="mt-6 text-lg font-bold text-navy-deep">{card.title}</h3>
      {card.desc && <p className="mt-3 text-sm leading-relaxed text-body-text">{card.desc}</p>}
    </article>
  );
}

function WhyChooseSection({ cards }: { cards: IconCard[] }) {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-content px-4 py-16 md:px-16 md:py-24">
        <SectionHeading title="Why Choose Softzino" />
        <div className="mx-auto mt-12 grid max-w-5xl grid-cols-2 gap-x-8 gap-y-12 sm:grid-cols-3 lg:grid-cols-4">
          {cards.map(({ icon: Icon, title }) => (
            <div key={title} className="flex flex-col items-center gap-3 text-center">
              <Icon size={24} className="text-teal-secondary" />
              <p className="max-w-32 text-base font-bold leading-tight text-navy-deep">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function EngagementModelsSection({
  models,
  title = "Engagement Models",
}: {
  models: EngagementModel[];
  title?: string;
}) {
  return (
    <section className="bg-bg-offwhite">
      <div className="mx-auto max-w-content px-4 py-16 md:px-16 md:py-24">
        <SectionHeading title={title} />
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {models.map((model) => {
            const accent = model.accent ?? "teal";

            return (
              <article
                key={model.title}
                className={`rounded-card border border-border-light border-t-4 ${accentClasses[accent]} bg-white p-8 shadow-card-sm`}
              >
                <h3 className="text-lg font-bold text-navy-deep">{model.title}</h3>
                <p className="mt-4 text-sm leading-relaxed text-body-text">{model.desc}</p>
                <ul className="mt-6 flex flex-col gap-3">
                  {model.points.map((point) => (
                    <li key={point} className="flex items-center gap-2 text-sm text-text-dark">
                      <CheckCircle2 size={14} className="shrink-0 text-teal-secondary" />
                      {point}
                    </li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function TechnologiesSection({ technologies }: { technologies: string[] }) {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-content px-4 py-16 text-center md:px-16 md:py-24">
        <SectionHeading title="Technologies We Master" />
        <div className="mx-auto mt-10 flex max-w-4xl flex-wrap justify-center gap-4">
          {technologies.map((tech) => (
            <TechPill key={tech}>{tech}</TechPill>
          ))}
        </div>
      </div>
    </section>
  );
}

function TechPill({ children }: { children: string }) {
  return (
    <span className="rounded-full border border-border-light bg-white px-5 py-2 text-sm font-bold text-navy-deep shadow-card-sm">
      {children}
    </span>
  );
}

function ProcessSection({
  steps,
  title = "Our Process",
  darkNumbers = false,
}: {
  steps: ProcessStep[];
  title?: string;
  darkNumbers?: boolean;
}) {
  return (
    <section className="bg-bg-offwhite">
      <div className="mx-auto max-w-content px-4 py-16 md:px-16 md:py-24">
        <SectionHeading title={title} />
        <div className="mt-12 overflow-x-auto pb-2">
          <div className="flex min-w-[760px] items-start">
            {steps.map((step, index) => (
              <div key={step.title} className="flex flex-1 items-start">
                <div className="flex w-full flex-col items-center text-center">
                  <div
                    className={`flex h-10 w-10 items-center justify-center rounded-full text-sm font-bold ${
                      darkNumbers ? "bg-black text-white" : "bg-navy-deep text-white"
                    }`}
                  >
                    {index + 1}
                  </div>
                  <h3 className="mt-4 text-base font-bold text-navy-deep">{step.title}</h3>
                  <p className="mt-2 max-w-40 text-xs leading-relaxed text-body-text">
                    {step.desc}
                  </p>
                </div>
                {index < steps.length - 1 && (
                  <div className="-ml-10 mr-2 mt-5 h-px flex-1 bg-border-light" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function RelatedServicesSection({
  services,
  muted = false,
}: {
  services: RelatedService[];
  muted?: boolean;
}) {
  return (
    <section className={muted ? "bg-border-lighter" : "bg-white"}>
      <div className="mx-auto max-w-content px-4 py-16 md:px-16">
        <h2 className="text-3xl font-bold text-navy-deep md:text-4xl">Related Services</h2>
        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <Link
              key={service.title}
              href={getServiceHref(service.title)}
              className="rounded-card border border-border-light bg-white p-6 shadow-card-sm transition-colors hover:border-teal-secondary hover:bg-bg-offwhite"
            >
              <h3 className="text-lg font-bold text-navy-deep">{service.title}</h3>
              <p className="mt-2 text-sm text-body-text">{service.desc}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

function StandardCta({ title, text }: { title: string; text: string }) {
  return (
    <section className="bg-navy-deep">
      <div className="mx-auto max-w-content px-4 py-20 text-center md:px-16 md:py-24">
        <h2 className="text-3xl font-bold text-white md:text-4xl">{title}</h2>
        <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-footer-muted">
          {text}
        </p>
        <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
          <GoldButton>Schedule a Consultation</GoldButton>
          <SecondaryDarkButton>Contact Us</SecondaryDarkButton>
        </div>
      </div>
    </section>
  );
}

function PrimaryButton({ children }: { children: string }) {
  return (
    <Link
      href="/hire-developers#request-talent"
      className="inline-flex justify-center rounded-sm4 bg-navy-deep px-8 py-4 text-sm font-bold text-white transition-colors hover:bg-navy-header"
    >
      {children}
    </Link>
  );
}

function SecondaryButton({ children }: { children: string }) {
  return (
    <Link
      href="/hire-developers#request-talent"
      className="inline-flex justify-center rounded-sm4 border border-teal-secondary px-8 py-4 text-sm font-bold text-teal-secondary transition-colors hover:bg-teal-secondary/5"
    >
      {children}
    </Link>
  );
}

function GoldButton({ children }: { children: string }) {
  return (
    <Link
      href="/hire-developers#request-talent"
      className="inline-flex justify-center rounded-sm4 bg-[#F5CF74] px-8 py-4 text-sm font-bold text-navy-deep transition-colors hover:bg-[#FFD978]"
    >
      {children}
    </Link>
  );
}

function SecondaryDarkButton({ children }: { children: string }) {
  return (
    <Link
      href="/hire-developers#request-talent"
      className="inline-flex justify-center rounded-sm4 border border-footer-muted px-8 py-4 text-sm font-bold text-white transition-colors hover:bg-white/10"
    >
      {children}
    </Link>
  );
}

function SectionHeading({ title }: { title: string }) {
  return <h2 className="text-center text-3xl font-bold text-navy-deep md:text-4xl">{title}</h2>;
}
