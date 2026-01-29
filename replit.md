# Yoder Graphics Component Gallery

## Overview

This is a static UI component library and gallery for the Yoder Graphics website redesign. It provides ready-to-use HTML/CSS components organized by category (headers, heroes, features, sliders, content sections, UI elements) that can be browsed, previewed, and copied for implementation. The gallery serves as both a design reference and a practical toolkit for building the Yoder Graphics website.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend-Only Static Site
- **No backend or database** - This is a purely static HTML/CSS/JS project
- **File-based organization** - Components are organized into HTML files by category
- **Python server for development** - Simple `server.py` provides local HTTP serving with cache-busting headers

### Styling Approach
- **Tailwind CSS via CDN** - All styling uses Tailwind utility classes loaded from CDN
- **Unified configuration** - `tailwind.config.js` defines brand colors, fonts, and custom utilities as the single source of truth
- **CSS custom properties** - Gallery interface uses CSS variables in `css/gallery.css` that mirror the Tailwind config
- **Component-scoped styles** - Some components include inline `<style>` blocks for animations and custom effects

### Component Organization
- **`/components/`** - Individual category pages (headers.html, heroes.html, features.html, sliders.html, content.html, ui-elements.html)
- **`/pages/`** - Full page templates demonstrating component usage (blog, team, case studies, testimonials)
- **`/legacy/`** - Original design files with a Python-based partial build system for reference
- **`/templates/`** - Preview template for iframe-based component rendering

### Gallery Interface
- **Sidebar navigation** - Collapsible sidebar with category links and component counts
- **Code toggle** - Components can show/hide their HTML source
- **Copy functionality** - One-click copying of component code
- **Resizable preview** - Components render inside iframes with drag-to-resize functionality, enabling true responsive testing where Tailwind breakpoints respond to the container width
- **Iframe-based rendering** - `/templates/preview-template.html` provides the template for component iframes, ensuring Tailwind responsive classes work based on iframe viewport width rather than browser window width

### Legacy Build System
The `/legacy/` folder contains an older approach using:
- `template.html` with `<!-- INCLUDE: partial-name -->` placeholders
- `build.py` Python script that assembles partials into final HTML
- This is preserved for reference but the main gallery uses standalone HTML files

## External Dependencies

### CSS Framework
- **Tailwind CSS v3.x** - Loaded via CDN (`https://cdn.tailwindcss.com`)

### Fonts
- **Red Hat Display** - Primary brand typeface loaded from Google Fonts (weights 300-900)

### Icons
- **Font Awesome 6.5.1** - Icon library loaded via cdnjs CDN

### Slider Library
- **Swiper.js v11** - Used in slider/carousel components, loaded via jsDelivr CDN

### Brand Colors
```
Green: #00954c (primary)
Teal Dark: #008082
Yellow: #ffd603
Orange: #f7a022
Lime: #b3d137
Teal: #2ebbbe
```

All external resources are loaded via CDN - there are no npm dependencies or package management.