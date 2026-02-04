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

    // Get folder segments and filter out root folder (new-site)
    const allSegments = directory.split('/').filter(seg => seg);
    const rootFolders = ['new-site'];
    const segments = allSegments.filter(seg => !rootFolders.includes(seg.toLowerCase()));

    // Calculate depth for base path (count all segments including root)
    const basePath = allSegments.length > 0 ? '../'.repeat(allSegments.length) : '';

    // Build crumb items
    let crumbs = [];

    // Always start with home
    crumbs.push({ label: '<i class="fa-solid fa-house"></i>', href: basePath + 'index.html' });

    // Add folder segments as breadcrumb links (excluding root folder)
    // For /new-site/services/design.html -> add "Services" linking to services/index.html
    // Skip the last segment if it matches the page title (avoids "Resources > Resources" on index pages)
    for (let i = 0; i < segments.length; i++) {
        const seg = segments[i];
        const label = formatLabel(seg);
        // Skip if this is the last segment and it matches the page title
        if (i === segments.length - 1 && label.toLowerCase() === title.toLowerCase()) {
            continue;
        }
        crumbs.push({ label: label, href: basePath + seg + '/index.html' });
    }

    // Generate breadcrumb HTML
    const crumbsHtml = crumbs.map(crumb =>
        `<a href="${crumb.href}" class="hover:text-brand-green transition-colors">${crumb.label}</a>
         <i class="fa-solid fa-chevron-right text-xs text-gray-400"></i>`
    ).join('');

    // Build the full section
    container.outerHTML = `
        <section class="bg-gray-100 border-b border-gray-200">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
                <nav class="flex items-center gap-2 text-sm text-gray-500">
                    ${crumbsHtml}
                    <span class="text-gray-900 font-medium">${title}</span>
                </nav>
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
