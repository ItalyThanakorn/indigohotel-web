# Bestier Website Project Overview

## Purpose

Promote Bestier Hotel in Hat Yai and make its room, facility, location, policy and contact information easy to browse in Thai or English.

## Delivered scope

- Four static pages: Home, Rooms, Facilities, and Location & Information.
- Responsive navigation, language control, real hotel photography, room photo gallery with a lightbox, policy disclosures, map and contact links.
- HTML/CSS/Vanilla JavaScript only. No build process, added dependency, backend, database, booking flow, payment flow, price or live availability.
- Self-hosted Noto Serif/Noto Serif Thai heading glyphs and Kanit body font, with local OFL license files; no font CDN is called.
- Existing images are referenced in place; originals are not changed.

## Main files

| File or folder | Responsibility |
| --- | --- |
| `bestier/*.html` | Page structure, Thai/English copy, metadata, photos and contact/policy links |
| `assets/css/bestier/tokens.css` | Bestier-scoped visual tokens |
| `assets/css/bestier/fonts.css` | Local Latin/Thai font faces and weights |
| `assets/css/bestier/site.css` | Responsive layout, shared components and page styles |
| `assets/js/bestier/language.js` | Language selection, document language and saved preference |
| `assets/js/bestier/interactions.js` | Gallery/lightbox and progressive enhancements |
| `assets/images/bestier/` | Existing hotel photos and logo artwork |
| `bestier/assets/fonts/` | Self-hosted WOFF2 subsets and font licenses |

## Content and release checks

The HTML follows the information provided by the hotel. Before public release, ask the hotel to confirm:

1. The late check-out policy, including whether 12:00–13:00 is a grace period and when a full-day charge applies.
2. The currency for the source's smoking charge of 5,000 (the page currently withholds the number until this is confirmed).
3. The current LINE account URL. The site uses the project's existing `line.me/ti/p/@bestier` destination pattern for the supplied `@Bestier` ID; the destination was not independently confirmed.
4. The English translations of fees and restrictions, and the final map/contact destinations.
5. The production domain and host before adding canonical URLs or absolute share metadata.

See [CONTENT_AUDIT.md](CONTENT_AUDIT.md) for other guest-facing details that could otherwise create unclear expectations.

## Current validation limits

The pages were reviewed in the available Chromium-based browser at desktop, tablet and mobile viewport sizes. Cross-browser testing with other engines/devices and validation of external destinations require a separate release check. See `TESTING.md` for the recorded scope.
