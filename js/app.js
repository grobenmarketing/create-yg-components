// Combined App JavaScript - Header, Footer, and Main functionality

document.addEventListener('DOMContentLoaded', function() {
    // ===== HEADER INJECTION =====
    // Fetch header from external file
    fetch('includes/header.html')
        .then(response => response.text())
        .then(html => {
            const headerPlaceholder = document.getElementById('header-placeholder');
            if (headerPlaceholder) {
                headerPlaceholder.innerHTML = html;
                // Dispatch event to signal header is loaded
                window.dispatchEvent(new Event('headerLoaded'));
            }
        })
        .catch(error => console.error('Error loading header:', error));

    // ===== FOOTER INJECTION =====
    // Fetch footer from external file
    fetch('includes/footer.html')
        .then(response => response.text())
        .then(html => {
            const footerPlaceholder = document.getElementById('footer-placeholder');
            if (footerPlaceholder) {
                footerPlaceholder.innerHTML = html;
            }
        })
        .catch(error => console.error('Error loading footer:', error));

    // ===== MOBILE MENU FUNCTIONALITY =====
    function initializeMenu() {
        const menuButton = document.querySelector('.menu-icon');
        const mobileNav = document.querySelector('.nav-items-mobile');

        if (menuButton && mobileNav) {
            menuButton.addEventListener('click', function() {
                // Toggle mobile menu visibility
                if (mobileNav.style.display === 'none' || mobileNav.style.display === '') {
                    mobileNav.style.display = 'block';
                } else {
                    mobileNav.style.display = 'none';
                }
            });
        }

        // Close mobile menu when clicking outside
        document.addEventListener('click', function(event) {
            if (mobileNav && menuButton) {
                const isClickInsideMenu = mobileNav.contains(event.target);
                const isClickOnButton = menuButton.contains(event.target);

                if (!isClickInsideMenu && !isClickOnButton && mobileNav.style.display === 'block') {
                    mobileNav.style.display = 'none';
                }
            }
        });

        // Mobile Dropdown Toggle
        const dropdownToggles = document.querySelectorAll('.dropdown-toggle');

        dropdownToggles.forEach(function(toggle) {
            toggle.addEventListener('click', function(e) {
                e.preventDefault();

                const parentLi = this.closest('li');
                const dropdownMenu = parentLi.querySelector('.dropdown-menu');

                if (dropdownMenu) {
                    // Toggle the dropdown
                    if (dropdownMenu.style.display === 'none' || dropdownMenu.style.display === '') {
                        dropdownMenu.style.display = 'block';
                    } else {
                        dropdownMenu.style.display = 'none';
                    }
                }
            });
        });
    }

    // Wait for header to be loaded before initializing menu
    window.addEventListener('headerLoaded', initializeMenu);
});
