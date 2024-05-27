/* jshint esversion: 6 */
document.addEventListener("DOMContentLoaded", () => {
    const directory = document.getElementById('directory');
    const gridButton = document.getElementById('grid');
    const listButton = document.getElementById('list');

    gridButton.addEventListener('click', () => {
        directory.classList.remove('list');
        directory.classList.add('grid');
    });

    listButton.addEventListener('click', () => {
        directory.classList.remove('grid');
        directory.classList.add('list');
    });

    fetch('data/members.json')
        .then(response => response.json())
        .then(data => {
            data.members.forEach(member => {
                const section = document.createElement('section');
                section.innerHTML = `
                    <img src="images/${member.image}" alt="${member.name}">
                    <h3>${member.name}</h3>
                    <p>${member.address}</p>
                    <p>${member.phone}</p>
                    <a href="${member.website}" target="_blank">Website</a>
                    <p>Membership Level: ${member.membership_level}</p>
                `;
                directory.appendChild(section);
            });
        });
});
