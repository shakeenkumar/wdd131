const temples = [
    { templeName: "Aba Nigeria", location: "Aba, Nigeria", dedicated: "2005, August, 7", area: 11500, imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg" },
    { templeName: "Manti Utah", location: "Manti, Utah, United States", dedicated: "1888, May, 21", area: 74792, imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg" },
    { templeName: "Payson Utah", location: "Payson, Utah, United States", dedicated: "2015, June, 7", area: 96630, imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg" },
    { templeName: "Yigo Guam", location: "Yigo, Guam", dedicated: "2020, May, 2", area: 6861, imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg" },
    { templeName: "Washington D.C.", location: "Kensington, Maryland, United States", dedicated: "1974, November, 19", area: 156558, imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg" },
    { templeName: "Rome Italy", location: "Rome, Italy", dedicated: "2019, March, 10", area: 40000, imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/rome-italy/400x250/rome-italy-temple-exterior-1.jpeg" },
    { templeName: "Salt Lake", location: "Salt Lake City, Utah, United States", dedicated: "1893, April, 6", area: 253015, imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/salt-lake/400x250/salt-lake-temple-exterior-789456.jpeg" },
    { templeName: "Tokyo Japan", location: "Tokyo, Japan", dedicated: "1980, October, 27", area: 52000, imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/tokyo-japan/400x250/tokyo-japan-temple-exterior-145789.jpeg" },
    { templeName: "Lima Perú", location: "Lima, Perú", dedicated: "1986, January, 10", area: 9600, imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg" }
  ];
  
  // Render temple cards
  function renderTemples(filteredTemples = temples) {
    const container = document.getElementById("temple-cards-container");
    container.innerHTML = "";
    filteredTemples.forEach((temple) => {
      const card = document.createElement("div");
      card.classList.add("temple-card");
      card.innerHTML = `
        <img src="${temple.imageUrl}" alt="${temple.templeName}" loading="lazy">
        <h2>${temple.templeName}</h2>
        <p>Location: ${temple.location}</p>
        <p>Dedicated: ${temple.dedicated}</p>
        <p>Area: ${temple.area} sq ft</p>
      `;
      container.appendChild(card);
    });
  }
  
  // Filter logic
  function filterTemples(criteria) {
    switch (criteria) {
      case "old": renderTemples(temples.filter(t => new Date(t.dedicated).getFullYear() < 1900)); break;
      case "new": renderTemples(temples.filter(t => new Date(t.dedicated).getFullYear() > 2000)); break;
      case "large": renderTemples(temples.filter(t => t.area > 90000)); break;
      case "small": renderTemples(temples.filter(t => t.area < 10000)); break;
      default: renderTemples();
    }
  }
  
  // Event Listeners for filters
  document.getElementById("home").addEventListener("click", () => filterTemples());
  document.getElementById("old").addEventListener("click", () => filterTemples("old"));
  document.getElementById("new").addEventListener("click", () => filterTemples("new"));
  document.getElementById("large").addEventListener("click", () => filterTemples("large"));
  document.getElementById("small").addEventListener("click", () => filterTemples("small"));
  
  // Footer info
  document.getElementById("year").textContent = new Date().getFullYear();
  document.getElementById("modified").textContent = document.lastModified;
  
  // Initial render
  renderTemples();
  