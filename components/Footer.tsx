const SITE_LINKS = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services & Pricing" },
  { href: "/health-check", label: "Books Health Check" },
  { href: "/resources", label: "Resources" },
];

export default function Footer() {
  return (
    <footer
      style={{
        background: "var(--color-text)",
        color: "var(--color-bg)",
        padding: "56px 32px 32px",
      }}
    >
      <div
        className="container footer-grid"
        style={{
          display: "grid",
          gridTemplateColumns: "1.4fr 1fr 1fr 1fr",
          gap: 40,
        }}
      >
        <div>
          <div
            style={{
              fontFamily: "var(--font-heading)",
              fontSize: 22,
              marginBottom: 10,
            }}
          >
            Hut &amp; Harvest
          </div>
          <p
            style={{
              fontSize: 14,
              lineHeight: 1.6,
              color: "color-mix(in srgb, var(--color-bg) 70%, transparent)",
              maxWidth: 280,
              margin: 0,
            }}
          >
            Black-owned. Clean Books. Numbers you actually understand.
          </p>
        </div>

        <div>
          <div
            style={{
              fontSize: 11,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              color: "color-mix(in srgb, var(--color-bg) 50%, transparent)",
              marginBottom: 14,
            }}
          >
            Site
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            {SITE_LINKS.map((link) => (
              <a key={link.href} href={link.href} className="footer-link">
                {link.label}
              </a>
            ))}
          </div>
        </div>

        <div>
          <div
            style={{
              fontSize: 11,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              color: "color-mix(in srgb, var(--color-bg) 50%, transparent)",
              marginBottom: 14,
            }}
          >
            Contact
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 10,
              fontSize: 14,
            }}
          >
            <a
              href="mailto:info@hutnharvest.com"
              className="footer-link-muted"
            >
              info@hutnharvest.com
            </a>
            <span style={{ color: "color-mix(in srgb, var(--color-bg) 85%, transparent)" }}>
              Philadelphia, PA
            </span>
          </div>
        </div>

        <div>
          <div
            style={{
              fontSize: 11,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              color: "color-mix(in srgb, var(--color-bg) 50%, transparent)",
              marginBottom: 14,
            }}
          >
            Follow
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            <a href="#" className="footer-link">
              Instagram
            </a>
          </div>
        </div>
      </div>

      <div
        className="container"
        style={{
          marginTop: 40,
          paddingTop: 20,
          borderTop:
            "1px solid color-mix(in srgb, var(--color-bg) 15%, transparent)",
          display: "flex",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: 10,
          fontSize: 12,
          color: "color-mix(in srgb, var(--color-bg) 50%, transparent)",
        }}
      >
        <span>© 2026 Hut &amp; Harvest. All rights reserved.</span>
        <span>Books Health Check calls are free — no obligation.</span>
      </div>
    </footer>
  );
}
