# bekdiyor. — Mobile Engineer portfolio

Personal portfolio of **Bekdiyor**, a mobile engineer (Android first, now iOS).

> Status: **interactive prototype** with sample data. The design is being finalised section by section; the production build (Next.js + TypeScript) comes next.

## Run locally

No build step. Open `index.html` in a browser, or serve the folder:

```bash
npx serve .
# or
python3 -m http.server 8080
```

An internet connection is needed for Google Fonts and the Lenis smooth-scroll library (loaded from a CDN).

## Structure

```
index.html            the whole site: HTML, CSS and JavaScript
assets/               portrait cut-out and avatar (WebP)
PLAN.md               master plan: requirements, design system, decisions log
```

All text and data live in the `CONTENT` object near the top of the main script in `index.html` (profile, stats, skills, experience, projects, services, process, testimonials). Edit it there to replace the sample data.

## What is inside

- Dynamic Island style navbar, preloader, custom cursor, magnetic buttons, dark / light theme with circular reveal
- Hero with a realistic 3D-tilting phone, Android / iOS platform tiles and a spotlight-stage canvas background
- Parallax throughout (scroll and mouse), Lenis smooth scrolling
- About with a pop-out arched portrait and a manifesto that lights up word by word
- Stack as a working phone home screen (pages, folders, dock, jiggle mode)
- Release notes with expandable cards and a side visual
- Selected work with two sticky devices (splash + app screen) that follow the active project
- Services pricing cards, a pinned horizontal process with animated stage illustrations
- Five-step project brief form (prototype: not sent anywhere yet), curtain-reveal footer, ⌘K / Ctrl K command menu

## Credits

- Brand icons: [Simple Icons](https://simpleicons.org) (CC0 1.0). All trademarks belong to their owners.
- Fonts: Bricolage Grotesque, Geist, Geist Mono, Instrument Serif (Google Fonts).
- Smooth scroll: [Lenis](https://github.com/darkroomengineering/lenis).
