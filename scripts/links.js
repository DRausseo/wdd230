const baseURL = "https://drausseo.github.io/wdd230/";
const linksURL = baseURL + "data/links.json";

async function getLinks() {
    const response = await fetch(linksURL);
    const data = await response.json();
    displayLinks(data.weeks);
}

function displayLinks(weeks) {
    const activitiesSection = document.querySelector(".card ul");
    activitiesSection.innerHTML = ""; // Limpiar contenido previo

    weeks.forEach(week => {
        const weekTitle = document.createElement("h3");
        weekTitle.textContent = week.week;
        activitiesSection.appendChild(weekTitle);

        week.links.forEach(link => {
            const listItem = document.createElement("li");
            const anchor = document.createElement("a");
            anchor.href = baseURL + link.url;
            anchor.textContent = link.title;
            listItem.appendChild(anchor);
            activitiesSection.appendChild(listItem);
        });
    });
}

getLinks();
