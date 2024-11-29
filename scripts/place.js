// Footer: Current Year and Last Modified
document.getElementById("year").textContent = new Date().getFullYear();
document.getElementById("last-modified").textContent = document.lastModified;

// Calculate Wind Chill
const temperature = 28; // Static value in Celsius
const windSpeed = 15; // Static value in km/h

function calculateWindChill(temp, speed) {
    return (
        13.12 +
        0.6215 * temp -
        11.37 * Math.pow(speed, 0.16) +
        0.3965 * temp * Math.pow(speed, 0.16)
    ).toFixed(1);
}

if (temperature <= 10 && windSpeed > 4.8) {
    document.getElementById("windchill").textContent = `${calculateWindChill(
        temperature,
        windSpeed
    )} °C`;
} else {
    document.getElementById("windchill").textContent = "N/A";
}
