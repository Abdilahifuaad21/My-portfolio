const apiKey = "b2d4be2f6a88564df1c15cdcae42ac39"; // Replace with your OpenWeatherMap API key

async function getWeather() {
  const city = document.getElementById("cityInput").value;
  const result = document.getElementById("weatherResult");

  if (!city) {
    result.innerHTML = "Please enter a city name.";
    return;
  }

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  try {
    const res = await fetch(url);
    const data = await res.json();

    if (data.cod === "404") {
      result.innerHTML = "City not found.";
      return;
    }

    result.innerHTML = `
      <h2>${data.name}, ${data.sys.country}</h2>
      <p>🌡️ Temperature: ${data.main.temp}°C</p>
      <p>🌥️ Weather: ${data.weather[0].main}</p>
      <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" />
    `;
  } catch (error) {
    result.innerHTML = "Error fetching weather.";
  }
}
