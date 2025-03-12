const input = document.querySelector("#favchap"); // Captura el campo de entrada
const button = document.querySelector("button"); // Captura el botón
const list = document.querySelector("#list"); // Captura la lista donde se agregarán los capítulos

button.addEventListener("click", () => {
  if (input.value.trim() !== "") {
    // Verifica que el campo no esté vacío
    const li = document.createElement("li"); // Crea un nuevo elemento <li>
    li.textContent = input.value; // Asigna el valor ingresado al <li>

    const deleteButton = document.createElement("button"); // Crea el botón de eliminar
    deleteButton.textContent = "❌";
    deleteButton.classList.add("delete"); // Agrega una clase al botón
    deleteButton.setAttribute("aria-label", `Remove ${input.value}`); // Accesibilidad para lectores de pantalla

    li.append(deleteButton); // Agrega el botón al <li>
    list.append(li); // Agrega el <li> a la lista

    deleteButton.addEventListener("click", () => {
      list.removeChild(li); // Elimina el capítulo cuando se presiona el botón
      input.focus(); // Devuelve el foco al campo de entrada
    });

    input.value = ""; // Limpia el campo después de agregar
    input.focus(); // Enfoca el campo de entrada
  } else {
    alert("Please enter a chapter."); // Mensaje de advertencia si el campo está vacío
    input.focus();
  }
});
