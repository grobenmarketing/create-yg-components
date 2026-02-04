document.addEventListener('DOMContentLoaded', async function () {
    // Detect base path based on folder depth
    // /index.html = 1 slash = root level (no prefix needed)
    // /services/design.html = 2 slashes = 1 folder deep (../ needed)
    const path = window.location.pathname;
    const slashCount = (path.match(/\//g) || []).length;
    const basePath = slashCount > 1 ? '../' : '';

    // Helper function to load HTML
    async function loadInclude(id, file) {
        try {
            const response = await fetch(basePath + file);
            if (!response.ok) throw new Error(`Failed to load ${file}`);
            const text = await response.text();
            const element = document.getElementById(id);
            if (element) {
                element.innerHTML = text;
            } else {
                console.error(`Element with id ${id} not found.`);
            }
        } catch (error) {
            console.error(error);
        }
    }

    // Load Includes
    await Promise.all([
        loadInclude('header-include', 'includes/header.html'),
        loadInclude('hero-slider-include', 'includes/hero-slider.html'),
        loadInclude('logo-marquee-include', 'includes/logo-marquee.html'),
        loadInclude('footer-include', 'includes/footer.html')
    ]);

    // Fix relative links in header/footer based on current page depth
    if (basePath) {
        document.querySelectorAll('#header-include a[href], #footer-include a[href]').forEach(link => {
            const href = link.getAttribute('href');
            // Only fix relative paths (not absolute, tel:, mailto:, #, etc.)
            if (href && !href.startsWith('http') && !href.startsWith('/') && !href.startsWith('#') && !href.startsWith('tel:') && !href.startsWith('mailto:')) {
                link.setAttribute('href', basePath + href);
            }
        });
        // Fix image src paths too
        document.querySelectorAll('#header-include img[src], #footer-include img[src]').forEach(img => {
            const src = img.getAttribute('src');
            if (src && !src.startsWith('http') && !src.startsWith('/')) {
                img.setAttribute('src', basePath + src);
            }
        });
    }

    // Dispatch event to signal that includes are loaded
    document.dispatchEvent(new Event('includes-loaded'));
});
