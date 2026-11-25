# Bear Ops website

Astro site for bearops.net. Home page, articles, contact page, booking pop-up, privacy and terms.

## Edit these first
- `src/config.ts`: contact email, booking link, form service URL, registered company name.
- Privacy and terms (`src/pages/privacy.astro`, `terms.astro`) are drafts. Have a lawyer review them and make sure they match the tools you actually use.

## Add an article
Create a file in `src/content/articles/`, for example `my-article.md`:

```
---
title: "Your title"
description: "One or two sentences that appear on cards and in search results."
date: 2026-12-01
topic: go-live        # lead-follow-up, deal-handover, go-live, invoicing, collections, renewals or general
readTime: "5 min read"
featured: false
draft: false          # true keeps it off the live site
---

## First heading

Your text in markdown.
```
The sample article is marked `draft: true`, so it does not appear on the live site. The Articles link and home page teaser stay hidden until at least one published article exists.

## Put it on GitHub
Upload all files in this folder to the repository (GitHub: Add file, Upload files), or use git. Do not upload `node_modules`.

## Cloudflare Pages settings
- Framework preset: Astro
- Build command: `npm run build`
- Build output directory: `dist`
- Node version: 22 (set by `.node-version`)
Then add the custom domain bearops.net in the project's Custom domains tab.

## Contact form
Leave `formEndpoint` empty and the form opens an email draft. For a proper form, create one with Formspree, Web3Forms or similar, and paste its URL into `src/config.ts`. For the booking link, paste your Cal.com (or similar) URL into `bookingUrl`.

## Before launch
- Case studies are not on the page yet. Add them when you have them.
- Add analytics if you want it, and update the privacy page.
- Add a social share image (1200 x 630 PNG) and reference it in `src/layouts/Base.astro`.
- Consider self-hosting the fonts (Fontsource) to avoid the Google Fonts request.
- Check every link, the forms and the layout on a phone and a desktop.

This project was written without running a build, so the first build may show errors. Copy the build log and fix from there.
