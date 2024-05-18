document.addEventListener("DOMContentLoaded", function() {
    // Obtener todas las imágenes
    const images = document.querySelectorAll("img");

    // Función para verificar si una imagen está en el viewport
    function isImageInViewport(img) {
        const rect = img.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    // Función para cargar las imágenes al desplazarse
    function lazyLoadImages() {
        images.forEach(img => {
            if (isImageInViewport(img)) {
                img.classList.add("fade-in"); // Agregar clase para mostrar la imagen
            }
        });
    }

    // Cargar las imágenes al iniciar y al desplazarse
    lazyLoadImages();
    window.addEventListener("scroll", lazyLoadImages);
});
