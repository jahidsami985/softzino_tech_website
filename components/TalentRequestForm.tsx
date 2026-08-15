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
      <div className="flex flex-col items-center gap-4 rounded-card border border-border-lighter bg-white p-12 text-center shadow-card-sm">
        <CheckCircle2 size={48} className="text-teal-secondary" />
        <h3 className="text-xl font-bold text-navy-deep">Request received</h3>
        <p className="text-body-text">
          Thanks for reaching out. A member of our team will match you with the right experts and
          follow up within 48 hours.
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
      className="flex flex-col gap-6 rounded-card border border-border-lighter bg-white p-8 shadow-card-sm md:p-12"
    >
      <div>
        <h2 className="text-2xl font-bold text-navy-deep md:text-3xl">
          Request Technical Talent
        </h2>
        <p className="mt-2 text-body-text">
          Tell us what you need, and we&apos;ll match you with the right experts within 48 hours.
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

      <Field label="Company Name" name="companyName" placeholder="Acme Corp" required />

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <SelectField
          label="Primary Talent Needed"
          name="talentNeeded"
          placeholder="Select specialization..."
          options={[
            "Full-Stack Engineer",
            "Frontend Engineer",
            "Backend Engineer",
            "DevOps / Cloud Engineer",
            "Data Engineer",
            "QA / Test Engineer",
            "UI/UX Designer",
            "Project Manager",
          ]}
        />
        <SelectField
          label="Estimated Team Size"
          name="teamSize"
          placeholder="Select size..."
          options={["1 person", "2-4 people", "5-9 people", "10+ people"]}
        />
      </div>

      <fieldset>
        <legend className="font-mono text-xs uppercase tracking-wide text-text-dark">
          Expected Start Timeline
        </legend>
        <div className="mt-3 flex flex-wrap gap-6">
          <RadioOption name="timeline" value="immediate" label="Immediate (1-2 Weeks)" />
          <RadioOption name="timeline" value="within-month" label="Within 1 Month" defaultChecked />
          <RadioOption name="timeline" value="planning" label="Planning Phase" />
        </div>
      </fieldset>

      <div className="flex flex-col gap-3 pt-2">
        <button
          type="submit"
          disabled={status === "submitting"}
          className="flex items-center justify-center gap-2 rounded-sm4 bg-teal-secondary px-8 py-4 text-base font-medium text-white transition-colors hover:bg-teal-primary disabled:cursor-not-allowed disabled:opacity-70"
        >
          {status === "submitting" ? (
            <>
              <Loader2 size={18} className="animate-spin" /> Submitting...
            </>
          ) : (
            <>
              Submit Request <ArrowRight size={16} />
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
    <label className="flex flex-col gap-2">
      <span className="font-mono text-xs uppercase tracking-wide text-text-dark">{label}</span>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        required={required}
        className="rounded-sm4 border border-border-light bg-bg-cream px-4 py-3.5 text-base text-text-dark placeholder:text-placeholder-gray focus:border-teal-secondary focus:outline-none"
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
    <label className="flex flex-col gap-2">
      <span className="font-mono text-xs uppercase tracking-wide text-text-dark">{label}</span>
      <select
        name={name}
        defaultValue=""
        className="rounded-sm4 border border-border-light bg-bg-cream px-4 py-3.5 text-base text-text-dark focus:border-teal-secondary focus:outline-none"
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

// Reusable radio option used by the expected-start timeline fieldset.
function RadioOption({
  name,
  value,
  label,
  defaultChecked,
}: {
  name: string;
  value: string;
  label: string;
  defaultChecked?: boolean;
}) {
  return (
    <label className="flex cursor-pointer items-center gap-2 text-base text-text-dark">
      <input
        type="radio"
        name={name}
        value={value}
        defaultChecked={defaultChecked}
        className="h-4 w-4 accent-teal-secondary"
      />
      {label}
    </label>
  );
}
