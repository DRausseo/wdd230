document.addEventListener("DOMContentLoaded", () => {
    const membersContainer = document.getElementById("membersContainer");
    const gridViewButton = document.getElementById("gridView");
    const listViewButton = document.getElementById("listView");

    // Cargar datos desde el JSON
    fetch("data/members.json")
        .then(response => response.json())
        .then(data => displayMembers(data));

    function displayMembers(members) {
        membersContainer.innerHTML = ""; // Limpiar contenedor

        members.forEach(member => {
            const memberCard = document.createElement("div");
            memberCard.classList.add("member-card");

            memberCard.innerHTML = `
                <img src="images/${member.image}" alt="${member.name} Logo">
                <h3>${member.name}</h3>
                <p>${member.address}</p>
                <p>${member.phone}</p>
                <a href="${member.website}" target="_blank">${member.website}</a>
                <p class="membership">${member.membership} Member</p>
            `;

            membersContainer.appendChild(memberCard);
        });
    }

    // Alternar entre Grid y Lista
    gridViewButton.addEventListener("click", () => {
        membersContainer.classList.add("grid");
        membersContainer.classList.remove("list");
    });

    listViewButton.addEventListener("click", () => {
        membersContainer.classList.add("list");
        membersContainer.classList.remove("grid");
    });
});
