import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

type InfoPageProps = {
  title: string;
  eyebrow: string;
  intro: string;
  sections: Array<{
    title: string;
    body: string;
  }>;
};

export default function InfoPage({ title, eyebrow, intro, sections }: InfoPageProps) {
  return (
    <>
      <div className="mx-auto max-w-content px-4 pt-8 md:px-8 lg:px-16">
        <Breadcrumb current={title} />
      </div>

      <section className="bg-bg-offwhite">
        <div className="mx-auto max-w-content px-4 py-16 md:px-8 md:py-20 lg:px-16 lg:py-24">
          <p className="font-mono text-xs font-bold uppercase tracking-wide text-teal-primary">
            {eyebrow}
          </p>
          <h1 className="mt-4 max-w-3xl break-words text-3xl font-bold leading-tight text-navy-deep md:text-4xl lg:text-5xl">
            {title}
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-body-text">{intro}</p>

          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
            {sections.map((section) => (
              <article
                key={section.title}
                className="min-w-0 rounded-card border border-border-lighter bg-white p-6 shadow-card-sm md:p-8"
              >
                <h2 className="break-words text-xl font-bold text-navy-deep">{section.title}</h2>
                <p className="mt-4 text-base leading-relaxed text-body-text">{section.body}</p>
              </article>
            ))}
          </div>

          <div className="mt-12 rounded-card border border-border-light bg-white p-6 text-center shadow-card-sm md:p-8">
            <h2 className="text-2xl font-bold text-navy-deep">Need more information?</h2>
            <p className="mx-auto mt-3 max-w-xl text-body-text">
              Contact Softzino for the latest company, compliance, or media details.
            </p>
            <Link
              href="/hire-developers#request-talent"
              className="mt-6 inline-flex min-h-12 w-full max-w-full items-center justify-center rounded-sm4 bg-teal-secondary px-5 py-4 text-center text-sm font-bold text-white transition-colors hover:bg-teal-primary sm:w-auto sm:px-8"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
