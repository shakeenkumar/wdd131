// This script dynamically updates the copyright year and last modified date in the footer.

document.getElementById("currentyear").textContent = new Date().getFullYear();  // Set current year

document.getElementById("lastModified").textContent = "Last modified: " + document.lastModified;  // Set last modified date
