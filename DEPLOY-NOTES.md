# Deploy Notes — Prescott Roofing (prescottroofingnh.com)

## Hosting

Static export deployed to Hostinger shared hosting (Apache). The `out/` directory contents go into `public_html/`.

## www → non-www redirect

The `.htaccess` file includes a `www.prescottroofingnh.com → prescottroofingnh.com` 301 redirect. However, the same redirect should also be configured at the **Hostinger/hPanel level** (Domains → Redirects, or DNS settings) so the edge handles it before Apache. This ensures the redirect works even if `.htaccess` is cached or bypassed.

Steps in hPanel:
1. Go to **Websites → Manage → Domains**
2. Ensure `www.prescottroofingnh.com` points to the same hosting
3. Under **Redirects**, add: `www.prescottroofingnh.com` → `https://prescottroofingnh.com` (301 permanent)

## Static export constraints

This site uses `output: "export"` in `next.config.ts`, which means:
- No server-side features (middleware, API routes, `redirects()`, `rewrites()`)
- All URL routing on Hostinger is handled by `.htaccess`
- Images are unoptimized (no `next/image` optimization at runtime)

## ZIP deployment

Use the `.NET ZipFile` method (not PowerShell `Compress-Archive`) to create deploy ZIPs — PowerShell creates backslash paths that break on Linux. The build script creates `prescott-deploy.zip` with forward slashes.

## After deploy checklist

- [ ] Verify `www.` redirects to bare domain (301)
- [ ] Verify all routes return 200 (not 403)
- [ ] Resubmit sitemap in Google Search Console
- [ ] Test old `/roofing-manchester-nh` URLs redirect to `/roofing/manchester-nh`
