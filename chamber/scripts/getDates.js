window.onload = function() {
    // Get the element for current year
    var currentYearElement = document.getElementById('currentYear');
    // Get the current year
    var currentYear = new Date().getFullYear();
    // Assign the current year to the HTML element
    currentYearElement.textContent = currentYear;

    // Get the element for last modified date
    var lastModifiedElement = document.getElementById('lastModified');
    // Get the last modified date of the document
    var lastModified = document.lastModified;
    // Assign the last modified date to the HTML element
    lastModifiedElement.textContent = "Last modified: " + lastModified;
};
