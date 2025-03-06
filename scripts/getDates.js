// Año actual en el footer
document.getElementById("year").textContent = new Date().getFullYear();

// Última modificación del documento
document.getElementById("lastModified").textContent =
  "Last modified: " + document.lastModified;
