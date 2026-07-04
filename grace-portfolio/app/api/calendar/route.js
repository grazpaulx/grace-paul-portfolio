import { NextResponse } from "next/server";
import { getCalendarData, saveCalendarEntry, deleteCalendarEntry } from "@/lib/kv";

// Admin write requests must include this header, matched against the
// server-side password. This is a deliberately simple, single-password
// scheme — good enough for a personal portfolio, not a general auth system.
// Set ADMIN_PASSWORD in your Vercel project's Environment Variables.
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || "gracepaul-pmvikas-2026";

function isAuthorized(request) {
  const header = request.headers.get("x-admin-password");
  return header === ADMIN_PASSWORD;
}

export async function GET() {
  try {
    const data = await getCalendarData();
    return NextResponse.json({ ok: true, data });
  } catch (error) {
    return NextResponse.json(
      { ok: false, message: "Could not load calendar data." },
      { status: 500 }
    );
  }
}

export async function POST(request) {
  if (!isAuthorized(request)) {
    return NextResponse.json(
      { ok: false, message: "Not authorized." },
      { status: 401 }
    );
  }

  try {
    const body = await request.json();
    const { date, day, title, description, module: moduleName } = body;

    if (!date || !title) {
      return NextResponse.json(
        { ok: false, message: "Date and title are required." },
        { status: 400 }
      );
    }

    const data = await saveCalendarEntry(date, {
      day: day || null,
      title,
      description: description || "",
      module: moduleName || ""
    });

    return NextResponse.json({ ok: true, data });
  } catch (error) {
    return NextResponse.json(
      { ok: false, message: "Could not save the activity log." },
      { status: 500 }
    );
  }
}

export async function DELETE(request) {
  if (!isAuthorized(request)) {
    return NextResponse.json(
      { ok: false, message: "Not authorized." },
      { status: 401 }
    );
  }

  try {
    const { searchParams } = new URL(request.url);
    const date = searchParams.get("date");
    if (!date) {
      return NextResponse.json(
        { ok: false, message: "Date is required." },
        { status: 400 }
      );
    }
    const data = await deleteCalendarEntry(date);
    return NextResponse.json({ ok: true, data });
  } catch (error) {
    return NextResponse.json(
      { ok: false, message: "Could not delete the activity log." },
      { status: 500 }
    );
  }
}
