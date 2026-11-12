# Bestier Implementation Plan

Status: implementation and documented QA complete for the static front end. Owner review remains for the content items listed in `PROJECT_OVERVIEW.md` and `TESTING.md`.

## Approved implementation boundary

Implement the four-page static front end using the existing HTML/CSS/Vanilla JavaScript stack. Keep changes in `bestier/**`, `assets/css/bestier/**` and `assets/js/bestier/**`. Read existing Bestier photos without modifying them. No external package or library is required.

## Files to create

### Website pages

- `bestier/index.html`
- `bestier/rooms.html`
- `bestier/facilities.html`
- `bestier/location.html`

### Styles

- `assets/css/bestier/site.css`
- Existing `assets/css/bestier/tokens.css` (Phase 5)

### Scripts

- `assets/js/bestier/language.js`
- `assets/js/bestier/interactions.js`

### Documentation

- Existing Phase documents in `bestier/docs/`
- Complete README, testing notes and handover after QA

## Completed work

- Built the shared semantic shell and page metadata for all four pages.
- Added Thai and English content, language selection, and relative page navigation.
- Built responsive scoped styles from the design tokens.
- Added the native image dialog, gallery controls, mobile menu, policy disclosures, and back-to-top link.
- Added hotel facts for rooms, facilities, contacts, location and policies.
- Mapped existing supplied photos to the pages and kept their source files unchanged.
- Checked the site visually at 1440×900, 834×1112, 390×844 and 320×740 in the available Chromium browser.
- Checked JavaScript syntax, HTML metadata, heading count, image alt attributes, local fragments and local file references.
- Recorded file responsibilities, content editing instructions, QA scope and known limitations in the handover documents.

Cross-browser testing across independent browser engines was not available in this environment; see `TESTING.md`.

## Content controls

- Do not display prices; none are supplied.
- Do not implement room availability or reservations.
- Do not present room counts as current availability.
- Use the supplied Google Maps URL.
- Keep check-in/payment and policy wording close to the supplied source; confirm the late check-out boundary before public release.
- Use the supplied LINE ID; verify the direct link with the hotel before release.

## Implemented mitigations

| Risk | Mitigation |
| --- | --- |
| Bilingual text overflows cards | Use content-driven height, fluid spacing and test both languages at mobile/tablet/desktop sizes |
| Gold text is difficult to read on a light surface | Use indigo for text and reserve gold for accents or text on dark indigo |
| A room poster contains text embedded in the image | Use semantic HTML for the same facts and select a clean photo for the main card image |

## Remaining owner checks before public release

| Risk | Mitigation |
| --- | --- |
| Map/contact destination may be outdated | Confirm external destinations, especially the LINE deep link, from a hotel-owned device/account |
| Check-out fee text is ambiguous | Confirm the exact grace period, hourly-fee start and full-day threshold |
| Smoking-fee currency is not specified in the source | Confirm the amount and currency before publication |

## Out of scope

Backend, database, authentication, payment processing, booking engine, reservation management, availability data, external analytics and image transformation.
