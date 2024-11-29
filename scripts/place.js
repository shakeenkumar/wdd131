// Function to calculate Wind Chill
function calculateWindChill(temp, windSpeed) {
    if (temp <= 10 && windSpeed > 4.8) {
        return (
            13.12 +
            0.6215 * temp - 
            11.37 * Math.pow(windSpeed, 0.16) + 
            0.3965 * temp * Math.pow(windSpeed, 0.16)
        ).toFixed(1);
    } else {
        return "N/A";
    }
}

// Display Wind Chill
const temperature = 30; // Static temperature (Celsius)
const windSpeed = 15; // Static wind speed (km/h)
const windChillElement = document.getElementById("windchill");
windChillElement.textContent = calculateWindChill(temperature, windSpeed);

// Display Last Modified Date
const lastModifiedElement = document.getElementById("last-modified");
lastModifiedElement.textContent = document.lastModified;
