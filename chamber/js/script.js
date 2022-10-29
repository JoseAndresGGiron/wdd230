let daynames = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
];
let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
];

let d = new Date();
let dayName = daynames[d.getDay()];
let monthName = months[d.getMonth()];
let year = d.getFullYear();
let fulldate = dayName + ", " + monthName + " " + d.getDate() + ", " + year;


document.getElementById("lstmoddate").textContent = document.lastModified;
document.getElementById("currentYear").textContent = year;
document.getElementById("todaysDate").textContent = fulldate

//This shows the banner on Monday and Tuesday
let z = new Date().getDay();

const banner = document.getElementById("banner");
if (z === 1 || z === 2) {
    banner.style.display = "block";
}
// close button
const close = document.querySelector("#close");
close.addEventListener("click", () => {
    banner.style.display = "none";
});

//Dynamic Nav
function toggleMenu() {
    document.getElementById("primaryNav").classList.toggle("open");
    document.getElementById("hamburgerBtn").classList.toggle("open");
}

const x = document.getElementById('hamburgerBtn');
x.onclick = toggleMenu;

//Lazy Load Images
let imagesToLoad = document.querySelectorAll('img[data-src]');
const loadImages = (image) => {
    image.setAttribute('src', image.getAttribute('data-src'));
    image.onload = () => {
    image.removeAttribute('data-src');
  };
};

if('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((items, observer) => {
        items.forEach((item) => {
            if(item.isIntersecting) {
                loadImages(item.target);
                observer.unobserve(item.target);
            }
        });
    });
    imagesToLoad.forEach((img) => {
        observer.observe(img);
    });
} else {
    imagesToLoad.forEach((img) => {
        loadImages(img);
    });
}
//Last visit

const lastVisit = Number(localStorage.getItem('banner'));
const currentVisit = Date.now() - lastVisit;
const daysBetweenVisits = currentVisit / (1000 * 60 * 60 * 24);
const firstVisit = `Welcome, this is your first visit!`
const visits = `Welcome back! Your last visit was ${Math.round(daysBetweenVisits)} days ago.`

if (lastVisit === 0) {
    document.querySelector("#banner").textContent = firstVisit;
} else {
    document.querySelector("#banner").textContent = visits;
}
localStorage.setItem('lastvisit', Date.now())


