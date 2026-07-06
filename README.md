# Grace Paul — Portfolio

A personal portfolio website for **Grace Paul**, B.Tech Computer Science
Engineering student (Minor: Electronics & Communication) at Christ College
of Engineering, Irinjalakuda.

Built with **Next.js (App Router)**, deployed on **Vercel**, with a live
internship activity log backed by **Vercel KV**.

🔗 **Live site:** _add your Vercel URL here once deployed_

---

## ✨ Features

- **Home page** — hero, about, technical skills, projects (filterable by
  Hackathon / Personal / Academic), experience & internship timeline,
  education, achievements & leadership, certifications, and a moving photo
  gallery from hackathons and events.
- **PM VIKAS internship page** (`/pmvikas`) — program overview, module
  breakdown, a live progress tracker, and an interactive calendar logging
  daily activities from the IoT internship at IIIT-Kottayam.
- **Admin mode** — a login bar on every page. Logging in unlocks inline
  editing of the internship calendar (add / edit / delete daily entries),
  saved directly to the database with success/failure confirmation.
- Light, "circuit trace" inspired design — a nod to the ECE minor and IoT
  work — fully responsive across mobile and desktop.

## 🛠 Tech Stack

- [Next.js 14](https://nextjs.org/) (App Router) + React 18
- Plain CSS — no UI framework dependency
- [`@vercel/kv`](https://vercel.com/docs/storage/vercel-kv) for persistent
  storage of the internship calendar
- Fonts: Fraunces (display), Inter (body), JetBrains Mono (data/labels)

## 🚀 Getting Started Locally

```bash
git clone https://github.com/grazpaulx/grace-paul-portfolio.git
cd grace-paul-portfolio
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

> Without a connected Vercel KV database, calendar edits are kept in memory
> for the current session only — everything else works normally.

## 🔐 Admin Access

The admin login bar sits at the top of every page. The password is set via
an environment variable — see `.env.local.example`. **Do not use the
placeholder password in production.**

## ☁️ Deployment

1. Import this repository into [Vercel](https://vercel.com/new).
2. Add an `ADMIN_PASSWORD` environment variable in the project settings.
3. In the **Storage** tab, create a **KV** database and connect it to the
   project (Vercel wires up the required env vars automatically).
4. Redeploy — done.


## ✏️ Updating Content

All personal content (skills, projects, experience, education, etc.) lives
in `lib/data.js` — edit that file to update anything shown on the site.
Internship day-by-day data lives in `lib/internshipLog.js`, and can also be
edited live via the Admin calendar once deployed.

---

Built with **[Claude](https://claude.ai)** by Anthropic.
