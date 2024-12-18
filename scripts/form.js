const products = [
    { id: "fc-1888", name: "flux capacitor", averagerating: 4.5 },
    { id: "fc-2050", name: "power laces", averagerating: 4.7 },
    { id: "fs-1987", name: "time circuits", averagerating: 3.5 },
    { id: "ac-2000", name: "low voltage reactor", averagerating: 3.9 },
    { id: "jj-1969", name: "warp equalizer", averagerating: 5.0 }
];

const productSelect = document.getElementById("product-name");
products.forEach(product => {
    let option = document.createElement("option");
    option.value = product.id;
    option.textContent = product.name;
    productSelect.appendChild(option);
});

// Keeping track of the number of reviews
let reviewCount = parseInt(localStorage.getItem('reviewCount')) || 0;
localStorage.setItem('reviewCount', reviewCount);

// When the form is submitted, increment the review count
document.getElementById("reviewForm").addEventListener("submit", function () {
    reviewCount++;
    localStorage.setItem('reviewCount', reviewCount);
});
// Dynamically set the copyright year in the footer
document.getElementById("currentyear").textContent = new Date().getFullYear();

// Dynamically set the last modified date in the footer
document.getElementById("lastModified").textContent = "Last modified: " + document.lastModified;
