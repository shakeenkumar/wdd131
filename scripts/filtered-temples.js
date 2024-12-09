// Array of Temples
const temples = [
    { name: "Salt Lake Temple", location: "Salt Lake City, Utah", dedicationYear: 1893, area: 104000, image: "salt-lake-temple.jpg" },
    { name: "Los Angeles Temple", location: "Los Angeles, California", dedicationYear: 1955, area: 40000, image: "los-angeles-temple.jpg" },
    { name: "New York Temple", location: "New York City, New York", dedicationYear: 2004, area: 50000, image: "new-york-temple.jpg" },
    { name: "Tokyo Temple", location: "Tokyo, Japan", dedicationYear: 1980, area: 20000, image: "tokyo-temple.jpg" },
    { name: "Sao Paulo Temple", location: "Sao Paulo, Brazil", dedicationYear: 2000, area: 120000, image: "sao-paulo-temple.jpg" },
    { name: "London Temple", location: "London, England", dedicationYear: 1955, area: 35000, image: "london-temple.jpg" },
    { name: "Rome Temple", location: "Rome, Italy", dedicationYear: 2019, area: 55000, image: "rome-temple.jpg" },
    { name: "Mexico City Temple", location: "Mexico City, Mexico", dedicationYear: 1983, area: 27000, image: "mexico-city-temple.jpg" },
    { name: "Sydney Temple", location: "Sydney, Australia", dedicationYear: 1984, area: 32000, image: "sydney-temple.jpg" },
    { name: "Berlin Temple", location: "Berlin, Germany", dedicationYear: 1985, area: 19000, image: "berlin-temple.jpg" }
];

// Function to display the temples as cards
function displayTemples(filteredTemples) {
    const container = document.querySelector('.temple-cards-container');
    container.innerHTML = ''; // Clear existing cards

    filteredTemples.forEach(temple => {
        const card = document.createElement('figure');
        card.classList.add('temple-card');
        card.innerHTML = `
            <img src="images/${temple.image}" alt="${temple.name}" loading="lazy">
            <figcaption>
                <h3>${temple.name}</h3>
                <p>Location: ${temple.location}</p>
                <p>Dedicated: ${temple.dedicationYear}</p>
                <p>Area: ${temple.area} sq ft</p>
            </figcaption>
        `;
        container.appendChild(card);
    });
}

// Function to filter temples
function filterTemples(filter) {
    let filteredTemples;

    switch (filter) {
        case 'old':
            filteredTemples = temples.filter(temple => temple.dedicationYear < 1900);
            break;
        case 'new':
            filteredTemples = temples.filter(temple => temple.dedicationYear > 2000);
            break;
        case 'large':
            filteredTemples = temples.filter(temple => temple.area > 90000);
            break;
        case 'small':
            filteredTemples = temples.filter(temple => temple.area < 10000);
            break;
        case 'all':
        default:
            filteredTemples = temples;
            break;
    }

    displayTemples(filteredTemples);
}

// Initialize the page with all temples displayed
document.addEventListener('DOMContentLoaded', () => {
    displayTemples(temples);

    // Footer Date
    document.getElementById('year').textContent = new Date().getFullYear();
    document.getElementById('lastModified').textContent = document.lastModified;
});
