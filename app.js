window.addEventListener('load', () => {
  let long;
  let lat;
  let temperatureDescription = document.querySelector(
    '.temperature-description'
  );
  let temperatureDegree = document.querySelector('.temperature-degree');
  let locationTimezone = document.querySelector('.location-timezone');

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((position) => {
      long = position.coords.longitude;
      lat = position.coords.latitude;

      const key = '9098bfa1280f903af835cf704e85c407';
      const proxy = 'https://lit-caverns-61428.herokuapp.com/';
      const api = `${proxy}api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${key}`;

      fetch(api)
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          console.log(data);
          const { temp } = data.main;
          const { description } = data.weather[0];
          const { name } = data;
          // Set DOM Elements from the API
          temperatureDegree.textContent = temp;
          temperatureDescription.textContent = description;
          locationTimezone.textContent = name;
        });
    });
  }
});
