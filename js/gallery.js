/**
 * Yoder Graphics Component Gallery JavaScript
 * ============================================
 * Interactive functionality for the component gallery:
 * - Sidebar toggle
 * - Code view toggle
 * - Copy to clipboard
 * - Responsive preview controls
 * - Category filtering
 */

(function() {
    'use strict';

    // =========================================
    // Sidebar (always visible, no toggle)
    // =========================================
    function initSidebar() {
        // Sidebar is always visible - no toggle functionality needed
    }

    // =========================================
    // Code Toggle
    // =========================================
    function initCodeToggle() {
        document.querySelectorAll('[data-toggle-code]').forEach(btn => {
            btn.addEventListener('click', () => {
                const card = btn.closest('.component-card');
                const codeBlock = card?.querySelector('.component-code');

                if (codeBlock) {
                    const isVisible = codeBlock.classList.toggle('visible');
                    btn.classList.toggle('active', isVisible);
                    btn.innerHTML = isVisible
                        ? '<i class="fa-solid fa-eye-slash"></i> Hide Code'
                        : '<i class="fa-solid fa-code"></i> View Code';
                }
            });
        });
    }

    // =========================================
    // Copy to Clipboard
    // =========================================
    function initCopyToClipboard() {
        document.querySelectorAll('[data-copy-code]').forEach(btn => {
            btn.addEventListener('click', async () => {
                const card = btn.closest('.component-card');
                const codeBlock = card?.querySelector('.component-code code');

                if (codeBlock) {
                    try {
                        // Get the actual HTML content from the preview
                        const preview = card.querySelector('.component-preview-inner');
                        const codeToCopy = preview ? preview.innerHTML.trim() : codeBlock.textContent;

                        await navigator.clipboard.writeText(codeToCopy);

                        // Visual feedback
                        const originalText = btn.innerHTML;
                        btn.classList.add('copied');
                        btn.innerHTML = '<i class="fa-solid fa-check"></i> Copied!';

                        setTimeout(() => {
                            btn.classList.remove('copied');
                            btn.innerHTML = originalText;
                        }, 2000);
                    } catch (err) {
                        console.error('Failed to copy:', err);
                        btn.innerHTML = '<i class="fa-solid fa-times"></i> Failed';
                        setTimeout(() => {
                            btn.innerHTML = '<i class="fa-solid fa-copy"></i> Copy';
                        }, 2000);
                    }
                }
            });
        });

        // Also handle code block copy buttons
        document.querySelectorAll('.code-copy-btn').forEach(btn => {
            btn.addEventListener('click', async () => {
                const codeBlock = btn.closest('.component-code')?.querySelector('code');

                if (codeBlock) {
                    try {
                        await navigator.clipboard.writeText(codeBlock.textContent);

                        btn.classList.add('copied');
                        btn.textContent = 'Copied!';

                        setTimeout(() => {
                            btn.classList.remove('copied');
                            btn.textContent = 'Copy';
                        }, 2000);
                    } catch (err) {
                        console.error('Failed to copy:', err);
                    }
                }
            });
        });
    }

    // =========================================
    // Responsive Preview Controls
    // =========================================
    function initResponsiveControls() {
        const controls = document.querySelectorAll('.responsive-btn');

        controls.forEach(btn => {
            btn.addEventListener('click', () => {
                const size = btn.dataset.size;
                const previews = document.querySelectorAll('.component-preview');

                // Update active state
                controls.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');

                // Update preview sizes
                previews.forEach(preview => {
                    preview.classList.remove('mobile', 'tablet', 'desktop');
                    if (size) {
                        preview.classList.add(size);
                    }
                });
            });
        });
    }

    // =========================================
    // Category Filtering
    // =========================================
    function initCategoryFilter() {
        const filterBtns = document.querySelectorAll('.filter-btn');
        const components = document.querySelectorAll('.component-card[data-category]');

        filterBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                const category = btn.dataset.filter;

                // Update active state
                filterBtns.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');

                // Filter components
                components.forEach(component => {
                    if (category === 'all' || component.dataset.category === category) {
                        component.style.display = '';
                    } else {
                        component.style.display = 'none';
                    }
                });
            });
        });
    }

    // =========================================
    // Highlight Active Sidebar Link
    // =========================================
    function initActiveLink() {
        const currentPath = window.location.pathname;
        const links = document.querySelectorAll('.sidebar-link');

        links.forEach(link => {
            const href = link.getAttribute('href');
            if (href && currentPath.includes(href.replace('./', ''))) {
                link.classList.add('active');
            }
        });
    }

    // =========================================
    // Resizable Component Previews with Iframe
    // =========================================
    function initResizablePreviews() {
        const templatePath = getTemplatePath();
        
        document.querySelectorAll('.component-preview').forEach(preview => {
            const inner = preview.querySelector('.component-preview-inner');
            if (!inner || preview.querySelector('.resize-container')) return;

            // Get the original HTML content
            const originalHTML = inner.innerHTML;

            // Create resize container structure
            const container = document.createElement('div');
            container.className = 'resize-container';
            container.style.display = 'none'; // Hidden by default
            
            const content = document.createElement('div');
            content.className = 'resize-content';
            
            // Create iframe for true responsive preview
            const iframe = document.createElement('iframe');
            iframe.className = 'preview-iframe';
            iframe.setAttribute('frameborder', '0');
            iframe.setAttribute('scrolling', 'no');
            iframe.src = templatePath;
            
            const handle = document.createElement('div');
            handle.className = 'resize-handle';
            handle.setAttribute('title', 'Drag to resize');
            
            const indicator = document.createElement('div');
            indicator.className = 'resize-width-indicator';
            
            const resetBtn = document.createElement('button');
            resetBtn.className = 'resize-reset';
            resetBtn.textContent = 'Reset';
            resetBtn.setAttribute('title', 'Reset to full width');

            // Create toggle button for resize mode
            const toggleBtn = document.createElement('button');
            toggleBtn.className = 'resize-toggle-btn';
            toggleBtn.innerHTML = '<i class="fa-solid fa-arrows-left-right"></i> Resize Mode';
            toggleBtn.setAttribute('title', 'Toggle resize mode');

            // Insert container but keep inner visible by default
            inner.parentNode.insertBefore(container, inner);
            inner.parentNode.insertBefore(toggleBtn, container);
            // inner stays visible by default
            content.appendChild(iframe);
            container.appendChild(content);
            container.appendChild(handle);
            container.appendChild(indicator);
            container.appendChild(resetBtn);

            let resizeModeActive = false;
            let iframeReady = false;
            let contentSent = false;

            // Send content to iframe
            const sendContent = () => {
                if (iframeReady && resizeModeActive && !contentSent) {
                    iframe.contentWindow.postMessage({
                        type: 'setContent',
                        html: originalHTML
                    }, '*');
                    contentSent = true;
                    setTimeout(() => adjustIframeHeight(iframe), 200);
                }
            };

            // Toggle between modes
            toggleBtn.addEventListener('click', () => {
                resizeModeActive = !resizeModeActive;
                if (resizeModeActive) {
                    inner.style.display = 'none';
                    container.style.display = '';
                    toggleBtn.classList.add('active');
                    toggleBtn.innerHTML = '<i class="fa-solid fa-hand-pointer"></i> Interactive Mode';
                    // Try to send content if iframe is ready
                    sendContent();
                } else {
                    inner.style.display = '';
                    container.style.display = 'none';
                    toggleBtn.classList.remove('active');
                    toggleBtn.innerHTML = '<i class="fa-solid fa-arrows-left-right"></i> Resize Mode';
                }
            });

            // Listen for iframe messages
            window.addEventListener('message', function handler(e) {
                if (e.source === iframe.contentWindow) {
                    if (e.data.type === 'iframeReady') {
                        iframeReady = true;
                        // Send content if we're already in resize mode
                        sendContent();
                    } else if (e.data.type === 'contentHeight') {
                        iframe.style.height = (e.data.height + 20) + 'px';
                    }
                }
            });

            // Resize functionality with performance optimization
            let isResizing = false;
            let startX, startWidth;
            let rafId = null;
            let pendingWidth = null;

            const updateIndicator = (width) => {
                indicator.textContent = `${Math.round(width)}px`;
            };

            const applyResize = () => {
                if (pendingWidth !== null) {
                    container.style.width = `${pendingWidth}px`;
                    updateIndicator(pendingWidth);
                    pendingWidth = null;
                }
                rafId = null;
            };

            const scheduleResize = (newWidth) => {
                pendingWidth = newWidth;
                if (!rafId) {
                    rafId = requestAnimationFrame(applyResize);
                }
            };

            handle.addEventListener('mousedown', (e) => {
                isResizing = true;
                startX = e.clientX;
                startWidth = container.offsetWidth;
                container.classList.add('resizing');
                handle.classList.add('dragging');
                iframe.style.pointerEvents = 'none';
                document.body.style.cursor = 'ew-resize';
                document.body.style.userSelect = 'none';
                updateIndicator(startWidth);
                e.preventDefault();
            });

            document.addEventListener('mousemove', (e) => {
                if (!isResizing) return;
                const diff = e.clientX - startX;
                const newWidth = Math.max(320, Math.min(startWidth + diff, preview.offsetWidth - 48));
                scheduleResize(newWidth);
            });

            document.addEventListener('mouseup', () => {
                if (isResizing) {
                    isResizing = false;
                    container.classList.remove('resizing');
                    handle.classList.remove('dragging');
                    iframe.style.pointerEvents = '';
                    document.body.style.cursor = '';
                    document.body.style.userSelect = '';
                    if (rafId) {
                        cancelAnimationFrame(rafId);
                        rafId = null;
                    }
                    if (pendingWidth !== null) {
                        container.style.width = `${pendingWidth}px`;
                        updateIndicator(pendingWidth);
                        pendingWidth = null;
                    }
                    setTimeout(() => adjustIframeHeight(iframe), 100);
                }
            });

            // Touch support
            handle.addEventListener('touchstart', (e) => {
                isResizing = true;
                startX = e.touches[0].clientX;
                startWidth = container.offsetWidth;
                container.classList.add('resizing');
                handle.classList.add('dragging');
                iframe.style.pointerEvents = 'none';
                updateIndicator(startWidth);
                e.preventDefault();
            }, { passive: false });

            document.addEventListener('touchmove', (e) => {
                if (!isResizing) return;
                const diff = e.touches[0].clientX - startX;
                const newWidth = Math.max(320, Math.min(startWidth + diff, preview.offsetWidth - 48));
                scheduleResize(newWidth);
            }, { passive: true });

            document.addEventListener('touchend', () => {
                if (isResizing) {
                    isResizing = false;
                    container.classList.remove('resizing');
                    handle.classList.remove('dragging');
                    iframe.style.pointerEvents = '';
                    if (rafId) {
                        cancelAnimationFrame(rafId);
                        rafId = null;
                    }
                    if (pendingWidth !== null) {
                        container.style.width = `${pendingWidth}px`;
                        updateIndicator(pendingWidth);
                        pendingWidth = null;
                    }
                    setTimeout(() => adjustIframeHeight(iframe), 100);
                }
            });

            // Reset button
            resetBtn.addEventListener('click', () => {
                container.style.width = '100%';
                setTimeout(() => adjustIframeHeight(iframe), 100);
            });
        });
    }

    // Get the correct template path based on current page location
    function getTemplatePath() {
        const path = window.location.pathname;
        if (path.includes('/components/') || path.includes('/pages/')) {
            return '../templates/preview-template.html';
        }
        return 'templates/preview-template.html';
    }

    // Adjust iframe height to match content
    function adjustIframeHeight(iframe) {
        try {
            const doc = iframe.contentDocument || iframe.contentWindow.document;
            const root = doc.getElementById('component-root');
            if (root) {
                const height = root.scrollHeight;
                iframe.style.height = (height + 20) + 'px';
            }
        } catch (e) {
            // Cross-origin restrictions, use fallback height
            iframe.style.height = '400px';
        }
    }

    // =========================================
    // Escape HTML for Code Display
    // =========================================
    function escapeHtml(html) {
        const div = document.createElement('div');
        div.textContent = html;
        return div.innerHTML;
    }

    // =========================================
    // Auto-populate Code Blocks
    // =========================================
    function populateCodeBlocks() {
        document.querySelectorAll('.component-card').forEach(card => {
            const preview = card.querySelector('.component-preview-inner');
            const codeBlock = card.querySelector('.component-code code');

            if (preview && codeBlock && !codeBlock.textContent.trim()) {
                // Get the HTML and format it nicely
                let html = preview.innerHTML;

                // Basic formatting - add newlines after closing tags
                html = html.replace(/></g, '>\n<');

                // Escape and set
                codeBlock.textContent = html.trim();
            }
        });
    }

    // =========================================
    // Keyboard Navigation
    // =========================================
    function initKeyboardNav() {
        document.addEventListener('keydown', (e) => {
            // Toggle sidebar with Cmd/Ctrl + B
            if ((e.metaKey || e.ctrlKey) && e.key === 'b') {
                e.preventDefault();
                document.querySelector('.sidebar-toggle')?.click();
            }

            // Toggle code with Cmd/Ctrl + Shift + C when component is focused
            if ((e.metaKey || e.ctrlKey) && e.shiftKey && e.key === 'C') {
                e.preventDefault();
                const focusedCard = document.activeElement?.closest('.component-card');
                if (focusedCard) {
                    focusedCard.querySelector('[data-toggle-code]')?.click();
                }
            }
        });
    }

    // =========================================
    // Initialize Everything
    // =========================================
    function init() {
        initSidebar();
        initCodeToggle();
        initCopyToClipboard();
        initResponsiveControls();
        initCategoryFilter();
        initActiveLink();
        populateCodeBlocks();
        initKeyboardNav();
        initResizablePreviews();

        console.log('Yoder Graphics Component Gallery initialized');
    }

    // Run on DOM ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();
