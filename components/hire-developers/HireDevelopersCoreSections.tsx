import { ArrowRight, CheckCircle2 } from "lucide-react";
import {
  developerRoles,
  engagementModels,
  hireBenefits,
  hiringSteps,
  teamRoles,
  technologyGroups,
  trustIndicators,
  whySoftzinoItems,
} from "@/lib/hire-developers-data";

const formHref = "#hire-developers-form";

export function HireDevelopersHero() {
  return (
    <section className="bg-bg-cream">
      <div className="mx-auto grid w-full max-w-content grid-cols-1 items-center gap-10 overflow-hidden px-4 py-14 md:px-8 md:py-20 lg:grid-cols-[1fr_0.95fr] lg:px-16 lg:py-24">
        <div className="min-w-0">
          <p className="font-mono text-xs uppercase tracking-wide text-teal-primary">
            Dedicated Development Teams
          </p>
          <h1 className="mt-4 max-w-3xl break-words text-3xl font-bold leading-tight text-navy-deep md:text-4xl lg:text-5xl">
            <span className="text-teal-primary">Hire Skilled Developers</span> to Build, Scale
            &amp; Accelerate Your Product
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-body-text">
            Extend your engineering capabilities with experienced Softzino developers. From
            individual specialists to complete dedicated teams, we help businesses build reliable,
            scalable and high-quality digital products.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
            <a
              href={formHref}
              className="inline-flex min-h-12 w-full max-w-full items-center justify-center gap-2 rounded-2xl bg-teal-primary px-5 py-4 text-center text-sm font-bold uppercase tracking-wide text-white transition-colors hover:bg-teal-secondary sm:w-auto sm:px-8"
            >
              Hire Developers <ArrowRight size={16} />
            </a>
            <a
              href={formHref}
              className="inline-flex min-h-12 w-full max-w-full items-center justify-center rounded-2xl border-2 border-teal-primary px-5 py-4 text-center text-sm font-bold uppercase tracking-wide text-teal-primary transition-colors hover:bg-teal-primary/5 sm:w-auto sm:px-8"
            >
              Talk to Our Experts
            </a>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-3 sm:grid-cols-2">
            {trustIndicators.map((item) => (
              <div
                key={item}
                className="flex min-w-0 items-center gap-3 rounded-card border border-border-lighter bg-white px-4 py-3 shadow-card-sm"
              >
                <CheckCircle2 size={18} className="shrink-0 text-teal-secondary" />
                <span className="break-words text-sm font-semibold text-navy-deep">{item}</span>
              </div>
            ))}
          </div>
        </div>

        <DeveloperHeroVisual />
      </div>
    </section>
  );
}

function DeveloperHeroVisual() {
  return (
    <div className="relative min-h-[640px] min-w-0 overflow-hidden rounded-card border border-border-lighter bg-white p-4 shadow-card-lg sm:min-h-[560px] sm:p-6 lg:min-h-[520px]">
      <div className="absolute inset-x-4 top-4 rounded-card border border-border-lighter bg-navy-deep p-4 text-white shadow-card-md sm:inset-x-6 sm:top-6">
        <div className="flex items-center gap-2 border-b border-white/10 pb-3">
          <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
          <span className="h-2.5 w-2.5 rounded-full bg-gold" />
          <span className="h-2.5 w-2.5 rounded-full bg-teal-mint" />
          <span className="ml-2 font-mono text-xs text-white/60">product-sprint.ts</span>
        </div>
        <div className="mt-4 space-y-3 font-mono text-xs leading-relaxed sm:text-sm">
          <p>
            <span className="text-teal-mint">const</span>{" "}
            <span className="text-white">team</span> = assembleDevelopers();
          </p>
          <p className="text-white/70">team.plan().design().develop().review();</p>
          <p>
            <span className="text-gold">deploy</span>
            <span className="text-white/70">(qualityCheckedProduct);</span>
          </p>
        </div>
      </div>

      <div className="absolute left-4 top-[205px] w-[calc(100%-2rem)] rounded-card border border-border-lighter bg-bg-cream p-4 shadow-card-md sm:left-6 sm:w-64">
        <p className="font-mono text-xs uppercase tracking-wide text-body-text">Matched Talent</p>
        <div className="mt-4 flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-teal-secondary text-sm font-bold text-white">
            SD
          </div>
          <div className="min-w-0">
            <p className="break-words font-bold text-navy-deep">Senior Developer</p>
            <p className="text-sm text-body-text">React, APIs, Product UI</p>
          </div>
        </div>
        <div className="mt-4 flex flex-wrap gap-2">
          {["Sprint-ready", "Code review", "QA aligned"].map((item) => (
            <span
              key={item}
              className="rounded-sm4 bg-white px-2.5 py-1 font-mono text-[11px] uppercase tracking-wide text-teal-primary"
            >
              {item}
            </span>
          ))}
        </div>
      </div>

      <div className="absolute bottom-5 left-4 right-4 rounded-card border border-border-lighter bg-white p-4 shadow-card-md sm:bottom-6 sm:left-auto sm:right-6 sm:w-72">
        <p className="font-mono text-xs uppercase tracking-wide text-teal-primary">
          Product Status
        </p>
        <div className="mt-4 space-y-3">
          {[
            ["Planning", "100%"],
            ["Development", "72%"],
            ["QA Review", "38%"],
          ].map(([label, value]) => (
            <div key={label}>
              <div className="flex justify-between text-sm font-semibold text-navy-deep">
                <span>{label}</span>
                <span>{value}</span>
              </div>
              <div className="mt-2 h-2 rounded-full bg-bg-warm-gray">
                <div
                  className={`h-2 rounded-full bg-teal-secondary ${
                    value === "100%" ? "w-full" : value === "72%" ? "w-[72%]" : "w-[38%]"
                  }`}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute right-4 top-[230px] hidden max-w-[190px] rounded-card border border-border-lighter bg-white p-3 shadow-card-md sm:block lg:right-8">
        <p className="font-mono text-[11px] uppercase tracking-wide text-body-text">
          Stack Coverage
        </p>
        <div className="mt-3 flex flex-wrap gap-2">
          {["React", "Node.js", "Cloud", "QA"].map((item) => (
            <span
              key={item}
              className="rounded-sm4 bg-bg-warm-gray px-2.5 py-1 text-xs font-bold text-navy-deep"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export function WhyBusinessesChooseSection() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-content px-4 py-14 md:px-8 md:py-16 lg:px-16">
        <SectionIntro
          eyebrow="Why Softzino"
          title="Engineering Talent Built Around Your Business"
          description="Add practical engineering capability without losing visibility, control, or product momentum."
        />
        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {whySoftzinoItems.map(({ icon: Icon, title, description }) => (
            <article
              key={title}
              className="min-w-0 rounded-card border border-border-lighter bg-bg-cream p-5 shadow-card-sm"
            >
              <Icon size={22} className="text-teal-secondary" />
              <h2 className="mt-4 break-words text-base font-bold text-navy-deep">{title}</h2>
              <p className="mt-2 text-sm leading-relaxed text-body-text">{description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function TechnologyDevelopersSection() {
  return (
    <section className="bg-bg-offwhite">
      <div className="mx-auto max-w-content px-4 py-16 md:px-8 md:py-20 lg:px-16">
        <SectionIntro
          eyebrow="Technology Expertise"
          title="Hire Developers by Technology"
          description="Build your engineering team with developers experienced in the technologies required for modern web, mobile, cloud and software products."
        />

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
          {technologyGroups.map(({ icon: Icon, title, technologies }) => (
            <article
              key={title}
              className="min-w-0 rounded-card border border-border-lighter bg-white p-6 shadow-card-sm transition hover:-translate-y-1 hover:shadow-card-md"
            >
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-card bg-navy-deep">
                  <Icon size={22} className="text-white" />
                </div>
                <h2 className="break-words text-xl font-bold text-navy-deep">{title}</h2>
              </div>
              <div className="mt-6 flex flex-wrap gap-2">
                {technologies.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-sm4 border border-border-lighter bg-bg-cream px-3 py-2 text-sm font-semibold text-body-text"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function DeveloperRolesSection() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-content px-4 py-16 md:px-8 md:py-20 lg:px-16">
        <SectionIntro
          eyebrow="Developer Roles"
          title="Find the Right Developers for Your Team"
          description="Request the specific technical role your roadmap needs, from individual contributors to platform specialists."
        />

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
          {developerRoles.map(({ icon: Icon, title, description, skills, cta }) => (
            <article
              key={title}
              className="flex min-w-0 flex-col rounded-card border border-border-lighter bg-bg-cream p-6 shadow-card-sm"
            >
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-card bg-white">
                  <Icon size={22} className="text-teal-secondary" />
                </div>
                <div className="min-w-0">
                  <h2 className="break-words text-lg font-bold text-navy-deep">{title}</h2>
                  <p className="mt-2 text-sm leading-relaxed text-body-text">{description}</p>
                </div>
              </div>
              <div className="mt-5 flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-sm4 bg-white px-2.5 py-1.5 text-xs font-bold text-teal-primary"
                  >
                    {skill}
                  </span>
                ))}
              </div>
              <a
                href={formHref}
                className="mt-6 inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-sm4 border border-teal-primary px-4 py-3 text-center text-sm font-bold text-teal-primary transition-colors hover:bg-teal-primary hover:text-white"
              >
                {cta} <ArrowRight size={14} />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function DedicatedTeamSection() {
  const desktopPositions = [
    "left-1/2 top-0 -translate-x-1/2",
    "left-0 top-[110px]",
    "right-0 top-[110px]",
    "left-[10%] bottom-8",
    "right-[10%] bottom-8",
    "left-1/2 bottom-0 -translate-x-1/2",
    "left-1/2 top-[120px] -translate-x-1/2",
  ];

  return (
    <section className="bg-bg-warm-gray">
      <div className="mx-auto max-w-content px-4 py-16 md:px-8 md:py-20 lg:px-16">
        <SectionIntro
          eyebrow="Team Assembly"
          title="Need More Than One Developer? Build Your Complete Team"
          description="Softzino can assemble a multidisciplinary development team based on your product requirements, technology stack and delivery goals."
        />

        <div className="mt-12 overflow-hidden rounded-card border border-border-lighter bg-white p-5 shadow-card-md sm:p-8">
          <div className="hidden lg:block">
            <div className="relative mx-auto h-[520px] max-w-5xl">
              <div className="absolute left-1/2 top-1/2 z-20 flex h-36 w-52 -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-card bg-navy-deep p-5 text-center text-white shadow-card-lg">
                <p className="font-mono text-xs uppercase tracking-wide text-teal-mint">
                  Your Product
                </p>
                <h2 className="mt-2 text-xl font-bold">Your Team</h2>
              </div>
              <span className="absolute left-1/2 top-14 h-[395px] w-px bg-border-light" />
              <span className="absolute left-[12%] right-[12%] top-[180px] h-px bg-border-light" />
              <span className="absolute left-[20%] right-[20%] bottom-[110px] h-px bg-border-light" />

              {teamRoles.map(({ icon: Icon, title, description }, index) => (
                <article
                  key={title}
                  className={`absolute z-30 w-56 rounded-card border border-border-lighter bg-bg-cream p-4 shadow-card-sm ${desktopPositions[index]}`}
                >
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-card bg-white">
                      <Icon size={19} className="text-teal-secondary" />
                    </div>
                    <h3 className="break-words text-sm font-bold text-navy-deep">{title}</h3>
                  </div>
                  <p className="mt-3 text-xs leading-relaxed text-body-text">{description}</p>
                </article>
              ))}
            </div>
          </div>

          <div className="lg:hidden">
            <div className="relative flex flex-col gap-5">
              <span className="absolute bottom-8 left-6 top-8 w-px bg-border-light" />
              {teamRoles.map(({ icon: Icon, title, description }) => (
                <article key={title} className="relative z-10 flex min-w-0 gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-teal-secondary text-white shadow-card-sm">
                    <Icon size={20} />
                  </div>
                  <div className="min-w-0 rounded-card border border-border-lighter bg-bg-cream p-4 shadow-card-sm">
                    <h3 className="break-words text-base font-bold text-navy-deep">{title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-body-text">{description}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <div className="mt-8 text-center">
            <a
              href={formHref}
              className="inline-flex min-h-12 w-full max-w-full items-center justify-center gap-2 rounded-2xl bg-teal-primary px-5 py-4 text-center text-sm font-bold uppercase tracking-wide text-white transition-colors hover:bg-teal-secondary sm:w-auto sm:px-8"
            >
              Build My Development Team <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export function HireBenefitsSection() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-content px-4 py-16 md:px-8 md:py-20 lg:px-16">
        <SectionIntro
          eyebrow="The Softzino Advantage"
          title="Why Hire Developers from Softzino?"
          description="Bring in engineering support designed for product quality, practical collaboration, and long-term delivery."
        />
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {hireBenefits.map(({ icon: Icon, title, description }) => (
            <article
              key={title}
              className="min-w-0 rounded-card border border-border-lighter bg-bg-cream p-6 shadow-card-sm"
            >
              <Icon size={24} className="text-teal-secondary" />
              <h2 className="mt-4 break-words text-lg font-bold text-navy-deep">{title}</h2>
              <p className="mt-3 text-sm leading-relaxed text-body-text">{description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function EngagementModelsSection() {
  return (
    <section className="bg-bg-offwhite">
      <div className="mx-auto max-w-content px-4 py-16 md:px-8 md:py-20 lg:px-16">
        <SectionIntro
          eyebrow="Flexible Engagement"
          title="Choose the Hiring Model That Fits Your Project"
          description="Select the working model that matches your delivery needs without forcing pricing or rigid packages."
        />

        <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {engagementModels.map(({ icon: Icon, title, description, benefits, cta, featured }) => (
            <article
              key={title}
              className={`flex min-w-0 flex-col rounded-card border p-6 shadow-card-sm md:p-8 ${
                featured
                  ? "border-teal-secondary bg-navy-deep text-white shadow-card-lg"
                  : "border-border-lighter bg-white text-navy-deep"
              }`}
            >
              {featured && (
                <span className="mb-5 w-fit rounded-sm4 bg-teal-mint px-3 py-1 font-mono text-[11px] uppercase tracking-wide text-navy-deep">
                  Recommended
                </span>
              )}
              <Icon size={26} className={featured ? "text-teal-mint" : "text-teal-secondary"} />
              <h2 className="mt-5 break-words text-xl font-bold">{title}</h2>
              <p className={`mt-3 text-sm leading-relaxed ${featured ? "text-white/75" : "text-body-text"}`}>
                {description}
              </p>
              <ul className="mt-6 flex flex-col gap-3">
                {benefits.map((benefit) => (
                  <li
                    key={benefit}
                    className={`flex min-w-0 items-start gap-3 text-sm ${
                      featured ? "text-white/85" : "text-body-text"
                    }`}
                  >
                    <CheckCircle2
                      size={17}
                      className={`mt-0.5 shrink-0 ${featured ? "text-teal-mint" : "text-teal-secondary"}`}
                    />
                    <span className="break-words">{benefit}</span>
                  </li>
                ))}
              </ul>
              <a
                href={formHref}
                className={`mt-auto inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-sm4 px-4 py-3 text-center text-sm font-bold transition-colors ${
                  featured
                    ? "bg-teal-mint text-navy-deep hover:bg-white"
                    : "border border-teal-primary text-teal-primary hover:bg-teal-primary hover:text-white"
                }`}
              >
                {cta} <ArrowRight size={14} />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function HiringProcessSection() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-content px-4 py-16 md:px-8 md:py-20 lg:px-16">
        <SectionIntro
          eyebrow="Simple Hiring Process"
          title="Build Your Development Team in a Few Simple Steps"
          description="A clear path from requirements to collaboration, with room to scale when the product needs it."
        />

        <div className="mt-12 flex flex-col gap-6 lg:flex-row lg:items-start lg:gap-0">
          {hiringSteps.map((step, index) => (
            <div key={step.title} className="relative flex min-w-0 flex-1 gap-4 lg:flex-col lg:items-center lg:text-center">
              <div className="relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-teal-secondary font-mono text-sm font-bold text-white shadow-card-sm">
                {String(index + 1).padStart(2, "0")}
              </div>
              {index < hiringSteps.length - 1 && (
                <span className="absolute bottom-[-1.5rem] left-7 top-14 w-px bg-border-light lg:left-1/2 lg:right-0 lg:top-7 lg:h-px lg:w-full" />
              )}
              <div className="min-w-0 rounded-card border border-border-lighter bg-bg-cream p-4 shadow-card-sm lg:mt-6 lg:min-h-[170px]">
                <h2 className="break-words text-base font-bold text-navy-deep">{step.title}</h2>
                <p className="mt-2 text-sm leading-relaxed text-body-text">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function SectionIntro({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      <p className="font-mono text-xs uppercase tracking-wide text-teal-primary">{eyebrow}</p>
      <h2 className="mt-3 text-2xl font-bold text-navy-deep md:text-3xl">{title}</h2>
      <p className="mt-3 text-base leading-relaxed text-body-text">{description}</p>
    </div>
  );
}
