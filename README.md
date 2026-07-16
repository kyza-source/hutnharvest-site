# Hut & Harvest — website

Next.js (App Router) implementation of the Organic-themed 5-page site
(`Home`, `Services & Pricing`, `Books Health Check`, `Resources`, `Contact`)
handed off from Claude Design.

## Develop

```
npm install
npm run dev
```

## Email delivery (Contact + Books Health Check)

Both forms send via Gmail SMTP, authenticated as your own Google Workspace
account (`lib/mailer.ts`). Copy `.env.local.example` to `.env.local` and
fill in:

- `GMAIL_USER` — the sending mailbox, e.g. `info@hutnharvest.com`.
- `GMAIL_APP_PASSWORD` — a 16-character App Password from
  `myaccount.google.com/apppasswords` (requires 2-Step Verification).
  Never use the account's regular login password here.
- `CONTACT_TO_EMAIL` — where submissions land, defaults to `info@hutnharvest.com`.

Without these set, submissions are logged server-side and the form shows a
graceful error asking the visitor to email directly.

## Calendly

The Contact page embeds `https://calendly.com/hutnharvest-info` as a live
inline widget. Swap the URL in `app/contact/page.tsx` if that changes.

## Notes

- Design tokens (colors, fonts, spacing, radii, shadows) live in
  `app/globals.css`, ported from the Organic design system bundle.
- The Resources-page newsletter signup is still client-side only (shows a
  success state, doesn't add anyone to a real list) — a good candidate to
  wire up once Mailchimp is set up.
- The Contact page's "feel" (accent color, split/stacked layout, card
  style) is baked to one fixed look rather than left as a live setting.
