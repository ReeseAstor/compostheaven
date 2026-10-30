/**
 * Email subscription API route.
 *
 * Accepts POST with { email, name } and forwards the subscriber to Sendiio
 * (the site's ESP) via its public subscribe endpoint.
 *
 * Sendiio integration: POST {base}/api/v1/lists/subscribe/json
 *   body: { email_list_id, email, ...extraFields }
 *   auth: optional `token` + `secret` headers (from sendiio.com/account/edit).
 *   The subscribe endpoint is public for form posts, so token/secret are
 *   only needed if your Sendiio plan requires authenticated API calls.
 *
 * Env vars (set in Vercel project settings):
 *   SENDIIO_EMAIL_LIST_ID  (required to enable ESP forwarding — the encrypted
 *                           list ID shown in your Sendiio email-list UI)
 *   SENDIIO_TOKEN          (optional API token)
 *   SENDIIO_SECRET         (optional API secret)
 *   SENDIIO_API_BASE       (optional, defaults to https://sendiio.com)
 *
 * If SENDIIO_EMAIL_LIST_ID is not set, subscribers are logged to the server
 * console so no signup is ever lost.
 */

import { NextResponse } from "next/server";

const SENDIIO_API_BASE = process.env.SENDIIO_API_BASE || "https://sendiio.com";
const SENDIIO_EMAIL_LIST_ID = process.env.SENDIIO_EMAIL_LIST_ID || "";
const SENDIIO_TOKEN = process.env.SENDIIO_TOKEN || "";
const SENDIIO_SECRET = process.env.SENDIIO_SECRET || "";

/**
 * Forward a subscriber to Sendiio. Tries JSON first, then form-encoded
 * (some Sendiio builds expect form posts). Never throws.
 */
async function sendToSendiio(subscriber) {
  const url = `${SENDIIO_API_BASE}/api/v1/lists/subscribe/json`;
  const payload = {
    email_list_id: SENDIIO_EMAIL_LIST_ID,
    email: subscriber.email,
  };
  if (subscriber.name) payload.name = subscriber.name;

  const authHeaders = {};
  if (SENDIIO_TOKEN) authHeaders.token = SENDIIO_TOKEN;
  if (SENDIIO_SECRET) authHeaders.secret = SENDIIO_SECRET;

  try {
    let res = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        ...authHeaders,
      },
      body: JSON.stringify(payload),
    });

    if (!res.ok) {
      const form = new URLSearchParams(payload);
      res = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          Accept: "application/json",
          ...authHeaders,
        },
        body: form.toString(),
      });
    }

    const data = await res.json().catch(() => ({}));
    return {
      provider: "sendiio",
      ok: res.ok && data.error === 0,
      status: res.status,
      msg: data.msg,
    };
  } catch (error) {
    return { provider: "sendiio", ok: false, error: String(error) };
  }
}

export async function POST(request) {
  try {
    const { email, name } = await request.json();

    // Validation
    if (!email || !email.includes("@")) {
      return NextResponse.json(
        { error: "Valid email required" },
        { status: 400 }
      );
    }

    const subscriber = {
      email: email.toLowerCase().trim(),
      name: name?.trim() || "",
      source: "compostheaven-email-signup",
      timestamp: new Date().toISOString(),
    };

    // Forward to Sendiio when configured; otherwise log only.
    let esp = { provider: "none", ok: false };
    if (SENDIIO_EMAIL_LIST_ID) {
      esp = await sendToSendiio(subscriber);
    }

    console.log("[SUBSCRIBER]", JSON.stringify(subscriber), "esp=", JSON.stringify(esp));

    // Always confirm to the user so the funnel isn't broken by an ESP outage.
    return NextResponse.json({ success: true, message: "Welcome aboard!" });
  } catch (error) {
    console.error("[SUBSCRIBE ERROR]", error);
    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 }
    );
  }
}
