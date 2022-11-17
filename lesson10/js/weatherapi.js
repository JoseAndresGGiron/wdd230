// select HTML elements in the document
const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');

//Get the weather data from the API - apenweathermap.org
const weatherAPI = "1c73d079411018bb31aa6c57e4ae946d";

//htpp://api.openweathermap.org/data/2.5/weather?q=Fairbanks&units=imperial&APPID=
//+502 `https://api.openweathermap.org/data/2.5/weather?id=${3598132}&units=imperial&lat=&lon=&appid=${weatherAPI}`
//https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}

fetch(`htpp://api.openweathermap.org/data/2.5/weather?q=Fairbanks&units=imperial&APPID=${weatherAPI}`)
    .then((response) => response.json())
    .then((data) => {
    console.log(data); // this is temporary for development onlys
    currentTemp.innerHTML = `<strong>${data.main.temp.toFixed(0)}</strong>`;

    const iconsrc = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`;
    const description = data.weather[0].description.toUpperCase();
    
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', description);
    captionDesc.textContent = description;
});
