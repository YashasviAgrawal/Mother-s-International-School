# The Mother's International School — website

A redesigned school website built with **Next.js (App Router)**, **React 19** and **Tailwind CSS v4**, in a light-blue-and-white theme.

## Run it

```bash
npm install
npm run dev        # http://localhost:3000
npm run build && npm start   # production
```

Requires Node.js 20 or newer. Deploys as-is to Vercel, Netlify or any Node host.

## Pages

| Route | What's on it |
|---|---|
| `/` | Hero slider, quick links, welcome & mission, animated stats, four pillars, learning-stage tabs, campus highlights, latest news, upcoming events, traditions, admissions banner |
| `/about` | Story & timeline, motto, integral education, leadership, CBSE disclosure table & documents |
| `/academics` | Five learning stages, Class XI–XII subject combination builder, art-integrated learning |
| `/admissions` | 4-step process, **points calculator**, **age eligibility checker**, seats table, documents, Class XI admission, FAQ |
| `/fees` | 2026-27 fee table and **fee calculator** |
| `/campus` | Facility cards, campus numbers, sports, safety & wellbeing |
| `/student-life` | Arts, clubs & forums, houses, publications, traditions |
| `/news` | Filterable, searchable news + events calendar (upcoming/past works out from today's date automatically) |
| `/news/[slug]` | Individual news article (statically generated) |
| `/gallery` | Filterable masonry gallery with keyboard-friendly lightbox |
| `/contact` | Contact cards, validated enquiry form (posts to `/api/contact`), Google map, grievance officer |

Also included: sticky header with dropdowns and mobile drawer, scrolling notices ticker, scroll-reveal animations, back-to-top button, SEO metadata, `sitemap.xml`, `robots.txt`, and School structured data.

## Editing content

Almost everything lives in **`src/data/site.ts`** — school details, notices ticker, hero slides, stages, subjects, admission rules, fees, facilities, events, news posts, gallery and FAQ. Change it there and every page updates.

- **Add a news post:** add an object to `news` with a unique `slug`. Its page is created automatically.
- **Add an event:** add to `events`. It moves from "Upcoming" to "Past" by itself once the date passes.
- **Next admission session:** update `admission.session` and `admission.ageCutoffDate`.

## Before going live

1. **Photos.** The site uses built-in illustrations wherever no photo is set. Put real photos in `public/images/` and add `image: "/images/your-photo.jpg"` to hero slides, facilities, news posts and gallery items in `site.ts`.
2. **Logo.** `src/components/Crest.tsx` is a placeholder emblem. Replace it with the school's official logo.
3. **Documents.** The About page links to PDFs in `public/documents/` (file names are generated from the titles, e.g. `mandatory-public-disclosure-2026-27.pdf`). Add the real files.
4. **Contact form email.** `src/app/api/contact/route.ts` validates and logs enquiries. Connect an email provider (Resend, SendGrid, or the school's SMTP via Nodemailer) where the `TODO` is.
5. **Review the copy.** Content was compiled from public sources (the school's 2026-27 CBSE disclosure, admission notices and calendar). Have the school office confirm details such as names, fees, seats and dates.
