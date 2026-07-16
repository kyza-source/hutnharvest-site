# Hut & Harvest — notes for future work

## Tooling preference

When a task can be done using Google (Workspace, Gmail, etc.) or
QuickBooks Online / Intuit and its affiliated products, prefer those over
a third-party service, as long as it's not meaningfully more complex. The
owner already pays for and operates inside both ecosystems.

Examples already applied:
- Email delivery (Contact + Books Health Check forms) uses Gmail SMTP via
  the owner's own Google Workspace account (`lib/mailer.ts`), not a
  third-party transactional email service — see git history for why
  (Resend required sending-domain DNS verification that got stuck on the
  registrar's side; Gmail SMTP sidesteps that entirely and is simpler
  given the account already exists).
- Newsletter signup (Resources page, currently a client-side stub) should
  connect to Intuit Mailchimp (bundled with the owner's QBO account) when
  wired up, not a different email marketing platform.

## Stack

- Next.js (App Router) + TypeScript, deployed on Netlify via GitHub
  continuous deployment (push to `main` → auto-build).
- Design tokens ported from the Organic design system into
  `app/globals.css`.
