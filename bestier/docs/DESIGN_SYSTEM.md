# Bestier Design System

Status: Phase 5 baseline for the four-page, bilingual Bestier front end.

## Design direction

- Luxury, modern and elegant, with generous whitespace and real hotel photography.
- Use the supplied gold and indigo brand direction over warm ivory and restrained charcoal neutrals.
- Keep layouts quiet and editorial. Use motion sparingly and never make hover or animation the only way to discover information.
- Use the supplied logo artwork without editing the original files. The gold lockup is intended for a dark surface; confirm an alternate logo if a light-only placement is required.

## Color tokens

Tokens are scoped to `.bestier-site` so they do not affect other hotel pages.

| Token | Value | Use |
| --- | --- | --- |
| `--bestier-indigo-950` | `#242543` | Main dark indigo surface and primary button |
| `--bestier-indigo-800` | `#37395F` | Secondary indigo surface and hover treatment |
| `--bestier-indigo-700` | `#4A4B75` | Secondary accents and decorative rules |
| `--bestier-gold-700` | `#8A682F` | Dark gold details where more contrast is needed |
| `--bestier-gold-500` | `#C5A45E` | Brand accent, borders and decorative highlights |
| `--bestier-gold-300` | `#E0CC98` | Gold accents on dark indigo surfaces |
| `--bestier-ivory-50` | `#FBF9F4` | Main page background |
| `--bestier-ivory-100` | `#F2EEE5` | Alternate section background |
| `--bestier-white` | `#FFFFFF` | Cards and high-contrast surfaces |
| `--bestier-ink` | `#25242A` | Main body text |
| `--bestier-muted` | `#615F68` | Supporting text |
| `--bestier-border` | `#DDD7CA` | Borders and separators |
| `--bestier-success` | `#28664B` | Success state, paired with text/icon |
| `--bestier-danger` | `#923B35` | Important policy state, paired with text/icon |

### Color use rules

- Body text uses `--bestier-ink`; links use indigo and remain underlined in text blocks.
- Gold is an accent, not small text on ivory. Gold text is reserved for dark indigo backgrounds; gold buttons use dark indigo text.
- Primary buttons use white text on dark indigo. On dark photographic surfaces, use an opaque dark treatment behind text.
- Status meaning must include words or icons; color alone is insufficient.
- Check final text/background contrast during Phase 9 before release.

## Typography

- Headings use locally hosted Noto Serif for Latin text and Noto Serif Thai for Thai glyphs, combined as one CSS family. Body copy uses locally hosted Kanit.
- Font files and SIL Open Font License copies are kept in `bestier/assets/fonts/`; `assets/css/bestier/fonts.css` maps each subset and weight. The page does not request font files from an external service.
- The site-wide text size starts at 1 rem. Change `--bestier-base-font-size` in `assets/css/bestier/tokens.css` to scale the complete type system; role-specific sizes remain separately adjustable in the same token file.
- Explicit type roles are `.bestier-type-body`, `.bestier-type-display`, `.bestier-type-page-title`, `.bestier-type-section-title`, `.bestier-type-card-title`, `.bestier-type-lead`, `.bestier-type-label`, `.bestier-type-meta`, `.bestier-type-small` and `.bestier-type-footer-title`.
- Avoid tight or negative letter spacing on Thai text. After changing the global size, review the narrow mobile layout because larger type may increase page length and line wrapping.

| Role | Responsive size | Weight | Line height |
| --- | --- | --- | --- |
| Display / Home hero | `clamp(2.75em, calc(4vw + 1.25em), 4.5em)` | 600 | 1.2 |
| Page title | `clamp(2.25em, calc(2.5vw + 1.1em), 3.5em)` | 600 | 1.2 |
| Section title | `clamp(1.75em, calc(1.5vw + 0.8em), 2.5em)` | 600 | 1.2 |
| Card title | `clamp(1.25em, calc(0.8vw + 0.8em), 1.5em)` | 600 | 1.2 |
| Body | `--bestier-base-font-size` (default `1rem`) | 400 | 1.7 |
| Lead / intro | `clamp(1.05em, calc(0.5vw + 1em), 1.2em)` | 400 | 1.7 |
| Small labels | `0.8em–0.875em` | 600–700 | inherited |

Maintain one visible H1 per page and a logical H2/H3 sequence.

## Layout and spacing

- Spacing scale: 4, 8, 12, 16, 24, 32, 48, 64, 80 and 112 px.
- Main content maximum width: 76rem; long-form policies: approximately 48rem.
- Desktop grid: 12 columns; tablet: 8 columns; mobile: 4 columns.
- Page gutters: approximately 48 px desktop, 32 px tablet and 20 px mobile.
- Section spacing: approximately 80–112 px desktop, 64 px tablet and 48 px mobile.
- Room photography uses a consistent crop such as 4:3; hero photography may use 16:9 or a wide crop. Adjust `object-position` per image rather than stretching it.
- Do not use fixed heights for text cards or translated content.

## Shape, borders and elevation

- Small controls: 8 px radius; cards and media panels: 16 px; large feature panels: 24 px; chips: pill radius.
- Use 1 px borders in `--bestier-border` on light surfaces.
- Keep shadows soft and limited to elevated controls, cards and the lightbox.
- Focus rings must remain clearly visible against both light and dark surfaces.

## Component specifications

### Header and navigation

- Dark indigo header with gold logo, high-contrast links, language selector and a clear contact action.
- Current page has a non-color indicator such as underline or weight change and `aria-current="page"`.
- Mobile uses a native, keyboard-operable disclosure menu; the menu must not obscure or trap page content.

### Buttons and text links

- Primary: indigo background with white text. Accent: gold background with indigo text, used sparingly.
- Secondary: transparent or white surface with indigo border and text.
- Minimum interactive target: 44 × 44 px. Include visible hover, focus and active states.
- Text links are underlined in paragraphs; icon-only buttons require an accessible name.

### Cards

- White surface on ivory background, thin border, 16 px radius, consistent image ratio and internal spacing.
- Room cards show room name, guest capacity, bed arrangement, relevant room-specific amenities and an inquiry action.
- Facility cards use a short title and factual description. Do not add claims beyond the supplied hotel information.

### Contact actions

- Present each channel with a visible text label, not just an icon.
- Use the supplied phone, email, Facebook, Instagram, LINE and WhatsApp details. The LINE click-through URL needs confirmation before implementation.
- Map action opens the supplied Google Maps URL.

### Accordion and gallery

- Policy disclosure uses native `<details>`/`<summary>` or an equivalent keyboard-accessible control.
- Gallery/lightbox has explicit previous, next and close controls, supports Escape, and keeps focus usable. A direct image link remains a fallback if JavaScript is unavailable.

### Back to Top

- Use a visible text or accessible icon button with a minimum 44 × 44 px target. It must not cover contact actions on mobile.

## Motion and interaction

- Transitions are short and restrained, typically 160–240 ms.
- No autoplay carousel, parallax or hover-only content.
- Respect `prefers-reduced-motion`; smooth scrolling and reveal effects become immediate or are disabled.
- Core page content and navigation remain available without JavaScript.

## Responsive behavior

- Mobile: single-column content, stacked buttons where needed, no horizontal page overflow, readable line lengths and full-width room cards.
- Tablet: two-column cards where content permits; keep menu labels and contact actions visible.
- Desktop: use the 12-column grid, larger image/copy compositions and restrained whitespace.
- Validate bilingual text length, keyboard navigation, focus visibility and image crops at all three sizes during Phase 9.

## Dependencies

- No CSS framework, JavaScript framework, icon package or remote font.
- Use semantic HTML, scoped CSS and native browser controls. External links are limited to hotel contact and map destinations supplied by the user.

## Pending for implementation

- Confirm the LINE click-through URL.
- Review English translations of hotel policies and service descriptions.
- Confirm the final image-to-room mapping and visual crops.
- Confirm wording of the late check-out charge before publishing it.
