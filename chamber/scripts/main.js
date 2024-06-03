/* jshint esversion: 6 */

document.addEventListener('DOMContentLoaded', () => {
    // Toggle dark mode
    const darkModeToggle = document.getElementById('dark-mode-toggle');
    const main = document.querySelector('main');

    if (darkModeToggle) {
        darkModeToggle.addEventListener('click', () => {
            main.classList.toggle('dark-mode');
        });
    }

    // Set last modified date
    const lastModifiedElement = document.getElementById("lastModified");
    if (lastModifiedElement) {
        lastModifiedElement.textContent = document.lastModified;
    }

    // Toggle grid/list view
    const gridButton = document.getElementById('grid');
    const listButton = document.getElementById('list');
    const directory = document.getElementById('directory');

    if (gridButton && listButton && directory) {
        gridButton.addEventListener('click', () => {
            directory.classList.add('grid');
            directory.classList.remove('list');
        });

        listButton.addEventListener('click', () => {
            directory.classList.add('list');
            directory.classList.remove('grid');
        });
    }

    // Fetch and display members
    fetch('chamber/data/members.json')
        .then(response => response.json())
        .then(data => {
            const members = data.weeks;
            members.forEach(week => {
                week.links.forEach(member => {
                    const memberDiv = document.createElement('div');
                    memberDiv.classList.add('member');
                    memberDiv.innerHTML = `
                        <h3>${member.title}</h3>
                        <p>Week: ${week.week}</p>
                        <a href="${member.url}">Visit</a>
                    `;
                    directory.appendChild(memberDiv);
                });
            });
        })
        .catch(error => console.error('Error fetching members:', error));
});
