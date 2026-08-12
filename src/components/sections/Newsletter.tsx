"use client";

import { useState } from "react";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { Button } from "@/components/ui/Button";

export function Newsletter() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    const formData = new FormData(form);
    const payload = Object.fromEntries(formData.entries());

    setLoading(true);
    setSuccess(false);
    setError("");

    try {
      const response = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = (await response.json()) as { success?: boolean; message?: string };

      if (!response.ok) {
        setError(data.message ?? "Subscription failed. Please try again.");
        return;
      }

      form.reset();
      setSuccess(true);
    } catch (err) {
      console.error("Newsletter submission error:", err);
      setError("Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="mx-auto max-w-[1200px] px-8 pb-[120px]">
      <RevealOnScroll>
        <div className="relative overflow-hidden rounded-xl border border-[var(--border-subtle)] bg-transparent p-10 text-center max-md:p-8">
          <h3 className="font-display relative mb-2.5 text-[24px] font-semibold text-[var(--text-primary)]">
            Join the developer newsletter
          </h3>
          <p className="relative mb-8 text-[16px] text-[var(--text-secondary)]">
            One email every two weeks. Technical insights, open-source updates, and engineering deep-dives. No spam.
          </p>

          {success ? (
            <p className="form-success relative mx-auto max-w-md" role="status" aria-live="polite">
              Thanks for subscribing! Check your inbox for confirmation.
            </p>
          ) : (
            <form
              className="relative mx-auto flex max-w-[460px] flex-col gap-3 sm:flex-row"
              onSubmit={handleSubmit}
              aria-label="Newsletter subscription"
            >
              <label htmlFor="newsletter-email" className="sr-only">
                Email address
              </label>
              <input
                id="newsletter-email"
                name="email"
                type="email"
                className="form-input flex-1"
                placeholder="developer@example.com"
                required
                autoComplete="email"
              />
              <input
                type="text"
                name="website"
                tabIndex={-1}
                autoComplete="off"
                className="absolute -left-[9999px] h-0 w-0 opacity-0"
                aria-hidden="true"
              />
              <Button type="submit" loading={loading} className="whitespace-nowrap">
                Subscribe
              </Button>
            </form>
          )}
          {error && (
            <p className="form-error relative mt-3" role="alert">
              {error}
            </p>
          )}
        </div>
      </RevealOnScroll>
    </div>
  );
}
