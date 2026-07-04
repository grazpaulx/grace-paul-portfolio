import { NextResponse } from "next/server";

// Change the password by setting ADMIN_PASSWORD in Vercel's Environment
// Variables. This fallback value is only used for local development.
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || "gracepaul-pmvikas-2026";

export async function POST(request) {
  try {
    const { password } = await request.json();
    if (password && password === ADMIN_PASSWORD) {
      return NextResponse.json({ ok: true });
    }
    return NextResponse.json(
      { ok: false, message: "Incorrect password." },
      { status: 401 }
    );
  } catch (error) {
    return NextResponse.json(
      { ok: false, message: "Something went wrong." },
      { status: 400 }
    );
  }
}
