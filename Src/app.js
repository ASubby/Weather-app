function displayTemperature(response) {
  let temperatureElement = document.querySelector("#temperature");
  let cityElement = document.querySelector("#city");
  let descriptionElement = document.querySelector("#description");
  let humidityElement = document.querySelector("#humidity");
  let windElement = document.querySelector("#wind");
  windElement.innerHTML = Math.round(response.data.wind.speed);
  humidityElement.innerHTML = response.data.main.humidity;
  descriptionElement.innerHTML = response.data.weather[0].description;
  cityElement.innerHTML = response.data.name;
  temperatureElement.innerHTML = Math.round(response.data.main.temp);
}
let apiKey = `749717f0f4a2e36ed817dec27de38882`;
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=England&appid=${apiKey}&units=metric`;
axios.get(apiUrl).then(displayTemperature);
