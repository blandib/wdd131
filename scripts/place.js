document.addEventListener("DOMContentLoaded", function () {
    // Get DOM elements
    const temperatureEl = document.getElementById("temperature");
    const windSpeedEl = document.getElementById("windSpeed");
    const windChillEl = document.getElementById("windchill");

    // Convert string content to numbers
    const temperature = parseFloat(temperatureEl.textContent);
    const windSpeed = parseFloat(windSpeedEl.textContent);

    // Function to calculate wind chill factor (Celsius version)
    function calculateWindChill(temp, windSpeed) {
        return (13.12 + 0.6215 * temp - 11.37 * Math.pow(windSpeed, 0.16) + 0.3965 * temp * Math.pow(windSpeed, 0.16)).toFixed(2);
    }

    // Determine if wind chill calculation applies
    function updateWindChill() {
        if (temperature <= 10 && windSpeed > 4.8) {
            windChillEl.textContent = calculateWindChill(temperature, windSpeed) + " °C";
        } else {
            windChillEl.textContent = "N/A"; // Not applicable
        }
    }

    // Run function to update wind chill display
    updateWindChill();
});
