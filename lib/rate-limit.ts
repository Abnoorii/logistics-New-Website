/**
 * Lightweight in-memory rate limiter.
 *
 * Good enough for Vercel warm invocations — blocks trivial spam and
 * bursty bots. For strong guarantees across cold starts and multiple
 * regions, swap for @upstash/ratelimit + Upstash Redis (env-driven,
 * see below).
 */

type Bucket = { count: number; resetAt: number };

const store = new Map<string, Bucket>();
const MAX_KEYS = 5000;

export type RateLimitResult = {
  allowed: boolean;
  remaining: number;
  resetAt: number;
};

export function rateLimit({
  key,
  limit,
  windowMs,
}: {
  key: string;
  limit: number;
  windowMs: number;
}): RateLimitResult {
  const now = Date.now();

  if (store.size > MAX_KEYS) {
    for (const [k, b] of store) {
      if (b.resetAt < now) store.delete(k);
      if (store.size <= MAX_KEYS) break;
    }
  }

  const existing = store.get(key);
  if (!existing || existing.resetAt < now) {
    const b: Bucket = { count: 1, resetAt: now + windowMs };
    store.set(key, b);
    return { allowed: true, remaining: limit - 1, resetAt: b.resetAt };
  }

  if (existing.count >= limit) {
    return { allowed: false, remaining: 0, resetAt: existing.resetAt };
  }

  existing.count += 1;
  return {
    allowed: true,
    remaining: limit - existing.count,
    resetAt: existing.resetAt,
  };
}

export function ipFromRequest(req: Request): string {
  const h = req.headers;
  return (
    h.get("x-real-ip") ??
    h.get("x-forwarded-for")?.split(",")[0]?.trim() ??
    "unknown"
  );
}
