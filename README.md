# bekdiyor. — Mobile Engineer portfolio

Personal portfolio of **Bekdiyor**, a mobile engineer (Android first, now iOS). Three languages: **Uzbek (default)**, Russian, English.

> Status: interactive build with sample projects and quotes. Contacts are real.

## Run locally

No build step. Serve the folder:

```bash
npx serve .
# or
python3 -m http.server 8080
```

Open `http://localhost:8080/?lang=ru` (or `uz`, `en`) to force a language. An internet connection is needed for Google Fonts and Lenis (CDN).

## Structure

```
index.html            the whole site: HTML, CSS and JavaScript
404.html              Android-style "page isn't responding" page (served by Vercel for missing paths)
api/telegram.js       serverless function (Vercel): forwards the brief form to Telegram
assets/               portrait, icons, og.jpg (link preview 1200×630)
favicon.ico, manifest.webmanifest, robots.txt
PLAN.md               master plan: requirements, design system, decisions log
```

- **Content:** the `CONTENT` object at the top of the main script. Text fields are either a plain string or `{en, uz, ru}`.
- **Interface text:** the `I18N` dictionary right below it (`key: [en, uz, ru]`). Static markup uses `data-t="key"` (inner HTML) and `data-ta="attr:key"` (attributes).
- **Contacts:** `CONTENT.email`, `phone`, `telegram`, `github`, `linkedin`.

## Brief form → Telegram

1. In Telegram, open **@BotFather** → `/newbot` → copy the **token**.
2. Send any message to your new bot, then open `https://api.telegram.org/bot<TOKEN>/getUpdates` and copy `message.chat.id`.
3. Deploy this repo on **Vercel** (import from GitHub, no build settings needed).
4. In Vercel → Project → Settings → Environment Variables add:
   - `TELEGRAM_BOT_TOKEN` = the token
   - `TELEGRAM_CHAT_ID` = the chat id
   - `ALLOWED_ORIGIN` = your site URL, e.g. `https://bekdiyor.dev` (optional, set it once the domain is known)
5. Redeploy. The form posts to `/api/telegram` (`CONTENT.formEndpoint`).

If sending fails, the site copies the brief to the clipboard and shows an “Open Telegram” button to `t.me/bekdiyor04`. The function has a honeypot field, a basic rate limit and escapes all user text.

## Visitor counter

The footer shows a visit count from [CounterAPI](https://counterapi.dev) (free, no key). Each browser session counts once, so it counts visits, not unique people. It only appears on a real host; sandboxed previews block the request. Change or disable it in `CONTENT.counter`.

## What is inside

- Dynamic Island navbar with language switcher, preloader, custom cursor, magnetic buttons, dark / light theme with circular reveal
- Hero with a 3D-tilting phone, Android / iOS platform tiles and a spotlight-stage canvas background
- Parallax throughout (scroll and mouse), Lenis smooth scrolling
- About with an arched pop-out portrait and a manifesto that lights up word by word
- Stack as a working phone home screen (pages, folders, dock, jiggle mode)
- Release notes with a year wheel and expandable cards
- Selected work with two sticky devices (splash + app screen) that follow the active project
- Pinned horizontal process with animated stage illustrations, testimonials marquee
- Five-step brief form sent to Telegram, curtain-reveal footer

## Credits

- Brand icons: [Simple Icons](https://simpleicons.org) (CC0 1.0). All trademarks belong to their owners.
- Fonts: Bricolage Grotesque, Geist, Geist Mono, Instrument Serif (Google Fonts).
- Smooth scroll: [Lenis](https://github.com/darkroomengineering/lenis).
