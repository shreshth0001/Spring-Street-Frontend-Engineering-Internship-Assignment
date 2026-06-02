# Spring Street — Frontend Engineering Assignment

> A complete redesign of Spring Street's public website — a wealth management firm building global investing products for resident Indians.

**Live stack:** Next.js 14 · TypeScript · TailwindCSS · Recharts · Lucide React

---

## Pages

| Route | Description |
|---|---|
| `/` | Landing page with hero, thesis, product preview, partners |
| `/products` | Full product catalogue with comparison table |
| `/products/prisma` | Flagship product factsheet — performance, holdings, methodology, fees |
| `/faq` | Accordion FAQ with sticky category sidebar |
| `/contact` | Contact form with client-side validation |

---

## Design Direction

**Aesthetic:** Refined institutional dark — Bloomberg meets Vanguard's factsheets. Deep navy backgrounds, gold accents, serif display type for authority.

**Type scale:**
- Headlines: `Cormorant Garamond` (editorial luxury)
- Body: `DM Sans` (clean, modern)
- Data: `DM Mono` (financial figures)

**Key interactions:**
- Intersection Observer scroll-reveal on every section (no layout shift)
- Smooth mobile drawer navigation (max-height transition)
- Live market ticker with fade-edge gradient
- Tabbed interface on Prisma (Performance / Holdings / Methodology / Fees)
- Accordion FAQ with category sidebar (sticky on desktop, pills on mobile)
- Contact form with real-time field validation and success state
- Recharts performance chart with benchmark lines (Prisma vs S&P 500 vs Nifty 50)
- Allocation bar charts with CSS transition animations

**Responsiveness:** Every layout is mobile-first with fluid `clamp()` sizing. No fixed pixel breakpoints that cut abruptly — everything scales smoothly.

---

## Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout with SEO metadata + viewport
│   ├── globals.css         # Design tokens, animations, utility classes
│   ├── page.tsx            # Home / Landing
│   ├── loading.tsx         # Global loading state
│   ├── not-found.tsx       # 404 page
│   ├── products/
│   │   ├── page.tsx        # Products overview
│   │   └── prisma/
│   │       └── page.tsx    # Prisma factsheet
│   ├── faq/page.tsx        # FAQ
│   └── contact/page.tsx    # Contact form
├── components/
│   ├── Navbar.tsx          # Sticky nav with scroll blur + mobile drawer
│   ├── Footer.tsx          # Full-width footer with legal copy
│   └── MarketTicker.tsx    # Animated market data strip
├── hooks/
│   └── useReveal.ts        # Reusable IntersectionObserver reveal hook
└── lib/
    └── constants.ts        # Shared constants (nav links, tickers, config)
```

---

## Setup

```bash
# Clone
git clone https://github.com/<your-username>/spring-street-frontend.git
cd spring-street-frontend

# Install
npm install

# Dev server
npm run dev
# → http://localhost:3000

# Production build
npm run build
npm start
```

**Node.js ≥ 18.17** required (Next.js 14 minimum).

---

## Deployment

Works out-of-the-box on Vercel:

```bash
npm install -g vercel
vercel
```

Or deploy to any Node.js host — the build outputs static HTML where possible (all pages are `○ Static`).

---

## Notes

- All financial data (returns, AUM, Sharpe ratios) is **illustrative** — not real performance data
- SEBI registration numbers are **placeholder** values
- Market ticker values are **static mock data** for UI demonstration

---

*Built by [Your Name] · Spring Street Frontend Engineering Assignment*
