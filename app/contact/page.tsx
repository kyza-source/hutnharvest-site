import type { Metadata } from "next";
import Script from "next/script";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact — Hut & Harvest",
};

const CALENDLY_URL = "https://calendly.com/hutnharvest-info";

export default function ContactPage() {
  return (
    <>
      <NavBar />

      <section className="container-narrow" style={{ padding: "72px 32px 48px", textAlign: "center" }}>
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
          Contact
        </div>
        <h1 style={{ fontWeight: 400, fontSize: 38, margin: "0 0 16px", lineHeight: 1.15 }}>
          Let&apos;s talk about your books
        </h1>
        <p
          style={{
            fontSize: 16,
            lineHeight: 1.7,
            color: "color-mix(in srgb, var(--color-text) 70%, transparent)",
            margin: 0,
          }}
        >
          Grab a time directly on the calendar, or send a message and
          we&apos;ll get back to you within 1 business day.
        </p>
      </section>

      <section className="container" style={{ padding: "0 32px 80px" }}>
        <div
          className="contact-grid"
          style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24, alignItems: "start" }}
        >
          <div
            style={{
              background: "var(--color-surface)",
              borderRadius: 28,
              padding: 32,
              display: "flex",
              flexDirection: "column",
              gap: 18,
            }}
          >
            <div>
              <div style={{ fontFamily: "var(--font-heading)", fontSize: 20, marginBottom: 6 }}>
                Book a call
              </div>
              <p
                style={{
                  fontSize: 14,
                  color: "color-mix(in srgb, var(--color-text) 70%, transparent)",
                  lineHeight: 1.6,
                  margin: 0,
                }}
              >
                Pick a time that works — 20 minutes, no obligation.
              </p>
            </div>

            <div
              className="calendly-inline-widget"
              data-url={CALENDLY_URL}
              style={{ minWidth: 280, height: 630 }}
            />
            <Script
              src="https://assets.calendly.com/assets/external/widget.js"
              strategy="lazyOnload"
            />

            <a
              href={CALENDLY_URL}
              target="_blank"
              rel="noreferrer"
              className="btn-pill btn-pill-primary"
              style={{ fontSize: 13, padding: "13px 20px" }}
            >
              Open Scheduling Page
            </a>
          </div>

          <div style={{ background: "var(--color-surface)", borderRadius: 28, padding: 32 }}>
            <ContactForm />
          </div>
        </div>

        <div
          style={{
            marginTop: 24,
            background: "var(--color-accent-100)",
            borderRadius: 24,
            padding: "24px 32px",
            display: "flex",
            gap: 40,
            flexWrap: "wrap",
            justifyContent: "center",
            textAlign: "center",
          }}
        >
          <div>
            <div
              style={{
                fontSize: 11,
                textTransform: "uppercase",
                letterSpacing: "0.08em",
                color: "var(--color-accent-700)",
                marginBottom: 4,
              }}
            >
              Email
            </div>
            <a
              href="mailto:info@hutnharvest.com"
              className="mailto-link"
              style={{ fontSize: 15, color: "var(--color-text)" }}
            >
              info@hutnharvest.com
            </a>
          </div>
          <div>
            <div
              style={{
                fontSize: 11,
                textTransform: "uppercase",
                letterSpacing: "0.08em",
                color: "var(--color-accent-700)",
                marginBottom: 4,
              }}
            >
              Based in
            </div>
            <div style={{ fontSize: 15 }}>Philadelphia, PA</div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
