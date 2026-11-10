# CLAUDE.md — handoff notes for this repo

Portfolio site for **Bekdiyor**, a mobile engineer (Android since 2022/23, iOS since 2026). It replaces a résumé and brings in project requests.

## Working with the owner
- **Talk to the owner in Uzbek** (Latin script). Keep replies short and concrete.
- Workflow: build **variants**, let the owner pick one, then **delete the rest**. Don't leave unused variants or switches in the code.
- Record every decision in **PLAN.md**, in the decision log (section 10, newest at the bottom) and the open questions (section 9).
- Commit and push approved changes to `main`. Commit author: `Bekdiyor <abekdiyor@gmail.com>`.
- Things the owner rejected: glass cards, "childish" busy backgrounds, too many phone mockups, pricing/tier cards, the ⌘K command menu, theme-lab colour swatches, showing a city name (no "Samarkand" anywhere).

## Stack and structure
- No build step. A single file, `index.html`, holds the HTML, CSS and vanilla JS. `404.html` is a standalone Android-style "page isn't responding" dialog (Vercel serves it for missing paths). `api/telegram.js` is a Vercel serverless function. Images are in `assets/` (portrait, icons, `og.jpg` 1200×630). Plus `favicon.ico`, `manifest.webmanifest`, `robots.txt`.
- CDN: Lenis 1.1.13 (jsdelivr) for smooth scrolling. Fonts from Google: Bricolage Grotesque, Geist, Geist Mono, Instrument Serif. Brand icons are Simple Icons (CC0), inlined in `ICONS`.
- Run locally: `python3 -m http.server 8080`, then open http://localhost:8080 (`?lang=ru|en|uz` forces a language).

## Code map (main `<script>` in index.html, in order)
1. `CONTENT`: all site content. Text fields are a plain string or `{en, uz, ru}`.
2. The i18n block: `LANG` (default **uz**, stored in `localStorage pf-lang`), the `I18N` dictionary (`key: [en, uz, ru]`), `T(key, vars)`, and `localize(CONTENT)`. Static markup uses `data-t="key"` (innerHTML) and `data-ta="attr:key;attr:key"`. Switching language reloads the page via `setLang()`.
3. Helpers (`$`, `$$`, `esc`, `toast`, `store`), phone screen renderers, section renders, theme, Lenis/`goTo`, mobile menu, split and reveal, loader, hero, projects, home-screen skills, release notes (year wheel), stage background, section tracking, brief form → Telegram, language switcher, contacts and visitor counter, cursor and magnetic effects, footer, clock (Asia/Tashkent), and the `frame()` loop (read phase, then write phase).

## Design rules
- Accent: dark green `#0B7A4B` (white text). Accent text is `#3CCB86` on dark and `#046C42` on light. The green→purple neon gradient (`--a1rgb` 61,255,154 / `--a2rgb` 162,89,255) is used **only in backgrounds**.
- Dark and light themes are designed separately. Animate only transform and opacity, and respect `prefers-reduced-motion`.

## Section order
Hero (Spotlight stage) → About (arch portrait) → Stack (phone home screen) → Experience (release notes + year wheel) → Selected work (2 sticky devices) → Process (pinned horizontal) → Kind words → Contact (5-step brief) → curtain footer.

## Integrations
- **Brief form**: POSTs to `/api/telegram`. Vercel env vars: `TELEGRAM_BOT_TOKEN`, `TELEGRAM_CHAT_ID`, `ALLOWED_ORIGIN`. If the POST fails, the site copies the brief to the clipboard and shows a button to t.me/bekdiyor04.
- **Visitor counter**: CounterAPI (`CONTENT.counter`). It counts once per session and skips localhost and raw.githack.com.
- Contacts: phone +998995006123, Telegram @bekdiyor04, github.com/Bekdiyordev, linkedin.com/in/bekdiyor-abdusharipov, abekdiyor@gmail.com.

## Status and next steps
- Experience, projects, skills and stats come from the owner's résumé (`assets/Bekdiyor_Abdusharipov_Resume.pdf`). Don't invent metrics; only use facts the owner gave.
- Phone screens (`scrMegaGO`, `scrFoodly`, `scrHashtagram`) and project brand colours are **illustrative guesses**: replace them when the owner sends real screenshots, logos or colours.
- `CONTENT.quotes` is empty, so the Kind words section is hidden until real testimonials arrive.
- Next:
  1. Deploy to Vercel, with the owner creating the bot via @BotFather and supplying the chat id.
  2. Domain (decided last).
  3. Case-study pages, the résumé PDF and real project data.
  4. Once the domain is known: make `og:image` absolute and add `og:url`, a canonical link, hreflang and a sitemap (see the comment in `<head>`).
- Testing: after changes, load the page in all three languages and check the console for errors. Playwright with Chrome works well for this.
