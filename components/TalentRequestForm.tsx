"use client";

import { useState, FormEvent } from "react";
import { ArrowRight, CheckCircle2, Loader2 } from "lucide-react";

type Status = "idle" | "submitting" | "success" | "error";

// Submission endpoint is not configured in this static build.
// Keep the client confirmation non-persistent until a real endpoint is provided.
async function submitLeadRequest(): Promise<void> {
  await new Promise((resolve) => setTimeout(resolve, 700));
}

export default function TalentRequestForm() {
  // Tracks the form's current UI state: normal, loading, success, or error.
  const [status, setStatus] = useState<Status>("idle");

  // Runs client-side submission feedback, then swaps UI state.
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("submitting");

    try {
      await submitLeadRequest();
      setStatus("success");
    } catch {
      setStatus("error");
    }
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
            Something went wrong sending your request. Please try again.
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
