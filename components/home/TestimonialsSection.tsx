"use client";

import Image from "next/image";
import { Quote, X } from "lucide-react";
import { useEffect, useState } from "react";
import { assetPath } from "@/lib/site-paths";

type Testimonial = {
  id: string;
  name: string;
  role: string;
  quote: string;
  avatar: string;
  sizeClass: string;
  positionClass: string;
};

const testimonials: Testimonial[] = [
  {
    id: "asaduzzaman",
    name: "A S M Asaduzzaman",
    role: "CEO, Spin Off Studios",
    quote:
      "Softzino Technologies makes my life easier always for any size of project. I trust its team's professionalism in every step.",
    avatar: "/images/testimonials/asm-asaduzzaman.svg",
    sizeClass: "h-16 w-16 sm:h-20 sm:w-20 md:h-40 md:w-40",
    positionClass: "md:left-1/2 md:top-0 md:-translate-x-1/2",
  },
  {
    id: "kamrul-hasan",
    name: "Kamrul Hasan",
    role: "CEO, Japan Style Ltd (German Butcher)",
    quote:
      "Softzino Technologies has exceeded our expectations with their exceptional software development and services. Their team's expertise and dedication ensured that our project was delivered on time and met all our requirements. The quality of their work and their attention to detail were outstanding. Their customer service was always prompt and helpful, making the entire process smooth and efficient. We highly recommend Softzino Technologies.",
    avatar: "/images/testimonials/kamrul-hasan.svg",
    sizeClass: "h-16 w-16 sm:h-20 sm:w-20 md:h-28 md:w-28",
    positionClass: "md:left-[6%] md:top-16",
  },
  {
    id: "konishi-san",
    name: "Konishi San",
    role: "CEO, 808 Inc.",
    quote: "We had a great experience working with the Softzino team. Very happy to work with them!",
    avatar: "/images/testimonials/konishi-san.svg",
    sizeClass: "h-16 w-16 sm:h-20 sm:w-20 md:h-28 md:w-28",
    positionClass: "md:right-[8%] md:top-20",
  },
  {
    id: "robin-ahmed-gofur",
    name: "Robin Ahmed Gofur",
    role: "CEO, Hexamatics LLC",
    quote:
      "Softzino Technologies delivered outstanding software development services that perfectly met our needs. Their team's expertise and dedication ensured a high-quality product delivered on time. The customer service was outstanding, ensuring a seamless and efficient collaboration. I highly recommend Softzino Technologies for their professionalism and excellent software development capabilities.",
    avatar: "/images/testimonials/robin-ahmed-gofur.svg",
    sizeClass: "h-16 w-16 sm:h-20 sm:w-20 md:h-24 md:w-24",
    positionClass: "md:bottom-14 md:left-[20%]",
  },
  {
    id: "mohammad-tayseer-jawabreh",
    name: "Mohammad Tayseer Jawabreh",
    role: "CEO, Digital Act",
    quote:
      "Softzino Technologies created an efficient solution for my company. I am very happy to work with them.",
    avatar: "/images/testimonials/mohammad-tayseer-jawabreh.svg",
    sizeClass: "h-16 w-16 sm:h-20 sm:w-20 md:h-24 md:w-24",
    positionClass: "md:bottom-10 md:right-[22%]",
  },
];

export default function TestimonialsSection() {
  const [activeTestimonial, setActiveTestimonial] = useState<Testimonial | null>(null);

  useEffect(() => {
    if (!activeTestimonial) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setActiveTestimonial(null);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeTestimonial]);

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-bg-cream via-white to-[#E8F6F5]">
      <div
        className="pointer-events-none absolute inset-0 bg-[repeating-linear-gradient(135deg,rgba(14,124,123,0.08)_0px,rgba(14,124,123,0.08)_1px,transparent_1px,transparent_28px)] opacity-70"
        aria-hidden="true"
      />
      <div className="relative mx-auto max-w-content px-4 py-16 md:px-8 md:py-20 lg:px-16">
        <div className="mx-auto max-w-2xl text-center">
          <p className="font-mono text-xs uppercase tracking-wide text-teal-primary">
            Testimonials
          </p>
          <h2 className="mt-3 text-2xl font-bold text-navy-deep md:text-3xl">
            Our Happy <span className="text-teal-primary">Clients</span>
          </h2>
        </div>

        <div className="relative mx-auto mt-12 max-w-6xl md:min-h-[500px]">
          <div className="grid grid-cols-3 items-center justify-items-center gap-4 sm:grid-cols-5 md:block">
            {testimonials.map((testimonial) => {
              const isActive = activeTestimonial?.id === testimonial.id;

              return (
                <button
                  key={testimonial.id}
                  type="button"
                  aria-label={`${isActive ? "Close" : "Show"} testimonial from ${testimonial.name}`}
                  aria-pressed={isActive}
                  onClick={() => setActiveTestimonial(isActive ? null : testimonial)}
                  className={`group relative z-10 flex shrink-0 items-center justify-center overflow-hidden rounded-full border-4 bg-white shadow-card-md transition duration-200 hover:-translate-y-1 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-teal-primary md:absolute ${testimonial.sizeClass} ${testimonial.positionClass} ${
                    isActive ? "border-teal-primary" : "border-white"
                  }`}
                >
                  <Image
                    src={assetPath(testimonial.avatar)}
                    alt={testimonial.name}
                    width={160}
                    height={160}
                    className="h-full w-full object-cover"
                  />
                </button>
              );
            })}
          </div>

          {activeTestimonial && (
            <article className="relative z-20 mt-8 w-full rounded-card border border-border-lighter bg-white p-5 shadow-card-lg sm:p-6 md:absolute md:left-1/2 md:top-[190px] md:mt-0 md:w-[min(680px,calc(100%_-_2rem))] md:-translate-x-1/2 md:p-8">
              <div className="flex items-start justify-between gap-4">
                <div className="flex min-w-0 items-center gap-4">
                  <Image
                    src={assetPath(activeTestimonial.avatar)}
                    alt=""
                    width={72}
                    height={72}
                    className="h-14 w-14 shrink-0 rounded-full border-2 border-bg-warm-gray object-cover shadow-card-sm sm:h-16 sm:w-16"
                  />
                  <div className="min-w-0">
                    <h3 className="break-words text-lg font-bold text-navy-deep">
                      {activeTestimonial.name}
                    </h3>
                    <p className="mt-1 break-words text-sm font-medium text-teal-primary">
                      {activeTestimonial.role}
                    </p>
                  </div>
                </div>
                <button
                  type="button"
                  aria-label="Close testimonial"
                  onClick={() => setActiveTestimonial(null)}
                  className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-border-light text-body-text transition hover:border-teal-primary hover:text-teal-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-primary"
                >
                  <X size={18} aria-hidden="true" />
                </button>
              </div>

              <div className="mt-6 flex min-w-0 gap-4">
                <Quote size={26} className="mt-1 shrink-0 text-gold" aria-hidden="true" />
                <div className="min-w-0 border-l border-border-light pl-4 sm:pl-6">
                  <p className="min-w-0 text-base leading-relaxed text-body-text">
                    &ldquo;{activeTestimonial.quote}&rdquo;
                  </p>
                </div>
              </div>
            </article>
          )}
        </div>
      </div>
    </section>
  );
}
