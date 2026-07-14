"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const LINKS = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services & Pricing" },
  { href: "/health-check", label: "Books Health Check" },
  { href: "/resources", label: "Resources" },
  { href: "/contact", label: "Contact" },
];

export default function NavBar() {
  const pathname = usePathname();

  return (
    <div
      style={{
        position: "sticky",
        top: 0,
        zIndex: 50,
        background: "color-mix(in srgb, var(--color-bg) 94%, transparent)",
        backdropFilter: "blur(6px)",
        borderBottom:
          "1px solid color-mix(in srgb, var(--color-text) 12%, transparent)",
      }}
    >
      <div
        className="container"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 20,
          padding: "16px 32px",
          flexWrap: "wrap",
        }}
      >
        <Link
          href="/"
          style={{
            fontFamily: "var(--font-heading)",
            fontSize: 21,
            color: "var(--color-text)",
            textDecoration: "none",
          }}
        >
          Hut &amp; Harvest
        </Link>
        <nav
          style={{
            display: "flex",
            alignItems: "center",
            gap: 26,
            flexWrap: "wrap",
          }}
        >
          {LINKS.map((link) => {
            const active =
              link.href === "/"
                ? pathname === "/"
                : pathname.startsWith(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={active ? "nav-link-active" : "nav-link"}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>
        <Link href="/health-check" className="cta-pill">
          Book a Health Check
        </Link>
      </div>
    </div>
  );
}
