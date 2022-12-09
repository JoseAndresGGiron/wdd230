let t = parseFloat(document.querySelector("#t"));
let s = parseFloat(document.querySelector("#s"));
let windchill = "";

/* ===== Weather =====*/
const weatherAPI = "1c73d079411018bb31aa6c57e4ae946d";

fetch(`https://api.openweathermap.org/data/2.5/weather?q=Carlsbad&units=imperial&lat=&lon=&appid=${weatherAPI}`)
    .then((weatherURL) => weatherURL.json())
    .then((data) => {

        const temp = data.current.temp.toFixed(0);
        const description = data.current.weather[0].description.toUpperCase();
        const humidity = data.current.humidity;
        
        weatherIcon.setAttribute('src', `https://openweathermap.org/img/w/${data.current.weather[0].icon}.png`);
        weatherIcon.setAttribute('alt', description);
        document.querySelector("#currentTemperature").innerHTML = temp;
        document.querySelector("#currentHumidity").innerHTML = humidity;
        document.querySelector("#weatherDescription").innerHTML = description;
});

/* ===== Three-days Forecast =====*/
fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=14.6349&lon=90.5069&units=metric&appid=${weatherAPI}`)
    .then((weatherURL) => weatherURL.json())
    .then((data) => {

        let minTemp1 = data.daily[1].temp.min.toFixed(1);
        let maxTemp1 = data.daily[1].temp.max.toFixed(1);
        let description1 = data.daily[1].weather[0].description.toUpperCase();
        
        weatherIcon1.setAttribute('src', `https://openweathermap.org/img/w/${data.daily[1].weather[0].icon}.png`);
        weatherIcon1.setAttribute('alt', description1);
        document.querySelector("#highest1").innerHTML = minTemp1;
        document.querySelector("#lowest1").innerHTML = maxTemp1;
        document.querySelector("#weatherDescription1").innerHTML = description1;

        let minTemp2 = data.daily[2].temp.min.toFixed(1);
        let maxTemp2 = data.daily[2].temp.max.toFixed(1);
        let description2 = data.daily[2].weather[0].description.toUpperCase();
        
        weatherIcon2.setAttribute('src', `https://openweathermap.org/img/w/${data.daily[2].weather[0].icon}.png`);
        weatherIcon2.setAttribute('alt', description2);
        document.querySelector("#highest2").innerHTML = minTemp2;
        document.querySelector("#lowest2").innerHTML = maxTemp2;
        document.querySelector("#weatherDescription2").innerHTML = description2;

        let minTemp3 = data.daily[3].temp.min.toFixed(1);
        let maxTemp3 = data.daily[3].temp.max.toFixed(1);
        let description3 = data.daily[3].weather[0].description.toUpperCase();
        
        weatherIcon3.setAttribute('src', `https://openweathermap.org/img/w/${data.daily[3].weather[0].icon}.png`);
        weatherIcon3.setAttribute('alt', description3);
        document.querySelector("#highest3").innerHTML = minTemp3;
        document.querySelector("#lowest3").innerHTML = maxTemp3;
        document.querySelector("#weatherDescription3").innerHTML = description3;

        document.querySelector("#day1").innerHTML = weekDay[threeDays(1)];
        document.querySelector("#day2").innerHTML = weekDay[threeDays(2)];
        document.querySelector("#day3").innerHTML = weekDay[threeDays(3)];
});

/* ===== Three Days Calculation For Forecast =====*/
const date = new Date();
const weekDay = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
function threeDays(day) {
    if (day + date.getDay() > 6) {
        return day + date.getDay() - 7;
    }
    else {
        return day + date.getDay();
    }
}