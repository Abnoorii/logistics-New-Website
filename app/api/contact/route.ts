import { NextResponse } from "next/server";
import { ipFromRequest, rateLimit } from "@/lib/rate-limit";

export const runtime = "nodejs";

type Payload = {
  name: string;
  email: string;
  company?: string;
  origin?: string;
  destination?: string;
  shipBy?: string;
  services?: string[];
  message?: string;
  /** Honeypot — humans leave this empty; bots fill it. */
  website?: string;
  /** Client-set timestamp; submissions faster than 3s are almost always bots. */
  ts?: number;
};

const RATE = { limit: 5, windowMs: 10 * 60_000 };
const MIN_FILL_MS = 3_000;

function isValidEmail(v: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
}

function escapeHtml(s: string) {
  return s.replace(/[&<>"']/g, (c) =>
    ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]!
  );
}

function renderHtml(p: Payload) {
  const row = (label: string, value?: string) =>
    value
      ? `<tr><td style="padding:6px 12px;color:#6b7891">${label}</td><td style="padding:6px 12px;color:#e6ebf3">${escapeHtml(value)}</td></tr>`
      : "";
  return `<!doctype html>
  <html><body style="background:#05070d;font-family:Inter,system-ui,sans-serif;color:#e6ebf3;padding:24px">
    <h2 style="color:#f9ab27;font-family:'Space Grotesk',sans-serif;margin:0 0 16px">New quote request</h2>
    <table style="border-collapse:collapse;font-size:14px">
      ${row("Name", p.name)}
      ${row("Email", p.email)}
      ${row("Company", p.company)}
      ${row("Origin", p.origin)}
      ${row("Destination", p.destination)}
      ${row("Ship-by", p.shipBy)}
      ${row("Services", (p.services ?? []).join(", "))}
    </table>
    ${p.message ? `<p style="margin-top:16px;line-height:1.6;color:#c7d0de">${escapeHtml(p.message)}</p>` : ""}
  </body></html>`;
}

export async function POST(req: Request) {
  const ip = ipFromRequest(req);
  const rl = rateLimit({
    key: `contact:${ip}`,
    limit: RATE.limit,
    windowMs: RATE.windowMs,
  });

  if (!rl.allowed) {
    return NextResponse.json(
      { error: "Too many requests. Please try again shortly." },
      {
        status: 429,
        headers: {
          "Retry-After": String(Math.max(1, Math.round((rl.resetAt - Date.now()) / 1000))),
          "X-RateLimit-Remaining": "0",
        },
      }
    );
  }

  let body: Payload;
  try {
    body = (await req.json()) as Payload;
  } catch {
    return NextResponse.json({ error: "Invalid JSON body." }, { status: 400 });
  }

  // Honeypot: bots fill hidden fields.
  if (body.website && body.website.trim().length > 0) {
    console.log("[contact] honeypot hit from", ip);
    return NextResponse.json({ ok: true, delivered: false });
  }

  // Time-to-fill: humans need at least ~3s. Below that = script.
  if (typeof body.ts === "number") {
    const elapsed = Date.now() - body.ts;
    if (elapsed < MIN_FILL_MS) {
      console.log("[contact] fast-fill rejected from", ip, elapsed, "ms");
      return NextResponse.json({ ok: true, delivered: false });
    }
  }

  if (!body?.name || !body?.email) {
    return NextResponse.json(
      { error: "Name and email are required." },
      { status: 400 }
    );
  }
  if (!isValidEmail(body.email)) {
    return NextResponse.json({ error: "Please provide a valid email." }, { status: 400 });
  }
  if ((body.message ?? "").length > 5000) {
    return NextResponse.json({ error: "Message too long." }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO ?? "sales@logistics.af";
  const from =
    process.env.CONTACT_FROM ?? "Logistics.af Website <noreply@logistics.af>";

  if (!apiKey) {
    console.log("[contact] no RESEND_API_KEY — logging submission only", body);
    return NextResponse.json({ ok: true, delivered: false });
  }

  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        from,
        to: [to],
        reply_to: body.email,
        subject: `Quote request — ${body.name}${body.company ? ` (${body.company})` : ""}`,
        html: renderHtml(body),
      }),
    });
    if (!res.ok) {
      const t = await res.text();
      console.error("[contact] resend error", res.status, t);
      return NextResponse.json(
        { error: "Email provider rejected the request." },
        { status: 502 }
      );
    }
    return NextResponse.json({ ok: true, delivered: true });
  } catch (err) {
    console.error("[contact] fetch failed", err);
    return NextResponse.json(
      { error: "Network error contacting email provider." },
      { status: 502 }
    );
  }
}
