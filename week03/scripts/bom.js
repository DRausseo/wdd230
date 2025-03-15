const input = document.querySelector("#favchap"); // Captura el campo de entrada
const button = document.querySelector("button"); // Captura el botón
const list = document.querySelector("#list"); // Captura la lista

// Obtener capítulos almacenados o inicializar un array vacío
let chaptersArray = JSON.parse(localStorage.getItem("myFavBOMList")) || [];

// Renderizar capítulos almacenados
chaptersArray.forEach(chapter => displayList(chapter));

button.addEventListener("click", () => {
    const chapter = input.value.trim(); // Eliminar espacios extra
    if (chapter !== "") {
        if (!chaptersArray.includes(chapter)) { // Evita duplicados
            displayList(chapter);
            chaptersArray.push(chapter);
            updateLocalStorage();
        } else {
            alert("Chapter already added!"); // Mensaje de advertencia si ya existe
        }
        input.value = ""; // Limpiar campo de entrada
        input.focus();
    } else {
        alert("Please enter a chapter."); // Mensaje si el campo está vacío
        input.focus();
    }
});

// Función para mostrar el capítulo en la lista
function displayList(chapter) {
    const li = document.createElement("li");
    li.textContent = chapter;

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "❌";
    deleteButton.classList.add("delete");
    deleteButton.setAttribute("aria-label", `Remove ${chapter}`);

    li.append(deleteButton);
    list.append(li);

    deleteButton.addEventListener("click", () => {
        list.removeChild(li);
        deleteChapter(chapter);
        input.focus();
    });
}

// Función para actualizar localStorage
function updateLocalStorage() {
    localStorage.setItem("myFavBOMList", JSON.stringify(chaptersArray));
}

// Función para eliminar capítulo del array y actualizar localStorage
function deleteChapter(chapter) {
    chaptersArray = chaptersArray.filter(item => item !== chapter);
    updateLocalStorage();
}
