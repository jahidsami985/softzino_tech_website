"use client";

import Script from "next/script";
import { useEffect } from "react";
import {
  buildEventKey,
  hasConfiguredConsent,
  inferCalendarProvider,
  inferJourneyStage,
  inferServiceFromPath,
  isApprovedEventName,
  isValidGaId,
  isValidGtmId,
  sanitizeEventParameters,
} from "@/lib/analytics-measurement";
import type { ApprovedEventName } from "@/lib/analytics-measurement";

declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[];
    gtag?: (...args: unknown[]) => void;
  }
}

const gaId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;
const gtmId = process.env.NEXT_PUBLIC_GTM_ID;
const configuredConsent = process.env.NEXT_PUBLIC_ANALYTICS_CONSENT_GRANTED;
const siteEnv = process.env.NEXT_PUBLIC_SITE_ENV;
const dedupeWindowMs = 1000;
const recentEvents = new Map<string, number>();

function canUseProductionAnalytics() {
  return siteEnv === "production";
}

function hasAnalyticsDestination() {
  return canUseProductionAnalytics() && (isValidGaId(gaId) || isValidGtmId(gtmId));
}

function hasRuntimeConsent() {
  if (hasConfiguredConsent(configuredConsent)) return true;
  if (typeof window === "undefined") return false;
  if (navigator.doNotTrack === "1") return false;

  try {
    return window.localStorage.getItem("softzino_analytics_consent") === "granted";
  } catch {
    return false;
  }
}

export function trackEvent(event: ApprovedEventName, parameters: Record<string, unknown> = {}) {
  if (typeof window === "undefined") return;
  if (!isApprovedEventName(event) || !hasAnalyticsDestination() || !hasRuntimeConsent()) return;

  const safeParameters = sanitizeEventParameters(event, parameters);
  const eventKey = buildEventKey(event, safeParameters);
  const now = Date.now();
  const lastTrackedAt = recentEvents.get(eventKey) ?? 0;
  if (now - lastTrackedAt < dedupeWindowMs) return;
  recentEvents.set(eventKey, now);

  window.dataLayer = window.dataLayer ?? [];
  window.dataLayer.push({ event, ...safeParameters });

  if (window.gtag && isValidGaId(gaId)) {
    window.gtag("event", event, safeParameters);
  }
}

export default function Analytics() {
  const hasGa = isValidGaId(gaId);
  const hasGtm = isValidGtmId(gtmId);
  const canLoadAnalytics =
    canUseProductionAnalytics() && hasConfiguredConsent(configuredConsent) && (hasGa || hasGtm);

  useEffect(() => {
    try {
      window.sessionStorage.setItem(
        "softzino_landing_page",
        window.sessionStorage.getItem("softzino_landing_page") || window.location.pathname,
      );
      window.sessionStorage.setItem(
        "softzino_referrer",
        window.sessionStorage.getItem("softzino_referrer") || document.referrer,
      );
    } catch {
      // Storage can be unavailable in strict browser privacy modes.
    }

    const handleClick = (event: MouseEvent) => {
      const anchor = (event.target as Element | null)?.closest?.("a[href]") as HTMLAnchorElement | null;
      if (!anchor) return;

      const href = anchor.getAttribute("href") ?? "";
      const text = (anchor.textContent ?? "").trim().replace(/\s+/g, " ").slice(0, 80);
      const pagePath = window.location.pathname;
      const service = inferServiceFromPath(pagePath);

      if (href.startsWith("mailto:")) {
        trackEvent("email_click", {
          page_path: pagePath,
          email_location: "link",
          email_label: "email_link",
          service,
        });
        return;
      }

      if (href.startsWith("tel:")) {
        trackEvent("phone_click", {
          page_path: pagePath,
          phone_location: "link",
          phone_label: "phone_link",
          service,
        });
        return;
      }

      if (/calendly|calendar|booking|schedule/i.test(href)) {
        trackEvent("calendar_click", {
          page_path: pagePath,
          calendar_location: "link",
          calendar_provider: inferCalendarProvider(href),
          service,
          destination_url: href,
        });
        return;
      }

      if (/contact|consultation|schedule|quote|hire|request|discuss|talk|project/i.test(text)) {
        trackEvent("cta_click", {
          page_path: pagePath,
          cta_text: text,
          cta_location: "link",
          destination_url: href,
          service,
          journey_stage: inferJourneyStage(pagePath),
        });
      }
    };

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  return (
    <>
      {canLoadAnalytics && hasGtm && (
        <Script id="gtm-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            window.dataLayer.push({'gtm.start': new Date().getTime(), event: 'gtm.js'});
            var firstScript = document.getElementsByTagName('script')[0];
            var script = document.createElement('script');
            script.async = true;
            script.src = 'https://www.googletagmanager.com/gtm.js?id=${gtmId}';
            firstScript.parentNode.insertBefore(script, firstScript);
          `}
        </Script>
      )}
      {canLoadAnalytics && hasGa && (
        <>
          <Script src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`} strategy="afterInteractive" />
          <Script id="ga-init" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              window.gtag = gtag;
              gtag('js', new Date());
              gtag('config', '${gaId}', { anonymize_ip: true });
            `}
          </Script>
        </>
      )}
    </>
  );
}
