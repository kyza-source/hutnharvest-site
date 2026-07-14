import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { ARTICLES, getArticle } from "@/lib/articles";

const mutedText = "color-mix(in srgb, var(--color-text) 70%, transparent)";

export function generateStaticParams() {
  return ARTICLES.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) return {};
  return {
    title: `${article.title} — Hut & Harvest`,
    description: article.excerpt,
  };
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) notFound();

  return (
    <>
      <NavBar />

      <article className="container-narrow" style={{ padding: "56px 32px 80px" }}>
        <Link
          href="/resources"
          style={{
            display: "inline-block",
            fontSize: 13,
            color: mutedText,
            textDecoration: "none",
            marginBottom: 24,
          }}
        >
          ← Back to Resources
        </Link>

        <span
          style={{
            display: "inline-block",
            fontSize: 11,
            fontWeight: 700,
            textTransform: "uppercase",
            letterSpacing: "0.06em",
            color: "var(--color-accent-700)",
            background: "var(--color-accent-100)",
            padding: "4px 12px",
            borderRadius: 999,
            marginBottom: 16,
          }}
        >
          {article.tag}
        </span>

        <h1 style={{ fontWeight: 400, fontSize: 34, margin: "0 0 12px", lineHeight: 1.2 }}>
          {article.title}
        </h1>
        <div style={{ fontSize: 13, color: "color-mix(in srgb, var(--color-text) 50%, transparent)", marginBottom: 36 }}>
          {article.readTime}
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          {article.body.map((paragraph, i) => (
            <p key={i} style={{ fontSize: 16, lineHeight: 1.75, color: "var(--color-text)", margin: 0 }}>
              {paragraph}
            </p>
          ))}
        </div>

        <div
          style={{
            marginTop: 48,
            background: "var(--color-accent-100)",
            borderRadius: 24,
            padding: "28px 32px",
            textAlign: "center",
          }}
        >
          <div style={{ fontFamily: "var(--font-heading)", fontSize: 19, marginBottom: 8 }}>
            Not sure where your books actually stand?
          </div>
          <p style={{ fontSize: 14, color: mutedText, margin: "0 0 20px" }}>
            A free, 20-minute Books Health Check gives you a plain-English read — no obligation.
          </p>
          <Link href="/health-check" className="btn-pill btn-pill-primary" style={{ fontSize: 13, padding: "13px 22px" }}>
            Book My Free Health Check
          </Link>
        </div>
      </article>

      <Footer />
    </>
  );
}
