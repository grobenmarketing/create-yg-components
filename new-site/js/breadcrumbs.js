// Auto-generate breadcrumbs from URL path
document.addEventListener('DOMContentLoaded', function() {
    const container = document.getElementById('breadcrumb-include');
    if (!container) return;

    const title = container.dataset.title || 'Page';
    const description = container.dataset.description || '';

    // Build breadcrumb trail from URL
    const path = window.location.pathname;
    const segments = path.split('/').filter(seg => seg && seg !== 'index.html');

    // Build crumb items (excluding current page which we show as text)
    let crumbs = [];
    let currentPath = '';

    // Always start with home
    crumbs.push({ label: '<i class="fa-solid fa-house"></i>', href: 'index.html' });

    // Add intermediate segments if nested (e.g., /services/signs.html)
    for (let i = 0; i < segments.length - 1; i++) {
        const seg = segments[i];
        currentPath += seg + '/';
        const label = formatLabel(seg);
        crumbs.push({ label: label, href: currentPath + 'index.html' });
    }

    // Generate breadcrumb HTML
    const crumbsHtml = crumbs.map(crumb =>
        `<a href="${crumb.href}" class="hover:text-white transition-colors">${crumb.label}</a>
         <i class="fa-solid fa-chevron-right text-xs text-white/40"></i>`
    ).join('');

    // Build the full section
    container.outerHTML = `
        <section class="bg-gradient-to-r from-brand-green to-brand-green-dark">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-12">
                <nav class="flex items-center gap-2 text-sm text-white/70 mb-4">
                    ${crumbsHtml}
                    <span class="text-white">${title}</span>
                </nav>
                <h1 class="text-3xl md:text-4xl font-bold text-white">${title}</h1>
                ${description ? `<p class="mt-4 text-lg text-white/90 max-w-2xl">${description}</p>` : ''}
            </div>
        </section>
    `;
});

// Convert filename/folder to readable label
function formatLabel(segment) {
    return segment
        .replace('.html', '')
        .replace(/-/g, ' ')
        .replace(/\b\w/g, c => c.toUpperCase());
}
