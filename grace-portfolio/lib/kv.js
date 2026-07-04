// Thin wrapper around @vercel/kv.
//
// In production on Vercel, connect a KV (Redis) database to this project
// (Storage tab -> Create Database -> KV) and Vercel injects the required
// KV_REST_API_URL / KV_REST_API_TOKEN env vars automatically — no code
// changes needed.
//
// Locally, if those env vars aren't set, this falls back to an in-memory
// store so `npm run dev` still works. That fallback resets on every
// server restart and is NOT shared across serverless invocations in
// production, so make sure real KV env vars are set before deploying.

import { seedLog } from "./internshipLog";

const CALENDAR_KEY = "pmvikas:calendar";

let memoryStore = null;

function hasVercelKV() {
  return Boolean(process.env.KV_REST_API_URL && process.env.KV_REST_API_TOKEN);
}

async function getKvClient() {
  const { kv } = await import("@vercel/kv");
  return kv;
}

function seedAsMap() {
  const map = {};
  for (const entry of seedLog) {
    map[entry.date] = entry;
  }
  return map;
}

export async function getCalendarData() {
  if (hasVercelKV()) {
    const kv = await getKvClient();
    const data = await kv.get(CALENDAR_KEY);
    if (data) return data;
    const seeded = seedAsMap();
    await kv.set(CALENDAR_KEY, seeded);
    return seeded;
  }

  if (!memoryStore) {
    memoryStore = seedAsMap();
  }
  return memoryStore;
}

export async function saveCalendarEntry(date, entry) {
  const current = await getCalendarData();
  const updated = { ...current, [date]: { ...entry, date } };

  if (hasVercelKV()) {
    const kv = await getKvClient();
    await kv.set(CALENDAR_KEY, updated);
  } else {
    memoryStore = updated;
  }

  return updated;
}

export async function deleteCalendarEntry(date) {
  const current = await getCalendarData();
  const updated = { ...current };
  delete updated[date];

  if (hasVercelKV()) {
    const kv = await getKvClient();
    await kv.set(CALENDAR_KEY, updated);
  } else {
    memoryStore = updated;
  }

  return updated;
}
