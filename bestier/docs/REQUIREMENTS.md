# Requirements and Delivery Record

The hotel information source is `ข้อมูลโรงแรม.txt`; the user's confirmation established Thai and English as required languages, front-end-only scope and the supplied Google Maps destination.

| Requirement | Delivery |
| --- | --- |
| Promote the hotel and present clear hotel information | Home page introduction, highlights, room/facility previews and contact actions |
| Four-page multi-page site | Home, Rooms, Facilities, Location & Information |
| Thai and English | Language switch on every page; selection is saved between pages |
| Five room categories, occupancy, beds, facilities and inquiry | Rooms page, with cards reused in the home preview |
| Facility information grouped by service | Facilities page and home highlights |
| Location, contact channels, arrival and policies | Location & Information page; map action uses the supplied URL |
| Responsive desktop, tablet and mobile layouts | Checked visually at four viewport sizes; details in `TESTING.md` |
| Gallery/lightbox and policy accordion | Gallery dialog with controls; native `<details>` disclosures |
| Responsive navigation, contact/social links and back-to-top | Included on the pages |
| Basic SEO and semantic structure | Page-specific title/description, one H1, landmarks, alt text and language metadata |
| No invented rates, booking promises or availability | No rates, booking engine, room inventory claim or backend integration |
| Use existing image assets | Supplied logo and hotel photos referenced in place |
| Requested typefaces and maintainable type sizing | Self-hosted Noto Serif/Noto Serif Thai for headings, Kanit for body; named type-role classes and one global base-size token |

## Optional items not included

- **Auto-advancing room slider:** the page uses a category gallery and explicit lightbox controls so guests browse at their own pace.
- **Scroll-reveal animation:** omitted to keep movement restrained and content immediately available without JavaScript.
- **Embedded map:** replaced by the supplied Google Maps link, avoiding a third-party embed while keeping directions one tap away.

## Pending confirmation

See `PROJECT_OVERVIEW.md` for the check-out fee boundary, smoking-fee currency, LINE destination, English policy translations and production domain checks.
