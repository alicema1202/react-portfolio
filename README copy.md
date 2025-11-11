# UX Design Portfolio (React + Vite)

This is a lightweight React-powered UX design portfolio home page with a hero section, four selected works, and six additional projects.

## Features
- Hero banner with clear value proposition & CTAs.
- Selected Work section (4 case studies).
- More Projects section (6 items).
- Responsive, mobile-first layout using CSS grid.
- Accessible semantics (landmarks, aria labels, skip link, focus states).
- Dark mode friendly via `prefers-color-scheme`.

## Getting Started

### Install
```bash
npm install
```

### Run Dev Server
```bash
npm run dev
```
Open the printed local URL (typically http://localhost:5173).

### Build for Production
```bash
npm run build
npm run preview
```

## Customize Content
Edit data in `src/data/work.js`.
Replace placeholder initials or add real thumbnail images in `public/` and set their paths in work items.
Update hero text in `src/components/Hero.jsx`.
Add contact section or routing as needed.

## Folder Structure
- `src/components` React components (Hero, WorkSection, WorkGrid, WorkCard)
- `src/data/work.js` Data arrays for projects
- `src/styles.css` Global styles

## Accessibility Considerations
- Descriptive landmarks and headings hierarchy.
- Empty `alt` for decorative thumbnails; provide meaningful alt text if images convey unique info.
- Focus-visible outlines and skip link.

## Next Steps / Ideas
- Add case study pages (React Router).
- Integrate analytics (respect privacy & consent).
- Add filtering / tagging UI.
- Add theme toggle.

## License
Content and design © You. Code MIT (optional—add LICENSE file if desired).
