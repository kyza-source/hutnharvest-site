"use client";

import { useState } from "react";

type Status = "idle" | "sending" | "sent" | "error";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [business, setBusiness] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<Status>("idle");

  const handleSend = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, business, message }),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  };

  if (status === "sent") {
    return (
      <div style={{ textAlign: "center", padding: "56px 12px" }}>
        <div style={{ fontSize: 34, marginBottom: 12 }}>🌱</div>
        <div style={{ fontFamily: "var(--font-heading)", fontSize: 20, marginBottom: 10 }}>
          Message sent
        </div>
        <p style={{ fontSize: 14, lineHeight: 1.6, color: "color-mix(in srgb, var(--color-text) 70%, transparent)", margin: 0 }}>
          We&apos;ll get back to you within 1 business day.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSend} style={{ display: "flex", flexDirection: "column", gap: 16 }}>
      <div style={{ fontFamily: "var(--font-heading)", fontSize: 20, marginBottom: 2 }}>Send a message</div>

      <div>
        <label className="field-label">Name</label>
        <input className="field-input" type="text" required value={name} onChange={(e) => setName(e.target.value)} />
      </div>
      <div>
        <label className="field-label">Email</label>
        <input className="field-input" type="email" required value={email} onChange={(e) => setEmail(e.target.value)} />
      </div>
      <div>
        <label className="field-label">Business name</label>
        <input className="field-input" type="text" value={business} onChange={(e) => setBusiness(e.target.value)} />
      </div>
      <div>
        <label className="field-label">Message</label>
        <textarea
          className="field-input"
          required
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          rows={4}
        />
      </div>

      {status === "error" && (
        <p style={{ fontSize: 13, color: "var(--color-accent-700)", margin: 0 }}>
          Something went wrong sending your message — please try again, or
          email us directly at info@hutnharvest.com.
        </p>
      )}

      <button
        type="submit"
        disabled={status === "sending"}
        className="btn-pill btn-pill-primary"
        style={{ fontSize: 14, border: "none", padding: "15px 20px", opacity: status === "sending" ? 0.6 : 1 }}
      >
        {status === "sending" ? "Sending…" : "Send Message"}
      </button>
    </form>
  );
}
