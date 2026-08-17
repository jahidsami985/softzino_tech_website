import type { Metadata } from "next";
import Image from "next/image";
import {
  CheckCircle2,
  Code2,
  Database,
  Rocket,
  Terminal,
  UserPlus,
  Users,
} from "lucide-react";
import Breadcrumb from "@/components/Breadcrumb";
import TalentRequestForm from "@/components/TalentRequestForm";
import { assetPath } from "@/lib/site-paths";

export const metadata: Metadata = {
  title: "Hire Developers | Softzino Technologies",
  description:
    "Scale your engineering team in days, not months. Augment your existing team or build a dedicated squad with Softzino's vetted technical talent.",
};

// Engagement cards shown under the hero. Edit this array to change the models/features.
const engagementModels = [
  {
    icon: UserPlus,
    title: "Short-Term Support",
    desc: "Inject individual experts into your existing workflows to bridge specific technical gaps, handle sudden workload spikes, or bring niche expertise to critical project phases.",
    features: [
      "Individual technical experts",
      "Agile, rapid scaling",
      "Immediate onboarding to existing teams",
    ],
  },
  {
    icon: Users,
    title: "Dedicated Squads",
    desc: "Deploy full-cycle, autonomous teams designed to take ownership of entire product features or systems. Ideal for long-term strategic alignment and managed delivery.",
    features: [
      "Full-cycle engineering teams",
      "Managed end-to-end delivery",
      "Long-term strategic partnership",
    ],
  },
];

export default function HireDevelopersPage() {
  return (
    <>
      {/* Breadcrumb keeps this secondary page connected to Home. */}
      <div className="mx-auto max-w-content px-4 pt-8 md:px-8 lg:px-16">
        <Breadcrumb current="Hire Developers" />
      </div>

      {/* Hero: talent augmentation pitch, CTAs, and the abstract icon panel. */}
      <section className="bg-bg-cream">
        <div className="mx-auto grid max-w-content grid-cols-1 items-center gap-10 px-4 py-12 md:px-8 md:py-20 lg:grid-cols-2 lg:px-16">
          <div className="flex min-w-0 flex-col gap-6">
            <span className="inline-flex max-w-full break-words rounded-full bg-[#F0EDED] px-4 py-2 font-mono text-xs uppercase tracking-wide text-navy-deep">
              Talent Augmentation
            </span>
            <h1 className="max-w-2xl break-words text-3xl font-bold leading-tight text-navy-deep md:text-4xl lg:text-5xl">
              Scale Your Engineering Team in Days, Not Months.
            </h1>
            <p className="max-w-xl text-lg leading-relaxed text-body-text">
              Seamlessly augment your existing teams with top-tier technical talent or build
              dedicated squads from scratch. We provide the expertise you need to accelerate
              delivery and achieve strategic alignment.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row sm:flex-wrap">
              <a
                href="#request-talent"
                className="inline-flex min-h-12 w-full max-w-full justify-center rounded-sm4 bg-teal-secondary px-5 py-4 text-center text-base text-white transition-colors hover:bg-teal-primary sm:w-auto sm:px-8"
              >
                Hire Talent Now
              </a>
              <a
                href="#process"
                className="inline-flex min-h-12 w-full max-w-full justify-center rounded-sm4 border border-teal-secondary px-5 py-4 text-center text-base text-teal-secondary transition-colors hover:bg-teal-secondary/5 sm:w-auto sm:px-8"
              >
                See Our Process
              </a>
            </div>
          </div>

          <div className="flex aspect-[4/3] items-center justify-center rounded-card border border-border-lighter bg-[#F0F7F7] p-5 shadow-card-sm sm:p-6 md:p-8">
            <div className="grid grid-cols-3 gap-3 sm:gap-4">
              <IconTile icon={Code2} />
              <IconTile icon={Rocket} active />
              <IconTile icon={Database} />
              <div className="col-start-2">
                <IconTile icon={Terminal} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Engagement models: cards generated from the engagementModels array above. */}
      <section className="border-y border-border-light bg-bg-warm-gray">
        <div className="mx-auto max-w-content px-4 py-16 md:px-8 md:py-20 lg:px-16 lg:py-24">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-2xl font-bold text-navy-deep md:text-3xl">
              Flexible Engagement Models
            </h2>
            <p className="mt-3 text-body-text">
              Choose the structure that best fits your project lifecycle and scaling needs.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-2">
            {engagementModels.map(({ icon: Icon, title, desc, features }) => (
              <article
                key={title}
                className="relative min-w-0 overflow-hidden rounded-card border border-border-lighter bg-white p-6 shadow-card-sm md:p-8 lg:p-10"
              >
                <div className="absolute -right-12 -top-12 h-28 w-28 rounded-full bg-bg-warm-gray" />
                <div className="relative">
                  <div className="flex h-14 w-14 items-center justify-center rounded-card bg-navy-deep">
                    <Icon size={24} className="text-white" />
                  </div>
                  <h3 className="mt-6 break-words text-2xl font-bold text-navy-deep">{title}</h3>
                  <p className="mt-4 text-body-text">{desc}</p>
                  <ul className="mt-6 flex flex-col gap-3">
                    {features.map((feature) => (
                      <li key={feature} className="flex min-w-0 items-start gap-3 text-text-dark">
                        <CheckCircle2
                          size={20}
                          className="mt-1 shrink-0 text-teal-secondary"
                        />
                        <span className="min-w-0 break-words">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Process: uses the Figma-derived hiring-process image as the central visual. */}
      <section id="process" className="bg-bg-cream">
        <div className="mx-auto max-w-content px-4 py-16 md:px-8 md:py-20 lg:px-16 lg:py-24">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-2xl font-bold text-navy-deep md:text-3xl">The Softzino Process</h2>
            <p className="mt-3 text-body-text">
              A streamlined, professional approach to sourcing and integrating top talent into
              your operations.
            </p>
          </div>

          <div className="mx-auto mt-12 max-w-4xl rounded-card border border-border-lighter bg-white p-4 shadow-card-sm sm:p-6 md:p-12">
            <Image
              src={assetPath("/images/hiring-process.png")}
              alt="Professional 4 step process for hiring developers"
              width={803}
              height={425}
              className="w-full object-contain"
            />
          </div>
        </div>
      </section>

      {/* Request form: client component that mocks lead capture for now. */}
      <section id="request-talent" className="border-t border-border-light bg-bg-warm-gray">
        <div className="mx-auto max-w-content px-4 py-16 md:px-8 md:py-20 lg:px-16 lg:py-24">
          <div className="mx-auto max-w-2xl">
            <TalentRequestForm />
          </div>
        </div>
      </section>
    </>
  );
}

// Small square icon tile used only in the Hire Developers hero illustration.
function IconTile({
  icon: Icon,
  active = false,
}: {
  icon: typeof Code2;
  active?: boolean;
}) {
  return (
    <div
      className={`flex h-16 w-16 items-center justify-center rounded-card shadow-card-sm sm:h-20 sm:w-20 md:h-24 md:w-24 ${
        active ? "bg-teal-secondary" : "border border-border-lighter bg-white"
      }`}
    >
      <Icon size={30} className={active ? "text-white" : "text-navy-deep"} />
    </div>
  );
}
