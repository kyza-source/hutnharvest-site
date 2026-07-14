import type { Metadata } from "next";
import Link from "next/link";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import NewsletterForm from "@/components/NewsletterForm";
import { ARTICLES } from "@/lib/articles";

export const metadata: Metadata = {
  title: "Resources — Hut & Harvest",
};

const mutedText = "color-mix(in srgb, var(--color-text) 70%, transparent)";

export default function ResourcesPage() {
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
          Resources
        </div>
        <h1 style={{ fontWeight: 400, fontSize: 38, margin: "0 0 16px", lineHeight: 1.15 }}>
          Answers to what you&apos;re already Googling at 2am
        </h1>
        <p style={{ fontSize: 16, lineHeight: 1.7, color: mutedText, margin: 0 }}>
          Plain-English guides on the questions we hear most from service
          business owners. New ones every month.
        </p>
      </section>

      <section className="container" style={{ padding: "0 32px 56px" }}>
        <div className="resources-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 20 }}>
          {ARTICLES.map((a) => (
            <Link
              key={a.slug}
              href={`/resources/${a.slug}`}
              className="resource-card"
              style={{
                background: "var(--color-surface)",
                borderRadius: 24,
                padding: 26,
                display: "flex",
                flexDirection: "column",
                gap: 10,
                textDecoration: "none",
                color: "inherit",
              }}
            >
              <span
                style={{
                  fontSize: 11,
                  fontWeight: 700,
                  textTransform: "uppercase",
                  letterSpacing: "0.06em",
                  color: "var(--color-accent-700)",
                  background: "var(--color-accent-100)",
                  padding: "4px 12px",
                  borderRadius: 999,
                  alignSelf: "flex-start",
                }}
              >
                {a.tag}
              </span>
              <div style={{ fontFamily: "var(--font-heading)", fontSize: 19, lineHeight: 1.3 }}>{a.title}</div>
              <p style={{ fontSize: 14, color: mutedText, lineHeight: 1.6, margin: 0, flex: 1 }}>{a.excerpt}</p>
              <span style={{ fontSize: 12, color: "color-mix(in srgb, var(--color-text) 50%, transparent)" }}>
                {a.readTime}
              </span>
            </Link>
          ))}
        </div>
      </section>

      <section style={{ maxWidth: 700, margin: "0 auto", padding: "0 32px 80px" }}>
        <NewsletterForm />
      </section>

      <Footer />
    </>
  );
}
