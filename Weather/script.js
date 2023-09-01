const apiKey = "Your API KEY";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const search = document.querySelector(".search input");
const button = document.querySelector(".search button");
const city = document.querySelector(".city");
const temp = document.querySelector(".temp");
const humidity = document.querySelector(".humidity");
const wind = document.querySelector(".wind");

const weatherIcon = document.querySelector(".weather-icon");
const weather = document.querySelector(".weather");
const error = document.querySelector(".error");

const icons = {
    "Clouds": "images/clouds.png",
    "Clear": "images/clear.png",
    "Rain": "images/rain.png",
    "Drizzle": "images/drizzle.png",
    "Mist": "images/mist.png"
}


async function checkWeather(city_name) {
    const response = await fetch(apiUrl + city_name + `&appid=${apiKey}`);

    if (response.status == 404) {
        error.style.display = "block";
        weather.style.display = "none";
    } else {
        let data = await response.json();
        city.innerHTML = data.name;
        temp.innerHTML = Math.round(data.main.temp);
        humidity.innerHTML = data.main.humidity + "%";
        wind.innerHTML = Math.round(data.wind.speed) + " км/час";

        weatherIcon.src = icons[data.weather[0].main];
        weather.style.display = "block";
        error.style.display = "none";
    }


}

button.addEventListener("click", () => {
    checkWeather(search.value);
})