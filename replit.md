# Yoder Graphics - Component Gallery

## Overview
A static HTML website showcasing UI components and pages for Yoder Graphics, a commercial printing business. This is a component gallery/design system that displays typography, layouts, and page templates.

## Project Structure
- `component-gallery.html` - Main component gallery page (entry point)
- `reference/` - Reference HTML pages for various sections (services, contact, careers, etc.)
  - `css/` - Stylesheets
  - `js/` - JavaScript files
  - `includes/` - HTML includes/partials
- `server.py` - Simple Python HTTP server for local development

## Running the Project
The project runs via a Python HTTP server on port 5000:
```bash
python server.py
```

## Deployment
This is a static website. The deployment serves files directly from the root directory.

## Recent Changes
- January 22, 2026: Redesigned typography section with modern gallery card layout - consolidated into "Typography" and "Display Headings" sections, removed H1-H6 showcase and redundant examples
- January 21, 2026: Initial Replit setup with Python HTTP server

