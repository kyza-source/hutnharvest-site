import type { Metadata } from "next";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Services & Pricing — Hut & Harvest",
};

const mutedText = "color-mix(in srgb, var(--color-text) 70%, transparent)";

type Tier = {
  name: string;
  price: string;
  cadence: string;
  features: string[];
  featured?: boolean;
};

const TIERS: Tier[] = [
  {
    name: "Foundation",
    price: "$350",
    cadence: "per month · bookkeeping only",
    features: [
      "Monthly close (accrual basis)",
      "Bank reconciliation",
      "P&L, Balance Sheet, Cash Flow in QBO",
      "Up to 100 transactions/month",
      "Email support for questions",
    ],
  },
  {
    name: "Growth",
    price: "$650",
    cadence: "per month · books + advisory",
    featured: true,
    features: [
      "Everything in Foundation",
      "Up to 200 transactions/month",
      "Monthly advisory message — easy to read P&L translation + action items",
      "AI-assisted anomaly scan each month",
      "Quarterly check-in call (30 min)",
      "Priority response within 24 hrs",
    ],
  },
  {
    name: "Advisory",
    price: "$950",
    cadence: "per month · full service",
    features: [
      "Everything in Growth",
      "Up to 350 transactions/month",
      "Monthly strategy call (45 min)",
      "Cash flow forecasting",
      "Lender-ready financial package on request",
      "Owner pay structure guidance",
    ],
  },
];

const FAQS = [
  {
    q: "Do you work in QuickBooks Online, or something else?",
    a: "We build every client a custom QBO chart of accounts from scratch — no generic defaults that obscure what's actually happening in your business.",
  },
  {
    q: "What if my books are already a mess?",
    a: "That's exactly what the Books Health Check is for — a quick diagnostic that scopes any cleanup work up front, so there are no surprises once we start.",
  },
  {
    q: "Do you do my taxes too?",
    a: "We keep your books clean and lender/tax-ready year-round so your CPA's job at tax time is fast and painless — we don't file returns ourselves.",
  },
];

export default function ServicesPage() {
  return (
    <>
      <NavBar />

      <section className="container-narrow" style={{ padding: "72px 32px 40px", textAlign: "center" }}>
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
          Services &amp; Pricing
        </div>
        <h1 style={{ fontWeight: 400, fontSize: 40, margin: "0 0 16px", lineHeight: 1.15 }}>
          Three ways to work with us
        </h1>
        <p style={{ fontSize: 16, lineHeight: 1.7, color: mutedText, margin: 0 }}>
          Every plan includes accrual-basis monthly close and a custom
          QuickBooks Online chart of accounts, built for service businesses —
          not generic defaults. Pick the level of advisory that fits where
          you are.
        </p>
      </section>

      <section className="container" style={{ padding: "24px 32px 24px" }}>
        <div
          className="pricing-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3,1fr)",
            gap: 20,
            alignItems: "stretch",
          }}
        >
          {TIERS.map((tier) => (
            <div
              key={tier.name}
              style={{
                background: tier.featured ? "var(--color-accent-100)" : "var(--color-surface)",
                border: tier.featured ? "2px solid var(--color-accent)" : "none",
                borderRadius: 28,
                padding: 32,
                display: "flex",
                flexDirection: "column",
                position: "relative",
              }}
            >
              {tier.featured && (
                <div
                  style={{
                    position: "absolute",
                    top: -14,
                    left: 32,
                    background: "var(--color-accent)",
                    color: "var(--color-bg)",
                    fontSize: 11,
                    fontWeight: 700,
                    letterSpacing: "0.06em",
                    textTransform: "uppercase",
                    padding: "5px 14px",
                    borderRadius: 999,
                  }}
                >
                  Recommended
                </div>
              )}
              <div
                style={{
                  fontSize: 11,
                  fontWeight: 700,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: tier.featured
                    ? "var(--color-accent-700)"
                    : "color-mix(in srgb, var(--color-text) 55%, transparent)",
                  marginBottom: 10,
                }}
              >
                {tier.name}
              </div>
              <div style={{ fontFamily: "var(--font-heading)", fontSize: 40, color: "var(--color-accent)", lineHeight: 1 }}>
                {tier.price}
              </div>
              <div style={{ fontSize: 13, color: "color-mix(in srgb, var(--color-text) 60%, transparent)", margin: "6px 0 22px" }}>
                {tier.cadence}
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 12, flex: 1 }}>
                {tier.features.map((f) => (
                  <div key={f} style={{ fontSize: 14, lineHeight: 1.5 }}>
                    {f}
                  </div>
                ))}
              </div>
              <Link
                href="/health-check"
                className={
                  tier.featured ? "btn-pill btn-pill-primary" : "btn-pill btn-pill-outline"
                }
                style={{ marginTop: 24, fontSize: 13, padding: "13px 20px" }}
              >
                Get Started
              </Link>
            </div>
          ))}
        </div>
      </section>

      <section className="container" style={{ padding: "24px 32px 72px" }}>
        <div
          style={{
            background: "var(--color-accent-2-100)",
            borderRadius: 24,
            padding: "28px 32px",
            display: "flex",
            alignItems: "flex-start",
            gap: 18,
          }}
        >
          <div style={{ fontSize: 24, lineHeight: 1, flexShrink: 0 }}>🛡️</div>
          <div>
            <div style={{ fontFamily: "var(--font-heading)", fontSize: 17, color: "var(--color-accent-2-800)", marginBottom: 4 }}>
              Growth Tier Guarantee
            </div>
            <p style={{ fontSize: 14, lineHeight: 1.6, color: "var(--color-accent-2-800)", margin: 0 }}>
              If your books aren&apos;t clean, reconciled, and delivered with
              a plain-English advisory message by the 10th of every month —
              you don&apos;t pay for that month. Full stop.
            </p>
          </div>
        </div>
      </section>

      <section style={{ background: "var(--color-surface)", padding: "64px 32px" }}>
        <div style={{ maxWidth: 800, margin: "0 auto" }}>
          <h2 style={{ fontWeight: 400, fontSize: 28, margin: "0 0 28px", textAlign: "center" }}>
            Common questions
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
            {FAQS.map((faq, i) => (
              <div
                key={faq.q}
                style={{
                  padding: "18px 0",
                  borderBottom:
                    i < FAQS.length - 1
                      ? "1px solid color-mix(in srgb, var(--color-text) 15%, transparent)"
                      : "none",
                }}
              >
                <div style={{ fontWeight: 700, marginBottom: 6 }}>{faq.q}</div>
                <div style={{ fontSize: 14, color: mutedText, lineHeight: 1.6 }}>{faq.a}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container" style={{ padding: "72px 32px", textAlign: "center" }}>
        <h2 style={{ fontWeight: 400, fontSize: 30, margin: "0 0 16px" }}>
          Not sure which tier is right?
        </h2>
        <p style={{ fontSize: 16, color: mutedText, margin: "0 0 28px" }}>
          A free Books Health Check tells you exactly where your books stand
          and which tier fits.
        </p>
        <Link href="/health-check" className="btn-pill btn-pill-primary" style={{ padding: "16px 32px" }}>
          Book My Free Health Check
        </Link>
      </section>

      <Footer />
    </>
  );
}
