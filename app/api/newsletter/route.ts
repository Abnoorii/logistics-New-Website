import { NextResponse } from "next/server";
import { ipFromRequest, rateLimit } from "@/lib/rate-limit";

export const runtime = "nodejs";

function isValidEmail(v: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
}

export async function POST(req: Request) {
  const ip = ipFromRequest(req);
  const rl = rateLimit({
    key: `newsletter:${ip}`,
    limit: 8,
    windowMs: 10 * 60_000,
  });
  if (!rl.allowed) {
    return NextResponse.json(
      { error: "Too many requests. Please try again shortly." },
      { status: 429 }
    );
  }

  let body: { email?: string };
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON body." }, { status: 400 });
  }
  const email = String(body.email ?? "").trim();
  if (!isValidEmail(email)) {
    return NextResponse.json(
      { error: "Please provide a valid email." },
      { status: 400 }
    );
  }

  // TODO: wire to a real provider (Resend audiences, Mailchimp, Ghost,
  // Buttondown). For now we log the subscription so it's visible in
  // Vercel logs and doesn't lie to the user.
  console.log("[newsletter] subscription", email);

  return NextResponse.json({ ok: true });
}
