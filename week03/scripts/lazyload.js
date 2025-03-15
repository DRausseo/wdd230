document.addEventListener("DOMContentLoaded", function() {
    const images = document.querySelectorAll("img");
    
    images.forEach(img => {
        img.addEventListener("load", () => {
            img.classList.add("lazy-loaded");
        });
    });
    
    document.getElementById("lastModified").textContent = document.lastModified;
});
