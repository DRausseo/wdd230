/* jshint esversion: 6 */

document.addEventListener('DOMContentLoaded', () => {
    const darkModeToggle = document.getElementById('dark-mode-toggle');
    const main = document.querySelector('main');

    if (darkModeToggle) {
        darkModeToggle.addEventListener('click', () => {
            main.classList.toggle('dark-mode');
        });
    }

    const lastModifiedElement = document.getElementById("lastModified");
    if (lastModifiedElement) {
        lastModifiedElement.textContent = document.lastModified;
    }
});
