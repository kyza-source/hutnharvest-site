"use client";

import { useState } from "react";
import Link from "next/link";

type ContactMethod = "call" | "text" | "email";

type FormState = {
  name: string;
  business: string;
  email: string;
  phone: string;
  contactMethod: ContactMethod;
  entity: string;
  method: string;
  moneyMix: string;
  profitable: string;
  software: string;
  lastRecon: string;
  txVolume: string;
  question: string;
};

const INITIAL_STATE: FormState = {
  name: "",
  business: "",
  email: "",
  phone: "",
  contactMethod: "email",
  entity: "",
  method: "",
  moneyMix: "",
  profitable: "",
  software: "",
  lastRecon: "",
  txVolume: "",
  question: "",
};

// Contact-method channels offered on the "how should we reach you?" control.
// All three are enabled; flip to `false` here to drop a channel.
const CHANNELS: { key: ContactMethod; enabled: boolean; label: string }[] = [
  { key: "call", enabled: true, label: "📞 Call" },
  { key: "text", enabled: true, label: "💬 Text" },
  { key: "email", enabled: true, label: "✉️ Email" },
];

export default function HealthCheckForm() {
  const [state, setState] = useState<FormState>(INITIAL_STATE);
  const [submitted, setSubmitted] = useState(false);

  const set = <K extends keyof FormState>(key: K, value: FormState[K]) =>
    setState((s) => ({ ...s, [key]: value }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    const firstName = state.name.trim().split(" ")[0] || "there";
    return (
      <div style={{ textAlign: "center", padding: "40px 12px" }}>
        <div style={{ fontSize: 34, marginBottom: 12 }}>🌱</div>
        <div style={{ fontFamily: "var(--font-heading)", fontSize: 22, marginBottom: 10 }}>
          Got it, {firstName}!
        </div>
        <p
          style={{
            fontSize: 14,
            lineHeight: 1.6,
            color: "color-mix(in srgb, var(--color-text) 70%, transparent)",
            margin: "0 0 24px",
          }}
        >
          We&apos;ll review your answers and follow up within 1 business day
          with a preliminary read and a link to book your call.
        </p>
        <Link href="/" className="btn-pill btn-pill-outline" style={{ padding: "12px 22px", fontSize: 13 }}>
          Back to Home
        </Link>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 18 }}>
      <div className="form-row-2" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
        <div>
          <label className="field-label">Your name</label>
          <input
            className="field-input"
            type="text"
            required
            value={state.name}
            onChange={(e) => set("name", e.target.value)}
          />
        </div>
        <div>
          <label className="field-label">Business name</label>
          <input
            className="field-input"
            type="text"
            value={state.business}
            onChange={(e) => set("business", e.target.value)}
          />
        </div>
      </div>

      <div className="form-row-2" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
        <div>
          <label className="field-label">Email</label>
          <input
            className="field-input"
            type="email"
            required
            value={state.email}
            onChange={(e) => set("email", e.target.value)}
          />
        </div>
        <div>
          <label className="field-label">Phone</label>
          <input
            className="field-input"
            type="tel"
            value={state.phone}
            onChange={(e) => set("phone", e.target.value)}
          />
        </div>
      </div>

      <div>
        <label className="field-label">How should we reach you?</label>
        <div className="seg" style={{ width: "100%" }}>
          {CHANNELS.filter((c) => c.enabled).map((c) => (
            <label key={c.key} className="seg-opt" style={{ flex: 1, justifyContent: "center" }}>
              <input
                type="radio"
                name="contact-method"
                value={c.key}
                checked={state.contactMethod === c.key}
                onChange={() => set("contactMethod", c.key)}
              />
              <span>{c.label}</span>
            </label>
          ))}
        </div>
      </div>

      <div>
        <label className="field-label">Entity type</label>
        <select
          className="field-input"
          value={state.entity}
          onChange={(e) => set("entity", e.target.value)}
        >
          <option value="">Select one</option>
          <option value="llc">LLC</option>
          <option value="sole_prop">Sole proprietorship</option>
          <option value="partnership">Partnership</option>
          <option value="corp">S-Corp / C-Corp</option>
          <option value="not_registered">Not registered yet</option>
        </select>
      </div>

      <div>
        <label className="field-label">Accounting method</label>
        <select
          className="field-input"
          value={state.method}
          onChange={(e) => set("method", e.target.value)}
        >
          <option value="">Select one</option>
          <option value="cash">Cash</option>
          <option value="accrual">Accrual</option>
          <option value="not_sure">Not sure</option>
        </select>
      </div>

      <div>
        <label className="field-label">Business &amp; personal money - separate or mixed?</label>
        <select
          className="field-input"
          value={state.moneyMix}
          onChange={(e) => set("moneyMix", e.target.value)}
        >
          <option value="">Select one</option>
          <option value="separate">Separate</option>
          <option value="mixed">Mixed</option>
          <option value="not_sure">Not sure</option>
        </select>
      </div>

      <div>
        <label className="field-label">Were you profitable last month?</label>
        <select
          className="field-input"
          value={state.profitable}
          onChange={(e) => set("profitable", e.target.value)}
        >
          <option value="">Select one</option>
          <option value="yes">Yes</option>
          <option value="no">No</option>
          <option value="not_sure">Not sure</option>
        </select>
      </div>

      <div>
        <label className="field-label">Current software</label>
        <select
          className="field-input"
          value={state.software}
          onChange={(e) => set("software", e.target.value)}
        >
          <option value="">Select one</option>
          <option value="qbo">QuickBooks Online</option>
          <option value="spreadsheet">Spreadsheet</option>
          <option value="none">Nothing yet</option>
          <option value="other">Something else</option>
        </select>
      </div>

      <div>
        <label className="field-label">Last reconciliation</label>
        <select
          className="field-input"
          value={state.lastRecon}
          onChange={(e) => set("lastRecon", e.target.value)}
        >
          <option value="">Select one</option>
          <option value="30days">Within 30 days</option>
          <option value="1to3">1–3 months ago</option>
          <option value="3to12">3–12 months ago</option>
          <option value="never">Never</option>
          <option value="not_sure">Not sure</option>
        </select>
      </div>

      <div>
        <label className="field-label">Estimated monthly transactions</label>
        <select
          className="field-input"
          value={state.txVolume}
          onChange={(e) => set("txVolume", e.target.value)}
        >
          <option value="">Select one</option>
          <option value="u50">Under 50</option>
          <option value="50-100">50–100</option>
          <option value="100-200">100–200</option>
          <option value="200plus">200+</option>
        </select>
      </div>

      <div>
        <label className="field-label">What&apos;s your biggest financial question right now?</label>
        <textarea
          className="field-input"
          value={state.question}
          onChange={(e) => set("question", e.target.value)}
          rows={3}
        />
      </div>

      <button
        type="submit"
        className="btn-pill btn-pill-primary"
        style={{ marginTop: 4, fontSize: 14, padding: "15px 20px", width: "100%" }}
      >
        Request My Books Health Check
      </button>
    </form>
  );
}
