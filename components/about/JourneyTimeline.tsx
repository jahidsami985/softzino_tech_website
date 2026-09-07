"use client";

import type { CSSProperties } from "react";
import { useCallback, useEffect, useRef, useState } from "react";
import { journeyMilestones } from "@/lib/about-journey-data";

type TimelinePoint = {
  x: number;
  y: number;
};

type TimelinePathLayout = {
  d: string;
  height: number;
  isDesktop: boolean;
  points: TimelinePoint[];
  width: number;
};

const DESKTOP_QUERY = "(min-width: 768px)";

function clamp(value: number, min = 0, max = 1) {
  return Math.min(Math.max(value, min), max);
}

function formatPointValue(value: number) {
  return Number(value.toFixed(2));
}

function createTimelinePath(points: TimelinePoint[], isDesktop: boolean, width: number) {
  if (points.length === 0) {
    return "";
  }

  if (!isDesktop) {
    return points
      .map((point, index) => `${index === 0 ? "M" : "L"} ${formatPointValue(point.x)} ${formatPointValue(point.y)}`)
      .join(" ");
  }

  const curveOffset = Math.min(Math.max(width * 0.06, 68), 122);
  let path = `M ${formatPointValue(points[0].x)} ${formatPointValue(points[0].y)}`;

  for (let index = 0; index < points.length - 1; index += 1) {
    const current = points[index];
    const next = points[index + 1];
    const direction = journeyMilestones[index]?.side === "left" ? -1 : 1;
    const yDelta = next.y - current.y;
    const yDirection = yDelta >= 0 ? 1 : -1;
    const verticalHandle = Math.min(Math.max(Math.abs(yDelta) * 0.38, 42), 118);
    const controlOne = {
      x: current.x + curveOffset * direction,
      y: current.y + verticalHandle * yDirection,
    };
    const controlTwo = {
      x: next.x + curveOffset * direction,
      y: next.y - verticalHandle * yDirection,
    };

    path += ` C ${formatPointValue(controlOne.x)} ${formatPointValue(controlOne.y)} ${formatPointValue(
      controlTwo.x,
    )} ${formatPointValue(controlTwo.y)} ${formatPointValue(next.x)} ${formatPointValue(next.y)}`;
  }

  return path;
}

function getClosestPathDistance(path: SVGPathElement, point: TimelinePoint, totalLength: number) {
  const samples = Math.max(500, Math.ceil(totalLength / 5));
  let closestDistance = 0;
  let closestSquaredDistance = Number.POSITIVE_INFINITY;

  for (let index = 0; index <= samples; index += 1) {
    const distance = (totalLength * index) / samples;
    const pathPoint = path.getPointAtLength(distance);
    const xDelta = pathPoint.x - point.x;
    const yDelta = pathPoint.y - point.y;
    const squaredDistance = xDelta * xDelta + yDelta * yDelta;

    if (squaredDistance < closestSquaredDistance) {
      closestSquaredDistance = squaredDistance;
      closestDistance = distance;
    }
  }

  return closestDistance;
}

export default function JourneyTimeline() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const listRef = useRef<HTMLOListElement | null>(null);
  const pathRef = useRef<SVGPathElement | null>(null);
  const progressPathRef = useRef<SVGPathElement | null>(null);
  const travelerRef = useRef<HTMLSpanElement | null>(null);
  const itemRefs = useRef<Array<HTMLLIElement | null>>([]);
  const nodeRefs = useRef<Array<HTMLSpanElement | null>>([]);
  const pathLengthRef = useRef(0);
  const milestoneDistancesRef = useRef<number[]>([]);
  const scrollFrameRef = useRef<number | null>(null);
  const measureFrameRef = useRef<number | null>(null);
  const reducedMotionRef = useRef(false);
  const [pathLayout, setPathLayout] = useState<TimelinePathLayout | null>(null);

  const applyMilestoneStates = useCallback((distance: number) => {
    const pathLength = pathLengthRef.current;
    const milestoneDistances = milestoneDistancesRef.current;

    if (!pathLength || milestoneDistances.length === 0) {
      return;
    }

    const activeDistance = Math.max(34, pathLength * 0.018);
    let activeIndex = 0;
    let nearestDistance = Number.POSITIVE_INFINITY;

    milestoneDistances.forEach((milestoneDistance, index) => {
      const distanceFromMilestone = Math.abs(distance - milestoneDistance);

      if (distanceFromMilestone < nearestDistance) {
        nearestDistance = distanceFromMilestone;
        activeIndex = index;
      }
    });

    itemRefs.current.forEach((item, index) => {
      if (!item) {
        return;
      }

      if (reducedMotionRef.current) {
        item.dataset.journeyState = "completed";
        return;
      }

      if (index === activeIndex && nearestDistance <= activeDistance) {
        item.dataset.journeyState = "active";
        return;
      }

      item.dataset.journeyState = distance >= milestoneDistances[index] - 2 ? "completed" : "upcoming";
    });
  }, []);

  const syncScrollProgress = useCallback(() => {
    if (scrollFrameRef.current !== null) {
      window.cancelAnimationFrame(scrollFrameRef.current);
    }

    scrollFrameRef.current = window.requestAnimationFrame(() => {
      scrollFrameRef.current = null;

      const firstNode = nodeRefs.current[0];
      const lastNode = nodeRefs.current[nodeRefs.current.length - 1];
      const path = pathRef.current;
      const progressPath = progressPathRef.current;
      const traveler = travelerRef.current;
      const pathLength = pathLengthRef.current;

      if (!firstNode || !lastNode || !path || !progressPath || !traveler || !pathLength) {
        return;
      }

      if (reducedMotionRef.current) {
        traveler.style.opacity = "0";
        traveler.dataset.journeyDistance = String(pathLength);
        traveler.dataset.journeyProgress = "1";
        progressPath.style.setProperty("stroke-dashoffset", String(pathLength));
        applyMilestoneStates(pathLength);
        return;
      }

      const scrollY = window.scrollY || window.pageYOffset;
      const viewportHeight = window.innerHeight || document.documentElement.clientHeight;
      const firstRect = firstNode.getBoundingClientRect();
      const lastRect = lastNode.getBoundingClientRect();
      const firstCenterY = firstRect.top + scrollY + firstRect.height / 2;
      const lastCenterY = lastRect.top + scrollY + lastRect.height / 2;
      const start = firstCenterY - viewportHeight * 0.72;
      const end = lastCenterY - viewportHeight * 0.5;
      const progress = clamp((scrollY - start) / Math.max(end - start, 1));
      const distance = pathLength * progress;
      const point = path.getPointAtLength(distance);
      const squareSize = traveler.offsetWidth || 58;

      traveler.style.opacity = "1";
      traveler.style.transform = `translate3d(${formatPointValue(point.x - squareSize / 2)}px, ${formatPointValue(
        point.y - squareSize / 2,
      )}px, 0)`;
      traveler.dataset.journeyDistance = String(distance);
      traveler.dataset.journeyProgress = String(progress);
      progressPath.style.setProperty("stroke-dasharray", String(pathLength));
      progressPath.style.setProperty("stroke-dashoffset", String(pathLength - distance));
      applyMilestoneStates(distance);
    });
  }, [applyMilestoneStates]);

  const measureTimelinePath = useCallback(() => {
    const list = listRef.current;
    const nodes = nodeRefs.current;

    if (!list || nodes.some((node) => !node)) {
      return;
    }

    const listRect = list.getBoundingClientRect();
    const width = Math.max(list.scrollWidth, listRect.width);
    const height = Math.max(list.scrollHeight, listRect.height);
    const points = nodes.map((node) => {
      const nodeRect = node?.getBoundingClientRect();

      return {
        x: nodeRect ? nodeRect.left - listRect.left + nodeRect.width / 2 : 0,
        y: nodeRect ? nodeRect.top - listRect.top + nodeRect.height / 2 : 0,
      };
    });
    const isDesktop = window.matchMedia(DESKTOP_QUERY).matches;
    const d = createTimelinePath(points, isDesktop, width);

    setPathLayout((currentLayout) => {
      if (
        currentLayout &&
        currentLayout.d === d &&
        currentLayout.width === width &&
        currentLayout.height === height &&
        currentLayout.isDesktop === isDesktop
      ) {
        return currentLayout;
      }

      return {
        d,
        height,
        isDesktop,
        points,
        width,
      };
    });
  }, []);

  const schedulePathMeasurement = useCallback(() => {
    if (measureFrameRef.current !== null) {
      window.cancelAnimationFrame(measureFrameRef.current);
    }

    measureFrameRef.current = window.requestAnimationFrame(() => {
      measureFrameRef.current = null;
      measureTimelinePath();
    });
  }, [measureTimelinePath]);

  useEffect(() => {
    const section = sectionRef.current;
    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

    const syncMotionPreference = () => {
      reducedMotionRef.current = motionQuery.matches;

      if (section) {
        section.dataset.journeyMotion = motionQuery.matches ? "reduced" : "active";
      }

      syncScrollProgress();
    };

    syncMotionPreference();

    if (motionQuery.addEventListener) {
      motionQuery.addEventListener("change", syncMotionPreference);
    } else {
      motionQuery.addListener(syncMotionPreference);
    }

    return () => {
      if (motionQuery.removeEventListener) {
        motionQuery.removeEventListener("change", syncMotionPreference);
      } else {
        motionQuery.removeListener(syncMotionPreference);
      }
    };
  }, [syncScrollProgress]);

  useEffect(() => {
    schedulePathMeasurement();
    const delayedMeasures = [
      window.setTimeout(schedulePathMeasurement, 120),
      window.setTimeout(schedulePathMeasurement, 360),
      window.setTimeout(schedulePathMeasurement, 900),
    ];
    const layoutQuery = window.matchMedia(DESKTOP_QUERY);
    const fontsReady = document.fonts?.ready;

    const resizeObserver = typeof ResizeObserver !== "undefined" ? new ResizeObserver(schedulePathMeasurement) : null;
    const list = listRef.current;

    if (list && resizeObserver) {
      resizeObserver.observe(list);
    }

    nodeRefs.current.forEach((node) => {
      if (node && resizeObserver) {
        resizeObserver.observe(node);
      }
    });

    window.addEventListener("resize", schedulePathMeasurement, { passive: true });
    window.addEventListener("orientationchange", schedulePathMeasurement, { passive: true });
    window.addEventListener("load", schedulePathMeasurement, { once: true });

    if (layoutQuery.addEventListener) {
      layoutQuery.addEventListener("change", schedulePathMeasurement);
    } else {
      layoutQuery.addListener(schedulePathMeasurement);
    }

    fontsReady?.then(schedulePathMeasurement).catch(() => {
      // Font loading support varies by browser; resize observers still keep the path aligned.
    });

    return () => {
      if (measureFrameRef.current !== null) {
        window.cancelAnimationFrame(measureFrameRef.current);
      }

      delayedMeasures.forEach((timer) => window.clearTimeout(timer));
      resizeObserver?.disconnect();
      window.removeEventListener("resize", schedulePathMeasurement);
      window.removeEventListener("orientationchange", schedulePathMeasurement);
      window.removeEventListener("load", schedulePathMeasurement);

      if (layoutQuery.removeEventListener) {
        layoutQuery.removeEventListener("change", schedulePathMeasurement);
      } else {
        layoutQuery.removeListener(schedulePathMeasurement);
      }
    };
  }, [schedulePathMeasurement]);

  useEffect(() => {
    const path = pathRef.current;

    if (!path || !pathLayout) {
      return;
    }

    const pathLength = path.getTotalLength();

    pathLengthRef.current = pathLength;
    milestoneDistancesRef.current = pathLayout.points.map((point) => getClosestPathDistance(path, point, pathLength));

    if (progressPathRef.current) {
      progressPathRef.current.style.setProperty("stroke-dasharray", String(pathLength));
      progressPathRef.current.style.setProperty("stroke-dashoffset", String(pathLength));
    }

    syncScrollProgress();
  }, [pathLayout, syncScrollProgress]);

  useEffect(() => {
    window.addEventListener("scroll", syncScrollProgress, { passive: true });
    syncScrollProgress();

    return () => {
      if (scrollFrameRef.current !== null) {
        window.cancelAnimationFrame(scrollFrameRef.current);
      }

      window.removeEventListener("scroll", syncScrollProgress);
    };
  }, [syncScrollProgress]);

  return (
    <section
      ref={sectionRef}
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

        <ol
          ref={listRef}
          className="journey-list mt-14 md:mt-20"
          aria-label="Softzino company journey from 2015 to 2025"
          data-journey-enhanced={pathLayout ? "true" : undefined}
        >
          {pathLayout ? (
            <>
              <svg
                aria-hidden="true"
                className="journey-connector-layer"
                focusable="false"
                height={pathLayout.height}
                preserveAspectRatio="none"
                viewBox={`0 0 ${pathLayout.width} ${pathLayout.height}`}
                width={pathLayout.width}
              >
                <path ref={pathRef} className="journey-connector-base" d={pathLayout.d} />
                <path ref={progressPathRef} className="journey-connector-progress" d={pathLayout.d} />
              </svg>
              <span ref={travelerRef} className="journey-travel-square" aria-hidden="true" />
            </>
          ) : null}

          {journeyMilestones.map((milestone, index) => {
            return (
              <li
                key={milestone.year}
                ref={(element) => {
                  itemRefs.current[index] = element;
                }}
                className="journey-item"
                data-side={milestone.side}
                data-journey-year={milestone.year}
                data-journey-state={index === 0 ? "active" : "upcoming"}
                style={{ "--journey-index": index } as CSSProperties}
              >
                <div className="journey-year">
                  <div className="journey-year-rule" aria-hidden="true" />
                  <time dateTime={milestone.year} className="journey-year-badge">
                    {milestone.year}
                  </time>
                </div>

                <div className="journey-node-wrap" aria-hidden="true">
                  <span
                    ref={(element) => {
                      nodeRefs.current[index] = element;
                    }}
                    className="journey-node"
                  />
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
