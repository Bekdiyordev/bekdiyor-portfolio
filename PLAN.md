# 📱 Portfolio Sayt — Master Reja (PLAN.md)

> Bu fayl — loyihaning yagona "manba hujjati". Har bir qaror, talab va o'zgarish shu yerga yoziladi va ish shu asosda olib boriladi.
> Oxirgi yangilanish: 2026-11-09 · Holat: **v2.2 — uz/ru/en, forma → Telegram, haqiqiy kontaktlar, tashriflar soni. Keyingi qadam: Vercel deploy + bot token, domen oxirida**
>
> 🎨 **Design v1 (saqlangan):** https://claude.ai/artifact/XZJkBytxeBdFQUzvr2YzMf — versiya `1793986414-9ea4`
> Artboardlar: `Main.dc.html` (desktop bosh sahifa), `NavStates.dc.html` (navbar holatlari), `Mobile.dc.html` (mobil hero).
>
> 🚀 **Jonli prototip v0.2 (ishlaydigan sayt):** https://claude.ai/artifact/CG8145aeySNxLKbQZyT5sB — versiya v2.1 · manba: `site/index.html` (barcha kontent faylning boshidagi `CONTENT` obyektida)
> Prototipda vaqtincha olingan standartlar: ranglar **Neon Aurora (yashil→binafsha)**, ism **"bekdiyor."** ✅, til **English**, default **Dark** (S1–S4 javob berilganda o'zgaradi).
> 💾 **GitHub:** https://github.com/Bekdiyordev/bekdiyor-portfolio (public, `main`) — har bir tasdiqlangan o'zgarish shu yerga push qilinadi.
> **Qoida:** v1 artboardlariga tegilmaydi. Har bir yangi variant **yangi artboard** bo'lib qo'shiladi (masalan `Hero-v2.dc.html`), shunda v1 doim solishtirish uchun turadi.

---

## 1. Mijoz talablari (aytilganlar — so'zma-so'z ma'nosi)

| # | Talab | Izoh |
|---|-------|------|
| T1 | Professional portfolio sayt | Resume o'rniga yuboriladigan link bo'lishi kerak |
| T2 | Egasi: Mobile Engineer, 3+ yil real tajriba | Asosiy — Android, iOS yaqinda boshlangan |
| T3 | O'zini tanishtirish: ma'lumot, tajriba, skilllar | |
| T4 | Loyihalarni chiroyli ko'rsatish + reklama qilish | Har bir loyiha "sotilishi" kerak |
| T5 | "Nima bera olaman" — xizmatlar bo'limi | |
| T6 | Takliflar / buyurtmalar / g'oyalar qabul qilish qismi | Yangi mijozlar olish uchun |
| T7 | UI/UX "bomba", WOW effekt | Shablon / "AI ishi" ko'rinishi **bo'lmasligi** kerak |
| T8 | Animatsiyalar juda kuchli | Text, rang, effektlarga alohida e'tibor |
| T9 | Rang kalibratsiyasi zo'r | Dark + Light mode ikkalasi ham mukammal |
| T10 | Mouse holatlari (hover, cursor) zo'r | |
| T11 | Workflow (ish jarayoni) ko'rsatilsin | |
| T12 | Hozircha **fake data** | Keyin haqiqiy ma'lumot/loyihalar qo'yiladi |
| T13 | Ma'lumotlar oson edit bo'lsin | Kontent koddan ajratilgan bo'lishi kerak |
| T14 | Ish tartibi: avval umumiy reja → keyin har bir qism alohida, rasm/variant ko'rsatib, edit qilib | Iterativ |
| T15 | Referenslar: supahero.io, pricingpages.design, navbar.gallery, cta.gallery, footer.design | G'oya manbasi, nusxa emas |
| T16 | **Parallax effekt** — mijozga juda yoqadi, mos joylarda ishlatilsin | Bo'limlar bo'yicha xarita: 3.4 |
| T17 | Umumiy ketma-ketlik va joylashuv (v1) **yoqdi** — saqlansin | Design v1 qotirildi |
| T18 | Yangi kuchli g'oyalar bo'lsa taklif qilinsin | 12-bo'lim |

---

## 2. Konsepsiya (Big Idea)

### "Saytning o'zi — mobil ilova kabi his qilinadi"
Oddiy portfolio emas. Egasi mobile engineer bo'lgani uchun butun sayt **mobil platforma tilida** gapiradi — lekin kitsch bo'lmagan, nozik, premium tarzda:

- **Navbar = Dynamic Island** — tepada qora "orolcha", scroll qilganda kengayib joriy bo'limni, "Available for work" statusini ko'rsatadi.
- **Hero'da 3D telefon** — cursor'ga qarab aylanadi, ekranida loyihalar navbatma-navbat "ishlaydi".
- **Tajriba = Release Notes** — har bir ish joyi `v1.0 → v2.0 → v3.0` versiya changelog'i kabi.
- **Skilllar = Home screen / App drawer** — texnologiyalar ilova ikonkalari kabi, hover'da "long-press" menyusi chiqadi.
- **Buyurtma formasi = Onboarding flow** — ilovadagi kabi qadam-baqadam, silliq o'tishlar bilan.
- **Theme almashtirish** — bosilgan nuqtadan aylana bo'lib tarqaluvchi (circular reveal) animatsiya.

Bu "mavzu" sayt bo'ylab izchil — shuning uchun shablon emas, **muallif qo'li** seziladi.

### Kayfiyat (Mood)
`Premium · Texnik · Iliq · Jonli` — Linear/Raycast aniqligi + shaxsiy portfolio'larning (Lando Norris sayti kabi) jasurligi.

---

## 3. Dizayn tizimi (Design System) — taklif

### 3.1 Ranglar (OKLCH'da kalibratsiya qilinadi — har ikki modda kontrast WCAG AA+)

**Dark mode (asosiy):**
| Token | Qiymat (taxminiy) | Vazifa |
|-------|------------------|--------|
| `--bg` | `#0A0A0C` | Asosiy fon (sof qora emas — iliq "ink") |
| `--surface` | `#131317` | Kartochkalar |
| `--surface-2` | `#1C1C22` | Ko'tarilgan elementlar |
| `--line` | `rgba(255,255,255,.08)` | Chegara chiziqlar |
| `--text` | `#EDEDEF` | Asosiy matn |
| `--text-dim` | `#8A8A93` | Ikkinchi darajali |
| `--accent` | **tanlanadi** (pastda) | CTA, highlight |

**Light mode:** fon `#F3F1EC` (iliq qog'oz), matn `#0E0E10`, surface `#FFFFFF` — oddiy "inverted" emas, alohida kalibrlangan.

**Accent — neon gradient, yashil → binafsha (mijoz talabi, 2026-11-07). 3 variant, footer "Theme lab"da almashtiriladi:**
- **1 — Neon Aurora** (default) `#3DFF9A → #A259FF`
- **2 — Mint Ultraviolet** `#2EF2C8 → #8B5CF6`
- **3 — Acid Orchid** `#B8FF3C → #D946EF`
- Light mode'da matn uchun to'qroq juftlar (masalan `#04955A → #7B2FF7`).
- **Qoida (mijoz, 2026-11-07):** gradient **faqat fonlarda** — sahifa bo'ylab suzuvchi aurora fon, hero/contact glow, contact kartasi foni, footer, loader, portret foni. Asosiy joylar (italic so'zlar, statistika belgilari, CTA tugmalar, badge, progress/timeline/process chiziqlari, logo nuqtasi) — **to'q yashil**: fill `#0B7A4B` (oq matn bilan), matn `#3CCB86` (dark) / `#046C42` (light).
- *Eski variantlar (Volt / Signal / Aurora) bekor qilindi.*

### 3.2 Tipografiya
- **Display (sarlavhalar):** `Bricolage Grotesque` (variable — og'irlik animatsiya qilinadi)
- **Body:** `Geist Sans`
- **Mono (meta, label, kod):** `Geist Mono`
- **Aksent (italic so'zlar):** `Instrument Serif Italic` — sarlavhada 1-2 so'zni ajratish uchun
- Fluid o'lchamlar: `clamp()` — mobil ↔ 4K ekranda mukammal

### 3.3 Global effektlar (hamma joyda)
- [ ] **Smooth scroll** — Lenis
- [ ] **Custom cursor** — kontekstga qarab o'zgaradi: `View`, `Drag`, `Open ↗`, `Copy`; matn ustida ingichka chiziq
- [ ] **Magnetic buttons** — tugmalar cursor'ga "tortiladi"
- [ ] **Split-text reveal** — sarlavhalar harf/so'z bo'lib chiqadi
- [ ] **Grain/noise overlay** — premium "film" teksturasi (juda nozik)
- [ ] **Theme toggle** — View Transitions API bilan circular reveal
- [ ] **Page transitions** — loyiha sahifasiga o'tishda kartochka kengayib sahifaga aylanadi (shared element)
- [ ] **Preloader** — 1.2s, faqat birinchi tashrifda
- [ ] `prefers-reduced-motion` — animatsiyalarni yumshatish
- [ ] Touch qurilmalarda cursor effektlari o'chadi, o'rniga tap-animatsiyalar
- [ ] **Parallax tizimi** — scroll parallax + mouse parallax (pastda 3.4)

### 3.4 Parallax xaritasi (T16)

**Ikki turi:**
- **Scroll parallax** — qatlamlar scroll'da har xil tezlikda harakatlanadi (chuqurlik hissi).
- **Mouse parallax** — qatlamlar cursor'ga qarab har xil masofaga siljiydi (desktop'da).

| Bo'lim | Parallax effekti | Qatlamlar / tezlik |
|--------|------------------|--------------------|
| **Hero** | 3 qatlamli chuqurlik: fon glow + nozik grid (sekin) → telefon (o'rta) → atrofida suzuvchi UI kartalar: notification, rating, "Build passed ✓" chip (tez). Mouse'ga ham reaksiya | 0.2x / 0.5x / 1.2x |
| **Hero → Projects** | ⭐ **"Phone lift-off"**: scroll qilganda Hero'dagi telefon kichrayib, aylanib, Projects bo'limidagi sticky joyiga "uchib boradi" (bitta telefon butun sahifa bo'ylab sayohat qiladi) | scroll-scrubbed |
| **Bo'lim sarlavhalari** | Orqa fonda ulkan outline so'z (`STACK`, `SHIPPED`, `PROCESS`) scroll'ga qarama-qarshi gorizontal siljiydi | -0.3x gorizontal |
| **About** | Portret ramka ichida sekinroq harakatlanadi (mask parallax) + biroz zoom | ichki 0.7x |
| **Skills** | Ikonkalar qatorlari biroz har xil tezlikda kirib keladi (to'lqin) | stagger + 0.9–1.1x |
| **Experience** | Version teglar (`v3.0`) chap tomonda sekinroq, matn tezroq | 0.8x / 1x |
| **Featured Projects** | Sticky telefon atrofida loyiha brand rangidagi shakllar va screenshotlar chuqurlik qatlamlarida suzadi | 0.4x / 1.3x |
| **More work grid** | Har kartaning ichidagi telefon karta ichida scroll'ga qarab yuqoriga siljiydi (inner parallax) | ichki 0.85x |
| **Testimonials** | Marquee tezligi scroll tezligiga bog'liq (scroll velocity) + yengil skew | velocity-based |
| **Contact** | Glow va forma kartasi har xil tezlikda | 0.5x / 1x |
| **Footer** | **Curtain reveal**: footer sahifa ostida qotib turadi, sahifa yuqoriga ko'tarilib uni ochib beradi; ulkan "diyor." harflari pastdan chiqadi | fixed underlay |

**Parallax qoidalari:**
1. Faqat `transform` / `opacity` (GPU) — 60fps, layout'ni qayta hisoblamaslik.
2. Nozik — bosh aylantirmasligi kerak. Maksimal siljish ~80–120px.
3. Mobil'da yengillashtirilgan (faqat Hero va Footer), `prefers-reduced-motion`'da butunlay o'chadi.
4. Texnika: GSAP ScrollTrigger (`scrub`) + Lenis; mouse uchun `lerp` bilan silliqlangan qiymatlar.

---

## 4. Sayt tuzilmasi (Sitemap)

```
/                      → Bosh sahifa (barcha bo'limlar)
/projects              → Barcha loyihalar (filtr: Android / iOS / Cross-platform)
/projects/[slug]       → Loyiha case study sahifasi
/resume                → Print/PDF'ga mos resume versiyasi (+ PDF yuklab olish)
/404                   → Kreativ 404 ("App crashed" ekrani 😄)
```

---

## 5. Bosh sahifa bo'limlari (tartib bilan)

### 00 · Preloader
- Hisoblagich `000 → 100`, ism harflari yig'iladi, keyin parda ochilib Hero chiqadi.
- **Holatlar:** birinchi tashrif / qayta tashrif (o'tkazib yuboriladi).

### 01 · Navbar — "Dynamic Island"
- Yuqorida markazda qora pill. Ichida: logo · bo'limlar · theme toggle · `Let's talk` CTA.
- **Holatlar:**
  - `idle` — kichik pill
  - `scrolled` — joriy bo'lim nomi + progress chiziq
  - `hover` — kengayib to'liq menyu
  - `scroll down` — yashirinadi, `scroll up` — qaytadi
  - `mobile` — full-screen menyu (katta tipografiya, stagger animatsiya)
- ~~`● Available for new projects`~~ — olib tashlandi (2026-11-07). ⌘K tugmasi ham navbardan olib tashlandi; 2026-11-10 da ⌘K menyusi butunlay olib tashlandi.

### 02 · Hero
- ✅ **Hero foni: Spotlight stage tanlandi (hozircha)** — review panel va boshqa variantlar olib tashlandi (v1.4).
- *Tarix:* **Fon variantlari — 2-raund (v1.3).** 1-raund (aurora blob, constellation, dot wave, Kotlin rain, floating apps, ripples) mijozga "detskiy" tuyuldi → olib tashlandi. Yangi, premium/sokin variantlar (review panel orqali):
  1. **Classic** — hozirgi glow + cursor grid
  2. **Mesh gradient** — WebGL shader: sekin, ipakdek yashil/binafsha gradient + film grain (premium mahsulot saytlari uslubi)
  3. **Liquid silk** — WebGL shader: qorong'i ipak / suyuq metall burmalari, yashil-binafsha yaltiroq
  4. **Spotlight stage** — keynote uslubi: telefonga tushayotgan yumshoq yorug'lik nuri, yorug' pol, bir nechta chang zarrasi
  5. **Horizon grid** — perspektiv pol chiziqlari va yashil→binafsha porlovchi gorizont (Vercel/Linear uslubi)
  6. **Topographic** — muhandislik xaritasidagi kontur chiziqlar sekin o'zgaradi, cursor yaqinida yashil
- Katta kinetik tipografiya: **"I build apps people *love* to use."** (bir so'z serif italic, accent rangda)
- Rol: `Mobile Engineer — Android · iOS`
- **3D telefon** (React Three Fiber yoki CSS 3D): cursor'ga qarab egiladi, ekranda loyihalar loop'da almashadi.
- Fon: cursor ortidan yuradigan yumshoq "spotlight" yoki aurora gradient.
- CTA'lar: `View work` (magnetic) · `Hire me →`
- Pastda statistika (counter animatsiya): `3+ yil` · `15+ ilova` · `1M+ yuklab olish` · `4.8★ o'rtacha reyting`
- Scroll indicator.

### 03 · About / Manifesto
- ✅ **Portret foni: Arch tanlandi (v1.9)** — boshqa variantlar va tugmalar olib tashlandi.
- *Tarix:* **Portret foni (v1.5):** eski katakli grid + gradient yoqmadi → 4 variant, portret ostidagi "Photo bg" tugmalari bilan almashtiriladi:
  1. **Studio** — to'q fon, bosh ortida yumshoq studiya yorug'i, pastdan yashil nur, odamda nozik rim-light
  2. **Magazine** — to'q yashil blok, orqada katta "MOBILE ENGINEER ANDROID iOS" yozuvi, "VOL. 03 — 2026" (jurnal muqovasi)
  3. **Halo** — to'q fon, bosh ortida bitta porlovchi yashil halqa + aylanuvchi nuqta, tashqarida nozik punktir halqa
  4. **Arch** — ramka tepasi ark shaklida, yashildan qoraga kechki yorug'lik gradienti
- Katta matn — scroll qilganda so'zlar birma-bir "yonadi" (kulrangdan oq/qora rangga).
- Rasm: hover'da yengil distortion/parallax.
- Qisqa bio + "Hozir: …" (masalan: *Hozir SwiftUI'ni chuqur o'rganyapman*).
- Ishlagan kompaniyalar logolari — cheksiz marquee.

### 04 · Skills — ✅ TANLANDI: **Home screen** (telefon ichida). Switch va boshqa 3 variant olib tashlandi (v1.0)
- *Tarix:* v0.9'da 4 variant switch bilan sinab ko'rildi: Home screen · Bento · Orbit · Library.
  1. **Home screen** — katta telefon: aurora wallpaper, widgetlar (Android 3+ yrs, Now learning SwiftUI, Release cadence), 2 sahifa (drag / nuqtalar / strelkalar), papkalar (Architecture, Data — bosilsa ochiladi), dock (Kotlin, Compose, Swift, SwiftUI), bosib turish → jiggle rejimi + Done.
  2. **Bento** — har xil o'lchamdagi widget-kartalar (Kotlin, Compose 2×2; Swift, SwiftUI, Coroutines, MVVM, Firebase 2×1), stat widgetlar, kursor ortidan spotlight.
  3. **Orbit** — markazda avatar, 3 halqa (Daily driver / Comfortable / Learning · iOS), sekin aylanadi, hover'da sekinlashadi, scroll'da parallax burilish.
  4. **Library** — iOS App Library: 4 kategoriya papkasi (Languages, UI, Architecture, Tools), bosilsa modal ochiladi, qidiruv.
- Hamma ko'rinishda umumiy "long-press" karta (hover/focus): nomi, kategoriya, since, daraja, izoh.
- **Logolar:** harflar o'rniga brend logolari — Simple Icons (CC0) inline SVG, brend rangidagi iOS uslubidagi app-ikonka ichida. Logosi yo'q tushunchalar (Coroutines/Flow, MVVM/MVI, Clean Arch, Hilt, Room, Retrofit, SwiftUI) — o'ziga xos chiziqli ikonkalar. Hero platforma kartalari ham endi Simple Icons (Android, Apple) — CDN'ga bog'liq emas.
- Kontent: `CONTENT.skills` (n, i, c, cat, lvl, since, ring, size, d).

#### (eski tavsif)
- Telefon home screen'idek ikonka grid'i: Kotlin, Swift, Jetpack Compose, SwiftUI, Coroutines, Hilt, Room, Retrofit, Ktor, Firebase, Fastlane, GitHub Actions, Figma…
- **Holatlar:** hover → ikonka "jiggle" + popover (necha yil, daraja, qisqa izoh) · kategoriya filtri (Languages / UI / Architecture / Tools).
- Progress bar YO'Q (klishe) — o'rniga "daraja" belgilari: `Daily driver` / `Comfortable` / `Learning`.

### 05 · Experience — "Release Notes"
- ✅ **v1.8 — tanlandi: 1-variant tuzilmasi, lekin telefonsiz** ("hamma yer qurilma bo'lib ketdi"):
  - ✅ **v2.1: Year wheel tanlandi** (iOS picker g'ildiragi); Career ring, Big type va tugmalar olib tashlandi.
  - *Tarix (v2.0):* Release paneli (karta) yoqmadi → chap tomonga kartasiz 3 variant: **Year wheel** (iOS picker g'ildiragi, yillar aylanadi), **Career ring** (karyera halqasi: tashqi — Android rollari, ichki — iOS, faol segment qalin yashil, markazda versiya), **Big type** (katta kompaniya nomi, rol, 2 metrika, versiyalar ro'yxati).
  - *(eski)* Chapda sticky **Release paneli**: katta versiya raqami (almashganda pastdan sirpanib chiqadi), rol + kompaniya, 2022→now yillar chizig'ida faol davr segmenti, 2 metrika, fonda kompaniya harfi konturi.
  - Timeline aylanasi tanlanganda chiziq ustida qoladi, biroz kattalashadi va yonadi (karta endi siljimaydi).
  - Kartalar: qisqa ko'rinish (rol, kompaniya, 1 qatorli xulosa, **Projects chiplari**) + **Details** tugmasi → ochiladi: release notes, What I did, Impact, Team, Stack. Halol Wallet / Pulse / Navo chiplari Work bo'limiga olib boradi.
  - Git log va Release cards variantlari olib tashlandi.
- *Tarix (v1.7):* 3 variant sinab ko'rildi:
  1. **App Store** — chapda sticky telefon "What's New" sahifasi (avatar-ikonka, UPDATE, versiya, notes, 2 metrika, Version History); scroll'da faol release kartasi telefonda ochiladi. O'ngda release kartalari (kompaniya tile, metrika chiplari).
  2. **Git log** — chapda GitHub uslubidagi contribution heatmap (1,248 contributions, streak, releases), o'ngda terminal: `git log --graph --decorate`, har rol = commit + tag, notes = feat/perf/fix qatorlari, ko'ringanda ketma-ket "yoziladi".
  3. **Release cards** — chapda sticky xulosa (3+ yil, 4 release, 3 kompaniya, logolar, hozirgi rol), o'ngda keng kartalar: katta kontur versiya raqami · rol/kompaniya/notes · katta metrikalar.
- Data: har tajribaga `c` (kompaniya rangi), `ab`, `hash`, `metrics` qo'shildi.
- Vertikal timeline, har bir ish joyi versiya kabi:
  ```
  v3.0 · Senior Android Engineer · Company — 2024–hozir
    + Feature: …
    ⚡ Perf: app start 40% tezlashdi
    🐛 Fix: crash rate 2% → 0.3%
  ```
- Scroll'da chiziq "chiziladi", har bir release kartasi kirib keladi.

### 06 · Featured Projects ⭐ (eng muhim bo'lim)
- **v1.1 (mijoz):** sticky joyda **2 ta qurilma** — orqada splash ekran (ilova logosi, nomi, shiori, loader), oldinda asosiy ekran; loyiha almashganda ikkalasi ham almashadi va yengil "swap" harakat qiladi.
- **Realistik qurilma:** titan rangli metall ramka (gradient), yon tugmalar (action, volume, power), ichki qora bezel, Dynamic Island + kamera linzasi, ekranda shisha yaltirog'i. Hero telefoni ham shu uslubda.
- **Bug fix:** faol loyiha har kadrda "ekran o'rtasiga eng yaqin karta" bo'yicha aniqlanadi — tez scroll yoki tepaga qaytishda birinchi loyiha endi tushib qolmaydi.
- **Fon (e'tibor tortmaydigan):** nuqtali grid, telefonlar ortida loyiha nomining kontur watermark'i, 2 ta nozik halqa (biri sekin aylanadi, ikkinchisi loyiha rangida).
- **Sticky telefon** chap tomonda turadi, o'ng tomonda loyihalar scroll bo'ladi — har bir loyihaga yetganda telefon ekrani o'sha ilovaga almashadi (+ fon rangi loyiha brand rangiga silliq o'tadi).
- Har loyiha: nomi, kategoriya, qisqa "pitch", natija metrikasi, stack teglari, `Case study →`, App Store / Google Play badge.
- Keyin "More work" — grid, hover'da video-preview ijro bo'ladi, cursor `View` ga aylanadi.

**Fake loyihalar (vaqtincha):**
| Nomi | Turi | Platforma | Brand rangi |
|------|------|-----------|-------------|
| **Pulse** | Fitness & sog'liq tracker | Android + iOS | Koral `#FF4D6D` |
| **Halol Wallet** | Fintech / to'lovlar | Android | Zumrad `#10B981` |
| **Somsa Go** | Ovqat yetkazib berish | Android | Sariq `#FFB800` |
| **Navo** | Musiqa streaming | iOS | Binafsha `#8B5CF6` |
| **Chorsu** | E-commerce marketplace | Android | Ko'k `#3B82F6` |
| **Yo'lda** | Taksi / ride-hailing | Android + iOS | Qora/Lime |

### 07 · Services — ❌ OLIB TASHLANDI (2026-11-09, mijoz: tarif kartalar yoqmadi; o'rniga hech narsa)
- Pricing-page uslubidagi paket kartalar (pricingpages.design ilhomi):
  1. **MVP Launch** — g'oyadan Store'gacha
  2. **Full Product** — to'liq ilova, backend integratsiya, analytics
  3. **Rescue & Scale** — mavjud ilovani tuzatish, tezlashtirish, refactor
  4. **Retainer** — oylik qo'llab-quvvatlash
- Toggle: `Fixed project` ↔ `Hourly / Monthly`
- Har kartada ✓ feature ro'yxati, "eng mashhur" belgisi, hover'da kartaning chegarasi bo'ylab yorug'lik yuradi (border glow).
- Narx: **qaror kerak** (aniq / "from $X" / yashirin).

### 08 · Process / Workflow
- **v1.6 (mijoz: "bo'sh tuyulyapti"):** har bir karta tepasida bosqichga mos **animatsiyali mini-illyustratsiya** (UI-mockup uslubida, premium):
  Discover — chat pufakchalari + "typing" + scope.md checklist · Design — wireframe telefon, Layers paneli, rang/tipografiya, harakatlanuvchi kursor · Build — kod muharriri (HomeScreen.kt), qatorlar "yoziladi", caret, BUILD ✓ · Test — 3 qurilma (Pixel, Galaxy Tab, iPhone) ketma-ket ✓ · Ship — store kartasi, ★★★★★, GET, yuklash progressi → LIVE · Support — crash-free grafik o'sib boradi, oxirgi nuqta pulsatsiya.
- Burchakda mos **ikonka** (lupa, pen tool, </>, shield-check, upload, pulse), pastida **deliverables** chiplari, fonda katta kontur raqam (01…06); bo'lim fonida "IDEA → STORE" kontur yozuvi.
- 6 qadam: `Discover → Design → Build → Test → Ship → Support`
- Gorizontal scroll (vertikal scroll bilan boshqariladi), qadamlarni SVG chiziq bog'laydi va chiziq scroll bilan "chiziladi".
- Har qadam: davomiyligi, nima topshiriladi (deliverables).

### 09 · Testimonials
- Ikki qator qarama-qarshi yo'nalishda harakatlanuvchi marquee kartalar; hover'da to'xtaydi.
- (Fake — keyin haqiqiysi bilan almashtiriladi.)

### 10 · Contact — "Start a project" (Onboarding flow)
- Katta CTA sarlavha: **"Got an idea? Let's ship it."**
- Qadam-baqadam forma (ilova onboarding'i kabi):
  1. Loyiha turi (chip tanlash): Yangi ilova / Mavjudni yaxshilash / Konsultatsiya / Boshqa
  2. Platforma: Android / iOS / Ikkalasi
  3. Byudjet (slider) + muddat
  4. G'oya tavsifi (+ ixtiyoriy havola: brif / Figma)
  5. Ism + aloqa (Telegram @username / telefon / email)
  6. ✅ Muvaffaqiyat ekrani (konfetti/animatsiya)
- Yonida tezkor yo'llar: Telegram @bekdiyor04 · Email abekdiyor@gmail.com (bosganda copy) · Telefon +998 99 500 61 23
- Forma natijasi → **Telegram bot** (`api/telegram.js`): honeypot, rate limit, HTML-escape.

### 11 · Footer
- Juda katta ism tipografiyasi (ekran kengligida), harflar cursor'ga reaksiya qiladi.
- Jonli mahalliy vaqt: `22:07 GMT+5` (shahar nomisiz)
- Ijtimoiy tarmoqlar (GitHub, LinkedIn, Telegram) + Aloqa ustuni (email, telefon, `Back to top ↑`)
- © yil · **sayt tashriflari soni** (CounterAPI, bepul; faqat haqiqiy hostingda ko'rinadi)

---

## 6. Loyiha sahifasi — `/projects/[slug]` (Case study)
1. Hero: katta mockup + brand rangi fon
2. Qisqa ma'lumot paneli: Rol · Muddat · Platforma · Stack · Store linklar
3. Muammo → Yechim → Natija (metrikalar animatsiya bilan)
4. Ekranlar galereyasi (drag carousel, cursor `Drag`)
5. Texnik tafsilotlar (arxitektura sxemasi)
6. Keyingi loyiha → (katta, to'liq kenglikdagi link)

---

## 7. Texnik stack (taklif)

| Qatlam | Tanlov | Nega |
|--------|--------|------|
| Framework | **Next.js 15 (App Router) + TypeScript** | SEO, tezlik, sahifalar |
| Styling | **Tailwind CSS v4** + CSS variables | Design tokenlar, dark/light |
| Animatsiya | **Motion (Framer Motion)** + **GSAP ScrollTrigger** | UI animatsiya + scroll sahnalar |
| Smooth scroll | **Lenis** | |
| 3D | **React Three Fiber + drei** (yoki yengil CSS 3D) | Hero telefon |
| Theme | `next-themes` + View Transitions API | |
| Kontent | `content/*.ts` (typed) → keyinchalik ixtiyoriy CMS (Sanity) | Oson edit (T13) |
| Forma | Server Action → **Telegram Bot API** + Resend (email) | |
| Analytics | Vercel Analytics / Umami | Kim ko'ryapti |
| Hosting | **Vercel** | Bepul, tez |
| i18n | `next-intl` (agar ko'p tilli bo'lsa) | |

**Sifat maqsadlari:** Lighthouse 90+ · LCP < 2s · 60fps animatsiya · to'liq responsive (360px → 2560px) · klaviatura bilan navigatsiya · SEO + OG rasmlar.

### Kontent tuzilmasi (edit qilish oson bo'lishi uchun)
```
content/
  profile.ts       ← ism, rol, bio, statistika, ijtimoiy linklar
  skills.ts        ← texnologiyalar ro'yxati
  experience.ts    ← ish joylari (release notes)
  projects/        ← har loyiha alohida fayl + rasmlar
  services.ts      ← paketlar
  process.ts       ← workflow qadamlari
  testimonials.ts
```

---

## 8. Ish fazalari (Roadmap)

| Faza | Nima | Natija | Holat |
|------|------|--------|-------|
| **0** | Reja, savollar, qarorlar | Ushbu PLAN.md tasdiqlanadi | 🟢 asosan tayyor (savollar ochiq) |
| **1** | Umumiy dizayn tasavvuri v1 + design system, 3 accent varianti | Design v1 ✅ yoqdi · rang tanlovi kutilmoqda | 🟡 |
| **1.5** | **Jonli prototip v0.2** — butun bosh sahifa barcha effektlar bilan (loader, island, parallax, sticky phone, pinned process, forma, curtain footer, ⌘K) | Mijoz sinab ko'radi → feedback | 🟡 sinovda |
| **2** | Navbar + Hero prototipi (jonli preview) | Ko'rib edit qilamiz | ⚪ |
| **3** | About + Skills | | ⚪ |
| **4** | Experience + Featured Projects | | ⚪ |
| **5** | Services + Process | | ⚪ |
| **6** | Testimonials + Contact flow + Footer | | ⚪ |
| **7** | Case study sahifalari, /projects, /resume, 404 | | ⚪ |
| **8** | Forma backend (Telegram/email), SEO, i18n, performance | | ⚪ |
| **9** | Haqiqiy ma'lumotlarni qo'yish + deploy (Vercel + domen) | 🚀 Live | ⚪ |

**Har bir bo'lim uchun sikl:** variant ko'rsatish → feedback → edit → tasdiq → keyingisi.

---

## 9. Ochiq savollar (javob kutilmoqda)

- [x] **S1.** Ism: **Bekdiyor** (logo: `bekdiyor.`) — 2026-11-07
- [x] **S2.** Tillar: **uz (default) · ru · en** — 2026-11-09
- [x] **S3.** Accent: yashil→binafsha **Neon Aurora** (boshqa variantlar va Theme lab olib tashlandi) — 2026-11-09
- [ ] **S4.** Default mode: Dark yoki Light (yoki tizim sozlamasiga qarab)?
- [x] **S5.** Narxlar ko'rsatilmaydi — Services bo'limi butunlay olib tashlandi, o'rniga hech narsa yo'q — 2026-11-09
- [x] **S6.** Buyurtmalar → **Telegram bot** (`api/telegram.js`, Vercel). Yuborilmasa: ariza nusxalanadi + t.me/bekdiyor04 ochiladi — 2026-11-09
- [ ] **S7.** Asosiy mijozlar kim: xorijiy (Upwork, ish beruvchilar) yoki mahalliy biznes? (Til va ohangga ta'sir qiladi)
- [~] **S8.** Domen — oxirida hal qilinadi. Hosting: Vercel (Telegram funksiyasi uchun)
- [ ] **S9.** Blog / maqolalar bo'limi kerakmi?
- [ ] **S10.** Resume PDF yuklab olish kerakmi?
- [x] **S11.** O'z rasmi (foni olib tashlangan cutout) — avatar va About portret sifatida ishlatildi
- [ ] **S12.** Flutter / React Native / KMP tajribangiz bormi yoki faqat native?
- [x] **S13.** Kod: GitHub repo `Bekdiyordev/bekdiyor-portfolio` (public)

---

## 10. Qarorlar jurnali (Decision Log)

| Sana | Qaror | Kim |
|------|-------|-----|
| 2026-11-06 | Loyiha boshlandi, fake data bilan quriladi | Mijoz |
| 2026-11-06 | Ish tartibi: bo'limma-bo'lim, variant → edit | Mijoz |
| 2026-11-06 | Design v1 (canvas) yaratildi: bosh sahifa + navbar holatlari + mobil hero | Claude |
| 2026-11-06 | v1 "deyarli yoqdi": ketma-ketlik va joylashuv tasdiqlandi, saqlanadi | Mijoz |
| 2026-11-06 | Parallax effekt qo'shiladi (xarita: 3.4) | Mijoz |
| 2026-11-07 | Mijoz "yakuniy holatdagi UI'ni ishlatib ko'rish"ni so'radi → jonli prototip v0.2 qurildi | Mijoz/Claude |
| 2026-11-07 | Prototipga kirgan G-g'oyalar: G2 ⌘K palette, G5 spotlight cursor, G9 spring bosish; theme lab (footer'da accent almashtirish) | Claude |
| 2026-11-07 | v0.2 "voshshe zor" — mijozga juda yoqdi | Mijoz |
| 2026-11-07 | Ism hamma joyda **Bekdiyor** (`bekdiyor.`), email `hello@bekdiyor.dev` (placeholder → 2026-11-09 da abekdiyor@gmail.com) | Mijoz |
| 2026-11-07 | Mijoz rasmi: navbar avatar, About'da ramkadan "chiqib turuvchi" parallax portret (fon: accent glow + grid + outline "BEK DIYOR"), Contact'da avatar chip | Mijoz/Claude |
| 2026-11-07 | Hero telefoni yoniga **Android** va **iOS** glass kartalar (blur, sheen, parallax). Rasmiy Apple/Android logolari ishlatilmadi — o'ziga xos ikonkalar (punch-hole va Dynamic Island'li telefon). "New brief" kartasi joy bo'shatish uchun olib tashlandi | Mijoz/Claude |
| 2026-11-07 | Glass kartalar **yoqmadi**. O'rniga: telefon **orqasida** turadigan 2 ta **kvadrat karta**, ichida **katta ikonka**, pastida `Since 2023` (Android) va `Since 2026` (iOS). Odatda yarmi telefon ortida, scroll'da yon tomonga chiqib, biroz buriladi; kirishda telefon ortidan sirpanib chiqadi. Ikonkalar `CONTENT.platformIcons`da — rasmiy ikonka fayllari berilsa `assets/…` yo'li bilan almashtiriladi | Mijoz |
| 2026-11-07 | Platforma kartalari mijoz referensiga moslandi: butun karta bir xil to'q shisha (Android — yashil, iOS — ko'k tus), nozik rangli border + tashqi nur, markazda oq porlovchi ikonka, ostida sarlavha (`Android` / `iOS`) va `Since 2023` / `Since 2026`, biroz qiyshiq (-7° / 6°). Rasmiy Android robot va Apple logolari: Claude o'zi chizmaydi — mijoz SVG/PNG fayllarini bersa `CONTENT.platformIcons`ga qo'yiladi (kutilmoqda) | Mijoz |
| 2026-11-07 | Kartalarga haqiqiy **Android robot** va **Apple** logolari qo'yildi (Font Awesome brand ikonkalari, cdnjs orqali — qo'lda chizilmagan). Ikonka + sarlavha + Since kartaning **markazida**; kartalar telefon ortidan kamroq kirib turadi, markaz ko'rinsin | Mijoz |
| 2026-11-07 | Navbardan "Available for projects" va ⌘K tugmasi olib tashlandi | Mijoz |
| 2026-11-07 | Ranglar: **neon gradient, asosan yashil + binafsha** — 3 variant (Neon Aurora default, Mint Ultraviolet, Acid Orchid), Theme lab'da almashtiriladi | Mijoz |
| 2026-11-07 | Gradient faqat fonga; asosiy UI elementlari to'q yashil (v0.8) | Mijoz |
| 2026-11-07 | Skills bo'limi: 4 ko'rinish (Home screen / Bento / Orbit / Library) switch bilan — mijoz mosini tanlaydi; harflar o'rniga logolar (Simple Icons, CC0) | Mijoz |
| 2026-11-07 | Skills: **1-variant (telefon ichidagi Home screen)** tanlandi; switch, Bento, Orbit, Library olib tashlandi (v1.0) | Mijoz |
| 2026-11-07 | Projects: 2 qurilma (splash + asosiy ekran), realistik qurilma dizayni, tepaga scroll'dagi bug tuzatildi, nozik fon bezaklari (v1.1) | Mijoz |
| 2026-11-07 | Hero foni: 6 ta animatsiyali variant + Classic, review panel orqali solishtirish (v1.2) — mijoz tanlaydi | Mijoz |
| 2026-11-07 | Hero fon 1-raund yoqmadi ("detskiy") → 2-raund: Mesh gradient, Liquid silk (WebGL), Spotlight stage, Horizon grid, Topographic (v1.3) | Mijoz |
| 2026-11-07 | Hero foni: **Spotlight stage** (hozircha) — panel va qolgan variantlar o'chirildi (v1.4) | Mijoz |
| 2026-11-07 | Portret foni: grid/gradient yoqmadi → 4 variant (Studio / Magazine / Halo / Arch) review uchun (v1.5) | Mijoz |
| 2026-11-07 | Process: har bosqichga animatsiyali illyustratsiya, burchak ikonkasi, deliverables chiplari, katta kontur raqam (v1.6) | Mijoz |
| 2026-11-07 | Release notes: 3 variant (App Store / Git log / Release cards) review uchun (v1.7) | Mijoz |
| 2026-11-07 | Release notes: App Store tuzilmasi qoldi, telefon o'rniga Release paneli; aylana chiziqda qoladi; kartalar expand bo'ladi + project chiplari (v1.8) | Mijoz |
| 2026-11-07 | Portret foni: **Arch** (v1.9) | Mijoz |
| 2026-11-07 | Release notes chap paneli yoqmadi → Year wheel / Career ring / Big type review uchun (v2.0) | Mijoz |
| 2026-11-07 | Kod GitHub'ga yuklandi: Bekdiyordev/bekdiyor-portfolio (`main`, 08b4d88) — index.html, assets, README, PLAN.md | Mijoz |
| 2026-11-07 | Release notes chap tomoni: **Year wheel** (v2.1) | Mijoz |
| 2026-11-07 | Phone lift-off moslashtirildi: Hero va Projects orasida 3 bo'lim bor (tasdiqlangan tartib), shuning uchun telefon Hero'dan ko'tarilib ketadi va Projects'da aylanib "qo'nadi". To'liq uchish uchun Projects'ni Hero'dan keyinga ko'chirish kerak bo'ladi — mijoz qarori kutilmoqda | Claude |
| 2026-11-09 | **Services / tarif kartalar butunlay olib tashlandi**, o'rniga hech narsa | Mijoz |
| 2026-11-09 | **Til: uz (default) · ru · en.** Navbar'da til tugmasi (popover), mobil menyuda uchta tugma. Tanlov `localStorage pf-lang`da, `?lang=ru` havolasi ham ishlaydi | Mijoz |
| 2026-11-09 | **Forma → Telegram** (Vercel funksiyasi `api/telegram.js`, env: TELEGRAM_BOT_TOKEN, TELEGRAM_CHAT_ID, ALLOWED_ORIGIN). Fayl biriktirish o'rniga havola maydoni | Mijoz |
| 2026-11-09 | Haqiqiy kontaktlar: tel +998995006123, Telegram @bekdiyor04, GitHub Bekdiyordev, LinkedIn bekdiyor-abdusharipov, email abekdiyor@gmail.com | Mijoz |
| 2026-11-09 | Ortiqchalar olib tashlandi: footer Theme lab (3 rang), Mint/Acid variantlari, "Book a call", "Prototype · sample data" yozuvi; bo'limlar qayta raqamlandi (Process 06, Fikrlar 07, Aloqa 08) | Mijoz |
| 2026-11-09 | Footer'da **tashriflar soni** (CounterAPI, har brauzer sessiyasida 1 marta sanaladi — noyob odamlar emas, tashriflar) | Mijoz |
| 2026-11-09 | Domen — oxirida | Mijoz |
| 2026-11-10 | **⌘K buyruqlar menyusi olib tashlandi** (oddiy tashrifchiga kerakmas). Til — navbar va mobil menyuda | Mijoz |
| 2026-11-10 | **"Samarkand" hamma joydan olib tashlandi** (loader, hero, About, footer vaqti). Footer'da faqat mahalliy vaqt + GMT+5 qoldi | Mijoz |
| 2026-11-11 | **Mobil tekshiruv (390 / 768px):** hero platforma kartalari ekrandan chiqmaydi; mobil loyiha kartalarida bo'sh telefon o'rniga haqiqiy ilova ekrani; forma "Davom etish" tugmasi bir qatorda; "Barcha loyihalar" bir qatorda; footer'dagi ortiqcha yashil nuqta (yashirin hisoblagich) tuzatildi | Claude |
| 2026-11-11 | **Favicon + OG + SEO:** `b.` ikonka (favicon.ico, 32px, apple-touch 180, manifest 192/512), OG rasm 1200×630 (`assets/og.jpg`), meta description, Open Graph/Twitter, JSON-LD Person, manifest, robots.txt; sarlavha va description tilga qarab o'zgaradi. Domen kelganda og:image/og:url/canonical absolyut qilinadi, sitemap qo'shiladi | Claude |
| 2026-11-11 | **Kreativ 404** (`404.html`): Android "sahifa javob bermayapti" dialogi — *Kutish* (yuklanadi → "kutish yordam bermadi") va *Ilovani yopish* (bosh sahifa); 3 til, dark/light saytdagi tanlovga mos | Claude |
| 2026-11-11 | **Rezyumedan haqiqiy ma'lumotlar qo'yildi:** tajriba (Megasoft LLC 2023–hozir; Freelance 2023–hozir, Hashtagram'da mobil jamoa rahbari; Mustafo Software amaliyot 2019–2021; iOS 2026 — o'rganish bosqichi), loyihalar (MegaGO, Foodly, Hashtagram + MegaGO Driver, MegaFilm, Kvadratmetr, Foodly Courier), skilllar (Socket.IO, Mapbox, Media3/ExoPlayer, WorkManager, GitLab, Postman qo'shildi; KMP, Ktor, Fastlane, GitHub Actions olib tashlandi), statistika (3+ yil, 8+ ilova, 50K+ MegaGO, 5 soha), ta'lim (TATU magistr 2025, ingliz B2), rezyume PDF yuklab olish ishlaydi. Soxta fikrlar olib tashlandi — "Fikrlar" bo'limi haqiqiy fikrlar kelguncha yashirin. Telefon ekranlari va loyiha ranglari — taxminiy illyustratsiya, haqiqiy screenshot/logo/rang kutilmoqda | Mijoz/Claude |

---

## 11. "Shablon bo'lmasligi" uchun qoidalar (o'zim uchun)
1. Hech qanday tayyor template/UI kit'ni to'g'ridan-to'g'ri ishlatmayman.
2. Har bir bo'limda **bitta "signature" interaksiya** bo'lsin — lekin ortiqcha emas.
3. Animatsiyalar mazmunga xizmat qiladi; har biri 60fps, easing'lar qo'lda sozlangan (`cubic-bezier`), bir xil "fade-up" hamma joyda takrorlanmaydi.
4. Mikro-detallar: hover holatlari, focus ring, loading/empty/error holatlari, toast'lar, tanlangan matn rangi (`::selection`), scrollbar, favicon, OG rasm.
5. Dark va Light — alohida dizayn qilinadi, shunchaki invert emas.
6. Klishelar yo'q: progress-bar skilllar, stock rasmlar, "Hi, I'm…👋" banal hero.

---

## 12. Qo'shimcha "wow" g'oyalar (mijoz tanlashi kutilmoqda)

| # | G'oya | Nima beradi | Murakkablik |
|---|-------|-------------|-------------|
| G1 | ⭐ **Phone lift-off** — bitta telefon Hero'dan Projects'gacha scroll bilan uchib boradi (3.4'da) | Saytning "signature" momenti | Yuqori |
| G2 | ~~**⌘K Command palette**~~ (2026-11-10 olib tashlandi) — klaviatura bilan navigatsiya, email nusxalash, theme, til almashtirish | Dasturchi ekanligingizni ko'rsatadi | O'rta |
| G3 | **App Store uslubidagi case study** — "Get" tugmasi, reyting, screenshot karusel, "What's new" | Mijoz loyihani haqiqiy ilova kabi his qiladi | O'rta |
| G4 | **Jonli mini-prototip** — case study'dagi telefon ichida ilovani bosib ko'rish mumkin | Juda kuchli taassurot | Yuqori |
| G5 | **Spotlight cursor** — dark fonda cursor atrofida yashirin grid/naqsh ko'rinadi | Premium his | Past |
| G6 | **Text scramble** — til/theme almashganda harflar "dekodlanib" o'zgaradi | Texnik kayfiyat | Past |
| G7 | ✅ **Kreativ 404** (2026-11-11) — Android'ning "App isn't responding" dialogi: `Wait` / `Close app` | Esda qoladi, kulgili | Past |
| G8 | **Jonli status** — navbarda "Hozir: kod yozyapman · oxirgi commit 2 soat oldin" (GitHub API) | Saytni "tirik" qiladi | O'rta |
| G9 | **Haptic-style mikro-animatsiyalar** — tugmalar bosilganda iOS'dagidek "spring" siqilish | Mobil his | Past |
| G10 | **Sound design (ixtiyoriy)** — juda past ovozli click/whoosh, standart o'chiq | Immersiv | Past |
