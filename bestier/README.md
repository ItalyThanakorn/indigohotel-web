# Bestier Hotel Website

A four-page static website for promoting Bestier Hotel in Hat Yai. It is built with HTML, CSS and plain JavaScript, and provides Thai and English content.

## Preview locally

Serve the repository root through the existing Apache/XAMPP setup, then open:

`http://localhost/indigohotel-web/bestier/index.html`

There is no build step, package installation or backend service. The files can also be hosted as static web files. Set the production host and domain before configuring any canonical or social-sharing URLs.

## Pages

- `index.html` — hotel introduction, highlights, room and facility previews, location and contact actions.
- `rooms.html` — five room categories, occupancy, bed details, room facilities and inquiry links.
- `facilities.html` — in-room amenities, shared services and transport service.
- `location.html` — address, map link, contacts, arrival details and stay policies.

## Project structure

```text
bestier/
  index.html
  rooms.html
  facilities.html
  location.html
  README.md
  assets/fonts/         Local WOFF2 subsets and SIL OFL license files
  docs/                 Design, requirements, sitemap, flows, QA and handover
assets/css/bestier/
  fonts.css             Local Noto Serif, Noto Serif Thai and Kanit font faces
  tokens.css            Scoped color, type and spacing tokens
  site.css              Shared responsive page and component styles
assets/js/bestier/
  language.js           Thai/English selection and saved preference
  interactions.js       Home slideshow, room photo dialog and navigation enhancements
assets/images/bestier/  Existing supplied hotel photos and brand artwork
```

## Updating content

- Edit the page HTML directly. The `data-i18n-th` and `data-i18n-en` attributes hold the paired Thai and English copy; keep both accurate when changing a fact.
- For language-sensitive image alternatives, update `alt`, `data-alt-th` and `data-alt-en` together.
- Contact details, policy copy and links appear in more than one page. Search all four HTML files when changing them so the header, body and footer remain consistent.
- Room facts should match the owner-provided source. The room counts are intentionally not shown as live inventory or availability.
- Change colors and shared visual values in `assets/css/bestier/tokens.css`; page layouts and components belong in `assets/css/bestier/site.css`.
- To enlarge or reduce all website text, edit `--bestier-base-font-size` in `tokens.css` (for example, change `1rem` to `1.0625rem`). The heading, body, label and footer classes use separate type roles, while the tokens provide each role's default size.
- Reuse `.bestier-type-display`, `.bestier-type-page-title`, `.bestier-type-section-title`, `.bestier-type-card-title`, `.bestier-type-body`, `.bestier-type-lead`, `.bestier-type-label`, `.bestier-type-meta`, `.bestier-type-small` and `.bestier-type-footer-title` instead of assigning one-off sizes in page markup.
- Keep JavaScript enhancements progressive: navigation, page content, policy disclosures and contact links should remain usable without JavaScript.

## Image reference

The pages refer to the existing `assets/images/bestier/` files. The current mapping uses:

- Brand: `bestier-logo-lockup.png`
- Hotel/location: `building.JPG`, `front2.JPG`, `counter.jpg`, `breakspace.JPG`
- Rooms: `superiortwin*.jpg`, `superiorking*.jpg`, `business*.jpg`, `triple*.jpg`, `deluxe*.jpg`

Retain the existing filenames and originals. Each photo is referenced from the HTML so its page, alt text and crop can be reviewed together.

## Content clarity

Read `docs/CONTENT_AUDIT.md` before adding hotel facts. It separates information present on the site, details that need hotel confirmation, and optional guest questions that should not be answered by guessing.

## Handover

See the documents in `docs/` for the approved design baseline, architecture, content requirements and audit, user flows, text wireframes, QA record and known release checks. The current site is front-end only: it does not take bookings, process payments, show prices or query room availability.
