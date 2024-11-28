// Set the current year in the footer
const currentYear = new Date().getFullYear();
document.getElementById("current-year").textContent = currentYear;

// Set the last modified date in the footer
document.getElementById("last-modified").textContent = 'Last Modified: ' + document.lastModified;

// Hamburger menu functionality
const hamburgerMenu = document.getElementById('hamburger-menu');
const navMenu = document.getElementById('nav-menu');

hamburgerMenu.addEventListener('click', () => {
    navMenu.classList.toggle('show');
});
