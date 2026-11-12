# Bestier Component Specification

## Shared components

| Component | Responsibility | Behavior and accessibility |
| --- | --- | --- |
| Site Header | Brand, main navigation, language control and contact CTA | Desktop links; mobile disclosure menu; active page indicated with `aria-current`; menu control has an accessible name and expanded state |
| Language Switch | Switch the visible Thai/English copy | Buttons expose selected state; update page `lang`; preserve selection between pages; labels remain visible as TH / EN |
| Page Intro | Page title and short context | One H1 per page; content width supports Thai and English without clipping |
| Site Footer | Secondary navigation, address, contact and socials | Every icon has a text label or accessible name; links are keyboard reachable |
| Contact Link | Phone, email, LINE, WhatsApp and social actions | Use descriptive text; provide native `tel:`/`mailto:` actions where applicable; safe external-link attributes |
| Back to Top | Return to document start | Anchor fallback works without JS; enhanced visibility does not cover mobile content |

## Page components

| Component | Used on | Content and layout |
| --- | --- | --- |
| Home Hero | Home | Real hotel photo, brand message and three clear actions: Rooms, Contact, Directions |
| Highlight Card | Home | One verified hotel fact per card; icon is decorative, text communicates the fact |
| Room Card | Home, Rooms | Room name, photo, guest capacity, bed arrangement, relevant amenities and inquiry action |
| Room Gallery | Rooms | Images grouped by room category; thumbnails link to full image fallback; optional lightbox enhancement |
| Facility Group | Home, Facilities | Heading, concise verified details and optional relevant photo |
| Location Panel | Home, Location | Address, nearby points and map action using the provided map URL |
| Arrival Details | Location | Check-in/out times, registration details, payment and deposit information |
| Policy Disclosure | Location | Grouped policy copy, using native disclosure interaction where practical |
| Inquiry Actions | Home, Rooms, Location | Clear choices for contact channels; no booking form or availability promise |

## Visual states

- **Default:** light ivory page surface, white cards, indigo text and restrained gold accents.
- **Hover:** subtle border, color or elevation change; no essential information revealed only on hover.
- **Focus:** visible high-contrast focus ring, not removed.
- **Active/current:** underline or weight in addition to color.
- **Disabled:** avoid disabled-looking contact actions; omit channels that cannot be confirmed.

## Responsive rules

- Header switches to a disclosure menu on narrow layouts.
- Multi-column cards reduce from three columns on wide desktop to two on tablet and one on mobile.
- Contact actions wrap and remain large enough to tap.
- Galleries do not force page-level horizontal scrolling; any carousel is contained and has explicit previous/next controls.
- No component uses fixed-height text containers.

## Content rules

- Use only hotel facts supplied in the project brief and `ข้อมูลโรงแรม.txt`.
- Do not publish room inventory counts as availability.
- Avoid translating or paraphrasing fees and restrictions in a way that changes their meaning.
- Avoid using poster-style room photos as the only source of room facts; provide equivalent text in HTML.
