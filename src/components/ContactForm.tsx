"use client";

import { useState } from "react";
import { Icon } from "./Icon";

const topics = ["Admissions", "Fees", "Transport", "Academics", "Alumni", "Other"];

type Errors = Partial<Record<"name" | "email" | "phone" | "message", string>>;

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [errors, setErrors] = useState<Errors>({});
  const [serverError, setServerError] = useState("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form)) as Record<string, string>;

    const errs: Errors = {};
    if (!data.name?.trim()) errs.name = "Please enter your name.";
    if (!/^\S+@\S+\.\S+$/.test(data.email ?? "")) errs.email = "Please enter a valid email.";
    if (data.phone && !/^[+\d][\d\s-]{7,}$/.test(data.phone)) errs.phone = "Please enter a valid phone number.";
    if ((data.message ?? "").trim().length < 10) errs.message = "Please write at least a few words.";
    setErrors(errs);
    if (Object.keys(errs).length) return;

    setStatus("sending");
    setServerError("");
    try {
      const res = await fetch("/api/contact", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(data) });
      const json = await res.json();
      if (!res.ok) throw new Error(json.error || "Something went wrong.");
      setStatus("sent");
      form.reset();
    } catch (err) {
      setStatus("error");
      setServerError(err instanceof Error ? err.message : "Something went wrong.");
    }
  }

  if (status === "sent") {
    return (
      <div className="card flex flex-col items-center p-10 text-center">
        <span className="grid h-16 w-16 place-items-center rounded-full bg-emerald-50 text-emerald-600"><Icon name="check" className="h-8 w-8" strokeWidth={2.5} /></span>
        <h3 className="mt-5 font-serif text-3xl font-semibold">Thank you</h3>
        <p className="mt-2 max-w-sm text-ink-soft">Your message has reached the school office. We usually reply within two working days.</p>
        <button onClick={() => setStatus("idle")} className="btn btn-outline mt-6">Send another message</button>
      </div>
    );
  }

  const err = (k: keyof Errors) => errors[k] && <p className="mt-1.5 text-xs font-semibold text-red-600">{errors[k]}</p>;

  return (
    <form onSubmit={onSubmit} noValidate className="card grid gap-5 p-6 md:grid-cols-2 md:p-8">
      <div>
        <label className="label" htmlFor="name">Full name *</label>
        <input id="name" name="name" className="field" autoComplete="name" aria-invalid={!!errors.name} />
        {err("name")}
      </div>
      <div>
        <label className="label" htmlFor="email">Email *</label>
        <input id="email" name="email" type="email" className="field" autoComplete="email" aria-invalid={!!errors.email} />
        {err("email")}
      </div>
      <div>
        <label className="label" htmlFor="phone">Phone</label>
        <input id="phone" name="phone" type="tel" className="field" autoComplete="tel" aria-invalid={!!errors.phone} />
        {err("phone")}
      </div>
      <div>
        <label className="label" htmlFor="topic">Topic</label>
        <select id="topic" name="topic" className="field" defaultValue="Admissions">
          {topics.map((t) => <option key={t}>{t}</option>)}
        </select>
      </div>
      <div className="md:col-span-2">
        <label className="label" htmlFor="message">Message *</label>
        <textarea id="message" name="message" rows={5} className="field resize-y" aria-invalid={!!errors.message} />
        {err("message")}
      </div>
      {/* Honeypot field for bots */}
      <input type="text" name="company" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />
      <div className="flex flex-col items-start gap-3 md:col-span-2 md:flex-row md:items-center md:justify-between">
        <p className="text-xs text-ink-soft">We use your details only to reply to this enquiry.</p>
        <button type="submit" disabled={status === "sending"} className="btn btn-primary disabled:opacity-60">
          {status === "sending" ? "Sending…" : <>Send message <Icon name="arrow" className="h-4 w-4" /></>}
        </button>
      </div>
      {status === "error" && <p className="rounded-xl bg-red-50 p-3 text-sm text-red-700 md:col-span-2">{serverError}</p>}
    </form>
  );
}
