// Función para manejar el menú hamburguesa
document.addEventListener("DOMContentLoaded", function () {
    const menuBtn = document.getElementById("menu-btn");
    const navMenu = document.getElementById("nav-menu");

    if (menuBtn && navMenu) {
        menuBtn.addEventListener("click", function () {
            navMenu.classList.toggle("open");
        });
    }
});

// Función para obtener y mostrar el clima
function fetchWeather() {
    const API_KEY = "b61c56bc4efc70d490f73d0ef70f680e"; // Reemplazar con clave de OpenWeather
    const CITY = "Sao Paulo";
    const URL = `https://api.openweathermap.org/data/2.5/weather?q=${CITY}&appid=${API_KEY}&units=metric`;

    fetch(URL)
        .then(response => response.json())
        .then(data => {
            if (data.main && data.main.temp) {
                document.getElementById("temp").textContent = `${data.main.temp}°C`;
            } else {
                console.error("No se pudo obtener la temperatura.");
            }
        })
        .catch(error => console.error("Error al obtener el clima:", error));
}

// Llamar a la función de clima cuando cargue la página
document.addEventListener("DOMContentLoaded", fetchWeather);
