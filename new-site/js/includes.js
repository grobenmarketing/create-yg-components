document.addEventListener('DOMContentLoaded', async function () {
    // Helper function to load HTML
    async function loadInclude(id, file) {
        try {
            const response = await fetch(file);
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

    // Dispatch event to signal that includes are loaded
    document.dispatchEvent(new Event('includes-loaded'));
});
