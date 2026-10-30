/**
 * Email subscription API route.
 *
 * Accepts POST with { email, name } and stores the subscriber.
 * Configure one of the integrations below to forward to your ESP.
 *
 * Current: Logs to console (development).
 * Production: Connect to ConvertKit, Mailchimp, or Buttondown via env vars.
 */

import { NextResponse } from "next/server";

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

    // --- INTEGRATION: ConvertKit (recommended) ---
    // Uncomment and set CONVERTKIT_API_KEY + CONVERTKIT_FORM_ID in env vars
    /*
    const res = await fetch("https://api.convertkit.com/v3/forms/" + process.env.CONVERTKIT_FORM_ID + "/subscribe", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ api_key: process.env.CONVERTKIT_API_KEY, email: subscriber.email, first_name: subscriber.name }),
    });
    if (!res.ok) throw new Error("ConvertKit error: " + res.status);
    */

    // --- INTEGRATION: Mailchimp ---
    /*
    const hash = require("crypto").createHash("md5").update(subscriber.email).digest("hex");
    const res = await fetch(`https://${process.env.MC_SERVER}.api.mailchimp.com/3.0/lists/${process.env.MC_AUDIENCE_ID}/members/${hash}`, {
      method: "PUT",
      headers: { Authorization: `apikey ${process.env.MC_API_KEY}`, "Content-Type": "application/json" },
      body: JSON.stringify({ email_address: subscriber.email, status: "subscribed", merge_fields: { FNAME: subscriber.name } }),
    });
    */

    // --- INTEGRATION: Buttondown ---
    /*
    const res = await fetch("https://api.buttondown.com/v1/subscribers", {
      method: "POST",
      headers: { Authorization: `Token ${process.env.BUTTONDOWN_API_KEY}`, "Content-Type": "application/json" },
      body: JSON.stringify({ email_address: subscriber.email, name: subscriber.name }),
    });
    */

    console.log("[SUBSCRIBER]", JSON.stringify(subscriber));

    return NextResponse.json({ success: true, message: "Welcome aboard!" });
  } catch (error) {
    console.error("[SUBSCRIBE ERROR]", error);
    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 }
    );
  }
}
