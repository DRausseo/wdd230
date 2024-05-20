document.addEventListener('DOMContentLoaded', () => {
    const darkModeToggle = document.getElementById('dark-mode-toggle');
    const main = document.querySelector('main');

    darkModeToggle.addEventListener('click', () => {
        main.classList.toggle('dark-mode');
    });
});
