# Bestier Front-end Architecture

## Overview

Bestier is a static, multi-page front end built with HTML5, CSS3 and Vanilla JavaScript. It has no backend, database, build step, framework, package manager or new external dependency. Each page must render its primary content and navigation without JavaScript.

## Folder structure

```text
bestier/
  index.html
  rooms.html
  facilities.html
  location.html
  docs/
  assets/fonts/            Self-hosted WOFF2 subsets and font licenses
assets/
  css/bestier/
    fonts.css
    tokens.css
    site.css
  js/bestier/
    language.js
    interactions.js
```

Hotel photos remain in the existing read-only `assets/images/bestier/` folder. Do not rename, replace, move or edit those original assets.

## Page responsibilities

- `index.html`: introduction, highlights, room and facilities previews, location preview and contact actions.
- `rooms.html`: the five room categories, capacity, bed arrangement, room-specific amenities and inquiry actions.
- `facilities.html`: grouped room amenities, reception/building facilities and local transport service.
- `location.html`: address, map action, contact channels, arrival details and stay policies.

Each page uses semantic landmarks, one H1, unique title/description metadata, a consistent header/footer and relative links between pages.

## CSS architecture

- `tokens.css` defines colors, typography, spacing, radii, shadows and container sizes under `.bestier-site`.
- `fonts.css` defines locally served Noto Serif/Noto Serif Thai heading subsets and Kanit body subsets; it makes no font CDN requests.
- `site.css` owns the page layout, BEM-style components and responsive states.
- Every page has `<body class="bestier-site bestier-type-body">` and loads only the Bestier stylesheets.
- Component selectors use a `bestier-` prefix or scoped BEM blocks. Avoid broad selectors and rules that can affect other hotel pages.
- Responsive rules are organized mobile-first. Use fluid typography and content-driven heights for bilingual copy.

## JavaScript architecture

The exact production host is not set. To avoid relying on module MIME configuration, use small classic scripts with `defer` and wrap each file in an IIFE; no variables are added to the global scope.

- `language.js`: initializes Thai/English from a saved preference or browser language, switches paired language content, updates `<html lang>`, and stores only the language preference in local storage.
- `interactions.js`: progressive enhancements for the home hero slideshow, room photo dialog and Back to Top. The slideshow pauses while hovered, focused or hidden, respects reduced-motion preference, and leaves the first banner image visible without JavaScript. Native links, `<details>` disclosures and the mobile navigation remain usable without it.

Do not duplicate page content in JavaScript. Text and page structure live in the HTML; the language script toggles the paired language spans.

## Navigation and URLs

- Home: `bestier/index.html`
- Rooms: `bestier/rooms.html`
- Facilities: `bestier/facilities.html`
- Location & Information: `bestier/location.html`

All internal links are relative. External destinations are the hotel contact channels and the Google Maps URL supplied by the user. Links opening another tab use `rel="noopener noreferrer"`.

## Accessibility and progressive enhancement

- Use native links/buttons, visible focus, descriptive labels, keyboard operation and an appropriate language attribute.
- Gallery controls have accessible names and keyboard handling. Informative photographs have concise alt text in both languages; decorative photographs use empty alt text.
- Policy disclosures use native `<details>`/`<summary>` where possible.
- Respect reduced-motion preferences. Core content, contacts and navigation do not depend on animations or JavaScript.

## SEO and external services

- Set a unique title, description, language and semantic heading structure per page.
- Do not add a canonical URL or absolute Open Graph URL until a public domain is confirmed.
- Google Maps is an external link; no map iframe or third-party script is needed.
- No analytics, forms, cookies or personal-data collection are in this front-end scope.

## Known constraints

- Production host, domain and minimum browser versions are not specified.
- Page-level language content requires human review, especially policies and fees.
- The LINE ID is supplied; use the existing project destination pattern and verify the link during QA.
- Original images are read-only. Do not create optimized derivatives in the image folder without an approved scope change.
