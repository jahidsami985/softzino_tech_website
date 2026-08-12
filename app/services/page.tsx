import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Breadcrumb from "@/components/Breadcrumb";
import { getServiceHref, serviceColumns, slugify } from "@/lib/services-data";

export const metadata: Metadata = {
  title: "Services | Softzino Technologies",
  description:
    "Explore Softzino's full range of services across Product Engineering, Digital Transformation, Cloud Engineering, Data Analytics, Co-Creation, and Consultancy.",
};

export default function ServicesPage() {
  return (
    <>
      {/* Breadcrumb keeps this secondary page connected to Home. */}
      <div className="mx-auto max-w-content px-4 pt-8 md:px-16">
        <Breadcrumb current="Services" />
      </div>

      {/* Hero: introduces the full services catalog and primary contact action. */}
      <section className="bg-bg-offwhite">
        <div className="mx-auto max-w-content px-4 py-16 md:px-16 md:py-20">
          <div className="max-w-2xl">
            <p className="font-mono text-xs uppercase tracking-wide text-teal-primary">
              Your Trusted Global Technology Partner
            </p>
            <h1 className="mt-3 text-3xl font-bold leading-tight text-navy-deep md:text-5xl">
              Accelerating Digital Excellence Through Engineering.
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-body-text">
              From product engineering to cloud, data, and consultancy - explore the full breadth
              of how Softzino helps enterprises build, scale, and modernize.
            </p>
            <Link
              href="/hire-developers#request-talent"
              className="mt-8 inline-block rounded-sm4 bg-navy-deep px-8 py-4 text-base font-bold text-white transition-colors hover:bg-navy-header"
            >
              Start a Conversation
            </Link>
          </div>
        </div>
      </section>

      {/* Full service listing: generated from shared serviceColumns data used by Header too. */}
      <section className="bg-white">
        <div className="mx-auto max-w-content px-4 py-16 md:px-16 md:py-24">
          <div className="grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
            {serviceColumns.map((col) => (
              <div key={col.title} id={slugify(col.title)} className="scroll-mt-28">
                <h2 className="text-lg font-bold text-navy-header">{col.title}</h2>
                <ul className="mt-4 flex flex-col gap-3 border-l border-border-light pl-4">
                  {col.items.map((item) => (
                    <li key={item} id={slugify(item)} className="scroll-mt-28">
                      <Link
                        href={getServiceHref(item)}
                        className="text-sm text-body-text transition-colors hover:text-teal-primary hover:underline"
                      >
                        {item}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Catch-all CTA for custom work that does not map neatly to one listed service. */}
          <div className="mt-16 flex flex-col items-center gap-4 rounded-card border border-border-lighter bg-bg-warm-gray p-10 text-center">
            <h2 className="text-xl font-bold text-navy-deep">Don&apos;t see exactly what you need?</h2>
            <p className="max-w-lg text-body-text">
              Our consultancy team can help scope custom engagements across any combination of
              these services.
            </p>
            <Link
              href="/hire-developers#request-talent"
              className="mt-2 inline-flex items-center gap-2 rounded-sm4 bg-teal-secondary px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-teal-primary"
            >
              Talk to Our Team <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
