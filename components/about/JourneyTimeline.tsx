import type { CSSProperties } from "react";
import { journeyMilestones } from "@/lib/about-journey-data";

const activeMilestoneIndex = journeyMilestones.reduce(
  (activeIndex, milestone, index) => (milestone.current ? index : activeIndex),
  journeyMilestones.length - 1,
);

export default function JourneyTimeline() {
  return (
    <section
      aria-labelledby="journey-heading"
      className="journey-section relative isolate overflow-hidden"
    >
      <div className="journey-orbit journey-orbit-left" aria-hidden="true" />
      <div className="journey-orbit journey-orbit-top" aria-hidden="true" />
      <div className="journey-orbit journey-orbit-bottom" aria-hidden="true" />
      <div className="journey-dot-grid journey-dot-grid-left" aria-hidden="true" />
      <div className="journey-dot-grid journey-dot-grid-right" aria-hidden="true" />

      <div className="mx-auto max-w-content px-4 py-16 md:px-8 md:py-20 lg:px-16 lg:py-24">
        <div className="mx-auto max-w-4xl text-center">
          <p className="font-mono text-xs uppercase tracking-wide text-gold">{"// Our Growth Story"}</p>
          <h2
            id="journey-heading"
            className="mt-3 text-4xl font-bold leading-tight text-text-dark sm:text-5xl md:text-6xl lg:text-7xl"
          >
            <span className="journey-heading-accent">Journey</span> of Softzino
          </h2>
        </div>

        <ol className="journey-list mt-14 md:mt-20" aria-label="Softzino company journey from 2015 to 2025">
          {journeyMilestones.map((milestone, index) => {
            const isHighlighted = index === activeMilestoneIndex;

            return (
              <li
                key={milestone.year}
                className="journey-item"
                data-side={milestone.side}
                data-journey-year={milestone.year}
                style={{ "--journey-index": index } as CSSProperties}
              >
                <div className="journey-year">
                  <div className="journey-year-rule" aria-hidden="true" />
                  <time dateTime={milestone.year} className="journey-year-badge">
                    {milestone.year}
                  </time>
                </div>

                <div className="journey-node-wrap" aria-hidden="true">
                  <span className={isHighlighted ? "journey-node journey-node-active" : "journey-node"} />
                </div>

                <div className="journey-copy">
                  <ul className="journey-points">
                    {milestone.items.map((item) => (
                      <li key={`${milestone.year}-${item.emphasis}-${item.text}`} className="journey-point">
                        <span className="journey-triangle" aria-hidden="true" />
                        <span>
                          <strong>{item.emphasis}</strong> {item.text}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
