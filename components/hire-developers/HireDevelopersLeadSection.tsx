import { CheckCircle2 } from "lucide-react";
import TalentRequestForm from "@/components/TalentRequestForm";
import { leadFormBenefits } from "@/lib/hire-developers-data";

export default function HireDevelopersLeadSection() {
  return (
    <section id="request-talent" className="bg-bg-warm-gray">
      <div
        id="hire-developers-form"
        className="mx-auto grid max-w-content scroll-mt-28 grid-cols-1 gap-10 px-4 py-16 md:px-8 md:py-20 lg:grid-cols-[0.8fr_1.2fr] lg:px-16"
      >
        <div className="min-w-0">
          <p className="font-mono text-xs uppercase tracking-wide text-teal-primary">
            Start Your Engagement
          </p>
          <h2 className="mt-3 text-2xl font-bold text-navy-deep md:text-3xl">
            Tell Us About Your Development Needs
          </h2>
          <p className="mt-4 text-base leading-relaxed text-body-text">
            Share a few details about your project and the type of engineering expertise
            you&apos;re looking for.
          </p>

          <div className="mt-10 rounded-card border border-border-lighter bg-white p-6 shadow-card-sm">
            <h3 className="text-xl font-bold text-navy-deep">Build the Team Your Product Needs</h3>
            <ul className="mt-6 flex flex-col gap-4">
              {leadFormBenefits.map((benefit) => (
                <li key={benefit} className="flex min-w-0 items-start gap-3 text-body-text">
                  <CheckCircle2 size={19} className="mt-0.5 shrink-0 text-teal-secondary" />
                  <span className="break-words">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <TalentRequestForm />
      </div>
    </section>
  );
}
