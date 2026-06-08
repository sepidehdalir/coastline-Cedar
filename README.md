# Coastline Cedar — Website

A production-ready Next.js 14 website for a Greater Vancouver cedar planter business. Built to outperform local competitors on SEO, trust, product clarity, and conversion.

> **Brand name placeholder.** Everything in this codebase uses "Coastline Cedar" as a stand-in. Swap it out in one file: `lib/site.config.ts`.

---

## Stack

- **Next.js 14** (App Router) + **TypeScript**
- **Tailwind CSS** with a custom cedar/forest/cream palette
- **Google Fonts**: Fraunces (display) + DM Sans (body)
- **JSON-LD** schema: LocalBusiness, Product, FAQPage, BreadcrumbList
- Auto-generated `sitemap.xml` and `robots.txt`
- Fully responsive, mobile-first

---

## 1. Install & run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000

---

## 2. What to edit before launch

### Your business info — `lib/site.config.ts`
Single source of truth. Change the name, short name, tagline, phone, email, address, social handles, free-delivery threshold, and the URL.

```ts
export const site = {
  name: 'Coastline Cedar',          // <-- your business name
  shortName: 'Coastline Cedar',
  phone: '(604) 555-0123',              // <-- your phone
  email: 'hello@coastlinecedar.com',     // <-- your email
  url: 'https://coastlinecedar.com',     // <-- your live domain
  address: { ... },                     // <-- your address
  freeDeliveryOver: 200,                // <-- free delivery threshold
};
```

The header, footer, contact page, JSON-LD schema, and every metadata title pull from this file.

### Products & prices — `lib/products.ts`
Each product is a plain object. Edit:
- `name`, `slug`, `category`
- `priceFrom` (number) and `priceLabel` (e.g. "Starting from $149")
- `dimensions.length / width / height` (inches)
- `shortDescription`, `description` (full paragraph)
- `features`, `bestFor` arrays
- `image` URL (currently Unsplash placeholders — replace with your own)
- `faqs` array (question/answer)

To add a product: copy any existing object, change the `slug` (must be unique), and add it to the array.

### Service-area pages — `lib/service-areas.ts`
8 local landing pages. Each entry has unique `intro`, `localBlurb`, `useCases`, `neighborhoods`, `deliveryNote`, and `faqs` — written separately so Google sees them as unique content, not boilerplate. Edit the copy as you like.

### Global FAQs — `lib/faqs.ts`
13 entries that feed the FAQ page and FAQ schema.

### Gallery — `components/GalleryGrid.tsx`
Image array near the top of the file. Replace the Unsplash URLs with your own photos and update the `alt` text (alt text matters for SEO — keep it descriptive).

---

## 3. Replacing placeholder images

Every image in this build is a free Unsplash photo. Swap them out:

1. **Product images** — `lib/products.ts`, each product's `image` field.
2. **Hero image** — `components/Hero.tsx`, search for the `<img` tag.
3. **Gallery** — `components/GalleryGrid.tsx`, the `items` array.
4. **About page** — `app/about/page.tsx`, the inline `<img>` tags.

If you self-host images, drop them in `/public/images/` and reference them like `/images/your-photo.jpg`. The Next.js config in `next.config.mjs` already allows external image domains if you'd rather use a CDN.

---

## 4. Wiring up the forms

`components/OrderForm.tsx` and `components/CustomQuoteForm.tsx` have a stub `onSubmit` handler. They currently just show a thank-you message — they don't send anywhere yet.

### Option A: Formspree (easiest, no backend)
1. Sign up at formspree.io, create a form, copy your endpoint (looks like `https://formspree.io/f/xyzabc`).
2. In each form file, find the commented-out fetch block and uncomment it:
   ```ts
   await fetch('https://formspree.io/f/YOUR_FORM_ID', {
     method: 'POST',
     headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
     body: JSON.stringify(data),
   });
   ```
3. Paste your endpoint.

### Option B: Resend (custom email via Next.js API route)
1. `npm install resend`
2. Add `RESEND_API_KEY` to `.env.local`
3. Create `app/api/order/route.ts` and `app/api/quote/route.ts` that call Resend's `emails.send`.
4. In the form, post to `/api/order` instead of Formspree.

Either way, the form data structure is already shaped and ready.

---

## 5. Deploying to Vercel

1. Push to GitHub: `git init && git add . && git commit -m "Initial commit" && git remote add origin <your-repo> && git push -u origin main`
2. Go to vercel.com → Import Project → pick the repo.
3. Framework preset auto-detects as **Next.js**. Click Deploy.
4. Add your custom domain in **Project Settings → Domains**.
5. After connecting your domain, update `site.url` in `lib/site.config.ts`, commit, and push — Vercel redeploys automatically.

---

## 6. SEO checklist after going live

- [ ] Update `site.url` to your real domain
- [ ] Replace every Unsplash placeholder with your own photos
- [ ] Submit `https://yourdomain.ca/sitemap.xml` to Google Search Console
- [ ] Verify the site in Google Search Console
- [ ] Create a Google Business Profile (essential for local SEO)
- [ ] Get reviews on your GBP — these matter more than anything else for local rank
- [ ] Add real testimonials to the home page (replace the placeholders in `app/page.tsx`)
- [ ] Confirm NAP (Name/Address/Phone) matches everywhere: GBP, footer, JSON-LD, social
- [ ] Check Core Web Vitals in PageSpeed Insights after launch

---

## File map

```
app/
  layout.tsx              global layout, fonts, LocalBusiness JSON-LD
  page.tsx                home page
  sitemap.ts              auto-generates /sitemap.xml
  robots.ts               auto-generates /robots.txt
  shop/
    page.tsx              product grid + category filters
    [slug]/page.tsx       individual product (dynamic)
  custom-planters/page.tsx
  gallery/page.tsx
  service-areas/
    page.tsx              hub
    [city]/page.tsx       8 city-specific landing pages
  about/page.tsx
  faq/page.tsx
  contact/page.tsx        order form + contact info

components/                reusable UI
lib/
  site.config.ts          <-- edit business info here
  products.ts             <-- edit products & prices here
  service-areas.ts        <-- edit city pages here
  faqs.ts                 <-- edit FAQ here
```

---

## License

Your business, your code. Do anything you like with it.

## Contact form email (Resend)

The contact form posts to `/api/contact`, which sends email via [Resend](https://resend.com).

To make it work on Vercel:
1. Go to **Vercel Project Settings → Environment Variables**
2. Add `RESEND_API_KEY` (from your Resend dashboard)
3. Make sure it's enabled for **Production** and **Preview**
4. Redeploy

The sender is `Coastline Cedar <hello@coastlinecedar.com>`. Before production sending works, **coastlinecedar.com must be verified in Resend** (Resend → Domains → Add Domain, then add the DNS records). Until then, Resend rejects sends from that address.

If `RESEND_API_KEY` is missing or a send fails, the form shows a clean fallback message asking the customer to call/text, and the technical error is logged server-side only.
