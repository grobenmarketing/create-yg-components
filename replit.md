# Yoder Graphics - Component Gallery

## Overview
A static HTML website showcasing UI components and pages for Yoder Graphics, a commercial printing business. This is a component gallery/design system that displays typography, layouts, and page templates.

## Project Structure
- `index.html` - Main component gallery page ("Current" design)
- `components-redesign.html` - Complete redesign with Tailwind CSS ("Redesign")
- `components-content.html` - Content components showcase (Blog, Team, Case Studies, Testimonials)
- `blog-page.html` - Full blog page template
- `team-page.html` - Full team/about page template
- `case-studies-page.html` - Full case studies page template
- `testimonials-page.html` - Full testimonials page template
- `partials/` - HTML partial components for building pages
- `css/` - Stylesheets
- `js/` - JavaScript files
- `img/` - Images and assets
- `server.py` - Simple Python HTTP server for local development

## Running the Project
The project runs via a Python HTTP server on port 5000:
```bash
python server.py
```

## Deployment
This is a static website. The deployment serves files directly from the root directory.

## Brand Colors
- Brand Green: #00953b
- Primary Green: #20a75b
- Green Dark: #007a30
- Orange: #f9a01f
- Teal/Secondary: #1cd59d

## Recent Changes
- January 27, 2026: Created individual page templates (blog-page.html, team-page.html, case-studies-page.html, testimonials-page.html) with full layouts, headers, footers, and branded styling
- January 27, 2026: Created components-content.html with Blog variations (card grid, featured+list, minimal), Team variations (photo grid, cards with bio, minimal horizontal), Case Study variations (cards, featured spotlight, timeline), and Testimonial variations (cards grid, large quote, carousel preview)
- January 27, 2026: Added Hero sections (full-width centered, split with image, video background placeholder) to components-redesign.html
- January 27, 2026: Added Feature sections (icon cards grid, alternating rows with images) to components-redesign.html
- January 27, 2026: Added Bento grid layout for services showcase to components-redesign.html
- January 27, 2026: Added CTA sections (full-width banner, split with image, floating card with newsletter) to components-redesign.html
- January 27, 2026: Removed components-modern.html and updated navigation to Current, Redesign, Content
- January 27, 2026: Added "Original Slider - Updated" section with 7 slides from index.html, converted to Tailwind CSS with matching typography, pill-style buttons, full-width wave SVG background on green, and independent Swiper instance
- January 27, 2026: Enhanced home page slider with 6 complete slides (Commercial Printing, Vehicle Wraps, Custom Apparel, Signs & Displays, Banners & Trade Show, Business Forms) - features autoplay, pause on hover, animated progress bar, and improved mobile responsiveness
- January 27, 2026: Created new components-redesign.html with complete modern redesign using Tailwind CSS - includes header, heroes, typography, slider, service cards, content boxes, gallery with filter/lightbox, and footer
- January 23, 2026: Improved gallery mobile responsiveness - stacked filter buttons, responsive columns (1 on mobile, 2 on tablet, 3 on desktop), smooth hover zoom effect
- January 22, 2026: Redesigned typography section with modern gallery card layout
- January 21, 2026: Initial Replit setup with Python HTTP server

