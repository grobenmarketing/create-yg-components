// Auto-generate breadcrumbs from URL path
document.addEventListener('DOMContentLoaded', function() {
    const container = document.getElementById('breadcrumb-include');
    if (!container) return;

    const title = container.dataset.title || 'Page';
    const description = container.dataset.description || '';

    // Build breadcrumb trail from URL
    const path = window.location.pathname;

    // Get directory only (remove filename)
    const lastSlash = path.lastIndexOf('/');
    const directory = path.substring(0, lastSlash);

    // Get folder segments (e.g., /services/design.html -> ['services'])
    const segments = directory.split('/').filter(seg => seg);

    // Detect depth for base path
    const basePath = segments.length > 0 ? '../' : '';

    // Build crumb items
    let crumbs = [];

    // Always start with home
    crumbs.push({ label: '<i class="fa-solid fa-house"></i>', href: basePath + 'index.html' });

    // Add folder segments as breadcrumb links
    // For /services/design.html -> add "Services" linking to services/index.html
    for (let i = 0; i < segments.length; i++) {
        const seg = segments[i];
        const label = formatLabel(seg);
        // Link goes up to parent then into the folder
        crumbs.push({ label: label, href: basePath + seg + '/index.html' });
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
