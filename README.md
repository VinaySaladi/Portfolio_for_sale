# Lior Hale — Photography Portfolio

A modern, animated single-page photography portfolio built with React, Tailwind CSS, and Framer Motion.

## Stack

- **Vite** — build tool / dev server
- **React 18** (JavaScript, no TypeScript)
- **Tailwind CSS** — styling
- **Framer Motion** — animations (reveals, shared-layout lightbox, staggered text)
- **react-icons** — icons

## Getting Started

```bash
npm install
npm run dev
```

Then open the URL printed in the terminal (defaults to `http://localhost:5173`).

Other scripts:

```bash
npm run build    # production build into dist/
npm run preview  # preview the production build locally
npm run lint      # run ESLint
```

## Project Structure

```
src/
├── components/   # Loader, Navbar, Hero, Gallery, GalleryItem, Lightbox, About, Contact, Footer
├── data/          # galleryData.js — swap placeholder images/copy here
├── hooks/         # useActiveSection.js — scroll-spy for the navbar
├── App.jsx
├── main.jsx
└── index.css
```

## Customizing

- **Images & copy:** edit `src/data/galleryData.js` (gallery) and the text directly inside `Hero.jsx`, `About.jsx`, `Contact.jsx`, `Footer.jsx`.
- **Colors & fonts:** edit the `theme.extend` block in `tailwind.config.js` (colors: `ink`, `paper`, `accent`, `muted`; fonts: `display`, `body`). Fonts are loaded via Google Fonts `<link>` tags in `index.html`.
- **Sections:** each section is a standalone component rendered from `src/App.jsx` — add/remove/reorder there.

## Accessibility

Animations respect the OS-level "reduce motion" setting (`prefers-reduced-motion`), both via a global CSS override in `index.css` and explicit checks (`useReducedMotion` from Framer Motion) in the Hero and Loader components.
