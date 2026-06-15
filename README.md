# Archer Roofing — Marketing Website

A fast, SEO-optimized, lead-generation marketing website for Archer Roofing, serving Southern New Hampshire.

**Tech stack:** Next.js 16 (App Router) + TypeScript + Tailwind CSS v4

## Quick start

```bash
npm install
npm run dev
# Open http://localhost:3000
```

## Project structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── page.tsx            # Home page
│   ├── layout.tsx          # Root layout (Header, Footer, schema)
│   ├── sitemap.ts          # Auto-generated sitemap.xml
│   ├── robots.ts           # robots.txt
│   ├── api/lead/route.ts   # Lead form API endpoint
│   ├── services/           # Services hub + individual service pages
│   ├── insurance-claims/   # Flagship differentiator page
│   ├── roofing/            # Service area hub + [slug] town pages
│   ├── about/
│   ├── reviews/
│   ├── free-inspection/    # Primary conversion page with lead form
│   ├── contact/
│   └── blog/               # Blog hub + [slug] post pages
├── components/             # Reusable components
│   ├── Header.tsx           # Sticky nav with click-to-call
│   ├── Footer.tsx           # NAP, service links, schema
│   ├── StickyMobileCTA.tsx  # Fixed bottom bar (mobile)
│   ├── LeadForm.tsx         # Lead capture form
│   ├── CTASection.tsx       # Reusable CTA block
│   ├── TrustBar.tsx         # Certifications + stats bar
│   ├── ServiceCard.tsx      # Service grid card
│   ├── ServicePageLayout.tsx# Shared layout for service pages
│   ├── TestimonialCard.tsx  # Review card
│   ├── FAQAccordion.tsx     # Accordion + FAQPage schema
│   ├── Breadcrumbs.tsx      # Breadcrumbs + BreadcrumbList schema
│   ├── LocalBusinessSchema.tsx # RoofingContractor JSON-LD
│   └── icons/               # Logo, PhoneIcon SVGs
└── lib/
    ├── siteConfig.ts        # Single source of truth for NAP, stats, config
    └── blogPosts.ts         # Blog post content (swap for MDX later)
```

## Items to supply before launch

Check each item and supply the real value. Search the codebase for `[NATHAN: SUPPLY]` and `[todo]` markers.

### Required

- [ ] **Domain** — set `NEXT_PUBLIC_SITE_URL` in `.env` (currently defaults to `archerroofingnh.com`)
- [ ] **Form handler** — set `FORM_HANDLER_URL` in `.env` to your Formspree/Resend/webhook endpoint
- [ ] **Business address** — update `siteConfig.address` (or confirm service-area-only, no storefront)
- [ ] **License & insurance details** — update `siteConfig.license` and `siteConfig.insurance` with exact numbers
- [ ] **Years in business / roofs completed** — update `siteConfig.stats`
- [ ] **Certifications** — update `siteConfig.certifications` with which ones you actually hold (GAF, Owens Corning, CertainTeed)

### Recommended before launch

- [ ] **Real photos** — replace placeholder divs on Home, About, and Insurance Claims pages with actual job photos
- [ ] **Logo** — replace the SVG placeholder in `components/icons/Logo.tsx` with your final designed logo
- [ ] **OG image** — add a branded `public/og-image.png` (1200x630px)
- [ ] **Google Business Profile** — set `siteConfig.googleBusinessUrl` and update review data
- [ ] **Real testimonials** — replace placeholder reviews in `app/reviews/page.tsx` and `app/page.tsx`
- [ ] **Social links** — set `siteConfig.social.facebook` and `siteConfig.social.instagram`
- [ ] **Google Maps embed** — add embed URL to `siteConfig.googleMapsEmbed` and wire into Contact page

### Post-launch

- [ ] **Google Analytics** — add `NEXT_PUBLIC_GA_ID` to `.env` and add the script to `layout.tsx`
- [ ] **Google Search Console** — verify ownership, submit sitemap
- [ ] **Google Business Profile** — ensure NAP matches exactly (name, address, phone)
- [ ] **Blog content** — add more posts to `lib/blogPosts.ts` (or migrate to MDX for easier authoring)

## Deployment

Recommended: **Vercel** (zero-config for Next.js)

```bash
npm i -g vercel
vercel
```

Set environment variables in the Vercel dashboard:
- `NEXT_PUBLIC_SITE_URL`
- `FORM_HANDLER_URL`

The site uses SSG (static generation) wherever possible. Dynamic routes (service area towns, blog posts) are pre-rendered at build time via `generateStaticParams`.

## Color palette

| Role | Color | Hex | Tailwind token |
|------|-------|-----|----------------|
| Primary (60%) | Navy | `#1B2A4A` | `brand-navy` |
| Accent (30%) | Copper | `#C45A28` | `brand-copper` |
| Neutral light | Off-white | `#F7F4EF` | `brand-offwhite` |
| Neutral dark | Charcoal | `#2E2E2E` | `brand-charcoal` |
| Accent tint | Light copper | `#E8C4A8` | `brand-coppertint` |

Pantone refs: Navy ~ 533 C, Copper ~ 7586 C

## SEO features built in

- Per-page `<title>` and `meta description` via Next.js Metadata API
- `RoofingContractor` / `LocalBusiness` JSON-LD schema (sitewide)
- `Service` schema on each service page
- `BreadcrumbList` schema on inner pages
- `FAQPage` schema on pages with FAQ accordions
- `BlogPosting` schema on blog posts
- Auto-generated `sitemap.xml` and `robots.txt`
- Open Graph + Twitter card meta tags
- Canonical URLs on every page
- 15 pre-built service area town pages for local SEO
- Clean, human-readable URLs (`/services/roof-replacement`, `/roofing/manchester-nh`)

## Adding content

**New service area town:** Add an entry to `serviceAreaTowns` in `src/lib/siteConfig.ts`. The page, sitemap entry, and footer link are generated automatically.

**New blog post:** Add an entry to `blogPosts` in `src/lib/blogPosts.ts`. The page and sitemap entry are generated automatically.

**New service page:** Create a new directory under `src/app/services/` with a `page.tsx` using `ServicePageLayout`. Add it to the sitemap in `src/app/sitemap.ts`.
