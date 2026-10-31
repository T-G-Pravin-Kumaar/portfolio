# T G Pravin Kumaar — Portfolio

A modern, recruiter-focused developer portfolio built with **React (Vite)**, **Tailwind CSS**, and **Framer Motion**.

## ✨ What's inside
- Hero, About, Skills, Projects, Experience, Education, Certifications, Coding Profiles, and Contact sections
- Dark/light theme toggle (persisted in localStorage)
- Scroll-triggered animations, code-editor-style hero visual
- Fully responsive, SEO meta tags, accessible focus states, reduced-motion support
- All content centralized in `src/data/data.js` — edit text without touching components

## 🚀 Run locally

```bash
# 1. Install dependencies
npm install

# 2. Start the dev server
npm run dev
```

Open the printed local URL (usually `http://localhost:5173`).

```bash
# Production build
npm run build

# Preview the production build locally
npm run preview
```

## 📝 Before you go live — checklist

1. **Resume**: replace `public/resume-README.txt` note by adding your actual file at `public/resume.pdf`.
2. **Profile photo** (optional): add an image to `src/assets/`, then set `about.photo` in `src/data/data.js` to its path.
3. **Project screenshots**: add images to `src/assets/` and set `image` on each project in `src/data/data.js`.
4. **Certifications**: fill in the `issuer` and `date` fields (currently marked `TODO`) in `src/data/data.js`.
5. **Contact form**: the form currently simulates a send. Wire it to a real service, e.g. [EmailJS](https://www.emailjs.com/) or [Formspree](https://formspree.io/), inside `src/components/Contact.jsx` → `handleSubmit`.
6. **OG image** (optional, for social link previews): add `public/og-image.png` (1200×630px recommended).

## 🌐 Deploy on Vercel

**Option A — via GitHub (recommended)**
1. Push this project to a new GitHub repository.
2. Go to [vercel.com/new](https://vercel.com/new) and import the repo.
3. Vercel auto-detects Vite — framework preset: **Vite**, build command: `npm run build`, output directory: `dist`.
4. Click **Deploy**.

**Option B — via Vercel CLI**
```bash
npm install -g vercel
vercel login
vercel        # deploy a preview
vercel --prod # deploy to production
```

Every push to your main branch will auto-redeploy if connected via GitHub.

## 🗂 Project structure

```
portfolio/
├── public/
│   ├── favicon.svg
│   └── resume.pdf          ← add your resume here
├── src/
│   ├── assets/              ← images, screenshots
│   ├── components/          ← one component per section
│   ├── data/data.js         ← all editable content lives here
│   ├── hooks/useTheme.js
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── tailwind.config.js
├── vite.config.js
└── package.json
```

## 🎨 Design tokens
Colors, fonts, and spacing are defined in `tailwind.config.js` and `src/index.css` — change the `accent` colors there to re-theme the whole site.
