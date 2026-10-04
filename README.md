# United Pharmacy Network — website (demo)

Redesign of [upnrx.com](https://www.upnrx.com) built with Next.js 15 (App Router) + TypeScript.
All pages are statically generated.

```bash
npm install
npm run dev      # http://localhost:3000
npm run build && npm start
```

## Structure

```
src/
  app/                    one folder per route
    page.tsx              /            home
    about/                /about       story, services, advocacy
    team/                 /team
    testimonials/         /testimonials
    referral/             /referral    $1,000 referral program + form
    vendors/              /vendors     searchable logo directory
    ibg-drugs/            /ibg-drugs   wholesale partner + registration
    blog/                 /blog        topic-filtered index
    blog/[slug]/          /blog/:slug  article pages (static params)
    specials/             /specials    members-only (gated placeholder)
    contact/  join/       forms
  content/                ALL copy & data — edit here, not in pages
    site.ts               name, contact, socials, nav, announcement bar
    network.ts            stats, benefits, services, join steps
    people.ts             team + testimonials
    vendors.ts            vendor list (logo paths)
    ibg.ts                IBG Drugs content
    posts.ts              blog index
    forms.ts              form schemas (fields, labels, validation)
  lib/
    posts.ts              data access for posts — swap for a CMS here
    submit.ts             form submit handler — wire to API/CRM here
  components/
    layout/               Header, Footer, Announcement
    ui/                   Icon, Button, Eyebrow, RxLabel, Stamp, Squiggle…
    sections/             PageHero, CtaBand, Quotes, PostCard, VendorDirectory…
    forms/                SchemaForm (renders any schema), Newsletter
  styles/globals.css      design tokens + components (one file, sectioned)
public/images/            scraped from upnrx.com: brand, team, vendors, ibg, blog, site
```

## Common changes

| Task | Where |
| --- | --- |
| Add a team member | append to `content/people.ts`, photo in `public/images/team/` |
| Add a vendor | append to `content/vendors.ts`, logo in `public/images/vendors/` (`featured: true` adds it to the home marquee) |
| Add a blog post | append to `content/posts.ts` (or connect a CMS in `lib/posts.ts`) |
| Add/rename a form field | edit the schema in `content/forms.ts` |
| Make forms actually send | implement `lib/submit.ts` (API route, HubSpot, Formspree…) |
| Add a page | new folder in `src/app/`, compose from `components/sections` |
| Change colours / type | tokens at the top of `styles/globals.css` |

## Design system — "Modern Apothecary"

Warm paper background, Fraunces (soft serif) + Figtree + IBM Plex Mono, colours sampled from the UPN logo
(navy, green, brown). Signature elements: arch-shaped photo frames, prescription-label cards (`RxLabel`),
two-tone capsule stats (from the IBG pill logo), rotating stamp badge, hand-drawn underline.

## Demo limitations

- Forms validate but don't send (see `lib/submit.ts`).
- Blog articles show a newly written summary and link to the original post; full bodies still need migrating.
- Member sign-in and the vendor booklet link are placeholders.
