# QA and Testing Record

## Checks completed

- Opened and reviewed all four pages in the local Chromium-based browser.
- Changed language to English and back to Thai; confirmed the preference persisted across page navigation.
- Opened the room gallery and changed the selected image; opened a policy disclosure; opened the mobile navigation.
- Confirmed Thai and English content on all four pages and re-reviewed the local Kanit and Noto Serif/Noto Serif Thai setup. Visually reviewed font layout in Thai at 320×740 on all four pages, in English at 320×740 on Home, and at 1440×900 and 834×1112 on Location.
- No visible page-level horizontal overflow was observed in those viewport checks.
- Requested the 3 Bestier CSS files and all 8 WOFF2 files through the local XAMPP host; each returned HTTP 200 and fonts reported `font/woff2`.
- Calculated contrast for core text/token pairs: body ink on ivory 14.63:1, muted copy on ivory 5.97:1, gold eyebrow on ivory 4.87:1, white on indigo 14.78:1 and indigo on gold button 6.23:1.
- `node --check` passed for `assets/js/bestier/language.js` and `assets/js/bestier/interactions.js`.
- Static checks passed for each page having one H1, language/viewport/title/description metadata, image alt text, resolved page fragments and existing local `src`/`href` targets.

## Not verified in this environment

- Independent browser engines (Firefox, Safari and Edge) and physical devices.
- External destination ownership/current status for Google Maps, LINE, WhatsApp and social accounts. The Maps URL was provided by the user; the LINE URL follows an existing project pattern.
- Screen-reader testing, full-page/formal color-contrast audit and automated accessibility audit. The contrast values above cover selected token pairs only.
- Production-host behavior, domain metadata, real booking/availability data or any backend integration.

## Release content checks

- Confirm late check-out grace period, hourly fee and full-day threshold with the hotel.
- Confirm currency for the source's smoking fee of 5,000.
- Have a hotel owner review English policies and fees, and verify the LINE URL and social links.
- Confirm the production domain before configuring absolute canonical or social-sharing metadata.
