// Get the API Key from here: https://openweathermap.org/api
const API_KEY = "8426840f280007f7a11c30535922fb51";

const queryWeather = async (city) => {
  try {
    showLoading();
    const res = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`,
    );

    if (!res.ok) throw new Error("City not found");

    const data = await res.json();
    displayWeather(data);
  } catch (err) {
    showError(err.message);
  } finally {
    hideLoading();
  }
};

document.querySelector("#searchBtn").addEventListener("click", () => {
  const city = document.querySelector("#cityInput").value;
  if (city) {
    queryWeather(city);
  }
});

function showLoading() {
  document.querySelector("#loading").innerHTML = "⏳ Loading...";
}

function hideLoading() {
  document.querySelector("#loading").innerHTML = "";
}

function displayWeather(data) {
  const html = `
    <h2>${data.name}</h2>
    <p>🌡️ Temp: ${data.main.temp}°C</p>
    <p>☁️ Condition: ${data.weather[0].description}</p>
    <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="Weather icon">
  `;
  document.querySelector("#result").innerHTML = html;
}

function showError(message) {
  document.querySelector("#result").innerHTML =
    `<p style="color:red;">❌ ${message}</p>`;
}
