document.addEventListener("DOMContentLoaded", function () {
    const password = document.getElementById("password");
    const confirmPassword = document.getElementById("confirmPassword");
    const passwordError = document.getElementById("passwordError");

    confirmPassword.addEventListener("input", function () {
        if (password.value !== confirmPassword.value) {
            passwordError.textContent = "Passwords do not match!";
            passwordError.style.display = "block";
            confirmPassword.setCustomValidity("Passwords do not match.");
        } else {
            passwordError.textContent = "";
            passwordError.style.display = "none";
            confirmPassword.setCustomValidity("");
        }
    });

    // Mostrar valor en tiempo real del range input
    const rating = document.getElementById("rating");
    const ratingValue = document.getElementById("ratingValue");

    rating.addEventListener("input", function () {
        ratingValue.textContent = rating.value;
    });
});
