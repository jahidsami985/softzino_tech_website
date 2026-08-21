import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BadgeCheck, LayoutGrid, ShoppingCart, Users2 } from "lucide-react";
import Breadcrumb from "@/components/Breadcrumb";
import { assetPath } from "@/lib/site-paths";

export const metadata: Metadata = {
  title: "Off-the-Shelf Solutions | Softzino Technologies",
  description:
    "Ready-to-deploy enterprise platforms including Softzino ERP, Aura CRM, Softzino HRMS, and Zenith E-commerce.",
};

export default function OffTheShelfPage() {
  return (
    <>
      {/* Breadcrumb keeps this secondary page connected to Home. */}
      <div className="mx-auto max-w-content px-4 pt-8 md:px-8 lg:px-16">
        <Breadcrumb current="Off-the-Shelf Solutions" />
      </div>

      {/* Hero: explains why these products are faster than custom development. */}
      <section className="bg-bg-offwhite">
        <div className="mx-auto max-w-content px-4 py-16 md:px-8 md:py-20 lg:px-16">
          <div className="min-w-0 max-w-3xl">
            <h1 className="break-words text-3xl font-bold leading-tight text-navy-deep md:text-4xl lg:text-5xl">
              Ready-to-Deploy Excellence: Accelerate Your Growth with Off-the-Shelf Solutions
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-body-text">
              Skip the development cycle. Our suite of pre-built, industry-vetted products offers
              the same executive-grade quality as our custom builds, delivered in a fraction of
              the time and cost.
            </p>
          </div>
        </div>
      </section>

      {/* Product grid: ERP is featured wide; CRM, HRMS, and E-commerce fill the rest. */}
      <section className="bg-bg-offwhite">
        <div className="mx-auto max-w-content px-4 pb-16 md:px-8 md:pb-20 lg:px-16 lg:pb-24">
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
            {/* Featured product card using the larger ERP dashboard crop. */}
            <article className="overflow-hidden rounded-card border border-border-light bg-bg-card-gray lg:col-span-2">
              <Image
                src={assetPath("/img1/open-office-wide.jpeg")}
                alt="Softzino ERP dashboard preview"
                width={760}
                height={320}
                className="aspect-[16/9] w-full object-cover"
                priority
              />
              <div className="p-6 md:p-8">
                <div className="flex min-w-0 items-center gap-3">
                  <LayoutGrid size={20} className="text-teal-primary" />
                  <h2 className="min-w-0 break-words text-2xl font-bold text-navy-deep">Softzino ERP</h2>
                </div>
                <p className="mt-4 text-body-text">
                  A comprehensive enterprise resource planning platform designed for complex
                  operations. Unify your data streams and streamline workflows with unmatched
                  precision.
                </p>
                <Link
                  href="/services"
                  className="mt-4 inline-flex items-center gap-1 font-medium text-teal-primary hover:underline"
                >
                  Learn more <ArrowRight size={16} />
                </Link>
              </div>
            </article>

            {/* Supporting product card for Aura CRM. */}
            <article className="overflow-hidden rounded-card border border-border-light bg-bg-card-gray">
              <Image
                src={assetPath("/img1/engineering-floor.jpeg")}
                alt="Aura CRM analytics dashboard"
                width={367}
                height={207}
                className="aspect-[16/9] w-full object-cover"
                priority
              />
              <div className="p-6 md:p-8">
                <div className="flex min-w-0 items-center gap-3">
                  <Users2 size={20} className="text-teal-primary" />
                  <h2 className="min-w-0 break-words text-2xl font-bold text-navy-deep">Aura CRM</h2>
                </div>
                <p className="mt-4 text-body-text">
                  Next-generation customer relationship management with deep predictive analytics.
                </p>
                <Link
                  href="/services"
                  className="mt-4 inline-flex items-center gap-1 font-medium text-teal-primary hover:underline"
                >
                  Learn more <ArrowRight size={16} />
                </Link>
              </div>
            </article>

            {/* Supporting product card for HRMS. */}
            <article className="overflow-hidden rounded-card border border-border-light bg-bg-card-gray">
              <Image
                src={assetPath("/img1/team-desks.jpeg")}
                alt="Softzino HRMS employee directory preview"
                width={565}
                height={225}
                className="aspect-[16/9] w-full object-cover"
              />
              <div className="p-6 md:p-8">
                <div className="flex min-w-0 items-center gap-3">
                  <BadgeCheck size={20} className="text-teal-primary" />
                  <h2 className="min-w-0 break-words text-2xl font-bold text-navy-deep">Softzino HRMS</h2>
                </div>
                <p className="mt-4 text-body-text">
                  Streamline your workforce management from payroll to performance tracking.
                </p>
                <Link
                  href="/services"
                  className="mt-4 inline-flex items-center gap-1 font-medium text-teal-primary hover:underline"
                >
                  Learn more <ArrowRight size={16} />
                </Link>
              </div>
            </article>

            {/* Dark card variant for Zenith E-commerce, matching the Figma contrast block. */}
            <article className="flex min-w-0 flex-col justify-center gap-4 rounded-card border border-navy-header bg-navy-deep p-6 md:p-8">
              <div className="flex h-12 w-12 items-center justify-center rounded-sm4 bg-[#384668]">
                <ShoppingCart size={20} className="text-teal-mint" />
              </div>
              <h2 className="break-words text-2xl font-bold text-white">Zenith E-commerce</h2>
              <p className="text-[#B7C6EE]">
                A scalable, high-performance retail engine for global digital commerce. Built for
                speed and reliability.
              </p>
              <Link
                href="/services"
                className="inline-flex w-fit items-center gap-1 font-medium text-teal-mint hover:underline"
              >
                Learn more <ArrowRight size={16} />
              </Link>
            </article>
          </div>

          {/* Consultation CTA for users who need help choosing a product. */}
          <div className="mx-auto mt-16 flex max-w-3xl flex-col items-center gap-4 rounded-card border border-border-light bg-bg-card-gray p-6 text-center sm:p-10 md:p-12 lg:p-16">
            <h2 className="text-2xl font-bold text-navy-deep">
              Not sure which solution is right for you?
            </h2>
            <p className="text-body-text">
              Our experts can help you analyze your operational needs and find the perfect match
              from our suite of products.
            </p>
            <Link
              href="/hire-developers#request-talent"
              className="mt-2 inline-flex min-h-12 w-full max-w-full items-center justify-center rounded-sm4 bg-navy-deep px-5 py-4 text-center text-sm font-bold text-white transition-colors hover:bg-navy-header sm:w-auto sm:px-8"
            >
              Schedule a Consultation
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
