import nodemailer from "nodemailer";

let transporter: nodemailer.Transporter | null = null;

function getTransporter(): nodemailer.Transporter {
  if (transporter) return transporter;

  const user = process.env.GMAIL_USER;
  const pass = process.env.GMAIL_APP_PASSWORD;
  if (!user || !pass) {
    throw new Error("GMAIL_USER / GMAIL_APP_PASSWORD is not configured.");
  }

  transporter = nodemailer.createTransport({
    service: "gmail",
    auth: { user, pass },
  });
  return transporter;
}

export async function sendMail(options: {
  to: string;
  subject: string;
  text: string;
  replyTo?: string;
}): Promise<void> {
  const user = process.env.GMAIL_USER;
  if (!user) {
    throw new Error("GMAIL_USER is not configured.");
  }
  await getTransporter().sendMail({
    from: `Hut & Harvest <${user}>`,
    to: options.to,
    replyTo: options.replyTo,
    subject: options.subject,
    text: options.text,
  });
}
