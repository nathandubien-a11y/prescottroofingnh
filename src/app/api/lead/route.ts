import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const { name, phone, town } = body;
    if (!name || !phone || !town) {
      return NextResponse.json(
        { error: "Name, phone, and town are required." },
        { status: 400 }
      );
    }

    // [NATHAN: SUPPLY] — wire to your form handler (Resend, Formspree, webhook, etc.)
    // For now, log and return success so the form works during development.
    const externalEndpoint = process.env.FORM_HANDLER_URL;
    if (externalEndpoint) {
      const res = await fetch(externalEndpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      if (!res.ok) {
        console.error("Form handler error:", res.status, await res.text());
        return NextResponse.json({ error: "Submission failed" }, { status: 502 });
      }
    } else {
      console.log("Lead submission (no FORM_HANDLER_URL set):", body);
    }

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }
}
