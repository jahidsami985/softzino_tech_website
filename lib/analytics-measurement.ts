import { apexHost, productionHost, productionOrigin } from "@/lib/site-config.mjs";

export const approvedEventNames = [
  "cta_click",
  "form_start",
  "form_submit_success",
  "form_submit_error",
  "email_click",
  "phone_click",
  "calendar_click",
] as const;

export type ApprovedEventName = (typeof approvedEventNames)[number];

type EventParameters = Record<string, unknown>;

const approvedParameters: Record<ApprovedEventName, Set<string>> = {
  cta_click: new Set([
    "page_path",
    "cta_text",
    "cta_location",
    "destination_url",
    "service",
    "journey_stage",
  ]),
  form_start: new Set([
    "page_path",
    "form_name",
    "service",
    "form_location",
    "landing_page",
    "referrer",
  ]),
  form_submit_success: new Set([
    "page_path",
    "form_name",
    "service",
    "lead_type",
    "country",
    "submission_id",
    "landing_page",
    "utm_source",
    "utm_medium",
    "utm_campaign",
  ]),
  form_submit_error: new Set([
    "page_path",
    "form_name",
    "service",
    "error_type",
    "error_message_group",
  ]),
  email_click: new Set(["page_path", "email_location", "email_label", "service"]),
  phone_click: new Set(["page_path", "phone_location", "phone_label", "service"]),
  calendar_click: new Set([
    "page_path",
    "calendar_location",
    "calendar_provider",
    "service",
    "destination_url",
  ]),
};

const piiPatterns = [
  /[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}/gi,
  /(?:\+?\d[\d\s().-]{7,}\d)/g,
];

export function isApprovedEventName(event: string): event is ApprovedEventName {
  return (approvedEventNames as readonly string[]).includes(event);
}

export function isValidGaId(value?: string) {
  return Boolean(value && /^G-[A-Z0-9]+$/i.test(value));
}

export function isValidGtmId(value?: string) {
  return Boolean(value && /^GTM-[A-Z0-9]+$/i.test(value));
}

export function hasConfiguredConsent(value?: string) {
  return value === "true" || value === "granted";
}

export function sanitizeText(value: string) {
  return piiPatterns.reduce(
    (safeValue, pattern) => safeValue.replace(pattern, "[redacted]"),
    value.trim().replace(/\s+/g, " "),
  );
}

export function sanitizeDestinationUrl(value: string) {
  if (!value) return value;

  try {
    const url = new URL(value, productionOrigin);
    url.search = "";
    url.hash = "";
    return url.hostname === productionHost || url.hostname === apexHost
      ? `${url.pathname}${url.search}${url.hash}`
      : url.toString();
  } catch {
    return sanitizeText(value.split(/[?#]/)[0] ?? "");
  }
}

export function sanitizeEventParameters(
  event: ApprovedEventName,
  parameters: EventParameters,
) {
  const allowed = approvedParameters[event];
  const safeParameters: EventParameters = {};

  for (const [key, value] of Object.entries(parameters)) {
    if (!allowed.has(key) || value === undefined || value === null || value === "") continue;
    safeParameters[key] =
      typeof value === "string" ? sanitizeText(value).slice(0, 120) : value;
  }

  if (
    typeof safeParameters.destination_url === "string" &&
    event !== "email_click" &&
    event !== "phone_click"
  ) {
    safeParameters.destination_url = sanitizeDestinationUrl(safeParameters.destination_url);
  }

  return safeParameters;
}

export function buildEventKey(event: ApprovedEventName, parameters: EventParameters) {
  return `${event}:${JSON.stringify(parameters)}`;
}

export function getAttribution(search: string, referrer: string, landingPage: string) {
  const params = new URLSearchParams(search);

  return {
    landing_page: sanitizeDestinationUrl(landingPage),
    referrer: sanitizeDestinationUrl(referrer),
    utm_source: sanitizeText(params.get("utm_source") ?? ""),
    utm_medium: sanitizeText(params.get("utm_medium") ?? ""),
    utm_campaign: sanitizeText(params.get("utm_campaign") ?? ""),
  };
}

export function inferServiceFromPath(pathname: string) {
  if (pathname === "/") return "homepage";
  return pathname.replace(/^\/+/, "").replace(/[/?#].*$/, "").replace(/[^a-z0-9]+/gi, "_");
}

export function inferJourneyStage(pathname: string) {
  if (pathname.includes("hire-developers")) return "decision";
  if (pathname.includes("solutions/custom-software-solutions")) return "vendor_shortlist";
  if (pathname.includes("services")) return "solution_aware";
  return "problem_aware";
}

export function inferCalendarProvider(href: string) {
  if (/calendly/i.test(href)) return "calendly";
  if (/calendar\.google/i.test(href)) return "google_calendar";
  if (/booking|schedule/i.test(href)) return "booking";
  return "calendar";
}
