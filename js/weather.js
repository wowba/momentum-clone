const API_KEY = "8620cd28c4ec5e797623b237e027b25b";

function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lng = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const weather = document.querySelector(".weather span:nth-child(3)");
      const city = document.querySelector(".weather span:nth-child(2)");

      city.innerText = `${data.sys.country}, ${data.name}`;
      weather.innerText = `${data.weather[0].description} / ${Math.round(
        data.main.temp
      )}℃`;
    });
}

function onGeoError() {
  alert("error");
}
navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
