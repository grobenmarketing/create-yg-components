# Component Gallery Build System

This project uses a simple build system to assemble `component-gallery.html` from modular component partials, similar to Hugo's include/partial system.

## Structure

```
create-yg-components/
├── template.html              # Main template with INCLUDE placeholders
├── partials/                  # Individual component files
│   ├── header.html
│   ├── hero-green-gradient.html
│   ├── typography.html
│   ├── display-headings.html
│   ├── slider.html
│   ├── hero-our-story.html
│   ├── feature-orange.html
│   ├── service-cards.html
│   ├── content-box-left.html
│   ├── content-box-right.html
│   ├── gallery.html
│   └── footer.html
├── build.py                   # Build script
└── component-gallery.html     # Generated output (do not edit directly)
```

## Usage

### Build the Gallery

Run the build script to assemble all partials into the final HTML file:

```bash
python3 build.py
```

**Output:**
```
Building component gallery...
--------------------------------------------------

Found 12 partials:
  - content-box-left
  - content-box-right
  ...

Assembling components...
  Including: header
  Including: hero-green-gradient
  ...

✓ Build complete: component-gallery.html
```

### Make Changes

1. **Edit components**: Modify files in `partials/` directory
2. **Rebuild**: Run `python3 build.py`
3. **View changes**: Open `component-gallery.html` in browser

### Add New Components

1. Create new partial in `partials/new-component.html`
2. Add include placeholder in `template.html`:
   ```html
   <!-- INCLUDE: new-component -->
   ```
3. Run `python3 build.py`

## How It Works

The build system uses simple text replacement:

1. Reads `template.html`
2. Finds all `<!-- INCLUDE: partial-name -->` comments
3. Replaces each with content from `partials/partial-name.html`
4. Writes final output to `component-gallery.html`

## Hugo Migration Path

This structure is designed to migrate easily to Hugo:

### Current (Static Build)
```html
<!-- template.html -->
<!-- INCLUDE: header -->
```

### Future (Hugo)
```html
<!-- layouts/index.html -->
{{ partial "header.html" . }}
```

Each partial is already isolated and can be moved directly to Hugo's `layouts/partials/` directory with minimal changes.

## Important Notes

- **DO NOT** edit `component-gallery.html` directly - changes will be overwritten
- **DO** edit files in `partials/` directory
- **ALWAYS** run `python3 build.py` after making changes
- The build script preserves all formatting and structure

## Benefits

1. **Modularity**: Each component is isolated and reusable
2. **Maintainability**: Edit one file instead of searching through 600 lines
3. **Version Control**: Track changes per component
4. **Hugo-Ready**: Direct migration path to Hugo static site generator
5. **Reusability**: Mix and match components for different pages

## Example Workflow

```bash
# Edit the header component
nano partials/header.html

# Build the gallery
python3 build.py

# Start local server to preview
python3 server.py
```

Then open http://localhost:8000/component-gallery.html in your browser.
