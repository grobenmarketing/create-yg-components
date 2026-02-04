document.addEventListener('DOMContentLoaded', async function () {
    // Detect base path by checking if we're in a subfolder of the site
    const path = window.location.pathname;

    // Known subfolders within the site
    const subfolders = ['services', 'about', 'contact', 'portfolio', 'blog'];

    // Check if any known subfolder appears in the path
    const hasSubfolder = subfolders.some(folder => path.includes('/' + folder + '/'));

    const basePath = hasSubfolder ? '../' : '';

    console.log('Path:', path, '| basePath:', basePath);

    // Helper function to load HTML
    async function loadInclude(id, file) {
        const url = basePath + file;
        console.log('Loading:', url);
        try {
            const response = await fetch(url);
            console.log('Response for', url, ':', response.status);
            if (!response.ok) throw new Error(`Failed to load ${file}: ${response.status}`);
            const text = await response.text();
            const element = document.getElementById(id);
            if (element) {
                element.innerHTML = text;
                console.log('Loaded', id, 'successfully');
            } else {
                console.error(`Element with id ${id} not found.`);
            }
        } catch (error) {
            console.error('Error loading', url, ':', error);
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
