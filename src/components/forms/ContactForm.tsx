"use client";

import { useState } from "react";
import { contactServiceOptions } from "@/config/site";
import { Button } from "@/components/ui/Button";
import type { ContactFormData } from "@/lib/validators";

type FormErrors = Partial<Record<keyof ContactFormData, string>>;

export function ContactForm() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [errors, setErrors] = useState<FormErrors>({});
  const [serverError, setServerError] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    const formData = new FormData(form);
    const payload = Object.fromEntries(formData.entries());

    setLoading(true);
    setSuccess(false);
    setErrors({});
    setServerError("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = (await response.json()) as {
        success?: boolean;
        message?: string;
        errors?: FormErrors;
      };

      if (!response.ok) {
        if (data.errors) setErrors(data.errors);
        setServerError(data.message ?? "Failed to send message. Please try again.");
        return;
      }

      setSuccess(true);
      form.reset();
    } catch (err) {
      console.error("Form submission error:", err);
      setServerError("Network error. Please check your connection and try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      className="flex flex-col gap-4"
      onSubmit={handleSubmit}
      noValidate
      aria-label="Contact form"
    >
      {success && (
        <div className="form-success" role="status" aria-live="polite">
          Thank you! Your message has been sent successfully. We&apos;ll respond within 24 hours.
        </div>
      )}
      {serverError && (
        <div className="form-error rounded-xl border border-red-500/30 bg-red-500/10 p-3" role="alert">
          {serverError}
        </div>
      )}

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div className="flex flex-col gap-2">
          <label htmlFor="firstName" className="text-[13px] font-medium tracking-wide text-[var(--text-tertiary)]">
            First Name
          </label>
          <input
            id="firstName"
            name="firstName"
            type="text"
            className="form-input"
            placeholder="Your First Name"
            required
            autoComplete="given-name"
            aria-invalid={!!errors.firstName}
            aria-describedby={errors.firstName ? "firstName-error" : undefined}
          />
          {errors.firstName && (
            <span id="firstName-error" className="form-error">
              {errors.firstName}
            </span>
          )}
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="lastName" className="text-[13px] font-medium tracking-wide text-[var(--text-tertiary)]">
            Last Name
          </label>
          <input
            id="lastName"
            name="lastName"
            type="text"
            className="form-input"
            placeholder="Your Last Name"
            required
            autoComplete="family-name"
            aria-invalid={!!errors.lastName}
            aria-describedby={errors.lastName ? "lastName-error" : undefined}
          />
          {errors.lastName && (
            <span id="lastName-error" className="form-error">
              {errors.lastName}
            </span>
          )}
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="email" className="text-[13px] font-medium tracking-wide text-[var(--text-tertiary)]">
          Email Address
        </label>
        <input
          id="email"
          name="email"
          type="email"
          className="form-input"
          placeholder="Your Email Address"
          required
          autoComplete="email"
          aria-invalid={!!errors.email}
          aria-describedby={errors.email ? "email-error" : undefined}
        />
        {errors.email && (
          <span id="email-error" className="form-error">
            {errors.email}
          </span>
        )}
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="service" className="text-[13px] font-medium tracking-wide text-[var(--text-tertiary)]">
          What are you looking for?
        </label>
        <select
          id="service"
          name="service"
          className="form-input cursor-pointer appearance-none"
          required
          defaultValue=""
          aria-invalid={!!errors.service}
          aria-describedby={errors.service ? "service-error" : undefined}
        >
          <option value="" disabled>
            Select a service...
          </option>
          {contactServiceOptions.map((opt) => (
            <option key={opt.value} value={opt.value} className="bg-[var(--bg-surface)]">
              {opt.label}
            </option>
          ))}
        </select>
        {errors.service && (
          <span id="service-error" className="form-error">
            {errors.service}
          </span>
        )}
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="message" className="text-[13px] font-medium tracking-wide text-[var(--text-tertiary)]">
          Tell us about your project
        </label>
        <textarea
          id="message"
          name="message"
          className="form-input resize-none"
          rows={5}
          placeholder="Describe your idea, timeline, and any technical requirements..."
          required
          aria-invalid={!!errors.message}
          aria-describedby={errors.message ? "message-error" : undefined}
        />
        {errors.message && (
          <span id="message-error" className="form-error">
            {errors.message}
          </span>
        )}
      </div>

      {/* Honeypot spam protection */}
      <input
        type="text"
        name="website"
        tabIndex={-1}
        autoComplete="off"
        className="absolute -left-[9999px] h-0 w-0 opacity-0"
        aria-hidden="true"
      />

      <Button type="submit" loading={loading} className="mt-2">
        Send Message →
      </Button>
    </form>
  );
}
