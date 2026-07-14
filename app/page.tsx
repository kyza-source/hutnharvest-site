import Image from "next/image";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import Link from "next/link";

const STATS = [
  { value: "$650", label: "Growth tier — books + advisory, monthly" },
  { value: "8", label: "Clients supported comfortably at full capacity" },
  { value: "10th", label: "Of every month — books delivered, guaranteed" },
  { value: "20 min", label: "That's all a Books Health Check takes to start" },
];

const TESTIMONIALS = [
  `"Most bookkeepers record your transactions and send you a report you don't understand. We record your transactions and then tell you what they mean — in plain language, every single month."`,
  `"We've built the chart of accounts, run the reconciliations, written the advisory messages. We know what goes wrong inside a service business's books because we've set them up from scratch."`,
  `"We know what it's like to run a service business and not know if you're profitable — to charge by feel and wonder if you're leaving money on the table. That's exactly who we built this for."`,
];

const DELIVERABLES = [
  {
    n: "01",
    title: "Monthly close, accrual basis",
    body: "Every transaction categorized, bank feeds matched, accounts reconciled — delivered by the 10th.",
  },
  {
    n: "02",
    title: "Three financial statements",
    body: "P&L, Balance Sheet, and Cash Flow — clean, current, and accurate in QuickBooks Online.",
  },
  {
    n: "03",
    title: "Plain-English advisory message",
    body: "What happened, why it matters, and what to do about it — written for you, not for an accountant.",
  },
  {
    n: "04",
    title: "AI-assisted anomaly scan",
    body: "Every month's numbers reviewed for unusual variances and cash flow signals worth flagging.",
  },
];

const INDUSTRY_TAGS = [
  "Beauty & Salons",
  "Barbers",
  "Trades",
  "Food",
  "Creative Services",
];

const mutedText = "color-mix(in srgb, var(--color-text) 70%, transparent)";

export default function HomePage() {
  return (
    <>
      <NavBar />

      {/* Hero */}
      <section
        className="container hero-grid"
        style={{
          padding: "80px 32px 60px",
          display: "grid",
          gridTemplateColumns: "1.05fr 0.95fr",
          gap: 56,
          alignItems: "center",
        }}
      >
        <div>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              fontSize: 12,
              fontWeight: 700,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              color: "var(--color-accent-700)",
              background: "var(--color-accent-100)",
              padding: "6px 14px",
              borderRadius: 999,
              marginBottom: 24,
            }}
          >
            Bookkeeping &amp; Advisory
          </div>
          <h1
            style={{
              fontWeight: 400,
              fontSize: 46,
              lineHeight: 1.12,
              letterSpacing: "-0.01em",
              color: "var(--color-text)",
              margin: "0 0 20px",
            }}
          >
            Clean books. Plain-English numbers. Advisory that actually moves
            your business forward.
          </h1>
          <p
            style={{
              fontSize: 17,
              lineHeight: 1.7,
              color: mutedText,
              maxWidth: 480,
              margin: "0 0 32px",
            }}
          >
            Bookkeeping and financial advisory for Black-owned solopreneurs
            and service businesses — built by someone with the accounting
            background to back it up.
          </p>
          <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
            <Link
              href="/health-check"
              className="btn-pill btn-pill-primary"
              style={{ padding: "16px 28px" }}
            >
              Book a Free Books Health Check
            </Link>
            <Link
              href="/services"
              className="btn-pill btn-pill-outline"
              style={{ padding: "14.5px 28px" }}
            >
              See Pricing
            </Link>
          </div>
        </div>

        <div
          style={{
            position: "relative",
            width: "100%",
            aspectRatio: "4 / 3",
            borderRadius: 28,
            overflow: "hidden",
            background: "var(--color-surface)",
          }}
        >
          <Image
            src="/images/hero-bookkeeping.png"
            alt="Bookkeeping illustration — a desk with a computer, calculator, and financial reports"
            fill
            style={{ objectFit: "cover" }}
            priority
          />
        </div>
      </section>

      {/* Stats */}
      <section className="container" style={{ padding: "0 32px 72px" }}>
        <div
          className="stats-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4,1fr)",
            gap: 16,
          }}
        >
          {STATS.map((s) => (
            <div
              key={s.label}
              style={{
                background: "var(--color-surface)",
                borderRadius: 20,
                padding: "22px 20px",
              }}
            >
              <div
                style={{
                  fontFamily: "var(--font-heading)",
                  fontSize: 28,
                  color: "var(--color-accent)",
                }}
              >
                {s.value}
              </div>
              <div
                style={{
                  fontSize: 13,
                  color: "color-mix(in srgb, var(--color-text) 65%, transparent)",
                  marginTop: 4,
                  lineHeight: 1.5,
                }}
              >
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section style={{ background: "var(--color-surface)", padding: "72px 32px" }}>
        <div className="container">
          <h2
            style={{
              fontWeight: 400,
              fontSize: 32,
              margin: "0 0 36px",
              textAlign: "center",
            }}
          >
            Why business owners trust us
          </h2>
          <div
            className="testimonials-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3,1fr)",
              gap: 20,
            }}
          >
            {TESTIMONIALS.map((t) => (
              <div
                key={t}
                style={{
                  background: "var(--color-bg)",
                  borderRadius: 24,
                  padding: 28,
                }}
              >
                <p
                  style={{
                    fontSize: 15,
                    lineHeight: 1.65,
                    color: "var(--color-text)",
                    margin: 0,
                  }}
                >
                  {t}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What's delivered */}
      <section className="container" style={{ padding: "80px 32px" }}>
        <div
          className="delivered-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "0.9fr 1.1fr",
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
                marginBottom: 12,
              }}
            >
              Every month, without fail
            </div>
            <h2 style={{ fontWeight: 400, fontSize: 32, margin: "0 0 16px", lineHeight: 1.2 }}>
              What&apos;s delivered
            </h2>
            <p style={{ fontSize: 15, lineHeight: 1.7, color: mutedText, margin: 0 }}>
              No jargon. No annual-only surprises. Just clean books and a
              clear read on what they mean for your decisions this month.
            </p>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
            {DELIVERABLES.map((d, i) => (
              <div
                key={d.n}
                style={{
                  display: "flex",
                  gap: 16,
                  padding: "18px 0",
                  borderBottom:
                    i < DELIVERABLES.length - 1
                      ? "1px solid color-mix(in srgb, var(--color-text) 12%, transparent)"
                      : "none",
                }}
              >
                <div
                  style={{
                    fontFamily: "var(--font-heading)",
                    fontSize: 20,
                    color: "var(--color-accent)",
                    flexShrink: 0,
                    width: 32,
                  }}
                >
                  {d.n}
                </div>
                <div>
                  <div style={{ fontWeight: 700, marginBottom: 4 }}>{d.title}</div>
                  <div
                    style={{
                      fontSize: 14,
                      color: "color-mix(in srgb, var(--color-text) 65%, transparent)",
                      lineHeight: 1.6,
                    }}
                  >
                    {d.body}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Built for */}
      <section style={{ background: "var(--color-surface)", padding: "72px 32px" }}>
        <div className="container-narrow" style={{ textAlign: "center" }}>
          <h2 style={{ fontWeight: 400, fontSize: 30, margin: "0 0 16px" }}>
            Built for Black-owned service businesses
          </h2>
          <p style={{ fontSize: 16, lineHeight: 1.7, color: mutedText, margin: "0 0 28px" }}>
            Beauty, barbering, trades, food, and creative services —
            $50K–$500K in revenue, no bookkeeper on staff, and no financial
            clarity between April and April. If that&apos;s you, this was
            built for you.
          </p>
          <div style={{ display: "flex", gap: 10, justifyContent: "center", flexWrap: "wrap" }}>
            {INDUSTRY_TAGS.map((tag) => (
              <span
                key={tag}
                style={{
                  background: "var(--color-accent-2-100)",
                  color: "var(--color-accent-2-800)",
                  fontSize: 13,
                  padding: "8px 16px",
                  borderRadius: 999,
                }}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container" style={{ padding: "80px 32px", textAlign: "center" }}>
        <h2 style={{ fontWeight: 400, fontSize: 32, margin: "0 0 16px" }}>
          Ready to see what your books could look like?
        </h2>
        <p style={{ fontSize: 16, color: mutedText, margin: "0 0 28px" }}>
          A free, 20-minute Books Health Check tells you exactly where you
          stand — no obligation.
        </p>
        <Link
          href="/health-check"
          className="btn-pill btn-pill-primary"
          style={{ padding: "16px 32px" }}
        >
          Book My Free Health Check
        </Link>
      </section>

      <Footer />
    </>
  );
}
