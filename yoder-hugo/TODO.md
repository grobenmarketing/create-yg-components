# Yoder Hugo Migration - Project TODOs & QA Checklist

## Phase 1: Hugo Setup
- [ ] Install Hugo (if not already installed)
- [ ] Initialize Hugo site (`hugo new site . --force`)
- [ ] Choose/create a base theme or build from scratch
- [ ] Set up `config.toml` with site metadata
- [ ] Configure Tailwind CSS build process

## Phase 2: Convert Includes to Partials
- [ ] Create `layouts/partials/` folder structure
- [ ] Convert `includes/header.html` → `partials/header.html`
- [ ] Convert `includes/footer.html` → `partials/footer.html`
- [ ] Convert `includes/hero-slider.html` → `partials/hero-slider.html`
- [ ] Convert `includes/logo-marquee.html` → `partials/logo-marquee.html`
- [ ] Remove old `includes/` folder after conversion

## Phase 3: Create Data Files
- [ ] Create `data/services.yaml` (5 services with icons, colors, items)
- [ ] Create `data/slides.yaml` (7 hero slider slides)
- [ ] Create `data/nav.yaml` (navigation structure for header)
- [ ] Create `data/social.yaml` (social media links for footer)

## Phase 4: Build Templates
- [ ] Create `layouts/_default/baseof.html` (base template with head, scripts)
- [ ] Create `layouts/index.html` (homepage)
- [ ] Create `layouts/_default/single.html` (default page template)
- [ ] Create `layouts/partials/service-cards.html` (loop over data/services)
- [ ] Create `layouts/partials/breadcrumb.html` (auto-generate from path)
- [ ] Set up section templates for `/services/`, `/about/`, `/resources/`

## Phase 5: Migrate Content
- [ ] Create `content/_index.md` (homepage)
- [ ] Migrate `services/*.html` → `content/services/*.md`
- [ ] Migrate `about/*.html` → `content/about/*.md`
- [ ] Migrate `resources/*.html` → `content/resources/*.md`
- [ ] Migrate standalone pages (contact, quote, payment, upload)

## Phase 6: Assets & Static Files
- [ ] Move `img/` → `static/img/`
- [ ] Move `css/styles.css` → `assets/css/styles.css` (or integrate with Tailwind)
- [ ] Configure Tailwind purge for Hugo output
- [ ] Set up asset pipeline for CSS/JS minification

## Phase 7: Clean Up
- [ ] Remove old HTML files after content migration
- [ ] Remove `js/includes.js` (no longer needed)
- [ ] Remove `js/breadcrumbs.js` (replaced by Hugo partial)
- [ ] Update `tailwind.config.js` for Hugo paths
- [ ] Delete `PAGE_TEMPLATE.html` (replaced by Hugo archetypes)

---

# QA Checklist

## Visual QA (test on localhost:1313)
- [ ] **Homepage**
  - [ ] Header displays with all nav links
  - [ ] Logo links to homepage
  - [ ] Mega menu dropdowns work on hover (desktop)
  - [ ] Mobile hamburger menu opens/closes
  - [ ] Mobile submenus expand/collapse
  - [ ] Hero slider auto-rotates
  - [ ] Slider navigation arrows work
  - [ ] Logo marquee displays (if applicable)
  - [ ] Orange "cargo van" section displays correctly
  - [ ] "Our Story" section with badge displays
  - [ ] Service cards display in 5-column grid
  - [ ] Service cards have hover lift effect
  - [ ] Service cards link to correct pages
  - [ ] Footer displays with contact info
  - [ ] Social icons display and link correctly

- [ ] **Subpages (Services, About, Resources)**
  - [ ] Breadcrumb shows correct path
  - [ ] Header/footer load correctly
  - [ ] Relative paths resolve (images, links)
  - [ ] Page title displays in browser tab

- [ ] **Responsive Design**
  - [ ] Test at 320px (mobile)
  - [ ] Test at 768px (tablet)
  - [ ] Test at 1024px (desktop)
  - [ ] Test at 1440px (large desktop)

## Functional QA
- [ ] All internal links work (no 404s)
- [ ] Phone link (`tel:`) works on mobile
- [ ] Email link (`mailto:`) opens email client
- [ ] External links open in new tab
- [ ] "Get a Quote" button links correctly
- [ ] Form pages load (contact, quote, payment, upload)

## Performance QA
- [ ] Run `hugo --minify` build without errors
- [ ] Check page load time (should be <1s)
- [ ] Verify CSS is purged (no unused Tailwind classes)
- [ ] Images are optimized / use Hugo image processing
- [ ] Check Lighthouse score (aim for 90+)

## SEO QA
- [ ] Each page has unique `<title>`
- [ ] Meta descriptions set via front matter
- [ ] Sitemap generated (`/sitemap.xml`)
- [ ] robots.txt configured
- [ ] Open Graph tags for social sharing

## Deployment QA
- [ ] Site builds successfully with `hugo`
- [ ] Test deployment to staging (Netlify/Vercel/GitHub Pages)
- [ ] Verify all paths work on deployed site
- [ ] Check for mixed content warnings (HTTP/HTTPS)
- [ ] Confirm 301 redirects if URLs changed

---

# Notes

**Original line counts (before Hugo):**
- styles.css: 69 lines (already refactored with CSS variables)
- index.html: 209 lines
- header.html: 378 lines
- hero-slider.html: 350 lines

**Target after Hugo migration:**
- Reduce repetitive HTML by ~400+ lines using data loops
- Single source of truth for nav, services, slides
- Easier content updates via Markdown files

**Useful Hugo commands:**
```bash
hugo new site . --force    # Initialize in existing folder
hugo server -D             # Run dev server with drafts
hugo --minify              # Production build
hugo new content/about/team.md  # Create new content
```
