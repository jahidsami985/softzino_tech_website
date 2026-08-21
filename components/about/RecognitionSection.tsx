import Image from "next/image";
import { BadgeCheck } from "lucide-react";
import { assetPath } from "@/lib/site-paths";

type RecognitionItem = {
  title: string;
  description: string;
  logo: string;
  badgeLabel: string;
};

const recognitions: RecognitionItem[] = [
  {
    title: "BASIS",
    description: "Softzino Technologies is a proud Member of BASIS since 2019.",
    logo: "/images/recognition/basis.svg",
    badgeLabel: "BASIS member",
  },
  {
    title: "DUNS Registered",
    description: "Softzino Technologies is a DUNS Registered Company.",
    logo: "/images/recognition/duns.svg",
    badgeLabel: "DUNS registered",
  },
  {
    title: "ISO 27001",
    description: "Softzino Technologies is an ISO 27001 Certified Company.",
    logo: "/images/recognition/iso-27001.svg",
    badgeLabel: "ISO 27001 certified",
  },
  {
    title: "ISO 9001:2015",
    description: "Softzino Technologies is an ISO 9001:2015 Certified Company.",
    logo: "/images/recognition/iso-9001.svg",
    badgeLabel: "ISO 9001:2015 certified",
  },
];

export default function RecognitionSection() {
  return (
    <section className="bg-navy-header">
      <div className="mx-auto max-w-content px-4 py-16 md:px-8 md:py-20 lg:px-16">
        <div className="mx-auto max-w-2xl text-center">
          <p className="font-mono text-xs uppercase tracking-wide text-teal-mint">What We Get</p>
          <h2 className="mt-3 text-2xl font-bold text-white md:text-3xl">Our Recognition</h2>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {recognitions.map((item) => (
            <article
              key={item.title}
              className="flex min-h-[340px] min-w-0 flex-col items-center rounded-card border border-white/10 bg-white/[0.06] p-6 text-center shadow-card-md"
            >
              <div className="relative flex h-24 w-full max-w-[180px] items-center justify-center rounded-card bg-white p-4 shadow-card-sm">
                <Image
                  src={assetPath(item.logo)}
                  alt={`${item.title} recognition logo`}
                  width={150}
                  height={64}
                  className="max-h-16 w-auto object-contain"
                />
                <span
                  aria-label={item.badgeLabel}
                  role="img"
                  className="absolute -bottom-4 right-4 flex h-9 w-9 items-center justify-center rounded-full bg-teal-secondary text-white ring-4 ring-navy-header"
                >
                  <BadgeCheck size={18} aria-hidden="true" />
                </span>
              </div>

              <h3 className="mt-10 break-words text-xl font-bold text-white">{item.title}</h3>
              <p className="mt-4 text-base leading-relaxed text-white/70">{item.description}</p>
              <span className="mt-auto block h-1 w-12 rounded-full bg-teal-mint" aria-hidden="true" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
