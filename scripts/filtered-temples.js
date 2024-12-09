// Array of Temples
    const temples = [
        {
          templeName: "Aba Nigeria",
          location: "Aba, Nigeria",
          dedicated: "2005, August, 7",
          area: 11500,
          imageUrl:
          "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
        },
        {
          templeName: "Manti Utah",
          location: "Manti, Utah, United States",
          dedicated: "1888, May, 21",
          area: 74792,
          imageUrl:
          "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
        },
        {
          templeName: "Payson Utah",
          location: "Payson, Utah, United States",
          dedicated: "2015, June, 7",
          area: 96630,
          imageUrl:
          "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
        },
        {
          templeName: "Yigo Guam",
          location: "Yigo, Guam",
          dedicated: "2020, May, 2",
          area: 6861,
          imageUrl:
          "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
        },
        {
          templeName: "Washington D.C.",
          location: "Kensington, Maryland, United States",
          dedicated: "1974, November, 19",
          area: 156558,
          imageUrl:
          "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
        },
        {
          templeName: "Lima Perú",
          location: "Lima, Perú",
          dedicated: "1986, January, 10",
          area: 9600,
          imageUrl:
          "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
        },
        {
          templeName: "Mexico City Mexico",
          location: "Mexico City, Mexico",
          dedicated: "1983, December, 2",
          area: 116642,
          imageUrl:
          "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
        },
        
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
