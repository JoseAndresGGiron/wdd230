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