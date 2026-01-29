# Yoder Graphics Component Gallery

A comprehensive UI component library for the Yoder Graphics website redesign. This gallery provides ready-to-use components built with Tailwind CSS, organized for easy browsing, copying, and implementation.

---

## Quick Start

1. Open `index.html` in your browser
2. Browse components by category using the sidebar
3. Click "View Code" to see the HTML
4. Click "Copy" to copy the code to your clipboard
5. Paste into your project and customize

---

## Project Structure

```
create-yg-components/
├── index.html                 # Gallery dashboard/homepage
├── tailwind.config.js         # Unified brand configuration
├── components/                # Component category pages
│   ├── headers.html           # Navigation headers (3 variants)
│   ├── heroes.html            # Page headings (4 variants)
│   ├── features.html          # Feature sections (6 variants)
│   ├── sliders.html           # Sliders & carousels (3 variants)
│   ├── content.html           # Blog, team, testimonials (12 variants)
│   └── ui-elements.html       # Buttons, typography, forms (5 variants)
├── pages/                     # Full page templates
│   ├── blog-page.html
│   ├── team-page.html
│   ├── case-studies-page.html
│   └── testimonials-page.html
├── legacy/                    # Original design (reference only)
│   ├── original-design.html
│   ├── partials/
│   └── build.py
├── css/
│   ├── gallery.css            # Gallery interface styles
│   └── component-gallery.css  # Legacy component styles
├── js/
│   ├── gallery.js             # Gallery functionality
│   └── component-gallery.js   # Legacy slider/lightbox
├── img/                       # Images and assets
├── README.md                  # This file
└── DEPENDENCIES.md            # Library documentation
```

---

## For Designers

### Brand Colors

| Color | Hex | Usage |
|-------|-----|-------|
| **Brand Green** | `#00954c` | Primary brand color, CTAs, links |
| **Yellow** | `#ffd603` | Accent, highlights |
| **Orange** | `#f7a022` | Secondary accent, highlights |
| **Lime** | `#b3d137` | Accent color |
| **Lime Light** | `#d1e285` | Light accent |
| **Teal** | `#2ebbbe` | Tertiary accent |
| **Teal Dark** | `#008082` | Dark teal accent |
| **Dark Gray** | `#171717` | Body text, dark sections |

### Typography

- **Font Family:** Red Hat Display
- **Headings:** 800 weight (Extra-Bold), uppercase, tight tracking
- **Body:** 400-500 weight, relaxed line-height
- **Buttons:** 600-700 weight, uppercase for CTAs

### Component Naming Convention

Components are labeled with:
- **Category** (Header, Hero, Feature, etc.)
- **Variant name** (e.g., "Dark Theme with Mega Menu")

Example: `Header: Flowbite Style - Logo Left, Nav Right`

---

## For Developers

### Using Components

1. **Copy the HTML** from any component using the "Copy" button
2. **Include dependencies** (see DEPENDENCIES.md):
   - Tailwind CSS CDN
   - tailwind.config.js
   - Font Awesome
   - Red Hat Display font
3. **Customize** colors, text, and images as needed

### Tailwind Configuration

All components use a unified Tailwind config. Include it in your project:

```html
<script src="https://cdn.tailwindcss.com"></script>
<script src="tailwind.config.js"></script>
```

Or copy the configuration inline:

```javascript
tailwind.config = {
    theme: {
        extend: {
            colors: {
                brand: {
                    green: '#00954c',
                    'green-dark': '#008082',
                    yellow: '#ffd603',
                    orange: '#f7a022',
                    lime: '#b3d137',
                    'lime-light': '#d1e285',
                    teal: '#2ebbbe',
                    'teal-dark': '#008082',
                }
            },
            fontFamily: {
                display: ['"Red Hat Display"', 'sans-serif'],
            }
        }
    }
}
```

### Tailwind Class Prefixes

Use these classes in your markup:

```html
<!-- Colors -->
<div class="bg-brand-green text-white">...</div>
<div class="bg-brand-orange">...</div>
<div class="text-brand-teal">...</div>

<!-- With opacity -->
<div class="bg-brand-green/10">10% opacity green</div>
<div class="text-brand-orange/80">80% opacity orange</div>
```

### Required Assets

Some components reference images in the `img/` folder:
- `img/logo.svg` - Yoder Graphics logo
- `img/index/` - Homepage images
- `img/waves.svg` - Decorative wave SVG

---

## Component Categories

### Headers (3 components)
- Standard with green utility bar
- Flowbite style (logo left, nav right)
- Dark theme with mega menu

### Heroes & Page Headings (4 components)
- Gradient banner with pattern
- Breadcrumb navigation
- Left-aligned with accent bar
- Dark minimal bar

### Features (6 components)
- Our Story - Dark background
- Orange gradient with image
- Light background with stats
- Service cards grid
- CTA full-width banner
- Split image layout

### Sliders & Carousels (3 components)
- Client logo marquee (auto-scroll)
- Homepage hero slider (Swiper)
- Portfolio gallery carousel

### Content Sections (12 components)
- Blog: Card grid, Featured+List, Minimal list
- Team: Photo grid, Cards with bio
- Case Studies: Project cards
- Testimonials: Cards grid, Large quote

### UI Elements (5 components)
- Buttons (all styles and sizes)
- Typography reference
- Badges and tags
- FAQ accordion
- Form elements

---

## Responsive Preview

The gallery includes responsive preview controls:
- **Mobile** (375px width)
- **Tablet** (768px width)
- **Desktop** (full width)

Use these to test how components look at different breakpoints.

---

## Keyboard Shortcuts

| Shortcut | Action |
|----------|--------|
| `Ctrl/Cmd + B` | Toggle sidebar |
| `Ctrl/Cmd + Shift + C` | Toggle code view (when component focused) |
| `Escape` | Close sidebar (mobile) |

---

## Legacy Design

The original website design is preserved in `/legacy/` for reference:
- `legacy/original-design.html` - Complete original component gallery
- `legacy/partials/` - Individual component files
- `legacy/build.py` - Build script (Python)

The legacy design uses a different styling approach (CSS custom properties instead of Tailwind). Use it only for reference when matching existing site elements.

---

## Deployment

This is a static site. Deploy to any static host:

### Netlify (Current)
- Push to repository
- Netlify auto-deploys from main branch

### Local Development
```bash
# Python 3
python -m http.server 5000

# Node.js
npx serve
```

Then open http://localhost:5000

---

## Contributing

### Adding New Components

1. Choose the appropriate category file in `/components/`
2. Add a new `component-card` div following the existing pattern:

```html
<div class="component-card" data-category="category-name">
    <div class="component-header">
        <div class="component-title">
            <span class="component-label">
                <i class="fa-solid fa-icon"></i>
                Category
            </span>
            <span class="component-variant">Variant Name</span>
        </div>
        <div class="component-actions">
            <button class="action-btn" data-toggle-code>
                <i class="fa-solid fa-code"></i> View Code
            </button>
            <button class="action-btn" data-copy-code>
                <i class="fa-solid fa-copy"></i> Copy
            </button>
        </div>
    </div>
    <div class="component-preview">
        <div class="component-preview-inner">
            <!-- Your component HTML here -->
        </div>
    </div>
    <div class="component-code">
        <button class="code-copy-btn">Copy</button>
        <pre><code></code></pre>
    </div>
</div>
```

3. Update the sidebar badge count if needed
4. Update this README's component count

### Updating Brand Colors

1. Edit `tailwind.config.js`
2. Update the CSS variables in `css/gallery.css`
3. Update the color table in `DEPENDENCIES.md`
4. Update the color swatches on the index page

---

## Support

For questions about:
- **Component usage:** Check the code preview
- **Design decisions:** Reference this README and DEPENDENCIES.md
- **Technical issues:** Check browser console for errors

---

## Version History

- **January 2026:** Major reorganization
  - New gallery interface with sidebar navigation
  - Unified Tailwind configuration
  - Responsive preview controls
  - Code copy functionality
  - Category-based component pages
  - Comprehensive documentation

---

*Built for Yoder Graphics - Veteran Owned & Operated since 1976*
