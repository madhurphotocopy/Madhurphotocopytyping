# Madhur Photocopy& Typing — Website

A fully production-ready **Next.js 14** website for Madhur Photocopy & Typing, Indore.

## ✨ Tech Stack & Effects

| Tech | Purpose |
|---|---|
| **Next.js 14** (App Router) | Framework |
| **React 18** | UI Library |
| **TypeScript** | Type safety |
| **Tailwind CSS** | Styling |
| **Framer Motion** | Smooth animations, parallax |
| **GSAP + ScrollTrigger** | Word reveal, horizontal scroll, timeline |
| **Three.js** | WebGL particle background with mouse parallax |
| **Lenis** | Butter-smooth scrolling |

## 🎨 Sections

1. **Hero** — GSAP word-by-word text reveal + Framer Motion parallax + floating cards
2. **Services** — GSAP **horizontal pinned scroll** through all 8 services
3. **Timeline** — GSAP ScrollTrigger animated timeline with line draw
4. **Why Us** — Marquee strip + Framer Motion parallax blobs + hours card
5. **Reviews** — Staggered animated review cards
6. **Location** — Animated info cards + Google Maps embed
7. **CTA** — Canvas animated gradient mesh background
8. **WebGL Background** — Three.js floating particles that react to mouse movement

## 🚀 Getting Started

### 1. Install dependencies
```bash
npm install
```

### 2. Run development server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

### 3. Build for production
```bash
npm run build
npm start
```

## 🌐 Deploy (Free)

### Vercel (Recommended — easiest)
1. Push this folder to a GitHub repo
2. Go to [vercel.com](https://vercel.com) → New Project → Import repo
3. Click Deploy — done! You get a free `.vercel.app` URL

### Netlify
1. Run `npm run build`
2. Upload the `.next` folder to Netlify
3. Set build command: `npm run build`, output: `.next`

## 📝 Customization

- **Phone number** → Add to `components/sections/Location.tsx`
- **Business name/address** → Update in `components/sections/Hero.tsx`
- **Colors** → Change `--accent` in `app/globals.css` and `tailwind.config.js`
- **Google Maps** → Replace the iframe `src` in `Location.tsx` with your exact embed URL

## 📦 Project Structure

```
madhur-website/
├── app/
│   ├── layout.tsx          # Root layout + fonts
│   ├── page.tsx            # Main page
│   └── globals.css         # Global styles + Tailwind
├── components/
│   ├── Navbar.tsx          # Sticky nav
│   ├── Footer.tsx          # Footer
│   ├── SmoothScroll.tsx    # Lenis wrapper
│   ├── ParticleBackground.tsx  # Three.js WebGL
│   └── sections/
│       ├── Hero.tsx
│       ├── ServicesScroll.tsx  # Horizontal GSAP scroll
│       ├── Timeline.tsx
│       ├── WhyUs.tsx
│       ├── Reviews.tsx
│       ├── Location.tsx
│       └── CTA.tsx
├── package.json
├── tailwind.config.js
├── next.config.js
└── tsconfig.json
```
