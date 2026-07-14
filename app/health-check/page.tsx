import type { Metadata } from "next";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import HealthCheckForm from "@/components/HealthCheckForm";

export const metadata: Metadata = {
  title: "Books Health Check — Hut & Harvest",
};

const mutedText = "color-mix(in srgb, var(--color-text) 70%, transparent)";

const STEPS = [
  { n: "1", body: <><strong>Fill out the form.</strong> Takes about 3 minutes.</> },
  {
    n: "2",
    body: (
      <>
        <strong>We review it.</strong> You&apos;ll hear back within 1
        business day with a preliminary read and a call link.
      </>
    ),
  },
  {
    n: "3",
    body: (
      <>
        <strong>We talk it through.</strong> 20 minutes, no obligation,
        plain-English recommendation.
      </>
    ),
  },
];

export default function HealthCheckPage() {
  return (
    <>
      <NavBar />

      <section
        className="container health-grid"
        style={{
          padding: "72px 32px 48px",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 56,
          alignItems: "start",
        }}
      >
        <div>
          <div
            style={{
              fontSize: 11,
              fontWeight: 700,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color: "var(--color-accent-700)",
              marginBottom: 14,
            }}
          >
            Free · 20 minutes
          </div>
          <h1 style={{ fontWeight: 400, fontSize: 38, margin: "0 0 18px", lineHeight: 1.15 }}>
            Books Health Check
          </h1>
          <p style={{ fontSize: 16, lineHeight: 1.7, color: mutedText, margin: "0 0 28px" }}>
            A quick diagnostic on your entity type, accounting method, and
            how current your books are. Tell us where things stand, and
            you&apos;ll get a plain-English verdict — minor or major cleanup
            — plus a tier recommendation, before we ever get on a call.
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            {STEPS.map((step) => (
              <div key={step.n} style={{ display: "flex", gap: 14 }}>
                <div style={{ fontFamily: "var(--font-heading)", color: "var(--color-accent)", flexShrink: 0 }}>
                  {step.n}
                </div>
                <div style={{ fontSize: 14, lineHeight: 1.6 }}>{step.body}</div>
              </div>
            ))}
          </div>
        </div>

        <div style={{ background: "var(--color-surface)", borderRadius: 28, padding: 32 }}>
          <HealthCheckForm />
        </div>
      </section>

      <Footer />
    </>
  );
}
