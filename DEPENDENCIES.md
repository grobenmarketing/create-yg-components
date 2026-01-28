# Dependencies & Libraries

This document lists all external libraries, frameworks, and resources used in the Yoder Graphics Component Gallery.

## Core Framework

### Tailwind CSS v3.x (CDN)
- **Purpose:** Utility-first CSS framework for styling
- **CDN:** `https://cdn.tailwindcss.com`
- **Configuration:** Custom config in `tailwind.config.js`
- **Documentation:** https://tailwindcss.com/docs

The gallery uses a unified Tailwind configuration with Yoder Graphics brand colors and custom utilities. See `tailwind.config.js` for the complete configuration.

---

## Fonts

### Red Hat Display (Google Fonts)
- **Purpose:** Primary brand typeface
- **Weights Used:** 300 (Light), 400 (Regular), 500 (Medium), 600 (Semi-Bold), 700 (Bold), 800 (Extra-Bold), 900 (Black)
- **CDN:** Google Fonts
- **Documentation:** https://fonts.google.com/specimen/Red+Hat+Display

```html
<link href="https://fonts.googleapis.com/css2?family=Red+Hat+Display:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet">
```

---

## Icons

### Font Awesome 6.5.1 (CDN)
- **Purpose:** Icon library for UI elements
- **Icons Used:** Solid icons (`fa-solid`), Brand icons (`fa-brands`)
- **CDN:** cdnjs
- **Documentation:** https://fontawesome.com/icons

```html
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css">
```

**Common icons in use:**
- Navigation: `fa-bars`, `fa-chevron-down`, `fa-chevron-right`
- Actions: `fa-arrow-right`, `fa-phone`, `fa-envelope`
- UI: `fa-check`, `fa-star`, `fa-quote-left`
- Services: `fa-car`, `fa-print`, `fa-shirt`, `fa-signs-post`
- Social: `fa-linkedin-in`, `fa-twitter`, `fa-facebook-f`

---

## JavaScript Libraries

### Swiper.js 11 (CDN)
- **Purpose:** Touch slider/carousel functionality
- **Used In:** Homepage slider, logo marquee, image galleries
- **CDN:** jsDelivr
- **Documentation:** https://swiperjs.com/

```html
<!-- CSS -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css">

<!-- JavaScript -->
<script src="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js"></script>
```

**Swiper features used:**
- Autoplay
- Loop
- Pagination (bullets)
- Navigation (prev/next buttons)
- Keyboard control

---

## Brand Colors

All colors are defined in `tailwind.config.js` and can be used with Tailwind classes:

| Color Name | Hex Code | Tailwind Class |
|------------|----------|----------------|
| Brand Green | `#00953b` | `bg-brand-green`, `text-brand-green` |
| Green Light | `#20a75b` | `bg-brand-green-light` |
| Green Dark | `#007a30` | `bg-brand-green-dark` |
| Brand Orange | `#f9a01f` | `bg-brand-orange`, `text-brand-orange` |
| Orange Light | `#ffb74d` | `bg-brand-orange-light` |
| Brand Teal | `#1cd59d` | `bg-brand-teal`, `text-brand-teal` |

### Neutral Colors

| Color Name | Hex Code | Usage |
|------------|----------|-------|
| White | `#ffffff` | Backgrounds, text |
| Off-White | `#f1eeee` | Subtle backgrounds |
| Light Gray | `#f4f4f4` | Page backgrounds |
| Gray | `#58595b` | Secondary text |
| Dark Gray | `#171717` | Primary text, dark sections |
| Black | `#000000` | Maximum contrast |

---

## CSS Custom Properties

For non-Tailwind contexts, these CSS variables are available in `css/gallery.css`:

```css
:root {
    --brand-green: #00953b;
    --brand-green-light: #20a75b;
    --brand-green-dark: #007a30;
    --brand-orange: #f9a01f;
    --brand-teal: #1cd59d;
    --font-display: "Red Hat Display", sans-serif;
}
```

---

## No Additional Dependencies

The following are **NOT** used in this project (contrary to what might be expected):

- ❌ **Preline UI** - Not used (though some designs are inspired by it)
- ❌ **DaisyUI** - Not used
- ❌ **Alpine.js** - Not used (vanilla JS handles interactions)
- ❌ **jQuery** - Not used

---

## Version Compatibility

| Library | Version | Last Updated |
|---------|---------|--------------|
| Tailwind CSS | 3.x (CDN latest) | January 2026 |
| Font Awesome | 6.5.1 | January 2026 |
| Swiper | 11.x | January 2026 |
| Red Hat Display | Latest | January 2026 |

---

## Browser Support

Components are designed and tested for:
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile Safari (iOS 15+)
- Chrome for Android

---

## Adding New Dependencies

When adding a new library:

1. Add CDN link to the `<head>` section
2. Document it in this file
3. Note which components use it
4. Test across all browser targets
