const apiKey = "b61c56bc4efc70d490f73d0ef70f680e"; // Mi clave de OpenWeatherMap
const city = "Brasilia";
const apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

async function getWeather() {
    try {
        const response = await fetch(apiURL);
        const data = await response.json();
        document.getElementById("temp").textContent = data.main.temp;
        document.getElementById("condition").textContent = data.weather[0].description;
        document.getElementById("weather-icon").src = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`;
        document.getElementById("weather-icon").alt = data.weather[0].description;
    } catch (error) {
        console.error("Error fetching weather data:", error);
    }
}

getWeather();
