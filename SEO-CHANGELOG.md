# SEO Changelog — prescottroofingnh.com

## Round 3 — Full SEO Overhaul (Sept 2026)

### Phase 1: Bug Fixes
- Fixed MA state bug: city pages for MA towns now correctly show "County, MA" instead of "County, NH"
- Added blog posts to sitemap with `lastModified` dates
- Added `lastModified` (BUILD_DATE) to all sitemap entries
- Created custom 404 page with `noindex, nofollow` and no canonical
- Added www-to-non-www 301 redirect in `.htaccess`

### Phase 2: Schema & Structured Data
- Overhauled org-level LocalBusinessSchema: added `logo`, `sameAs`, conditional `foundingDate`/`founder`/`aggregateRating`
- Added per-service-page WebPage + Service JSON-LD with `@id` references
- Enhanced blog post BlogPosting schema: `dateModified`, `publisher.logo`, `image`, `mainEntityOfPage`
- All schema types use `@id` for deduplication

### Phase 3: City Pages — Tier System
- Implemented two-tier city page system: "full" (rich content) vs. "stub" (generic template)
- Full tier (8 towns): Manchester, Nashua, Bedford, Derry, Londonderry, Salem, Merrimack, Hudson
- Stub tier (17 towns): noindex + excluded from sitemap (prevents doorway-page risk)
- Created 5 new full LocationData files (~1,000+ words each): Derry, Londonderry, Salem, Merrimack, Hudson
- Created `scripts/seo-check.mjs` validation script (duplicate titles/descriptions, length limits, HTML entity decoding)

### Phase 4: Service Page Depth
- `/services/roof-replacement`: Expanded to ~1,200 words with shingle comparison table (CertainTeed Landmark/Landmark Pro, GAF Timberline HDZ/UHDZ), NH project timeline, cost factors, insurance vs. retail paths, 8 FAQs with FAQPage schema
- `/services/roof-repair`: Expanded to ~800 words with repair process steps, repair vs. replace guidance, 6 FAQs
- `/services/storm-damage`: Expanded to ~800 words with insurance claims process detail, supplement handling, 6 FAQs
- `/services/ice-dam-removal`: Expanded to ~800 words with formation diagram, prevention strategies (air sealing, insulation, ventilation, ice & water shield), 6 FAQs
- `/services/gutters`: Expanded to ~750 words with seamless gutter benefits, warning signs, system integration, 6 FAQs
- Added internal cross-links between service pages

### Phase 5: Images & Performance
- Compressed `roof-inspection.jpg` from 187KB to 148KB (resize to 800px, quality 62)
- Logo stays JPG/PNG (SVG files contain legacy "Archer Roofing" branding — not usable)
- Added ProjectsGallery component to homepage (6 placeholder cards, 3-col desktop / 1-col mobile grid)
- Verified all images use `next/image` (no raw `<img>` tags)
- All images have descriptive alt text
- Only 4 client components (Header, FAQAccordion, LeadForm, StickyMobileCTA) — all require interactivity
- Fonts use `next/font/google` with `display: "swap"` (Inter + Plus Jakarta Sans)

### Phase 6: Trust & Copy Consistency
- TrustBar now uses `siteConfig.license` instead of hardcoded "Fully Licensed & Insured"
- Standardized license wording across all 8 location files to use `siteConfig.license`
- Fixed redundant bold+text pattern in location "Why Choose" sections
- All titles under 60 characters, all descriptions under 160 characters (27 indexable pages verified)

### Phase 7: Verification
- Build passes: 49 static pages generated (TypeScript clean)
- `npm run seo:check` passes: 27 indexable pages, zero duplicate titles/descriptions, all within length limits
- MA state bug confirmed fixed: zero matches for "Middlesex County, NH" or "Essex County, NH"
- Stub pages confirmed noindex: all 17 stub town pages carry `noindex`
- Sitemap verified: only full-tier pages included (8 city pages, 5 service pages, 3 blog posts, static pages)
- No orphaned routes

---

## Route Summary

| Route | Type | Index | Title |
|-------|------|-------|-------|
| `/` | Static | Yes | Roofing Contractor in Southern NH |
| `/about` | Static | Yes | About Us — Southern NH Roofer |
| `/blog` | Static | Yes | Blog |
| `/blog/how-to-spot-storm-damage-on-your-nh-roof` | SSG | Yes | How to Spot Storm Damage on Your NH Roof |
| `/blog/ice-dams-in-new-hampshire-prevention-and-removal` | SSG | Yes | Ice Dams in NH: Prevention & Removal |
| `/blog/does-my-insurance-cover-a-new-roof` | SSG | Yes | Does My Insurance Cover a New Roof? |
| `/contact` | Static | Yes | Contact Us |
| `/financing` | Static | Yes | Financing |
| `/free-inspection` | Static | Yes | Free Roof Inspection |
| `/privacy-policy` | Static | Yes | Privacy Policy |
| `/reviews` | Static | Yes | Reviews |
| `/roofing` | Static | Yes | Service Areas |
| `/roofing/manchester-nh` | SSG/Full | Yes | Roofing Contractor Manchester NH |
| `/roofing/nashua-nh` | SSG/Full | Yes | Roofing Contractor Nashua NH |
| `/roofing/bedford-nh` | SSG/Full | Yes | Roofing Contractor Bedford NH |
| `/roofing/derry-nh` | SSG/Full | Yes | Roofing Contractor Derry NH |
| `/roofing/londonderry-nh` | SSG/Full | Yes | Roofing Contractor Londonderry NH |
| `/roofing/salem-nh` | SSG/Full | Yes | Roofing Contractor Salem NH |
| `/roofing/merrimack-nh` | SSG/Full | Yes | Roofing Contractor Merrimack NH |
| `/roofing/hudson-nh` | SSG/Full | Yes | Roofing Contractor Hudson NH |
| `/roofing/concord-nh` | SSG/Stub | No | Roofing Contractor in Concord, NH |
| `/roofing/hooksett-nh` | SSG/Stub | No | (+ 16 more stub pages) |
| `/services` | Static | Yes | Roofing Services in Southern NH |
| `/services/roof-replacement` | Static | Yes | Roof Replacement in Southern NH |
| `/services/roof-repair` | Static | Yes | Roof Repair in Southern NH |
| `/services/storm-damage` | Static | Yes | Storm & Wind Damage Roof Repair NH |
| `/services/ice-dam-removal` | Static | Yes | Ice Dam Removal & Winter Roof Issues NH |
| `/services/gutters` | Static | Yes | Gutter Installation & Repair Southern NH |
| `/terms-of-service` | Static | Yes | Terms of Service |
| `/404` | Static | No | Page Not Found |

**Totals:** 49 pages generated, 27 indexable, 17 stub (noindex), 26 sitemap URLs
