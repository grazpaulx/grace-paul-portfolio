# Grace Paul — Portfolio

A three-page portfolio built with Next.js (App Router):

1. **Home** (`/`) — hero, about, skills, projects, experience timeline, education,
   achievements, certifications, and a moving photo gallery.
2. **PM VIKAS internship log** (`/pmvikas`) — program details, module breakdown,
   progress tracker, and an interactive calendar of daily activity logs backed
   by Vercel KV.
3. **Admin login bar** — a slim bar at the very top of every page. Logging in
   unlocks editing on the internship calendar.

All content is sourced from Grace's resume and is centralized in `lib/data.js`
and `lib/internshipLog.js` so it's easy to update without touching layout code.

## Running locally

```bash
npm install
npm run dev
```

Open http://localhost:3000. Without a connected Vercel KV database, calendar
edits are kept in memory for the current server session only (see
"Database" below) — everything else works normally.

## Setting the admin password

The default password (for local development only) is:

```
gracepaul-pmvikas-2026
```

**Change it before deploying.** Set an `ADMIN_PASSWORD` environment variable:

- Locally: copy `.env.local.example` to `.env.local` and edit the value.
- On Vercel: Project Settings → Environment Variables → add `ADMIN_PASSWORD`.

## Database (Vercel KV)

The calendar reads and writes through `/api/calendar`, which uses
`@vercel/kv`. To connect real, persistent storage:

1. In your Vercel project, go to **Storage → Create Database → KV**.
2. Once created, Vercel automatically adds `KV_REST_API_URL` and
   `KV_REST_API_TOKEN` to your project's environment variables — no code
   changes needed.
3. Redeploy. The first time the calendar is read, it seeds itself with the
   10 days already logged (from `lib/internshipLog.js`); after that, all
   admin edits are read from and written straight to KV.

Without a connected KV database, the API falls back to an in-memory store
so local development still works, but nothing persists between server
restarts or across serverless function instances — connect KV before
relying on saved edits.

## Adding content later

- **Project repositories:** open `lib/data.js` and set the `repo` field on
  any project (e.g. `repo: "https://github.com/grazpaulx/thermasense"`).
  Until then, cards link to the GitHub profile and are marked "coming soon."
- **Certificates:** drop certificate images/PDFs into `public/certificates/`
  and link them from the `certifications` array in `lib/data.js`.
- **More photos:** add image files to `public/images/` and add an entry to
  the `galleryPhotos` array in `lib/data.js` — they'll appear in the moving
  gallery at the bottom of the home page automatically.
- **Calendar days:** once logged in as admin, click any date on the
  `/pmvikas` calendar to add, edit, or delete that day's entry directly from
  the site.

## Deploying to Vercel

1. Push this project to a GitHub repository.
2. Import the repository in Vercel.
3. Add the `ADMIN_PASSWORD` environment variable (see above).
4. Attach a KV database from the Storage tab (see above).
5. Deploy — Next.js projects need no extra build configuration on Vercel.

## Tech stack

- Next.js 14 (App Router) + React 18
- Plain CSS (`app/globals.css`) — no framework dependency
- `@vercel/kv` for the internship calendar's persistent storage
- Fonts: Fraunces (display), Inter (body), JetBrains Mono (data/labels)
