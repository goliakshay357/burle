"use client";

import { useState, type FormEvent } from "react";

type Status = "idle" | "submitting" | "success" | "error";

export function InquiryForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [firstName, setFirstName] = useState("");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }
    const data = Object.fromEntries(new FormData(form).entries());
    setFirstName(String(data.name).split(" ")[0] ?? "");
    setStatus("submitting");

    try {
      // TODO: wire to Formspree / Resend / Google Sheets for production
      await new Promise((r) => setTimeout(r, 800));
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="form-success reveal-up in" role="status" aria-live="polite">
        <div className="check" aria-hidden>✓</div>
        <h3>Thank you{firstName ? `, ${firstName}` : ""}.</h3>
        <p>Your inquiry has reached us. We&apos;ll be in touch within one working day with availability and the next steps.</p>
      </div>
    );
  }

  return (
    <form className="form reveal-up" data-stagger="2" onSubmit={onSubmit} noValidate>
      <div className="field-row">
        <div className="field">
          <label htmlFor="f-name">Name</label>
          <input id="f-name" name="name" type="text" autoComplete="name" placeholder="Your full name" required />
        </div>
        <div className="field">
          <label htmlFor="f-phone">Phone</label>
          <div className="phone-field">
            <span className="phone-prefix">+91</span>
            <input id="f-phone" name="phone" type="tel" autoComplete="tel-national" inputMode="numeric" placeholder="10-digit number" pattern="[0-9]{10}" required />
          </div>
        </div>
      </div>

      <div className="field">
        <label htmlFor="f-email">Email</label>
        <input id="f-email" name="email" type="email" autoComplete="email" placeholder="your@email.com" required />
      </div>

      <div className="field-row">
        <div className="field">
          <label htmlFor="f-event">Event type</label>
          <select id="f-event" name="event" required defaultValue="">
            <option value="" disabled>Select an event</option>
            <option>Wedding</option>
            <option>Reception</option>
            <option>Haldi / Mehendi / Engagement</option>
            <option>Birthday</option>
            <option>Private gathering</option>
            <option>Other</option>
          </select>
        </div>
        <div className="field">
          <label htmlFor="f-date">Event date</label>
          <input id="f-date" name="date" type="date" />
        </div>
      </div>

      <div className="field">
        <label htmlFor="f-guests">Number of guests</label>
        <input id="f-guests" name="guests" type="number" min={1} max={2000} placeholder="Approximate count" />
      </div>

      <div className="field">
        <label htmlFor="f-notes">Notes &amp; special requests</label>
        <textarea id="f-notes" name="notes" placeholder="Anything we should know" />
      </div>

      <button type="submit" className="form-submit" disabled={status === "submitting"}>
        <span>{status === "submitting" ? "Sending…" : status === "error" ? "Try again" : "Submit inquiry"}</span>
        <span className="arrow" aria-hidden>→</span>
      </button>
    </form>
  );
}
