let t = parseFloat(document.querySelector("#t").textContent);
let s = parseFloat(document.querySelector("#s").textContent);
let windchill = "";

/*
Without API Code
if (t <= 50 && s > 3) {
  //windchill = windChill(t, s);
  //windchill = `${windchill}&#176;F`;
  windchill = 35.74 + 0.6215 * t - 35.75 * Math.pow(s,0.16) + 0.4275 * t * Math.pow(s,0.16);
  windchill = parseFloat(windchill.toFixed(1));
  windchill = `${windchill}&#176;F`;
  

} else {
  windchill = "N/A";
}
// output
document.querySelector("#w").innerHTML = windchill;

function windChill(temp, speed) {
  return windchill;
}
*/
const weatherAPI = "1c73d079411018bb31aa6c57e4ae946d";

fetch(`https://api.openweathermap.org/data/2.5/weather?id=Guatemala&units=imperial&lat=&lon=&appid=${weatherAPI}`)
    .then((response) => response.json())
    .then((data) => {

    const description = data.weather[0].description.toUpperCase();
    const temp = data.main.temp.toFixed(0);
    const speed = data.wind.speed;
    
    weatherIcon.setAttribute('src', `https://openweathermap.org/img/w/${data.weather[0].icon}.png`);
    weatherIcon.setAttribute('alt', description);

    document.querySelector("#currentTemperature").innerHTML = temp;
    document.querySelector("#currentSpeed").innerHTML = speed;
    document.querySelector("#weatherDescription").innerHTML = description;


    if (temp <= 30 && speed > 3) {
        const windchill = (35.74 + (0.6215 * temp) - (35.75 * Math.pow(speed, 0.16)) + (0.4275 * temp * Math.pow(speed, 0.16))).toFixed(2);
        document.querySelector("#windChill").innerHTML = windchill;
    } else {
        document.querySelector("#windChill").innerHTML = "N/A"
    }
});