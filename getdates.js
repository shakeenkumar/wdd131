// Function to dynamically update the current year in the footer
function updateYear() {
    const currentYear = new Date().getFullYear(); // Get current year
    document.getElementById('currentyear').textContent = currentYear;
}

// Function to dynamically update the last modified date in the footer
function updateLastModified() {
    const lastModifiedDate = document.lastModified; // Get the last modified date of the document
    document.getElementById('lastModified').textContent = "Last modified: " + lastModifiedDate;
}

// Call the functions to update the footer
updateYear();
updateLastModified();
