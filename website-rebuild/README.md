# Website Rebuild Workspace

This folder contains everything needed to rebuild the good-yg-website pages using the component gallery.

## 📁 Folder Structure

```
website-rebuild/
├── README.md                 # This file
├── build.py                  # Build script (generates HTML from templates)
├── templates/                # Page templates (HTML with INCLUDE comments)
│   ├── services.html
│   ├── business-forms.html
│   ├── commercial-printing.html
│   ├── promotional-products.html
│   ├── signs.html
│   └── ... (more pages as we build them)
├── output/                   # Generated HTML files (built pages)
│   └── (generated files appear here after running build.py)
├── partials/                 # Reusable component partials
│   ├── header.html
│   ├── footer.html
│   ├── hero-green-gradient.html
│   ├── content-box-left.html
│   ├── content-box-right.html
│   └── ... (15 existing components)
├── css/                      # Stylesheets
│   ├── component-gallery.css
│   ├── header-alternative.css
│   └── header-inverted.css
├── js/                       # JavaScript files
│   └── component-gallery.js
└── img/                      # Images and assets
    ├── logo/
    ├── slider/
    └── ... (all image assets)
```

## 🚀 Quick Start

### 1. Create a Page Template

Create a new file in `templates/` folder with the page structure:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Page Title - Yoder Graphics</title>
    <link rel="stylesheet" href="../css/component-gallery.css">
    <link href="https://fonts.googleapis.com/css2?family=Red+Hat+Display:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet">
</head>
<body>
    <!-- INCLUDE: header -->

    <!-- INCLUDE: hero-green-gradient -->

    <!-- INCLUDE: content-box-left -->

    <!-- INCLUDE: footer -->

    <script src="../js/component-gallery.js"></script>
</body>
</html>
```

### 2. Build the Page

Run the build script:

```bash
cd website-rebuild
python build.py
```

This will:
- Read all template files from `templates/`
- Replace `<!-- INCLUDE: component-name -->` with actual component content
- Output generated HTML files to `output/` folder

### 3. Preview the Page

Open the generated file in your browser:

```bash
# From website-rebuild folder
open output/services.html
# or
python -m http.server 8000
# then visit http://localhost:8000/output/
```

## 📦 Available Components

### Headers (3 variants)
- `header` - Classic green header with dropdown menus
- `header-alternative` - Modern Tailwind design
- `header-inverted` - Green background variant

### Hero Sections (2 variants)
- `hero-green-gradient` - Simple gradient hero with title + description
- `hero-our-story` - Two-column hero with badge image

### Content Blocks
- `content-box-left` - Image left, text right layout
- `content-box-right` - Image right, text left layout
- `feature-orange` - Special feature section with orange accents

### Interactive Components
- `slider` - Homepage hero slider (7 slides)
- `gallery` - Filterable masonry image gallery

### Service Display
- `service-cards` - 4-card grid (PRINT, CREATIVE, PROMO, FULFILLMENT)

### Global Components
- `footer` - Footer with logo, social links, copyright
- `page-navigation` - Navigation bar for switching between pages

### Typography & Display
- `typography` - Font showcase
- `display-headings` - Heading style examples

## 🎯 Ready-to-Build Pages (Phase 1 - Quick Wins)

These pages can be built **immediately** using existing components:

### ✅ Services Page
**Components needed:**
- header
- hero-green-gradient
- content-box-left (for Commercial Printing)
- content-box-right (for Large Format Printing)
- content-box-left (for Promotional Products)
- footer

### ✅ Business Forms Page
**Components needed:**
- header
- hero-green-gradient
- content-box-left (for Checks)
- content-box-right (for Laser Forms)
- content-box-left (for Software Compatible Forms)
- content-box-right (for Continuous Forms)
- content-box-left (for Unit Set Forms)
- content-box-right (for Form Label Combinations)
- footer

### ✅ Commercial Printing Page
**Components needed:**
- header
- hero-green-gradient
- content-box-left (for Brochures and Flyers)
- content-box-right (for Business Cards)
- content-box-left (for Postcards)
- content-box-right (for Calendars)
- footer

### ✅ Promotional Products Page
**Components needed:**
- header
- hero-green-gradient
- content-box-left (main content with catalogs button)
- footer

### ✅ Signs Page
**Components needed:**
- header
- hero-green-gradient
- content-box-left (for Illuminated Signs)
- content-box-right (for Sign Retrofitting)
- content-box-left (for Custom Neon Signs)
- content-box-right (for 3D Lettering)
- content-box-left (for Wayfinding Graphics)
- gallery (with filter buttons for 37 images)
- footer

## 🔧 Build Script Usage

The `build.py` script supports the following features:

```python
# Build all templates in templates/ folder
python build.py

# The script will:
# 1. Find all .html files in templates/
# 2. Look for <!-- INCLUDE: component-name --> comments
# 3. Replace with content from partials/component-name.html
# 4. Save generated files to output/ folder
```

## 📝 Component Include Syntax

Use this syntax in your templates:

```html
<!-- INCLUDE: component-name -->
```

**Examples:**
```html
<!-- INCLUDE: header -->
<!-- INCLUDE: hero-green-gradient -->
<!-- INCLUDE: content-box-left -->
<!-- INCLUDE: footer -->
```

The component name must match a file in the `partials/` folder (without .html extension).

## ⚙️ Customizing Components

### Method 1: Edit the Partial (Global Change)
If you want to change a component across ALL pages:
1. Edit the file in `partials/component-name.html`
2. Run `python build.py` to rebuild all pages
3. All pages using that component will be updated

### Method 2: Create a Variant (Page-Specific)
If you need a modified version for one page:
1. Copy the partial: `cp partials/hero-green-gradient.html partials/hero-services.html`
2. Edit the new variant: `partials/hero-services.html`
3. Use in template: `<!-- INCLUDE: hero-services -->`

## 🎨 Styling Guidelines

### Using Existing Styles
All components use styles from `css/component-gallery.css`. Common classes:

```css
.hero-wrapper          /* Hero section container */
.hero-title            /* Large hero headings */
.container             /* Max-width centered container */
.gallery-card          /* Card component wrapper */
.card.primary          /* Image left, text right */
.card.secondary        /* Image right, text left */
```

### Adding Custom Styles
For page-specific styles, you can:
1. Add inline `<style>` tags in the template
2. Create a new CSS file in `css/pages/page-name.css`
3. Link it in your template's `<head>`

## 🖼️ Image Path Reference

Images are organized in the `img/` folder:

```
img/
├── logo/
│   └── yoder-graphics-logo.svg
├── slider/
│   └── (slider images)
├── services/
│   └── (service page images)
└── portfolio/
    └── (portfolio images)
```

**Usage in components:**
```html
<img src="../img/logo/yoder-graphics-logo.svg" alt="Yoder Graphics">
<img src="../img/services/commercial-printing.jpg" alt="Commercial Printing">
```

## 📊 Progress Tracking

### Phase 1: Quick Wins (5 Pages) - CURRENT
- [ ] Services Page
- [ ] Business Forms Page
- [ ] Commercial Printing Page
- [ ] Promotional Products Page
- [ ] Signs Page

### Phase 2-6: Future Pages
See `../REBUILD_STRATEGY.md` for full roadmap

## 🐛 Troubleshooting

### Build fails with "Component not found"
**Issue:** Include comment references non-existent partial
**Fix:** Check that `partials/component-name.html` exists

### Styles not loading
**Issue:** CSS path is incorrect
**Fix:** Ensure CSS link uses relative path: `href="../css/component-gallery.css"`

### Images not displaying
**Issue:** Image path is incorrect
**Fix:** Use relative paths from output folder: `../img/folder/image.jpg`

### Component includes not replaced
**Issue:** Syntax error in include comment
**Fix:** Use exact syntax: `<!-- INCLUDE: component-name -->` (no extra spaces)

## 📚 Additional Resources

- **Component Gallery:** `../index.html` - View all available components
- **Rebuild Strategy:** `../REBUILD_STRATEGY.md` - Full migration plan
- **Build Documentation:** `../BUILD.md` - Build system details

## 🎯 Next Steps

1. **Review this README** to understand the workspace structure
2. **Check available components** in the `partials/` folder
3. **Start with Phase 1 pages** (Services, Business Forms, etc.)
4. **Build and test** each page using `python build.py`
5. **Customize content** as needed for each page

Happy building! 🚀
