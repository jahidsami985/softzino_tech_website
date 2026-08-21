import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { getServiceHref } from "@/lib/services-data";
import {
  collaborationPractices,
  expertiseServices,
  industries,
  workflowSteps,
} from "@/lib/hire-developers-data";

const formHref = "#hire-developers-form";

export function DevelopmentExpertiseSection() {
  return (
    <section className="bg-bg-warm-gray">
      <div className="mx-auto max-w-content px-4 py-16 md:px-8 md:py-20 lg:px-16">
        <SectionIntro
          eyebrow="What We Build"
          title="Development Expertise Beyond Staff Augmentation"
          description="Hire developers with access to Softzino's broader software engineering practices and established service areas."
        />

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {expertiseServices.map(({ icon: Icon, title, description }) => (
            <Link
              key={title}
              href={getServiceHref(title)}
              className="group flex min-w-0 flex-col rounded-card border border-border-lighter bg-white p-5 shadow-card-sm transition hover:-translate-y-1 hover:shadow-card-md"
            >
              <Icon size={23} className="text-teal-secondary" />
              <h2 className="mt-4 break-words text-base font-bold text-navy-deep group-hover:text-teal-primary">
                {title}
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-body-text">{description}</p>
              <span className="mt-auto inline-flex items-center gap-1 pt-5 text-sm font-bold text-teal-primary">
                Explore service <ArrowRight size={14} />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export function IndustriesSection() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-content px-4 py-16 md:px-8 md:py-20 lg:px-16">
        <SectionIntro
          eyebrow="Industry Experience"
          title="Developers Who Understand Different Industries"
          description="Softzino developers support product and platform work across operational, customer-facing, and enterprise environments."
        />

        <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-5">
          {industries.map(({ icon: Icon, title, description }) => (
            <article
              key={title}
              className="min-w-0 rounded-card border border-border-lighter bg-bg-cream p-4 shadow-card-sm"
            >
              <Icon size={21} className="text-teal-secondary" />
              <h2 className="mt-3 break-words text-sm font-bold text-navy-deep sm:text-base">
                {title}
              </h2>
              <p className="mt-2 text-xs leading-relaxed text-body-text sm:text-sm">{description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function WorkflowSection() {
  return (
    <section className="bg-navy-header">
      <div className="mx-auto max-w-content px-4 py-16 md:px-8 md:py-20 lg:px-16">
        <div className="mx-auto max-w-3xl text-center">
          <p className="font-mono text-xs uppercase tracking-wide text-teal-mint">How We Work</p>
          <h2 className="mt-3 text-2xl font-bold text-white md:text-3xl">
            Built for Productive Collaboration
          </h2>
          <p className="mt-3 text-base leading-relaxed text-white/70">
            Plan, design, develop, review, test, deploy and improve through a collaboration model
            built for product teams.
          </p>
        </div>

        <div className="mt-12 overflow-hidden rounded-card border border-white/10 bg-white/[0.05] p-5 sm:p-6">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-stretch">
            {workflowSteps.map(({ icon: Icon, title, description }, index) => (
              <div key={title} className="relative flex min-w-0 flex-1 gap-4 lg:flex-col">
                <div className="relative z-10 flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-teal-secondary text-white">
                  <Icon size={19} />
                </div>
                {index < workflowSteps.length - 1 && (
                  <span className="absolute bottom-[-1.25rem] left-5 top-11 w-px bg-white/20 lg:left-11 lg:right-[-1.25rem] lg:top-5 lg:h-px lg:w-auto" />
                )}
                <div className="min-w-0">
                  <h3 className="break-words text-base font-bold text-white">{title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/65">{description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8 flex flex-wrap justify-center gap-2">
          {collaborationPractices.map((practice) => (
            <span
              key={practice}
              className="rounded-sm4 border border-white/10 bg-white/[0.06] px-3 py-2 text-sm font-semibold text-white/80"
            >
              {practice}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

export function HireDevelopersCta() {
  return (
    <section className="bg-navy-deep">
      <div className="mx-auto max-w-content px-4 py-16 md:px-8 md:py-20 lg:px-16">
        <div className="mx-auto max-w-4xl text-center">
          <p className="font-mono text-xs uppercase tracking-wide text-teal-mint">
            Let&apos;s Build Together
          </p>
          <h2 className="mt-3 text-2xl font-bold text-white md:text-4xl">
            Ready to Build Your Development Team?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-white/75">
            Tell us what you&apos;re building and the expertise you need. Softzino will help you
            assemble the right development team for your project.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row sm:flex-wrap">
            <a
              href={formHref}
              className="inline-flex min-h-12 w-full max-w-full items-center justify-center gap-2 rounded-2xl bg-teal-primary px-5 py-4 text-center text-sm font-bold uppercase tracking-wide text-white transition-colors hover:bg-teal-secondary sm:w-auto sm:px-8"
            >
              Hire Developers <ArrowRight size={16} />
            </a>
            <a
              href={formHref}
              className="inline-flex min-h-12 w-full max-w-full items-center justify-center rounded-2xl border border-white/40 px-5 py-4 text-center text-sm font-bold uppercase tracking-wide text-white transition-colors hover:bg-white hover:text-navy-deep sm:w-auto sm:px-8"
            >
              Talk to Our Experts
            </a>
          </div>
          <p className="mt-6 flex items-center justify-center gap-2 text-sm font-medium text-white/70">
            <CheckCircle2 size={17} className="shrink-0 text-teal-mint" />
            Need an entire development team? We can build one around your requirements.
          </p>
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
