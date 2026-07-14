"use client";

import { useState } from "react";

export default function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  if (subscribed) {
    return (
      <div style={{ background: "var(--color-accent-2-100)", borderRadius: 24, padding: "28px 32px", textAlign: "center" }}>
        <div style={{ fontFamily: "var(--font-heading)", fontSize: 18, color: "var(--color-accent-2-800)", marginBottom: 6 }}>
          You&apos;re on the list 🌱
        </div>
        <p style={{ fontSize: 14, color: "var(--color-accent-2-800)", margin: 0 }}>
          New articles land in your inbox monthly.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setSubscribed(true);
      }}
      style={{ background: "var(--color-surface)", borderRadius: 24, padding: "28px 32px", textAlign: "center" }}
    >
      <div style={{ fontFamily: "var(--font-heading)", fontSize: 18, marginBottom: 6 }}>
        Get new articles monthly
      </div>
      <p style={{ fontSize: 14, color: "color-mix(in srgb, var(--color-text) 70%, transparent)", margin: "0 0 18px" }}>
        No spam — just plain-English money guidance for your business.
      </p>
      <div style={{ display: "flex", gap: 10, justifyContent: "center", flexWrap: "wrap" }}>
        <input
          type="email"
          required
          placeholder="you@business.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{
            minHeight: 44,
            padding: "8px 18px",
            fontSize: 14,
            border: "1px solid color-mix(in srgb, var(--color-text) 20%, transparent)",
            borderRadius: 999,
            background: "var(--color-bg)",
            color: "var(--color-text)",
            minWidth: 220,
            fontFamily: "inherit",
          }}
        />
        <button type="submit" className="btn-pill btn-pill-primary" style={{ fontSize: 13, padding: "12px 22px" }}>
          Subscribe
        </button>
      </div>
    </form>
  );
}
