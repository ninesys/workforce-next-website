import { NextResponse } from "next/server";
import { SESv2Client, SendEmailCommand } from "@aws-sdk/client-sesv2";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const FORM_NAMES = ["contact", "careers", "seth-waitlist"] as const;
type FormName = (typeof FORM_NAMES)[number];

const HONEYPOT_FIELD = "website";

// Resume upload constraints
const MAX_FILE_BYTES = 5 * 1024 * 1024; // 5 MB
const ALLOWED_RESUME_EXT = /\.(pdf|doc|docx)$/i;
const ALLOWED_RESUME_TYPES = new Set([
  "application/pdf",
  "application/msword",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
]);

const ALLOWED_ORIGIN_HOSTS = new Set([
  "wfnext.com",
  "www.wfnext.com",
  // Legacy domain kept allowed while redirects propagate
  "workforcenext.in",
  "www.workforcenext.in",
]);

const isAllowedOrigin = (origin: string | null) => {
  if (!origin) return false;
  try {
    const url = new URL(origin);
    if (ALLOWED_ORIGIN_HOSTS.has(url.hostname)) return true;
    if (url.hostname.endsWith(".vercel.app")) return true;
    return false;
  } catch {
    return false;
  }
};

const INTERNAL_SUBJECTS: Record<FormName, string> = {
  contact: "New contact enquiry — workforcenext.in",
  careers: "New career application — workforcenext.in",
  "seth-waitlist": "New SethAI waitlist signup — workforcenext.in",
};

const ACK_SUBJECTS: Record<FormName, string> = {
  contact: "We received your enquiry — Workforce Next",
  careers: "We received your application — Workforce Next",
  "seth-waitlist": "You're on the SethAI waitlist — Workforce Next",
};

const escapeHtml = (value: string) =>
  value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");

const renderInternalHtml = (
  formName: FormName,
  fields: Record<string, string>,
) => {
  const rows = Object.entries(fields)
    .filter(([, v]) => v && v.trim().length > 0)
    .map(
      ([k, v]) =>
        `<tr><td style="padding:6px 12px;font-weight:600;vertical-align:top;white-space:nowrap">${escapeHtml(
          k,
        )}</td><td style="padding:6px 12px;white-space:pre-wrap">${escapeHtml(v)}</td></tr>`,
    )
    .join("");

  return `<!doctype html><html><body style="font-family:-apple-system,Segoe UI,Roboto,sans-serif;color:#0f172a">
    <h2 style="margin:0 0 12px">${escapeHtml(INTERNAL_SUBJECTS[formName])}</h2>
    <table style="border-collapse:collapse;border:1px solid #e2e8f0">${rows}</table>
  </body></html>`;
};

const renderInternalText = (
  formName: FormName,
  fields: Record<string, string>,
) => {
  const lines = Object.entries(fields)
    .filter(([, v]) => v && v.trim().length > 0)
    .map(([k, v]) => `${k}: ${v}`);
  return `${INTERNAL_SUBJECTS[formName]}\n\n${lines.join("\n")}\n`;
};

const friendlyName = (value: string | undefined) => {
  if (!value) return "there";
  const trimmed = value.trim();
  return trimmed || "there";
};

const renderAckSummaryHtml = (fields: Record<string, string>) => {
  const entries = Object.entries(fields).filter(
    ([k, v]) => k !== "name" && k !== "email" && v && v.trim().length > 0,
  );
  if (entries.length === 0) return "";
  const rows = entries
    .map(
      ([k, v]) =>
        `<tr><td style="padding:6px 12px;font-weight:600;vertical-align:top;white-space:nowrap;color:#475569">${escapeHtml(
          k,
        )}</td><td style="padding:6px 12px;white-space:pre-wrap;color:#0f172a">${escapeHtml(v)}</td></tr>`,
    )
    .join("");
  return `<p style="margin-top:24px;color:#475569;font-size:14px">For your records, here is what you sent us:</p>
  <table style="border-collapse:collapse;border:1px solid #e2e8f0;font-size:14px;margin-top:6px">${rows}</table>`;
};

const renderAckSummaryText = (fields: Record<string, string>) => {
  const entries = Object.entries(fields).filter(
    ([k, v]) => k !== "name" && k !== "email" && v && v.trim().length > 0,
  );
  if (entries.length === 0) return "";
  const lines = entries.map(([k, v]) => `${k}: ${v}`);
  return `\n\nFor your records, here is what you sent us:\n\n${lines.join("\n")}\n`;
};

const ACK_BODY_TEXT: Record<
  FormName,
  (greeting: string, summary: string) => string
> = {
  contact: (greeting, summary) =>
    `Hi ${greeting},

Thanks for reaching out to Workforce Next. We have received your enquiry and our team will connect with you within the next few hours.

If your request is urgent, you can also reach us directly at hello@workforcenext.in or on WhatsApp via workforcenext.in/contact.${summary}

Talk soon,
The Workforce Next team
https://wfnext.com
`,
  careers: (greeting, summary) =>
    `Hi ${greeting},

Thanks for applying to Workforce Next. We have received your application and resume, and one of our recruiters will review it over the next few days.

If your experience matches what we are currently hiring for, we will reach out with next steps. In the meantime, feel free to explore the blog and what we are building:
https://wfnext.com/blog/${summary}

Best,
The Workforce Next team
`,
  "seth-waitlist": (greeting, summary) =>
    `Hi ${greeting},

Thanks for joining the SethAI waitlist. We will reach out as soon as early access opens so you can start matching engineers for your open roles.

While you wait, you can read how SethAI evaluates candidates here:
https://wfnext.com/products/seth-ai-recruiter/${summary}

Talk soon,
The Workforce Next team
`,
};

const ACK_BODY_HTML: Record<
  FormName,
  (greeting: string, summary: string) => string
> = {
  contact: (greeting, summary) => `<!doctype html><html><body style="font-family:-apple-system,Segoe UI,Roboto,sans-serif;color:#0f172a;max-width:560px;margin:0 auto;padding:24px;line-height:1.55">
  <p>Hi ${escapeHtml(greeting)},</p>
  <p>Thanks for reaching out to <strong>Workforce Next</strong>. We have received your enquiry and our team will connect with you within the next few hours.</p>
  <p>If your request is urgent, you can also reach us directly at <a href="mailto:hello@workforcenext.in">hello@workforcenext.in</a>.</p>
  ${summary}
  <p>Talk soon,<br/>The Workforce Next team<br/><a href="https://wfnext.com">wfnext.com</a></p>
</body></html>`,
  careers: (greeting, summary) => `<!doctype html><html><body style="font-family:-apple-system,Segoe UI,Roboto,sans-serif;color:#0f172a;max-width:560px;margin:0 auto;padding:24px;line-height:1.55">
  <p>Hi ${escapeHtml(greeting)},</p>
  <p>Thanks for applying to <strong>Workforce Next</strong>. We have received your application and resume, and one of our recruiters will review it over the next few days.</p>
  <p>If your experience matches what we are currently hiring for, we will reach out with next steps. In the meantime, feel free to explore what we are building on the <a href="https://wfnext.com/blog/">blog</a>.</p>
  ${summary}
  <p>Best,<br/>The Workforce Next team</p>
</body></html>`,
  "seth-waitlist": (greeting, summary) => `<!doctype html><html><body style="font-family:-apple-system,Segoe UI,Roboto,sans-serif;color:#0f172a;max-width:560px;margin:0 auto;padding:24px;line-height:1.55">
  <p>Hi ${escapeHtml(greeting)},</p>
  <p>Thanks for joining the <strong>SethAI</strong> waitlist. We will reach out as soon as early access opens so you can start matching engineers for your open roles.</p>
  <p>While you wait, read how SethAI evaluates candidates: <a href="https://wfnext.com/products/seth-ai-recruiter/">SethAI Recruiter</a>.</p>
  ${summary}
  <p>Talk soon,<br/>The Workforce Next team</p>
</body></html>`,
};

// Build a raw MIME message with an attachment. SESv2 SendEmail supports
// Raw payload (Buffer) for attachment support — Simple does not.
const buildRawEmailWithAttachment = (params: {
  from: string;
  to: string;
  replyTo: string;
  subject: string;
  text: string;
  html: string;
  attachment: { filename: string; contentType: string; bytes: Buffer };
}) => {
  const { from, to, replyTo, subject, text, html, attachment } = params;
  const boundaryMixed = `mixed_${Math.random().toString(36).slice(2)}`;
  const boundaryAlt = `alt_${Math.random().toString(36).slice(2)}`;
  const sanitizedFilename =
    attachment.filename.replace(/[\r\n"]/g, "_").slice(0, 200) || "resume";
  const encodedAttachment = attachment.bytes
    .toString("base64")
    .replace(/(.{76})/g, "$1\r\n");

  const headers = [
    `From: ${from}`,
    `To: ${to}`,
    `Reply-To: ${replyTo}`,
    `Subject: ${subject}`,
    "MIME-Version: 1.0",
    `Content-Type: multipart/mixed; boundary="${boundaryMixed}"`,
  ].join("\r\n");

  const altPart = [
    `--${boundaryMixed}`,
    `Content-Type: multipart/alternative; boundary="${boundaryAlt}"`,
    "",
    `--${boundaryAlt}`,
    "Content-Type: text/plain; charset=UTF-8",
    "Content-Transfer-Encoding: 7bit",
    "",
    text,
    "",
    `--${boundaryAlt}`,
    "Content-Type: text/html; charset=UTF-8",
    "Content-Transfer-Encoding: 7bit",
    "",
    html,
    "",
    `--${boundaryAlt}--`,
  ].join("\r\n");

  const attachmentPart = [
    `--${boundaryMixed}`,
    `Content-Type: ${attachment.contentType}; name="${sanitizedFilename}"`,
    "Content-Transfer-Encoding: base64",
    `Content-Disposition: attachment; filename="${sanitizedFilename}"`,
    "",
    encodedAttachment,
    "",
    `--${boundaryMixed}--`,
  ].join("\r\n");

  return Buffer.from(`${headers}\r\n\r\n${altPart}\r\n${attachmentPart}`);
};

const readPayload = async (
  req: Request,
): Promise<{
  fields: Record<string, string>;
  resume?: { name: string; type: string; bytes: Buffer };
  parseError?: string;
}> => {
  const contentType = req.headers.get("content-type") || "";

  // Multipart upload path (used by careers form)
  if (contentType.includes("multipart/form-data")) {
    const form = await req.formData();
    const fields: Record<string, string> = {};
    let resume: { name: string; type: string; bytes: Buffer } | undefined;

    const entries = Array.from(form.entries());
    for (const [key, value] of entries) {
      if (value instanceof File) {
        if (key !== "resume") continue;
        if (value.size === 0) continue;
        if (value.size > MAX_FILE_BYTES) {
          return { fields, parseError: "Resume must be 5 MB or smaller." };
        }
        const lowerName = value.name.toLowerCase();
        const extOk = ALLOWED_RESUME_EXT.test(lowerName);
        const typeOk = ALLOWED_RESUME_TYPES.has(value.type);
        if (!extOk && !typeOk) {
          return {
            fields,
            parseError: "Only PDF, DOC, or DOCX files are accepted.",
          };
        }
        const arrayBuffer = await value.arrayBuffer();
        resume = {
          name: value.name || "resume",
          type: value.type || "application/octet-stream",
          bytes: Buffer.from(arrayBuffer),
        };
      } else if (typeof value === "string") {
        fields[key] = value.slice(0, 5000);
      }
    }
    return { fields, resume };
  }

  // JSON path (contact form, seth-waitlist)
  try {
    const payload = await req.json();
    const fields: Record<string, string> = {};
    for (const [k, v] of Object.entries(payload)) {
      if (typeof v === "string") fields[k] = v.slice(0, 5000);
    }
    return { fields };
  } catch {
    return { fields: {}, parseError: "Invalid request body" };
  }
};

export async function POST(req: Request) {
  const origin = req.headers.get("origin");
  if (!isAllowedOrigin(origin)) {
    console.warn("Blocked: bad origin", origin);
    return NextResponse.json({ ok: true });
  }

  const { fields, resume, parseError } = await readPayload(req);
  if (parseError) {
    return NextResponse.json({ error: parseError }, { status: 400 });
  }

  // Honeypot
  const honeypot = fields[HONEYPOT_FIELD];
  if (typeof honeypot === "string" && honeypot.trim().length > 0) {
    console.warn("Blocked: honeypot tripped", honeypot.slice(0, 80));
    return NextResponse.json({ ok: true });
  }
  delete fields[HONEYPOT_FIELD];

  const formName = fields["form-name"];
  if (!formName || !FORM_NAMES.includes(formName as FormName)) {
    return NextResponse.json({ error: "Unknown form" }, { status: 400 });
  }
  delete fields["form-name"];

  const email = fields.email?.trim();
  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ error: "Valid email required" }, { status: 400 });
  }

  // Careers must include a resume
  if (formName === "careers" && !resume) {
    return NextResponse.json(
      { error: "Please attach your resume (PDF, DOC, or DOCX)." },
      { status: 400 },
    );
  }

  const region = process.env.AWS_REGION;
  const fromEmail = process.env.SES_FROM_EMAIL;
  const toEmail = process.env.SES_TO_EMAIL;

  if (!region || !fromEmail || !toEmail) {
    return NextResponse.json(
      { error: "Email service not configured" },
      { status: 500 },
    );
  }

  const client = new SESv2Client({ region });
  const name = formName as FormName;
  const greeting = friendlyName(fields.name);
  const ackSummaryHtml = renderAckSummaryHtml(fields);
  const ackSummaryText = renderAckSummaryText(fields);

  // Internal email — use Raw with attachment if resume present, otherwise Simple.
  const internalSubject = INTERNAL_SUBJECTS[name];
  const internalHtml = renderInternalHtml(name, fields);
  const internalText = renderInternalText(name, fields);

  const internalCommand = resume
    ? new SendEmailCommand({
        FromEmailAddress: fromEmail,
        Destination: { ToAddresses: [toEmail] },
        ReplyToAddresses: [email],
        Content: {
          Raw: {
            Data: buildRawEmailWithAttachment({
              from: fromEmail,
              to: toEmail,
              replyTo: email,
              subject: internalSubject,
              text: internalText,
              html: internalHtml,
              attachment: {
                filename: resume.name,
                contentType: resume.type,
                bytes: resume.bytes,
              },
            }),
          },
        },
      })
    : new SendEmailCommand({
        FromEmailAddress: fromEmail,
        Destination: { ToAddresses: [toEmail] },
        ReplyToAddresses: [email],
        Content: {
          Simple: {
            Subject: { Data: internalSubject, Charset: "UTF-8" },
            Body: {
              Html: { Data: internalHtml, Charset: "UTF-8" },
              Text: { Data: internalText, Charset: "UTF-8" },
            },
          },
        },
      });

  const ackCommand = new SendEmailCommand({
    FromEmailAddress: fromEmail,
    Destination: { ToAddresses: [email] },
    ReplyToAddresses: [toEmail],
    Content: {
      Simple: {
        Subject: { Data: ACK_SUBJECTS[name], Charset: "UTF-8" },
        Body: {
          Html: {
            Data: ACK_BODY_HTML[name](greeting, ackSummaryHtml),
            Charset: "UTF-8",
          },
          Text: {
            Data: ACK_BODY_TEXT[name](greeting, ackSummaryText),
            Charset: "UTF-8",
          },
        },
      },
    },
  });

  const [internalResult, ackResult] = await Promise.allSettled([
    client.send(internalCommand),
    client.send(ackCommand),
  ]);

  if (internalResult.status === "rejected") {
    console.error("SES internal send failed", internalResult.reason);
    return NextResponse.json({ error: "Failed to send" }, { status: 502 });
  }

  if (ackResult.status === "rejected") {
    console.error("SES ack send failed", ackResult.reason);
  }

  return NextResponse.json({ ok: true });
}
