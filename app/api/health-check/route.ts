import { NextResponse } from "next/server";
import { sendMail } from "@/lib/mailer";

const ENTITY_LABELS: Record<string, string> = {
  llc: "LLC",
  sole_prop: "Sole proprietorship",
  partnership: "Partnership",
  corp: "S-Corp / C-Corp",
  not_registered: "Not registered yet",
};
const YES_NO_LABELS: Record<string, string> = { yes: "Yes", no: "No", not_sure: "Not sure" };
const METHOD_LABELS: Record<string, string> = { cash: "Cash", accrual: "Accrual", not_sure: "Not sure" };
const MONEY_MIX_LABELS: Record<string, string> = { separate: "Separate", mixed: "Mixed", not_sure: "Not sure" };
const SOFTWARE_LABELS: Record<string, string> = {
  qbo: "QuickBooks Online",
  spreadsheet: "Spreadsheet",
  none: "Nothing yet",
  other: "Something else",
};
const RECON_LABELS: Record<string, string> = {
  "30days": "Within 30 days",
  "1to3": "1–3 months ago",
  "3to12": "3–12 months ago",
  never: "Never",
  not_sure: "Not sure",
};
const TX_VOLUME_LABELS: Record<string, string> = {
  u50: "Under 50",
  "50-100": "50–100",
  "100-200": "100–200",
  "200plus": "200+",
};
const CONTACT_METHOD_LABELS: Record<string, string> = { call: "Call", text: "Text", email: "Email" };

function str(value: unknown): string {
  return typeof value === "string" ? value.trim() : "";
}

function labelOrRaw(value: string, labels: Record<string, string>): string {
  if (!value) return "Not answered";
  return labels[value] ?? value;
}

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);

  const name = str(body?.name);
  const email = str(body?.email);
  const business = str(body?.business);
  const phone = str(body?.phone);
  const contactMethod = str(body?.contactMethod);
  const entity = str(body?.entity);
  const method = str(body?.method);
  const moneyMix = str(body?.moneyMix);
  const profitable = str(body?.profitable);
  const software = str(body?.software);
  const lastRecon = str(body?.lastRecon);
  const txVolume = str(body?.txVolume);
  const question = str(body?.question);

  if (!name || !email) {
    return NextResponse.json({ error: "Name and email are required." }, { status: 400 });
  }

  const to = process.env.CONTACT_TO_EMAIL || "info@hutnharvest.com";

  try {
    await sendMail({
      to,
      replyTo: email,
      subject: `New Books Health Check request from ${name}`,
      text: [
        `Name: ${name}`,
        `Email: ${email}`,
        business ? `Business: ${business}` : null,
        phone ? `Phone: ${phone}` : null,
        `Preferred contact method: ${labelOrRaw(contactMethod, CONTACT_METHOD_LABELS)}`,
        "",
        `Entity type: ${labelOrRaw(entity, ENTITY_LABELS)}`,
        `Accounting method: ${labelOrRaw(method, METHOD_LABELS)}`,
        `Business & personal money: ${labelOrRaw(moneyMix, MONEY_MIX_LABELS)}`,
        `Profitable last month: ${labelOrRaw(profitable, YES_NO_LABELS)}`,
        `Current software: ${labelOrRaw(software, SOFTWARE_LABELS)}`,
        `Last reconciliation: ${labelOrRaw(lastRecon, RECON_LABELS)}`,
        `Estimated monthly transactions: ${labelOrRaw(txVolume, TX_VOLUME_LABELS)}`,
        "",
        `Biggest financial question: ${question || "Not answered"}`,
      ]
        .filter((line) => line !== null)
        .join("\n"),
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Books Health Check send failed:", err);
    return NextResponse.json({ error: "Failed to send submission." }, { status: 500 });
  }
}
