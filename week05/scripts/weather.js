const apiKey = 'eee666c67197570b5f1c99a62364591a';
const lat = -23.55; // Latitud de São Paulo, Brasil
const lon = -46.63; // Longitud de São Paulo, Brasil
const units = 'metric'; // Unidades en Celsius
const lang = 'en'; // Idioma Ingles
const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=${units}&lang=${lang}&appid=${apiKey}`;

// Seleccionar elementos HTML
const currentTemp = document.getElementById('temperature');
const weatherIcon = document.getElementById('weather-icon');
const captionDesc = document.getElementById('weather-condition');

async function apiFetch() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            console.log(data); // Testing only
            displayResults(data);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

// Función para mostrar los resultados en la página
function displayResults(weatherData) {
    const temp = weatherData.main.temp;
    const description = weatherData.weather[0].description;
    const icon = weatherData.weather[0].icon;
    const iconUrl = `https://openweathermap.org/img/wn/${icon}@2x.png`;

    currentTemp.textContent = `${temp.toFixed(1)} °C`;
    weatherIcon.setAttribute('src', iconUrl);
    weatherIcon.setAttribute('alt', description);
    captionDesc.textContent = description.charAt(0).toUpperCase() + description.slice(1); // Capitaliza la primera letra
}

// Llamar a la función apiFetch para cargar los datos al cargar la página
apiFetch();
