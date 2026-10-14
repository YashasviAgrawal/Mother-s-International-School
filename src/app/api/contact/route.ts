import { NextResponse } from "next/server";

/**
 * Receives contact-form enquiries.
 *
 * Right now it validates the data and logs it on the server. To deliver
 * enquiries by email, plug in a provider here (e.g. Resend, SendGrid or
 * Nodemailer with the school's SMTP) using environment variables, or save
 * them to a database / Google Sheet.
 */
export async function POST(req: Request) {
  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  const str = (v: unknown) => (typeof v === "string" ? v.trim() : "");
  const name = str(body.name);
  const email = str(body.email);
  const phone = str(body.phone);
  const topic = str(body.topic) || "Other";
  const message = str(body.message);

  // Silently accept bot submissions that fill the honeypot.
  if (str(body.company)) return NextResponse.json({ ok: true });

  if (!name || name.length > 120) return NextResponse.json({ error: "Please enter your name." }, { status: 422 });
  if (!/^\S+@\S+\.\S+$/.test(email) || email.length > 200) return NextResponse.json({ error: "Please enter a valid email." }, { status: 422 });
  if (message.length < 10 || message.length > 5000) return NextResponse.json({ error: "Please enter a message (10–5000 characters)." }, { status: 422 });

  const enquiry = { name, email, phone, topic, message, receivedAt: new Date().toISOString() };
  console.log("[contact] new enquiry", enquiry);

  // TODO: send `enquiry` to the school office inbox.

  return NextResponse.json({ ok: true });
}
