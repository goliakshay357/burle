import { NextResponse } from "next/server";

export const runtime = "nodejs";

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);
  if (!body || typeof body !== "object") {
    return NextResponse.json({ ok: false, error: "Invalid payload" }, { status: 400 });
  }

  const { name, phone, email } = body as Record<string, unknown>;
  if (!name || !phone || !email) {
    return NextResponse.json({ ok: false, error: "Missing required fields" }, { status: 400 });
  }

  // TODO: wire to email/CRM provider (Resend, Postmark, Notion, Sheets, etc.).
  // Logging is a placeholder so the form is end-to-end functional in dev.
  console.log("[inquiry]", body);

  return NextResponse.json({ ok: true });
}
