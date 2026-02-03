var megaMobileMenuOpen = false;
function toggleMegaMobileMenu() {
    var mobileMenu = document.getElementById('megaMobileMenu');
    var menuIcon = document.getElementById('megaMobileMenuIcon');
    if (!mobileMenu || !menuIcon) return;
    megaMobileMenuOpen = !megaMobileMenuOpen;
    if (megaMobileMenuOpen) {
        mobileMenu.classList.remove('hidden');
        menuIcon.classList.remove('fa-bars');
        menuIcon.classList.add('fa-xmark');
    } else {
        mobileMenu.classList.add('hidden');
        menuIcon.classList.remove('fa-xmark');
        menuIcon.classList.add('fa-bars');
    }
}
window.toggleMegaMobileMenu = toggleMegaMobileMenu;
