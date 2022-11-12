/* ===== Display Views =====*/
const gridBtn = document.querySelector("#grid");
const listBtn = document.querySelector("#list");
const display = document.querySelector(".infoCards-Grid");

gridBtn.addEventListener("click", () => {
	display.classList.remove("infoCards-list");
});

listBtn.addEventListener("click", () => {
	display.classList.add("infoCards-list");
})

const URLrequest = 'https://joseandresggiron.github.io/wdd230/chamber/json/data.json';
const infoCards = document.querySelector(".infoCards-Grid");

fetch(URLrequest)
.then(function (response) {
    return response.json();
})
.then(function (jsonObject) {
    const companies = jsonObject["companies"];
    companies.forEach(displayCompanies);
});

function displayCompanies(company) {
    let card = document.createElement("section");
    let logo = document.createElement("img");
    let name = document.createElement("h2");
    let address = document.createElement("p");
    let phone = document.createElement("p");
    let email = document.createElement("p");
    let website = document.createElement("p");
    let membership = document.createElement("p");

    logo.setAttribute('src', company.logo);
    logo.setAttribute('alt', `${company.name}'s logo`);
    name.textContent = `${company.name}`;
    address.textContent = `${company.address}`;
    phone.textContent = `${company.phone}`;
    email.textContent = `${company.email}`;
    website.innerHTML = `<a href="${company.url}" target="_blank">Check their website</a>`;
    membership.textContent = `${company.membership}`;

    logo.classList.add("logo");
    name.classList.add("name");
    address.classList.add("address");
    phone.classList.add("phone");
    email.classList.add("email");
    website.classList.add("website");
    membership.classList.add("membership");

    card.appendChild(logo);
    card.appendChild(name);
    card.appendChild(address);
    card.appendChild(phone);
    card.appendChild(email);
    card.appendChild(website);
    card.appendChild(membership);
    infoCards.appendChild(card);
}