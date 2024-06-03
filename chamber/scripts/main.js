/* jshint esversion: 6 */

document.addEventListener('DOMContentLoaded', () => {
    const darkModeToggle = document.getElementById('dark-mode-toggle');
    const main = document.querySelector('main');

    if (darkModeToggle) {
        darkModeToggle.addEventListener('click', () => {
            main.classList.toggle('dark-mode');
        });
    }

    const lastModifiedElement = document.getElementById("lastModified");
    if (lastModifiedElement) {
        lastModifiedElement.textContent = document.lastModified;
    }

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
    fetch('data/members.json')
        .then(response => response.json())
        .then(data => {
            const members = data.members;
            members.forEach(member => {
                const memberDiv = document.createElement('div');
                memberDiv.classList.add('member');

                // HTML básico del miembro
                let memberHTML = `
                    <h3>${member.name}</h3>
                    <p>Address: ${member.address}</p>
                    <p>Phone: ${member.phone}</p>
                    <p>Membership Level: ${member.membership_level}</p>
                    <a href="${member.website}" target="_blank">Visit Website</a>
                `;

                // Agregar la imagen si existe
                if (member.image) {
                    memberHTML = `<img src="chamber/images/${member.image}" alt="${member.name}">` + memberHTML;
                }

                memberDiv.innerHTML = memberHTML;
                directory.appendChild(memberDiv);
            });
        })
        .catch(error => console.error('Error fetching members:', error));
});

