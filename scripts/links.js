const baseURL = "https://drausseo.github.io/wdd230/";
const linksURL = "https://drausseo.github.io/wdd230/data/links.json";


async function getLinks() {
    try {
        const response = await fetch(linksURL);
        if (response.ok) {
            const data = await response.json();
            console.log(data); // Testing only
            displayLinks(data);
        } else {
            throw new Error(await response.text());
        }
    } catch (error) {
        console.error(error);
    }
}

function displayLinks(data) {
    const weeks = data.weeks;
    const linksContainer = document.querySelector('#links-container'); // Asegúrate de tener un contenedor con este ID en tu HTML
    linksContainer.innerHTML = '';

    weeks.forEach(week => {
        const weekTitle = document.createElement('h3');
        weekTitle.textContent = week.week;

        const ul = document.createElement('ul');
        week.links.forEach(link => {
            const li = document.createElement('li');
            const a = document.createElement('a');
            a.href = `${baseURL}${link.url}`;
            a.textContent = link.title;
            li.appendChild(a);
            ul.appendChild(li);
        });

        linksContainer.appendChild(weekTitle);
        linksContainer.appendChild(ul);
    });
}

getLinks();
