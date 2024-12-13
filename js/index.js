var search = document.getElementById('search');
var put = document.querySelector('.put');
var putTwo = document.querySelector('.two');
var putThree = document.querySelector('.three');
search.addEventListener('input', function () {
  var x = search.value.trim();
  if (x === '') {
    put.innerHTML = '';
    putTwo.innerHTML = '';
    putThree.innerHTML = '';
    return;
  }
  async function getWeather(country) {
    try {
      var response = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=d76fe44ea61845ff951192008241212&q=${country}&days=3`);
      var data = await response.json();
      var location = data.location.name;
      var forecast = data.forecast.forecastday;
      var day1 = forecast[0];
      var iconUrl1 = day1.day.condition.icon;
      var temp1 = day1.day.avgtemp_c;
      var condition1 = day1.day.condition.text;
      var date1 = day1.date;
      var day2 = forecast[1];
      var iconUrl2 = day2.day.condition.icon;
      var temp2 = day2.day.avgtemp_c;
      var condition2 = day2.day.condition.text;
      var date2 = day2.date;
      var day3 = forecast[2];
      var iconUrl3 = day3.day.condition.icon;
      var temp3 = day3.day.avgtemp_c;
      var condition3 = day3.day.condition.text;
      var date3 = day3.date;
      put.innerHTML = `
        <div class="weather-info">
          <h3 class="general-color">${location}</h3>
          <p class="general-color">${temp1}<sup>o</sup>C</p>
          <img src="${iconUrl1}" alt="Weather Icon" />
          <p class="blue">${condition1}</p>
          <p class="general-color">${date1}</p>
        </div>
      `;
      putTwo.innerHTML = `
        <div class="d-flex justify-content-between align-items-center bg-dark text-white p-2">
          <small>${date2}</small>
        </div>
        <div class="text-center h-75 d-flex justify-content-center align-items-center">
          <div>
            <img src="${iconUrl2}" alt="Weather Icon" />
            <br />
            <small class="text-white fs-3 fw-medium">${temp2}<sup>o</sup>C</small>
            <br />
            <small class="general-color">${condition2}</small>
          </div>
        </div>
      `;
      putThree.innerHTML = `
        <div class="d-flex justify-content-between align-items-center bg-dark text-white p-2">
          <small>${date3}</small>
        </div>
        <div class="text-center h-75 d-flex justify-content-center align-items-center">
          <div>
            <img src="${iconUrl3}" alt="Weather Icon" />
            <br />
            <small class="text-white fs-3 fw-medium">${temp3}<sup>o</sup>C</small>
            <br />
            <small class="general-color">${condition3}</small>
          </div>
        </div>
      `;
    } catch (error) {
      console.error('Error fetching weather data:', error);
      put.innerHTML = `<p class="general-color">Could not fetch weather data. Please try again later.</p>`;
      putTwo.innerHTML = `<p class="general-color"></p>`;
      putThree.innerHTML = `<p class="general-color"></p>`;
    }
  }
  getWeather(x);
});
