document.addEventListener("DOMContentLoaded", function () {
    const password = document.getElementById("password");
    const confirmPassword = document.getElementById("confirmPassword");
    const passwordError = document.getElementById("passwordError");
    const rating = document.getElementById("rating");
    const ratingValue = document.getElementById("ratingValue");
    const submitButton = document.getElementById("submit-button");

    if (confirmPassword) {
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
    } else {
        console.error("Error: No se encontró el elemento confirmPassword.");
    }

    if (rating) {
        rating.addEventListener("input", function () {
            ratingValue.textContent = rating.value;
        });
    } else {
        console.error("Error: No se encontró el elemento rating.");
    }

    if (submitButton) {
        submitButton.addEventListener("click", function () {
            console.log("Formulario enviado");
        });
    } else {
        console.error("Error: No se encontró el botón de envío.");
    }
});
