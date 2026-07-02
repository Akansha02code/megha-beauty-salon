# Megha Beauty Salon & Medispa Website

A premium, luxury, fully responsive single-page website for **Megha Beauty Salon & Medispa** — built with React, Vite, Tailwind CSS, Framer Motion, and shadcn/ui.

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | React 18 |
| Build Tool | Vite |
| Styling | Tailwind CSS v4 |
| Animations | Framer Motion |
| Icons | Lucide React, React Icons |
| UI Components | shadcn/ui (Radix UI primitives) |
| Carousel | Embla Carousel |
| Routing | Wouter |
| Language | TypeScript |

---

## Installation Steps

Make sure you have **Node.js 18+** and **npm** (or **pnpm**) installed.

```bash
# 1. Unzip the downloaded file
unzip meghabeauty-salon.zip
cd meghabeauty-salon

# 2. Install dependencies
npm install
# or if using pnpm:
# pnpm install
```

---

## Commands to Run the Project Locally

```bash
# Start development server (hot reload)
npm run dev

# The site will be available at:
# http://localhost:5173
```

---

## How to Build for Production

```bash
# Create an optimized production build
npm run build

# Preview the production build locally
npm run serve
```

The production files will be output to the `dist/` folder.

---

## How to Deploy on Vercel

### Option A — Vercel CLI

```bash
# Install Vercel CLI
npm install -g vercel

# Deploy from the project root
vercel

# For production deployment
vercel --prod
```

### Option B — Vercel Dashboard

1. Push your code to a GitHub repository.
2. Go to [vercel.com](https://vercel.com) and click **"Add New Project"**.
3. Import your GitHub repository.
4. Set the following settings:
   - **Framework Preset:** Vite
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
5. Click **Deploy**.

---

## Folder Structure

```
meghabeauty-salon/
├── public/
│   ├── images/
│   │   ├── hero.png          # Hero background image
│   │   ├── about.png         # About section image
│   │   ├── gallery-1.png     # Gallery images (1–6)
│   │   ├── gallery-2.png
│   │   ├── gallery-3.png
│   │   ├── gallery-4.png
│   │   ├── gallery-5.png
│   │   └── gallery-6.png
│   ├── favicon.svg
│   └── robots.txt
├── src/
│   ├── components/
│   │   ├── ui/               # shadcn/ui base components
│   │   ├── Loader.tsx        # Luxury page loader
│   │   ├── Navbar.tsx        # Sticky glassmorphism navbar
│   │   ├── Hero.tsx          # Hero section
│   │   ├── About.tsx         # About section
│   │   ├── Services.tsx      # Services grid
│   │   ├── WhyChooseUs.tsx   # Feature cards
│   │   ├── Statistics.tsx    # Animated counters
│   │   ├── Gallery.tsx       # Photo gallery with lightbox
│   │   ├── Testimonials.tsx  # Auto-sliding carousel
│   │   ├── Instagram.tsx     # Instagram section
│   │   ├── CTA.tsx           # Call to action section
│   │   ├── Contact.tsx       # Contact details + map
│   │   ├── Footer.tsx        # Footer
│   │   └── FloatingButtons.tsx # WhatsApp, Call, Back-to-top
│   ├── hooks/
│   │   ├── use-mobile.tsx
│   │   └── use-toast.ts
│   ├── lib/
│   │   └── utils.ts
│   ├── pages/
│   │   ├── Home.tsx          # Main page combining all sections
│   │   └── not-found.tsx     # 404 page
│   ├── App.tsx               # App root + routing
│   ├── main.tsx              # React entry point
│   └── index.css             # Global styles, theme variables, Google Fonts
├── index.html                # HTML entry point
├── package.json
├── tsconfig.json
├── vite.config.ts
├── components.json           # shadcn/ui config
└── README.md
```

---

## Customisation Notes

### Replacing Images
All images are stored in `public/images/`. Simply replace the files with the same filenames:
- `hero.png` — Hero background (recommended: 1920×1080px)
- `about.png` — About section image (recommended: 800×600px)
- `gallery-1.png` through `gallery-6.png` — Gallery photos (recommended: 600×600px)

### Updating Phone Number
Search and replace `9820985559` across all component files to update the phone/WhatsApp number.

### Updating Instagram Link
Search for `instagram.com/meghabeautysalon` and replace with your Instagram handle.

### Updating Address / Business Hours
Edit `src/components/Contact.tsx` — the address, map embed URL, and business hours are all in one place.

### Updating the Google Maps Embed
In `src/components/Contact.tsx`, find the `<iframe>` with a Google Maps `src` URL and replace it with your own embed URL from [Google Maps](https://maps.google.com) → Share → Embed a map.

### Updating Services
Edit `src/components/Services.tsx` — the `services` array at the top of the file lists all service cards.

### Updating Testimonials
Edit `src/components/Testimonials.tsx` — the `testimonials` array at the top of the file.

### Color Palette
All brand colors are defined as CSS custom properties in `src/index.css`:
```css
--color-gold: #C8A96A;        /* Champagne Gold */
--color-ivory: #F8F5F0;       /* Ivory */
--color-rose-gold: #D9A299;   /* Rose Gold */
--color-charcoal: #1F1F1F;    /* Rich Charcoal */
```

---

## Environment Variables

This project is a **static frontend** and requires no environment variables to run locally or deploy.

If you add a backend/booking API in the future, create a `.env` file:
```
VITE_API_URL=https://your-api.com
```

Variables must be prefixed with `VITE_` to be accessible in the frontend code.

---

## Notes

- The project uses **Tailwind CSS v4** (PostCSS-based, no `tailwind.config.js` needed by default).
- Google Fonts (Playfair Display + Poppins) are loaded via `@import` at the top of `index.css`.
- All animations use **Framer Motion** with scroll-triggered `whileInView` variants.
- The animated counters in the Statistics section use the browser's **Intersection Observer API**.
- The testimonials carousel uses **Embla Carousel** for smooth touch/swipe support.

---

*Built with love for Megha Beauty Salon & Medispa, Kalyan West, Maharashtra.*
