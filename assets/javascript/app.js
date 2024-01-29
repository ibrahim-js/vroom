// Desktop Sidebar
const sidebar = document.getElementById("sidebar");
const menuToggle = document.getElementById("menu-toggle");

menuToggle.onclick = function() {
    sidebar.classList.toggle("show-sidebar");
};

// Mobile Menu
const mobileMenu = document.getElementById("mobile-menu");
const mobileMenuToggle = document.getElementById("mobile-menu-toggle");

mobileMenuToggle.onclick = function() {
    mobileMenu.classList.toggle("show-mobile-menu");
};