# Yoder Graphics - Component Gallery

## Overview
A static HTML website showcasing UI components and pages for Yoder Graphics, a commercial printing business. This is a component gallery/design system that displays typography, layouts, and page templates.

## Project Structure
- `index.html` - Main component gallery page ("Current" design)
- `components-modern.html` - Modern components page ("New" design)
- `components-redesign.html` - Complete redesign with Tailwind CSS and Preline UI ("Redesign")
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
- January 27, 2026: Enhanced home page slider with 6 complete slides (Commercial Printing, Vehicle Wraps, Custom Apparel, Signs & Displays, Banners & Trade Show, Business Forms) - features autoplay, pause on hover, animated progress bar, and improved mobile responsiveness
- January 27, 2026: Created new components-redesign.html with complete modern redesign using Tailwind CSS - includes header, heroes, typography, slider, service cards, content boxes, gallery with filter/lightbox, and footer
- January 27, 2026: Updated navigation to include three pages: Current, New, and Redesign
- January 27, 2026: Removed outdated new-design.html page
- January 23, 2026: Improved gallery mobile responsiveness - stacked filter buttons, responsive columns (1 on mobile, 2 on tablet, 3 on desktop), smooth hover zoom effect
- January 23, 2026: Fixed mobile typography overflow - reduced font sizes for hero, slider, and section titles on mobile screens
- January 23, 2026: Fixed content box image spacing on mobile - removed min-height causing gaps
- January 23, 2026: Added Font Awesome icons for footer social links (Facebook, Instagram, TikTok, X/Twitter, LinkedIn)
- January 23, 2026: Fixed orange divider line thickness from 2px to 1px to match live site
- January 23, 2026: Fixed broken LED Display gallery image
- January 23, 2026: Aligned all typography/font sizes/weights to match live yodergraphics.com site (nav links, header buttons, slider titles, service card titles, story button)
- January 23, 2026: Added edge-to-edge wave graphic to service cards section (matching slider treatment)
- January 23, 2026: Made gallery fully functional - added filtering by category, random shuffle on page load, lightbox for enlarged images, and 6 additional stock images
- January 23, 2026: Removed decorative green triangles from story and orange sections
- January 22, 2026: Redesigned typography section with modern gallery card layout - consolidated into "Typography" and "Display Headings" sections, removed H1-H6 showcase and redundant examples
- January 21, 2026: Initial Replit setup with Python HTTP server

