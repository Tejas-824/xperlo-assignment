# airoame

React + Vite + Tailwind CSS v4 rebuild of the airoame Figma design.

## Stack
- React 19 + Vite 8 (rolldown bundler, route-level code splitting)
- Tailwind CSS v4 (via `@tailwindcss/vite`, zero-config)
- React Router v7
- react-helmet-async for per-page SEO tags

## Getting started

```bash
npm install
npm run dev       # http://localhost:5173
npm run build      # production build -> dist/
npm run preview    # preview the production build
```

## Structure

```
src/
  components/
    layout/   Navbar, Footer, Layout, Seo
    home/     Hero, BookCarForm, RentalFleet, FeatureCards, PricingPlans, FAQ, Testimonials
    auth/     AuthSplitLayout (Login/Register), AuthCenteredLayout (Reset Password)
    ui/       Button, Input, Select, Icon, LazyImage, SectionHeading, PlaceholderPage
  pages/      Home, Login, Register, ResetPassword, Vehicles, Blog, AboutUs, Plan, Contact, NotFound
  data/       vehicles.js, content.js (features/pricing/faq/testimonials)
  constants/  site.js (nav/footer links), images.js (single shared placeholder image)
```

## Notes
- Every image in the app imports `PLACEHOLDER_IMAGE` from `src/constants/images.js`,
  which points at `public/images/placeholder.jpg`. Swap that one file (or update the
  one constant) to replace every image in the app at once.
- Vehicles, Blog, About Us, Plan, and Contact are wired into routing/nav as
  lightweight placeholder pages, ready for full designs later.
- Images use native lazy loading (`loading="lazy"`) except hero/above-the-fold
  images, which load eagerly via the `priority` prop on `LazyImage`.
