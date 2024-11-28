// This script dynamically updates the copyright year and last modified date in the footer.

// Set current year
document.getElementById("currentyear").textContent = new Date().getFullYear();

// Set last modified date
document.getElementById("lastModified").textContent = "Last modified: " + document.lastModified;
