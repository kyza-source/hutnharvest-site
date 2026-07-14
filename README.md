# Hut & Harvest — website

Next.js (App Router) implementation of the Organic-themed 5-page site
(`Home`, `Services & Pricing`, `Books Health Check`, `Resources`, `Contact`)
handed off from Claude Design.

## Develop

```
npm install
npm run dev
```

## Contact form email delivery

The Contact page form sends via [Resend](https://resend.com). Copy
`.env.local.example` to `.env.local` and fill in:

- `RESEND_API_KEY` — from your Resend dashboard.
- `RESEND_FROM_EMAIL` — must be on a domain you've verified in Resend.
- `CONTACT_TO_EMAIL` — defaults to `info@hutnharvest.com`.

Without these set, submissions are logged server-side and the form shows a
graceful error asking the visitor to email directly.

## Calendly

The Contact page embeds `https://calendly.com/hutnharvest-info` as a live
inline widget. Swap the URL in `app/contact/page.tsx` if that changes.

## Notes

- Design tokens (colors, fonts, spacing, radii, shadows) live in
  `app/globals.css`, ported from the Organic design system bundle.
- The Books Health Check and Resources-newsletter forms are client-side
  only (matching the reviewed prototype) — no backend wired up yet.
- The hero image on the Home page is a placeholder; drop a real photo in
  and swap the block in `app/page.tsx`.
