# Website Rebuild Strategy: Component-Based Architecture

## Executive Summary

This document outlines a comprehensive strategy to rebuild all pages from `good-yg-website` using the component gallery in `create-yg-components`. The goal is to migrate from a monolithic HTML structure to a modular, component-based architecture that improves maintainability, consistency, and developer efficiency.

---

## Current State Analysis

### Component Gallery Assets (create-yg-components)
**Available Components:** 15 reusable partials
- 3 Header variants (Classic, Alternative, Inverted)
- 2 Hero sections (Green Gradient, Our Story)
- 4 Content display components
- 2 Interactive galleries (Slider, Filterable Gallery)
- 2 Service displays
- Footer component

**Build System:** Python-based template assembler with include syntax

**Design System:**
- Typography: Red Hat Display
- Color Palette: Green (#00953b), Orange (#f9a01f), Teal (#1cd59d)
- Responsive: Mobile-first with 768px breakpoint

### Website To Rebuild (good-yg-website)
**Active Pages:** 12 fully-developed pages
**Coming Soon Pages:** 5 placeholder pages
**Total Unique Sections:** ~30+ distinct content patterns

---

## Component Gap Analysis

### ✅ Components We Already Have (Ready to Use)

| Component | Location | Ready For |
|-----------|----------|-----------|
| Header (Classic) | `/partials/header.html` | All pages |
| Header Alternative | `/partials/header-alternative.html` | Modern redesigns |
| Header Inverted | `/partials/header-inverted.html` | Alternative branding |
| Footer | `/partials/footer.html` | All pages |
| Hero Green Gradient | `/partials/hero-green-gradient.html` | Service pages |
| Hero Our Story | `/partials/hero-our-story.html` | Homepage |
| Slider | `/partials/slider.html` | Homepage |
| Gallery (Filterable) | `/partials/gallery.html` | Signs, Vehicle Graphics |
| Service Cards | `/partials/service-cards.html` | Homepage |
| Content Box Left | `/partials/content-box-left.html` | Service pages |
| Content Box Right | `/partials/content-box-right.html` | Service pages |
| Feature Orange | `/partials/feature-orange.html` | Marketing sections |

### ⚠️ Components Needed (Gaps to Fill)

#### **HIGH PRIORITY - Core Page Building Blocks**

1. **Hero with Form (Split Layout)**
   - **Needed for:** Vehicle Wraps page
   - **Features:** Left side title/text, right side quote form
   - **Template exists in:** `/tmp/good-yg-website/includes/components/hero-with-form.html`
   - **Action:** Port to component gallery

2. **Service Grid (Image Overlays)**
   - **Needed for:** Vehicle Wraps (5-card grid with hover overlays)
   - **Features:** Image backgrounds with centered overlay text
   - **Template exists in:** `/tmp/good-yg-website/includes/components/service-grid.html`
   - **Action:** Port to component gallery

3. **Process Steps Section**
   - **Needed for:** Vehicle Wraps (7-step "What to Expect" section)
   - **Features:** Numbered steps with side-by-side images
   - **Template exists in:** `/tmp/good-yg-website/includes/components/process-steps.html`
   - **Action:** Port to component gallery

4. **FAQ Accordion**
   - **Needed for:** Vehicle Wraps page
   - **Features:** Expandable Q&A with toggle icons
   - **Current status:** Inline code in vehicle-wraps.html
   - **Action:** Extract as reusable component

5. **Contact Form (Embedded)**
   - **Needed for:** Contact, Careers, Upload pages
   - **Variants:** Tally.so iframe, Cognito Forms iframe, Quote Form
   - **Action:** Create component with configurable embed URL

6. **Google Maps Embed**
   - **Needed for:** Homepage, Vehicle Wraps
   - **Features:** Responsive iframe with location map
   - **Action:** Create reusable map component

7. **Info Grid (Contact Info)**
   - **Needed for:** Contact page
   - **Features:** Phone numbers section + Team member table
   - **Action:** Create flexible info display component

8. **Warranty Badge Component**
   - **Needed for:** Vehicle Wraps page
   - **Features:** Large circular "3 YEAR WARRANTY" badge with styling
   - **Action:** Create SVG-based badge component

9. **Feature Checklist**
   - **Needed for:** Vehicle Wraps page
   - **Features:** List items with checkmark icons
   - **Action:** Create list component with icon support

10. **CTA Section (Get a Quote)**
    - **Needed for:** Multiple pages
    - **Template exists in:** `/tmp/good-yg-website/includes/components/cta-section.html`
    - **Action:** Port to component gallery

#### **MEDIUM PRIORITY - Page-Specific Components**

11. **Image Grid (8-Column)**
    - **Needed for:** Apparel page
    - **Features:** Responsive grid of category images
    - **Action:** Create configurable grid component

12. **Portfolio Grid (3-Column)**
    - **Needed for:** Vehicle Wraps page
    - **Features:** Simple 3-column portfolio display
    - **Action:** Enhance existing gallery component

13. **Hero Simple (Centered)**
    - **Needed for:** Contact, Careers, Upload pages
    - **Template exists in:** `/tmp/good-yg-website/includes/components/hero-simple.html`
    - **Action:** Port to component gallery

14. **Filter Buttons**
    - **Needed for:** Vehicle Graphics page (4 filter options)
    - **Current status:** Already in `/partials/gallery.html`
    - **Action:** Make filter options configurable

15. **Abstract Waves SVG**
    - **Needed for:** Homepage section dividers
    - **Current status:** Inline SVG in good-yg-website
    - **Action:** Extract as reusable decorative component

#### **LOW PRIORITY - Enhancement Components**

16. **High-Intent Contact Form**
    - **Needed for:** Future conversion optimization
    - **Template exists in:** `/tmp/good-yg-website/includes/components/contact-form-high-intent.html`
    - **Action:** Port when ready to deploy

17. **Horizontal Rule Divider**
    - **Needed for:** Section separators
    - **Action:** Simple CSS component

18. **Badge/Emblem (Since 1976)**
    - **Needed for:** Homepage Our Story section
    - **Action:** Create SVG component

---

## Rebuild Strategy by Page

### 🏠 **HOMEPAGE (index.html)** - Complexity: High

**Current Components:**
- ✅ Header (have)
- ✅ Hero Slider (have)
- ✅ Our Story Section (have - `/partials/hero-our-story.html`)
- ⚠️ Badge/Emblem SVG (need)
- ⚠️ Featured Image Section (need - similar to Feature Orange)
- ✅ Service Cards Grid (have - `/partials/service-cards.html`)
- ⚠️ Google Maps (need)
- ⚠️ Abstract Waves SVG (need)
- ✅ Footer (have)

**Build Order:**
1. Use existing: Header + Slider + Hero Our Story + Service Cards + Footer
2. Create: Badge emblem component
3. Adapt: Feature section for image + mission text
4. Create: Maps embed component
5. Create: Waves SVG component
6. Assemble page using template + includes

**Estimated Effort:** Medium (60% components ready)

---

### 📋 **SERVICES PAGE (services.html)** - Complexity: Low

**Current Components:**
- ✅ Header (have)
- ✅ Hero Section (have - `/partials/hero-green-gradient.html`)
- ✅ Alternating Cards (have - content-box-left + content-box-right)
- ✅ Footer (have)

**Build Order:**
1. Use: Header + Hero Green Gradient + Footer
2. Use: Content Box Left/Right alternating for 3 service cards
3. Assemble page

**Estimated Effort:** Low (100% components ready)

---

### 📞 **CONTACT PAGE (contact.html)** - Complexity: Low

**Current Components:**
- ✅ Header (have)
- ⚠️ Hero Simple (need - easy to create)
- ⚠️ Contact Form Embed (need)
- ⚠️ Info Grid (need - phone numbers + team table)
- ✅ Footer (have)

**Build Order:**
1. Create: Hero Simple component
2. Create: Form Embed component (Tally.so iframe)
3. Create: Info Grid component (2-column: phones + team table)
4. Assemble page

**Estimated Effort:** Low (50% ready, missing components are simple)

---

### 🪧 **SIGNS PAGE (signs.html)** - Complexity: Medium

**Current Components:**
- ✅ Header (have)
- ✅ Hero Section (have)
- ✅ Content Cards x5 (have - content-box-left/right alternating)
- ✅ Filterable Gallery (have - `/partials/gallery.html`)
- ✅ Footer (have)

**Build Order:**
1. Use: Header + Hero + Footer
2. Use: Content boxes for 5 alternating service cards
3. Adapt: Filterable gallery for 37 images (already supports filtering)
4. Assemble page

**Estimated Effort:** Low (95% components ready, just need to customize gallery images)

---

### 🚗 **VEHICLE WRAPS PAGE (vehicle-wraps.html)** - Complexity: Very High

**Current Components:**
- ✅ Header (have)
- ⚠️ Hero with Form (need)
- ⚠️ Warranty Badge (need)
- ⚠️ Feature Checklist (need)
- ⚠️ Services Grid (need - 5-card overlay)
- ⚠️ Warranty Section (need - custom content block)
- ⚠️ Process Steps Section (need - 7 steps)
- ⚠️ FAQ Accordion (need)
- ⚠️ Get a Quote CTA (need)
- ⚠️ Portfolio Grid (need - 3-column)
- ⚠️ Google Maps (need)
- ✅ Footer (have)

**Build Order:**
1. Create: Hero with Form component
2. Create: Warranty Badge SVG component
3. Create: Feature Checklist component
4. Create: Service Grid (5-card overlay)
5. Create: Process Steps component
6. Create: FAQ Accordion component
7. Create: CTA Section component
8. Create: Portfolio Grid component
9. Create: Maps Embed component
10. Assemble page with all components

**Estimated Effort:** High (Only 20% ready - most complex page)

---

### 👕 **APPAREL PAGE (apparel.html)** - Complexity: Low

**Current Components:**
- ✅ Header (have)
- ✅ Hero Section (have)
- ✅ Main Content Card (have - content-box-left)
- ⚠️ 8-Column Image Grid (need - simple grid)
- ✅ Footer (have)

**Build Order:**
1. Use: Header + Hero + Content Box + Footer
2. Create: 8-column responsive image grid component
3. Assemble page

**Estimated Effort:** Low (80% ready)

---

### 📄 **BUSINESS FORMS PAGE (business-forms.html)** - Complexity: Low

**Current Components:**
- ✅ Header (have)
- ✅ Hero Section (have)
- ✅ Six Alternating Cards (have - content-box-left/right)
- ✅ Footer (have)

**Build Order:**
1. Use: Header + Hero + Footer
2. Use: Content boxes alternating for 6 service cards
3. Assemble page

**Estimated Effort:** Low (100% components ready)

---

### 🖨️ **COMMERCIAL PRINTING PAGE (commercial-printing.html)** - Complexity: Low

**Current Components:**
- ✅ Header (have)
- ✅ Hero Section (have)
- ✅ Four Alternating Cards (have - content-box-left/right)
- ✅ Footer (have)

**Build Order:**
1. Use: Header + Hero + Footer
2. Use: Content boxes for 4 service cards
3. Assemble page

**Estimated Effort:** Low (100% components ready)

---

### 🎁 **PROMOTIONAL PRODUCTS PAGE (promotional-products.html)** - Complexity: Low

**Current Components:**
- ✅ Header (have)
- ✅ Hero Section (have)
- ✅ Single Content Card (have - content-box-left)
- ✅ Footer (have)

**Build Order:**
1. Use: Header + Hero + Content Box + Footer
2. Assemble page

**Estimated Effort:** Low (100% components ready)

---

### 🚙 **VEHICLE GRAPHICS PAGE (vehicle-graphics.html)** - Complexity: Medium

**Current Components:**
- ✅ Header (have)
- ✅ Hero Section (have)
- ✅ Content Section (have - can use existing content box)
- ⚠️ Filter Buttons (need - 4 options instead of 3)
- ✅ Masonry Gallery (have - adapt existing gallery)
- ✅ Footer (have)

**Build Order:**
1. Use: Header + Hero + Footer
2. Enhance: Gallery component to support 4 filter options
3. Customize: Gallery with 22 portfolio images
4. Assemble page

**Estimated Effort:** Low (90% ready, minor gallery customization)

---

### 💼 **CAREERS PAGE (careers.html)** - Complexity: Low

**Current Components:**
- ✅ Header (have)
- ⚠️ Hero Simple (need)
- ⚠️ Form Embed (need - Tally.so)
- ✅ Footer (have)

**Build Order:**
1. Create: Hero Simple component
2. Reuse: Form Embed component from Contact page
3. Assemble page

**Estimated Effort:** Low (once Contact page components are done)

---

### 📤 **UPLOAD PAGE (upload.html)** - Complexity: Low

**Current Components:**
- ✅ Header (have)
- ⚠️ Hero Simple (need)
- ⚠️ Form Embed (need - Cognito Forms)
- ✅ Footer (have)

**Build Order:**
1. Use: Hero Simple from Contact/Careers
2. Use: Form Embed with different iframe URL
3. Assemble page

**Estimated Effort:** Low (once Contact page components are done)

---

## Recommended Build Sequence

### Phase 1: Foundation Components (Week 1)
**Goal:** Create missing high-priority components

1. **Hero Simple** - Used by Contact, Careers, Upload pages
2. **Form Embed** - Used by Contact, Careers, Upload pages
3. **Maps Embed** - Used by Homepage, Vehicle Wraps
4. **CTA Section** - Reusable across pages
5. **Abstract Waves SVG** - Homepage decorator

**Deliverable:** 5 new reusable components

---

### Phase 2: Easy Wins - Service Pages (Week 2)
**Goal:** Rebuild simple pages using existing components

1. ✅ **Services Page** (100% ready)
2. ✅ **Business Forms Page** (100% ready)
3. ✅ **Commercial Printing Page** (100% ready)
4. ✅ **Promotional Products Page** (100% ready)
5. ⚠️ **Apparel Page** (needs 8-column grid - simple)

**Deliverable:** 5 pages rebuilt

---

### Phase 3: Gallery Pages (Week 2)
**Goal:** Rebuild pages with filterable galleries

1. ✅ **Signs Page** (95% ready, customize gallery)
2. ⚠️ **Vehicle Graphics Page** (90% ready, enhance filters)

**Deliverable:** 2 pages rebuilt

---

### Phase 4: Form Pages (Week 3)
**Goal:** Rebuild pages with embedded forms

1. ⚠️ **Contact Page** (needs Info Grid component)
2. ⚠️ **Careers Page** (reuses Contact components)
3. ⚠️ **Upload Page** (reuses Contact components)

**Deliverable:** 3 pages rebuilt + 1 new component (Info Grid)

---

### Phase 5: Homepage (Week 3)
**Goal:** Rebuild most visible page

1. ⚠️ **Homepage** (needs Badge, Maps, Waves components)

**Deliverable:** 1 page rebuilt + 3 new components

---

### Phase 6: Vehicle Wraps - Complex Page (Week 4)
**Goal:** Build most feature-rich page with all new components

**New Components Needed:**
1. Hero with Form
2. Warranty Badge
3. Feature Checklist
4. Services Grid (overlay cards)
5. Process Steps Section
6. FAQ Accordion
7. Portfolio Grid (3-column)

**Deliverable:** 1 page rebuilt + 7 new components

---

### Phase 7: Placeholder Pages (Week 5)
**Goal:** Build content for "Coming Soon" pages

1. About Us
2. Large Format
3. Print & Promo
4. Portfolio
5. Resources

**Deliverable:** 5 new pages (content strategy required)

---

## Component Development Guidelines

### Component Naming Convention
```
/partials/[category]-[name]-[variant].html
```

**Examples:**
- `hero-simple-centered.html`
- `form-embed-tally.html`
- `grid-image-8col.html`
- `badge-warranty-circular.html`

### Component Structure Template
```html
<!-- Component: [Name] -->
<!-- Description: [What it does] -->
<!-- Used in: [List of pages] -->
<!-- Dependencies: [CSS/JS files needed] -->

<section class="[component-class]">
    <!-- Component content -->
</section>

<!-- End Component: [Name] -->
```

### CSS Organization
```
css/
├── component-gallery.css          # Main styles
├── components/
│   ├── hero-simple.css
│   ├── form-embed.css
│   ├── maps-embed.css
│   ├── faq-accordion.css
│   ├── process-steps.css
│   ├── service-grid.css
│   ├── warranty-badge.css
│   ├── feature-checklist.css
│   └── ...
```

### JavaScript Organization
```
js/
├── component-gallery.js           # Existing slider + gallery
├── faq-accordion.js               # FAQ toggle logic
├── filter-buttons.js              # Multi-option filtering
└── ...
```

---

## Migration Checklist

### For Each Page:

- [ ] **1. Audit existing page**
  - Identify all sections
  - Map to existing components
  - Note missing components

- [ ] **2. Create missing components**
  - Extract from good-yg-website
  - Refactor as reusable partials
  - Add to `/partials/` directory
  - Create corresponding CSS in `/css/components/`

- [ ] **3. Create page template**
  - Create in `template-[page-name].html`
  - Add `<!-- INCLUDE: component-name -->` comments
  - Define page-specific structure

- [ ] **4. Test build**
  - Run `python build.py`
  - Check generated HTML output
  - Verify all includes resolve

- [ ] **5. Style verification**
  - Check responsive design
  - Verify color scheme consistency
  - Test on multiple screen sizes

- [ ] **6. Interactive features**
  - Test forms (if applicable)
  - Test galleries/filtering (if applicable)
  - Test accordions/toggles (if applicable)

- [ ] **7. Content migration**
  - Copy text content from original
  - Migrate images to new structure
  - Update image paths

- [ ] **8. Final QA**
  - Cross-browser testing
  - Accessibility check
  - Performance check
  - Compare with original page

---

## Success Metrics

### Component Reusability
**Target:** Each component used on 2+ pages
**Current Best:** Service Cards (used on Homepage)

### Build Time
**Current:** Manual HTML editing for each page
**Target:** `python build.py` generates all pages in <5 seconds

### Maintenance Time
**Current:** Update header across 12 files individually
**Target:** Update `/partials/header.html` once, rebuild

### Code Consistency
**Target:** All pages use same header, footer, hero patterns
**Benefit:** Unified user experience

---

## Risk Assessment & Mitigation

### Risk 1: JavaScript Conflicts
**Issue:** Multiple components with different JS libraries
**Mitigation:**
- Namespace all custom JS
- Use single Swiper instance globally
- Test component isolation

### Risk 2: CSS Specificity Wars
**Issue:** Component styles conflicting with page styles
**Mitigation:**
- Use BEM naming convention
- Scope component styles with unique class prefixes
- Avoid `!important` declarations

### Risk 3: Content Updates During Migration
**Issue:** Original site gets updated while rebuilding
**Mitigation:**
- Freeze good-yg-website during migration
- Document all content changes needed
- Migrate page-by-page to minimize downtime

### Risk 4: Form Embeds Breaking
**Issue:** Tally.so/Cognito Forms iframe URLs change
**Mitigation:**
- Make embed URLs configurable
- Test all forms after migration
- Have backup contact email

### Risk 5: Missing Components Discovered Late
**Issue:** Unique elements found during migration
**Mitigation:**
- Complete full audit before starting (✅ Done)
- Budget 20% extra time for unknowns
- Create components iteratively

---

## Tools & Automation

### Build Script Enhancements
**Current:** `build.py` with basic include system
**Suggested Improvements:**
1. Add component validation (check for missing partials)
2. Add CSS minification option
3. Add auto-reload on file changes (for development)
4. Generate sitemap.xml automatically
5. Add image optimization pass

### Development Workflow
```bash
# 1. Create new component
touch partials/hero-simple.html
touch css/components/hero-simple.css

# 2. Edit component
vim partials/hero-simple.html

# 3. Add to template
echo "<!-- INCLUDE: hero-simple -->" >> template-contact.html

# 4. Build
python build.py

# 5. Preview
open contact.html
```

### Testing Checklist Script
Create `test-components.sh`:
```bash
#!/bin/bash
echo "Testing component builds..."
python build.py
echo "Checking for broken includes..."
grep -r "INCLUDE:" index.html && echo "ERROR: Unresolved includes found"
echo "Validating HTML..."
# Add HTML validator here
echo "Done!"
```

---

## Next Steps

### Immediate Actions (This Week)
1. ✅ **Complete this strategic analysis** (Done)
2. **Review and approve strategy** with team
3. **Prioritize Phase 1 components** to build first
4. **Set up development branch** for component work
5. **Create component development standards** document

### Short Term (Next 2 Weeks)
1. Build Phase 1 Foundation Components
2. Rebuild Phase 2 Service Pages
3. Rebuild Phase 3 Gallery Pages
4. Begin testing and QA process

### Long Term (Month 2)
1. Complete all page migrations
2. Build placeholder pages with real content
3. Performance optimization pass
4. Consider migration to Hugo static site generator

---

## Conclusion

**Total Pages to Rebuild:** 12 active + 5 placeholder = 17 pages

**Component Inventory:**
- ✅ **Already Have:** 12 components (40% of needs)
- ⚠️ **Need to Build:** 18 components (60% of needs)

**Complexity Assessment:**
- 🟢 **Low Complexity:** 8 pages (66% ready on average)
- 🟡 **Medium Complexity:** 3 pages (80% ready)
- 🔴 **High Complexity:** 1 page (Vehicle Wraps - 20% ready)

**Estimated Timeline:** 4-5 weeks for full migration

**Key Success Factor:** Prioritize building foundation components first (Hero Simple, Form Embed, Maps) as they unlock multiple pages quickly.

**Biggest Win:** Once complete, any site-wide change (header update, footer change, new CTA) can be made in ONE place and rebuilt across all 17 pages in seconds.

---

## Appendix: Component-to-Page Matrix

| Component | Homepage | Services | Contact | Signs | Wraps | Apparel | Forms | Printing | Promo | Graphics | Careers | Upload |
|-----------|----------|----------|---------|-------|-------|---------|-------|----------|-------|----------|---------|--------|
| Header | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| Footer | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| Hero Green | - | ✅ | - | ✅ | - | ✅ | ✅ | ✅ | ✅ | ✅ | - | - |
| Hero Simple | - | - | ✅ | - | - | - | - | - | - | - | ✅ | ✅ |
| Hero Our Story | ✅ | - | - | - | - | - | - | - | - | - | - | - |
| Hero with Form | - | - | - | - | ✅ | - | - | - | - | - | - | - |
| Slider | ✅ | - | - | - | - | - | - | - | - | - | - | - |
| Gallery (Filter) | - | - | - | ✅ | - | - | - | - | - | ✅ | - | - |
| Service Cards | ✅ | - | - | - | - | - | - | - | - | - | - | - |
| Content Box L/R | - | ✅ | - | ✅ | - | ✅ | ✅ | ✅ | ✅ | ✅ | - | - |
| Maps Embed | ✅ | - | - | - | ✅ | - | - | - | - | - | - | - |
| Form Embed | - | - | ✅ | - | ✅ | - | - | - | - | - | ✅ | ✅ |
| FAQ Accordion | - | - | - | - | ✅ | - | - | - | - | - | - | - |
| Process Steps | - | - | - | - | ✅ | - | - | - | - | - | - | - |
| Service Grid | - | - | - | - | ✅ | - | - | - | - | - | - | - |
| Warranty Badge | - | - | - | - | ✅ | - | - | - | - | - | - | - |
| Feature Checklist | - | - | - | - | ✅ | - | - | - | - | - | - | - |
| CTA Section | - | - | - | - | ✅ | - | - | - | - | - | - | - |
| Portfolio Grid | - | - | - | - | ✅ | - | - | - | - | - | - | - |
| Info Grid | - | - | ✅ | - | - | - | - | - | - | - | - | - |
| 8-Col Image Grid | - | - | - | - | - | ✅ | - | - | - | - | - | - |
| Waves SVG | ✅ | - | - | - | - | - | - | - | - | - | - | - |
| Badge Emblem | ✅ | - | - | - | - | - | - | - | - | - | - | - |

**Total Component Uses:** 68 instances across 12 pages
**Average Components per Page:** 5.6 components
**Most Reused Component:** Header & Footer (12 uses each)
**Most Complex Page:** Vehicle Wraps (10 unique components)