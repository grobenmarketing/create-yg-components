// Auto-generate breadcrumbs from URL path
// Simplified version - minimal inline breadcrumb + page title
document.addEventListener('DOMContentLoaded', function() {
    const container = document.getElementById('breadcrumb-include');
    if (!container) return;

    const title = container.dataset.title || 'Page';

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
    crumbs.push({ label: 'Home', href: basePath + 'index.html' });

    // Add folder segments as breadcrumb links (excluding root folder)
    for (let i = 0; i < segments.length; i++) {
        const seg = segments[i];
        const label = formatLabel(seg);
        crumbs.push({ label: label, href: basePath + seg + '/index.html' });
    }

    // Generate breadcrumb HTML
    const crumbsHtml = crumbs.map(crumb =>
        `<a href="${crumb.href}" class="text-gray-500 hover:text-brand-green transition-colors">${crumb.label}</a>
         <i class="fa-solid fa-chevron-right text-xs text-gray-400"></i>`
    ).join('');

    // Build the simplified section - just breadcrumbs and title, no banner
    container.outerHTML = `
        <div class="bg-white border-b border-gray-100">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
                <nav class="flex items-center gap-2 text-sm mb-3">
                    ${crumbsHtml}
                    <span class="text-gray-900 font-medium">${title}</span>
                </nav>
                <h1 class="text-3xl md:text-4xl font-bold text-gray-900">${title}</h1>
            </div>
        </div>
    `;
});

// Convert filename/folder to readable label
function formatLabel(segment) {
    return segment
        .replace('.html', '')
        .replace(/-/g, ' ')
        .replace(/\b\w/g, c => c.toUpperCase());
}
