# Portfolio Template — Brand & Experiential Design

A static HTML/CSS/JS portfolio template for an advertising & digital design
graduate focused on **brand identity, experiential design, and campaigns**.
No build tools, frameworks, or server required — just open `index.html` in
a browser, or deploy the folder as-is.

## Structure

```
index.html                Home page — hero, marquee, selected work, about teaser, CTA
work.html                 Full project archive (all project cards)
about.html                Bio, stats, tools/skills, process
contact.html              Contact info + simple form
css/style.css             All styling — colors, fonts & spacing as CSS variables
js/main.js                Mobile nav, scroll reveals, footer year, cursor dot
work/
  brand-identity.html         Project 01 — Brand Identity
  experiential-activation.html Project 02 — Experiential / Activation
  ad-campaign.html            Project 03 — Advertising Campaign
  packaging-system.html       Project 04 — Packaging & Brand System
  environmental-installation.html Project 05 — Environmental Design
  digital-campaign.html       Project 06 — Digital & Social
  _template.html               Blank case-study template — duplicate this for new projects
```

## Customizing content

Every placeholder is wrapped in `[brackets]` — search for `[` across the
project to find everything that needs replacing: your name, bio, resume
link, social URLs, project titles, client names, and case-study copy.

## Adding images

Every image spot is currently a dashed placeholder box (`.img-ph`) that
shows the recommended pixel size, so you can see the layout before you
have final assets. To drop in a real image, replace the placeholder block:

```html
<!-- before -->
<div class="img-ph r-4-3">
  <div class="img-ph-label"><b>Project 01</b>Cover image — 1600×1200</div>
</div>

<!-- after -->
<div class="img-ph r-4-3">
  <img src="../assets/brand-identity/cover.jpg" alt="[Project Title 01] cover image">
</div>
```

Keep the outer `.img-ph` + ratio class (`r-4-3`, `r-16-9`, `r-1-1`, `r-3-4`,
`r-21-9`) so the aspect ratio and rounded corners stay consistent — the
`<img>` fills the box automatically via `object-fit: cover`.

Suggested place to store images: `assets/[project-slug]/`. Recommended sizes
are labeled on each placeholder (covers ~1600×1200, hero banners ~2400×1350,
square crops 1600×1600).

## Adding a new project

1. Duplicate `work/_template.html`, save it as `work/your-project-slug.html`.
2. Replace the placeholders and add/remove `.img-ph` blocks in the
   `.gallery` section for as many extra images as you want.
3. Add a matching `.work-card` link to the grid in both `index.html`
   (Selected Work) and `work.html` (full archive) — copy an existing card
   and update the `href`, image, title and category tag.
4. Update the "Next Project" link at the bottom of the previous project's
   page (and the new project's own "Next Project" link) so the case
   studies keep chaining together.

## Reskinning

All colors, fonts and type sizes live at the top of `css/style.css` under
`:root`. Change `--accent` for a different brand color, or swap the Google
Fonts import + `--font-display` / `--font-body` variables for different
typefaces.

## Contact form

`contact.html` includes a simple form with no backend wired up. Point the
`<form action="...">` at a form service (e.g. Formspree, Getform, Netlify
Forms) to start receiving submissions, or delete that section if you'd
rather rely on the email link alone.

## Deploying

This is a static site — drag-and-drop the folder onto Netlify or Vercel,
or push it to a GitHub repo and enable GitHub Pages. No build step needed.
