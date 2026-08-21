"use client";

import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { faqItems } from "@/lib/hire-developers-data";

export default function HireDevelopersFaq() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="bg-bg-cream">
      <div className="mx-auto max-w-content px-4 py-16 md:px-8 md:py-20 lg:px-16">
        <div className="mx-auto max-w-3xl text-center">
          <p className="font-mono text-xs uppercase tracking-wide text-teal-primary">FAQ</p>
          <h2 className="mt-3 text-2xl font-bold text-navy-deep md:text-3xl">
            Frequently Asked Questions About Hiring Developers
          </h2>
        </div>

        <div className="mx-auto mt-10 max-w-4xl divide-y divide-border-lighter overflow-hidden rounded-card border border-border-lighter bg-white shadow-card-sm">
          {faqItems.map((item, index) => {
            const isOpen = openIndex === index;
            const panelId = `hire-developers-faq-${index}`;

            return (
              <div key={item.question}>
                <button
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  onClick={() => setOpenIndex(isOpen ? -1 : index)}
                  className="flex min-h-14 w-full min-w-0 items-center justify-between gap-4 px-5 py-4 text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-teal-primary sm:px-6"
                >
                  <span className="break-words text-base font-bold text-navy-deep">
                    {item.question}
                  </span>
                  <ChevronDown
                    size={20}
                    className={`shrink-0 text-teal-primary transition-transform ${isOpen ? "rotate-180" : ""}`}
                  />
                </button>
                <div
                  id={panelId}
                  className={`grid transition-[grid-template-rows] duration-200 ${
                    isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-5 pb-5 text-base leading-relaxed text-body-text sm:px-6">
                      {item.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
