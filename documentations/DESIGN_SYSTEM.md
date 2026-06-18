# EduDome Frontend Design System & Theme

## Overview
EduDome uses a **clean, minimalist, light-mode design** inspired by language-learning apps (Duolingo aesthetic). The design is premium, editorial, and focused. It is **NOT dark mode** — it's a pure white base with a single blue primary accent.

---

## 🎨 Color Palette

| Token | Hex | Usage |
|---|---|---|
| `--primary` | `#4C8CE4` | Brand blue — buttons, accents, links, highlights |
| `--primary-hover` | `#3b7dc9` | Hover state for primary |
| `--primary-soft` | `rgba(76, 140, 228, 0.1)` | Soft blue backgrounds, glow effects |
| `--background` | `#ffffff` | Page background |
| `--foreground` | `#0f172a` | Main text (near black) |
| `--text-muted` | `#64748b` | Secondary/muted text (`text-slate-500`) |
| `--glass-bg` | `rgba(255, 255, 255, 0.7)` | Glass card background |
| `--glass-border` | `rgba(255, 255, 255, 0.2)` | Glass card border |

### Contextual Colors in Use
- **Headings:** `text-[#1e293b]` (slate-800)
- **Subtext / muted:** `text-slate-500` (#64748b)
- **Borders:** `border-slate-100`, `border-slate-200`
- **Surface:** `bg-white` (cards), `bg-slate-50` (page backgrounds in auth)
- **Error:** `bg-red-50`, `text-red-500`, `border-red-100`

---

## 🔤 Typography

- **Font:** `Outfit` (Google Fonts) — loaded via `next/font/google`
- **CSS Variable:** `--font-outfit`
- **Class:** `font-outfit`
- **Applied globally:** `font-family: 'Outfit', sans-serif` on `body`

### Type Scale in Use
| Element | Classes |
|---|---|
| Page H1 hero | `text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-[#1e293b] leading-[1.1]` |
| Auth page H1 | `text-2xl font-bold text-slate-800 font-outfit` |
| Body / description | `text-lg md:text-xl text-slate-500 font-medium` |
| Small/muted | `text-sm text-slate-500` |
| Brand name | `text-2xl font-bold tracking-tight text-[#1e293b] font-outfit` |
| Labels | `text-sm font-medium text-slate-700` |

---

## 🧩 Component Patterns

### Logo Mark
```tsx
<div className="w-10 h-10 primary-gradient rounded-xl flex items-center justify-center text-white font-bold text-2xl shadow-lg transition-transform group-hover:scale-110">
  E
</div>
<span className="text-2xl font-bold tracking-tight text-[#1e293b] font-outfit">EduDome</span>
```

### Primary Button (Duolingo-style with depth shadow)
```tsx
<button className="btn-primary w-full py-4 rounded-2xl bg-[#4C8CE4] text-white font-bold text-lg uppercase tracking-wider">
  Get Started
</button>
```

### Secondary Button (Ghost style)
```tsx
<button className="btn-secondary w-full py-4 rounded-2xl bg-white text-[#4C8CE4] font-bold text-lg uppercase tracking-wider">
  I already have an account
</button>
```

### Glass Card
```tsx
<div className="glass-card p-10 md:p-14 rounded-[40px] border-2 border-[#4C8CE4]/10 animate-float">
  {/* content */}
</div>
```

### Input Field
```tsx
<input
  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#4C8CE4]/50 transition-all text-slate-800"
/>
```

### Auth Card Container
```tsx
<div className="min-h-screen flex items-center justify-center bg-slate-50">
  <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 w-full max-w-md">
    {/* form content */}
  </div>
</div>
```

### Error Alert
```tsx
<div className="bg-red-50 text-red-500 p-3 rounded-xl mb-6 text-sm border border-red-100">
  {errorMessage}
</div>
```

### Decorative Glow Blob
```tsx
<div className="absolute -top-10 -left-10 w-32 h-32 bg-[#4C8CE4]/10 rounded-full blur-3xl group-hover:bg-[#4C8CE4]/20 transition-all duration-500" />
```

---

## ✨ CSS Utility Classes (`globals.css`)

### `.primary-gradient`
```css
background: linear-gradient(135deg, #4C8CE4 0%, #3b7dc9 100%);
```
Used on: logo badge, icon backgrounds.

### `.text-gradient`
```css
background: linear-gradient(135deg, #4C8CE4 0%, #1e293b 100%);
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
```

### `.glass-card`
```css
background: rgba(255, 255, 255, 0.7);
backdrop-filter: blur(12px);
border: 1px solid rgba(255, 255, 255, 0.2);
box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.07);
```

### `.btn-primary`
```css
/* Duolingo-style depth button */
box-shadow: 0 4px 0px #3468ab;
/* On active: */
box-shadow: 0 0px 0px #3468ab;
/* + Tailwind: */
transition-all duration-300 transform hover:-translate-y-1 active:translate-y-0
```

### `.btn-secondary`
```css
box-shadow: 0 4px 0px #e2e8f0;
border: 2px solid #e4e4e7;
color: #52525b;
/* On hover: bg-zinc-50 */
```

---

## 🎬 Animations

### `animate-fade-in`
```css
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(20px); }
  to   { opacity: 1; transform: translateY(0); }
}
animation: fadeIn 0.8s ease-out forwards;
```
Used on: hero sections, page content entrance.

### `animate-float`
```css
@keyframes float {
  0%   { transform: translateY(0px); }
  50%  { transform: translateY(-10px); }
  100% { transform: translateY(0px); }
}
animation: float 6s ease-in-out infinite;
```
Used on: quote glass card — gives a subtle levitation effect.

---

## 📐 Layout Conventions

### The Golden Rule: `max-w-7xl mx-auto px-6`
Every page in EduDome uses this exact container. This creates the consistent breathing room (left/right gap) you see on the home page. **Never use a wider or narrower container.**

### Shared Components
| Component | File | Purpose |
|---|---|---|
| `<Navbar />` | `src/components/Navbar.tsx` | Site-wide header with logo and nav actions |
| `<PageContainer />` | `src/components/PageContainer.tsx` | Wraps page content in `max-w-7xl mx-auto px-6` |

### Usage Pattern for Every Page
```tsx
<div className="min-h-screen flex flex-col bg-slate-50">
  <Navbar />
  <main className="flex-1">
    <PageContainer className="py-12">
      {/* page content */}
    </PageContainer>
  </main>
</div>
```

- **Max width:** `max-w-7xl mx-auto`
- **Horizontal padding:** `px-6` — consistent on all screen sizes via `PageContainer`
- **Vertical spacing:** `py-12` for main content, `py-5` for navbar
- **Responsive split layout:** `flex flex-col md:flex-row` for hero
- **Border radius scale:**
  - Inputs: `rounded-xl`
  - Auth card: `rounded-2xl`
  - Buttons: `rounded-2xl`
  - Glass quote card: `rounded-[40px]`
  - Logo badge: `rounded-xl`
- **Shadows:**
  - Cards: `shadow-sm`, on hover `shadow-md`
  - Logo badge: `shadow`

---

## 🗂️ Page Structure

### Home / Landing (`/`)
- Full-height white page with header, split hero, and footer
- Left: Floating glassmorphism quote card with decorative blobs
- Right: Headline H1 + tagline + two CTA buttons (primary + secondary)
- Footer: Minimal with German flag SVG and tagline

### Auth Pages (`/login`, `/register`)
- `bg-slate-50` full-screen background
- Centered white card (`max-w-md`) with Outfit font headings
- EduDome logo mark at top of the card
- Clean form with labeled inputs and a primary submit button
- Footer link to the opposite auth page

### Dashboard (`/dashboard`)
- White header bar with logo and logout button
- `bg-slate-50` page background
- `max-w-7xl` content area with a 3-column card grid
- Each card: white, `rounded-2xl`, icon + title + description, hover shadow

---

## 🔧 Tailwind CSS Setup
- Uses **Tailwind v4** (`@import "tailwindcss"` syntax)
- `@theme inline` block bridges CSS variables to Tailwind tokens
- No `tailwind.config.js` — uses the new CSS-first config

---

## ✅ Design Rules to Follow
1. **Background is always white or slate-50** — never dark
2. **Primary accent is `#4C8CE4` exclusively** — no secondary brand colors
3. **All text uses Outfit font** — enforce with `font-outfit` class
4. **Rounded corners everywhere** — minimum `rounded-xl`, prefer `rounded-2xl`
5. **Buttons use Duolingo-style depth shadow** — use `.btn-primary` / `.btn-secondary` classes
6. **Cards have `border border-slate-100` and `shadow-sm`** — never heavy shadows
7. **Glow effects use `bg-[#4C8CE4]/10` blurred circles** — for decorative depth
8. **Micro-animations on all interactive elements** — `transition-all`, `hover:-translate-y-1`, `group-hover:scale-110`
