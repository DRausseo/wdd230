document.addEventListener('DOMContentLoaded', function() {
    const hamButton = document.getElementById('menu');
    const navigation = document.querySelector('.navigation');

    hamButton.addEventListener('click', function() {
        navigation.classList.toggle('open');
        hamButton.classList.toggle('open');
    });
});