"use client";

import { useRef, useState, FormEvent, InvalidEvent } from "react";
import { ArrowRight, CheckCircle2, Loader2 } from "lucide-react";
import { trackEvent } from "@/components/Analytics";
import { getAttribution } from "@/lib/analytics-measurement";

type Status = "idle" | "submitting" | "success" | "error";

const leadEndpoint = process.env.NEXT_PUBLIC_LEAD_ENDPOINT;
const leadEndpointEnv = process.env.NEXT_PUBLIC_LEAD_ENDPOINT_ENV;
const siteEnv = process.env.NEXT_PUBLIC_SITE_ENV;

function isValidLeadEndpoint(value?: string) {
  if (!value || !/^https:\/\//i.test(value)) return false;
  if (siteEnv !== "production" && leadEndpointEnv !== "staging") return false;
  return true;
}

type LeadResponse = {
  submission_id?: unknown;
  id?: unknown;
};

function getStoredAttribution() {
  let landingPage = "";
  let referrer = "";

  try {
    landingPage = window.sessionStorage.getItem("softzino_landing_page") || window.location.pathname;
    referrer = window.sessionStorage.getItem("softzino_referrer") || document.referrer;
  } catch {
    landingPage = window.location.pathname;
    referrer = document.referrer;
  }

  return getAttribution(window.location.search, referrer, landingPage);
}

function getSubmissionId(data: LeadResponse) {
  const value = data.submission_id ?? data.id;
  return typeof value === "string" || typeof value === "number" ? String(value) : undefined;
}

async function submitLeadRequest(form: HTMLFormElement): Promise<{ submissionId?: string }> {
  if (!isValidLeadEndpoint(leadEndpoint)) {
    throw new Error("missing_lead_endpoint");
  }

  const body = new FormData(form);
  const attribution = getStoredAttribution();
  Object.entries(attribution).forEach(([key, value]) => {
    if (value) body.set(key, value);
  });

  const response = await fetch(leadEndpoint as string, {
    method: "POST",
    body,
  });

  if (!response.ok) {
    throw new Error("lead_endpoint_error");
  }

  try {
    const data = (await response.json()) as LeadResponse;
    return { submissionId: getSubmissionId(data) };
  } catch {
    return {};
  }
}

export default function TalentRequestForm() {
  // Tracks the form's current UI state: normal, loading, success, or error.
  const [status, setStatus] = useState<Status>("idle");
  const [started, setStarted] = useState(false);
  const submittingRef = useRef(false);
  const lastValidationErrorAt = useRef(0);

  // Runs client-side submission feedback, then swaps UI state.
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (submittingRef.current) return;

    submittingRef.current = true;
    setStatus("submitting");

    try {
      const { submissionId } = await submitLeadRequest(e.currentTarget);
      const attribution = getStoredAttribution();
      trackEvent("form_submit_success", {
        page_path: window.location.pathname,
        form_name: "hire_developers",
        service: "hire_developers",
        lead_type: "developer_request",
        submission_id: submissionId,
        landing_page: attribution.landing_page,
        utm_source: attribution.utm_source,
        utm_medium: attribution.utm_medium,
        utm_campaign: attribution.utm_campaign,
      });
      setStatus("success");
    } catch (error) {
      trackEvent("form_submit_error", {
        page_path: window.location.pathname,
        form_name: "hire_developers",
        service: "hire_developers",
        error_type: error instanceof Error ? error.message : "unknown_error",
        error_message_group: "lead_submission_failed",
      });
      setStatus("error");
    } finally {
      submittingRef.current = false;
    }
  };

  const handleFormStart = () => {
    if (started) return;
    const attribution = getStoredAttribution();
    setStarted(true);
    trackEvent("form_start", {
      page_path: window.location.pathname,
      form_name: "hire_developers",
      service: "hire_developers",
      form_location: "hire_developers_lead_section",
      landing_page: attribution.landing_page,
      referrer: attribution.referrer,
    });
  };

  const handleInvalid = (event: InvalidEvent<HTMLFormElement>) => {
    if (event.target === event.currentTarget) return;

    const now = Date.now();
    if (now - lastValidationErrorAt.current < 1000) return;
    lastValidationErrorAt.current = now;

    trackEvent("form_submit_error", {
      page_path: window.location.pathname,
      form_name: "hire_developers",
      service: "hire_developers",
      error_type: "validation_error",
      error_message_group: "form_validation_failed",
    });
  };

  // Success replaces the form with a confirmation message and a reset action.
  if (status === "success") {
    return (
      <div className="flex flex-col items-center gap-4 rounded-card border border-border-lighter bg-white p-6 text-center shadow-card-sm sm:p-8 md:p-12">
        <CheckCircle2 size={48} className="text-teal-secondary" />
        <h3 className="text-xl font-bold text-navy-deep">Request received</h3>
        <p className="text-body-text">
          Thanks for reaching out. A member of our team will review your requirements and follow up
          with practical next steps.
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="mt-2 text-sm font-medium text-teal-primary hover:underline"
        >
          Submit another request
        </button>
      </div>
    );
  }

  return (
    /* Main talent request form. Field helper components keep repeated input markup consistent. */
    <form
      onSubmit={handleSubmit}
      onInvalid={handleInvalid}
      onFocus={handleFormStart}
      className="flex min-w-0 flex-col gap-6 rounded-card border border-border-lighter bg-white p-6 shadow-card-sm sm:p-8 md:p-12"
    >
      <div>
        <h2 className="text-2xl font-bold text-navy-deep md:text-3xl">Request Developers</h2>
        <p className="mt-2 text-body-text">
          Share the basics, and Softzino can review the best developer or team fit for your needs.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <Field label="Full Name" name="fullName" placeholder="Jane Doe" required />
        <Field
          label="Work Email"
          name="workEmail"
          type="email"
          placeholder="jane@company.com"
          required
        />
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <Field label="Company" name="company" placeholder="Acme Corp" required />
        <Field label="Phone Number" name="phoneNumber" type="tel" placeholder="+1 555 0100" />
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <SelectField
          label="Developer / Skill Needed"
          name="talentNeeded"
          placeholder="Select specialization..."
          options={[
            "Frontend Developer",
            "Backend Developer",
            "Full-Stack Developer",
            "Mobile App Developer",
            "UI/UX Engineer",
            "SQA Engineer",
            "DevOps / Cloud Engineer",
          ]}
        />
        <SelectField
          label="Number of Developers"
          name="developerCount"
          placeholder="Select quantity..."
          options={["1 developer", "2-3 developers", "4-6 developers", "7+ developers"]}
        />
      </div>

      <SelectField
        label="Engagement Type"
        name="engagementType"
        placeholder="Select engagement type..."
        options={["Single Hire", "Recruit", "Project Hire", "Not Sure Yet"]}
      />

      <label className="flex min-w-0 flex-col gap-2">
        <span className="font-mono text-xs uppercase tracking-wide text-text-dark">
          Project Details
        </span>
        <textarea
          name="projectDetails"
          rows={5}
          placeholder="Tell us about your product, goals, technology stack, timeline, or team needs."
          className="w-full min-w-0 resize-y rounded-sm4 border border-border-light bg-bg-cream px-4 py-3.5 text-base text-text-dark placeholder:text-placeholder-gray focus:border-teal-secondary focus:outline-none"
        />
      </label>

      <div className="flex flex-col gap-3 pt-2">
        <button
          type="submit"
          disabled={status === "submitting"}
          className="flex min-h-12 w-full max-w-full items-center justify-center gap-2 rounded-sm4 bg-teal-secondary px-5 py-4 text-center text-base font-medium text-white transition-colors hover:bg-teal-primary disabled:cursor-not-allowed disabled:opacity-70 sm:px-8"
        >
          {status === "submitting" ? (
            <>
              <Loader2 size={18} className="animate-spin" /> Submitting...
            </>
          ) : (
            <>
              Request Developers <ArrowRight size={16} />
            </>
          )}
        </button>
        {status === "error" && (
          <p className="text-center text-sm text-red-600">
            This form is not connected to a verified lead destination yet. Please use the
            approved contact route until the endpoint is configured.
          </p>
        )}
        <p className="text-center font-mono text-xs uppercase tracking-wide text-body-text">
          No commitment required. We respect your privacy.
        </p>
      </div>
    </form>
  );
}

// Reusable text input with the Figma label/input styling applied in one place.
function Field({
  label,
  name,
  type = "text",
  placeholder,
  required,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
}) {
  return (
    <label className="flex min-w-0 flex-col gap-2">
      <span className="font-mono text-xs uppercase tracking-wide text-text-dark">{label}</span>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        required={required}
        className="w-full min-w-0 rounded-sm4 border border-border-light bg-bg-cream px-4 py-3.5 text-base text-text-dark placeholder:text-placeholder-gray focus:border-teal-secondary focus:outline-none"
      />
    </label>
  );
}

// Reusable select input for dropdown fields such as specialization and team size.
function SelectField({
  label,
  name,
  placeholder,
  options,
}: {
  label: string;
  name: string;
  placeholder: string;
  options: string[];
}) {
  return (
    <label className="flex min-w-0 flex-col gap-2">
      <span className="font-mono text-xs uppercase tracking-wide text-text-dark">{label}</span>
      <select
        name={name}
        defaultValue=""
        className="w-full min-w-0 rounded-sm4 border border-border-light bg-bg-cream px-4 py-3.5 text-base text-text-dark focus:border-teal-secondary focus:outline-none"
      >
        <option value="" disabled>
          {placeholder}
        </option>
        {options.map((opt) => (
          <option key={opt} value={opt}>
            {opt}
          </option>
        ))}
      </select>
    </label>
  );
}
