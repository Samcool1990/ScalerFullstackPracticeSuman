const  inputRef = document.querySelector('.searchField');
const buttonRef = document.querySelector('button[type="submit"]');
const tempRef = document.querySelector('.weather .temp')
const locationRef = document.querySelector('.weather .time_location p')
const dateRef = document.querySelector('.weather .time_location span')
const conditionRef = document.querySelector('.weather .weather_condition p img')
const conditionIconRef = document.querySelector('.weather .weather_condition span')

buttonRef.addEventListener('click', function(e) {
    e.preventDefault();
    console.log(inputRef.value);
    fetchWeatherData();
    setWeatherData();
})

function fetchWeatherData() {
    fetch("URL FOR API WEBSITE").then(res => res.json().then(setWeatherData()))
}

function setWeatherData() {
    tempRef.innerText = data.current.temp_c;
    locationRef.innerText = data.current;
    conditionRef.src = data.current;

    conditionIconRef
}

