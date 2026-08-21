import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BadgeCheck, LayoutGrid, ShoppingCart, Users2 } from "lucide-react";
import Breadcrumb from "@/components/Breadcrumb";
import { assetPath } from "@/lib/site-paths";

export const metadata: Metadata = {
  title: "Off-the-Shelf Solutions | Softzino Technologies",
  description:
    "Softzino Technologies solution references including ERP systems, Hishabi, Bidyava, Autoofix, and other portfolio products.",
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
              Portfolio Solutions Built for Real Business Workflows
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-body-text">
              Softzino builds and supports practical software products across ERP, inventory,
              POS, education technology, automotive service, and web product needs.
            </p>
          </div>
        </div>
      </section>

            {/* Product grid: ERP is featured wide; supporting cards use portfolio solution names. */}
      <section className="bg-bg-offwhite">
        <div className="mx-auto max-w-content px-4 pb-16 md:px-8 md:pb-20 lg:px-16 lg:pb-24">
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
            {/* Featured product card using the larger ERP dashboard crop. */}
            <article className="overflow-hidden rounded-card border border-border-light bg-bg-card-gray lg:col-span-2">
              <Image
                src={assetPath("/img1/open-office-wide.jpeg")}
                alt="ERP systems preview"
                width={760}
                height={320}
                className="aspect-[16/9] w-full object-cover"
                priority
              />
              <div className="p-6 md:p-8">
                <div className="flex min-w-0 items-center gap-3">
                  <LayoutGrid size={20} className="text-teal-primary" />
                  <h2 className="min-w-0 break-words text-2xl font-bold text-navy-deep">ERP Systems</h2>
                </div>
                <p className="mt-4 text-body-text">
                  Enterprise solutions for ERP, POS, inventory, and business management workflows
                  referenced in the Softzino portfolio.
                </p>
                <Link
                  href="/services"
                  className="mt-4 inline-flex items-center gap-1 font-medium text-teal-primary hover:underline"
                >
                  Learn more <ArrowRight size={16} />
                </Link>
              </div>
            </article>

            {/* Supporting product card for Hishabi. */}
            <article className="overflow-hidden rounded-card border border-border-light bg-bg-card-gray">
              <Image
                src={assetPath("/img1/engineering-floor.jpeg")}
                alt="Hishabi inventory and POS management preview"
                width={367}
                height={207}
                className="aspect-[16/9] w-full object-cover"
                priority
              />
              <div className="p-6 md:p-8">
                <div className="flex min-w-0 items-center gap-3">
                  <Users2 size={20} className="text-teal-primary" />
                  <h2 className="min-w-0 break-words text-2xl font-bold text-navy-deep">Hishabi</h2>
                </div>
                <p className="mt-4 text-body-text">
                  Inventory and POS management software built with Laravel, PostgreSQL, Vue,
                  TypeScript, Tailwind CSS, and Kotlin.
                </p>
                <Link
                  href="/services"
                  className="mt-4 inline-flex items-center gap-1 font-medium text-teal-primary hover:underline"
                >
                  Learn more <ArrowRight size={16} />
                </Link>
              </div>
            </article>

            {/* Supporting product card for Bidyava. */}
            <article className="overflow-hidden rounded-card border border-border-light bg-bg-card-gray">
              <Image
                src={assetPath("/img1/team-desks.jpeg")}
                alt="Bidyava education technology preview"
                width={565}
                height={225}
                className="aspect-[16/9] w-full object-cover"
              />
              <div className="p-6 md:p-8">
                <div className="flex min-w-0 items-center gap-3">
                  <BadgeCheck size={20} className="text-teal-primary" />
                  <h2 className="min-w-0 break-words text-2xl font-bold text-navy-deep">Bidyava</h2>
                </div>
                <p className="mt-4 text-body-text">
                  Education technology solution referenced in the portfolio, built across web,
                  mobile, AWS, and Firebase-supported product workflows.
                </p>
                <Link
                  href="/services"
                  className="mt-4 inline-flex items-center gap-1 font-medium text-teal-primary hover:underline"
                >
                  Learn more <ArrowRight size={16} />
                </Link>
              </div>
            </article>

            {/* Dark card variant for Autoofix, matching the Figma contrast block. */}
            <article className="flex min-w-0 flex-col justify-center gap-4 rounded-card border border-navy-header bg-navy-deep p-6 md:p-8">
              <div className="flex h-12 w-12 items-center justify-center rounded-sm4 bg-[#384668]">
                <ShoppingCart size={20} className="text-teal-mint" />
              </div>
              <h2 className="break-words text-2xl font-bold text-white">Autoofix</h2>
              <p className="text-[#B7C6EE]">
                Automotive service product reference from the portfolio, alongside Softzino&apos;s
                broader custom SaaS and enterprise solution work.
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
              Softzino can help you assess whether an existing product reference or a custom build
              is the better fit for your operational needs.
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
