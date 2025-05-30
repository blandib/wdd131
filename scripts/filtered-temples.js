const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

hamButton.addEventListener('click', () => {
	navigation.classList.toggle('open');
	hamButton.classList.toggle('open');
});

const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
  },
  {
    templeName: "Johannesburg South Africa Temple",
    location: "Johannesburg South Africa ",
    dedicated: "  1985, August, 25 -24 ",
    area: 19184,
    imageUrl:
    "https://churchofjesuschristtemples.org/assets/img/temples/johannesburg-south-africa-temple/johannesburg-south-africa-temple-22475.jpg"
  },
  {
     templeName: "Suva Fiji Temple",
    location: "Suva Fiji  ",
    dedicated: "  2016, February, 21 ",
    area: 12755,
    imageUrl:"https://churchofjesuschristtemples.org/assets/img/temples/suva-fiji-temple/suva-fiji-temple-4631.jpg"
  },
  {
     templeName: "Tokyo Japan Temple",
    location: "Tokyo Japan  ",
    dedicated: "  1980, October, 27-29 ",
    area: 53997,
    imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/tokyo-japan-temple/tokyo-japan-temple-27491.jpg"
  }
  
];
const templeContainer = document.querySelector("#templeCards");
temples.forEach(temple => {
    //create cards container
    const card = document.createElement("div");
    card.classList.add("temple-card");
    //temple name
    const name = document.createElement("h2");
    name.textContent = temple.templeName;
    //temple location
    const location = document.createElement("p");
    location.textContent = `Location: ${temple.location}`;
    //temple area
    const area = document.createElement("p");
    area.textContent =` SIZE: ${temple.area} sq ft`;
    //temple dedicated
    const dedicated = document.createElement("p");
    dedicated.textContent = `DEDICATED: ${temple.dedicated}`;
    //temple image (with lazy loading)
    const image = document.createElement("img");
    image.src = temple.imageUrl;
    image.alt = temple.templeName;
    image.loading = "lazy"; //enables lazy loading
    // append elements to card
    card.appendChild(name);
    card.appendChild(location);
    card.appendChild(area);
    card.appendChild(dedicated);
    card.appendChild(image);
    //append card to container
    templeContainer.appendChild(card);
});
function displayTemples(templesToDisplay) {
    // Clear existing content
    templeContainer.innerHTML = "";

    templesToDisplay.forEach(temple => {
        const card = document.createElement("div");
        card.classList.add("temple-card");

        const name = document.createElement("h2");
        name.textContent = temple.templeName;

        const location = document.createElement("p");
        location.textContent = `Location: ${temple.location}`;

        const area = document.createElement("p");
        area.textContent = `SIZE: ${temple.area} sq ft`;

        const dedicated = document.createElement("p");
        dedicated.textContent = `DEDICATED: ${temple.dedicated}`;

        const image = document.createElement("img");
        image.src = temple.imageUrl;
        image.alt = temple.templeName;
        image.loading = "lazy";

        card.appendChild(name);
        card.appendChild(location);
        card.appendChild(area);
        card.appendChild(dedicated);
        card.appendChild(image);

        templeContainer.appendChild(card);
    });
    //let year = parseInt(temple.dedicated.trim().split(",")[0]);

}
// Function to filter and display temples
let filterTemples = (filter) => {
    // Clear the output
    templeContainer.innerHTML = "";

    // Filter logic
    let filteredTemples = temples.filter(temp => {
        let year = parseInt(temp.dedicated.split(",")[0].trim());

        switch (filter) {
            case "old":
                return year < 1900;
            case "new":
                return year > 2000;
            case "large":
                return temp.area > 90000;
            case "small":
                return temp.area < 10000;
            case "home":
                return true; // Show all temples
            default:
                return true; // Fallback case
        }
    });

    // Display the filtered temples
    displayTemples(filteredTemples);
};

// Event Listeners for Navigation Menu Items
document.querySelector("#menu-home").addEventListener("click", () => filterTemples("home"));
document.querySelector("#menu-old").addEventListener("click", () => filterTemples("old"));
document.querySelector("#menu-new").addEventListener("click", () => filterTemples("new"));
document.querySelector("#menu-large").addEventListener("click", () => filterTemples("large"));
document.querySelector("#menu-small").addEventListener("click", () => filterTemples("small"));

// Initial display (show all temples on page load)
filterTemples("home");
