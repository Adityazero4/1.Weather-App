const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "82ab0ae46bmsh978be52d149fe88p1a0b8bjsn540d99d57134",
    "X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com",
  },
};

const getWeather = (city) => {
  cityName.innerHTML = city;
  fetch(
    "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=" + city,
    options
  )
    .then((response) => response.json())
    .then((response) => {
      console.log(response);
      //   cloud_pct.innerHTML = response.cloud_pct;
      temp.innerHTML = response.temp;
      feels_like.innerHTML = response.feels_like;
      humidity.innerHTML = response.humidity;
      min_temp.innerHTML = response.min_temp;
      max_temp.innerHTML = response.max_temp;
      wind_speed.innerHTML = response.wind_speed;
      wind_degrees.innerHTML = response.wind_degrees;
      sunrise.innerHTML = response.sunrise;
      sunset.innerHTML = response.sunset;
    })
    .catch((err) => console.error(err));
};

const getShanghaiWeather = () => {
  fetch(
    "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Shanghai",
    options
  )
    .then((response) => response.json())
    .then((response) => {
      console.log(response);
      //   cloud_pct.innerHTML = response.cloud_pct;
      shan_temp.innerHTML = response.temp;
      shan_feels_like.innerHTML = response.feels_like;
      shan_humidity.innerHTML = response.humidity;
      shan_min_temp.innerHTML = response.min_temp;
      shan_max_temp.innerHTML = response.max_temp;
      shan_wind_speed.innerHTML = response.wind_speed;
      shan_wind_degrees.innerHTML = response.wind_degrees;
      shan_sunrise.innerHTML = response.sunrise;
      shan_sunset.innerHTML = response.sunset;
    })
    .catch((err) => console.error(err));
};
const getBostonWeather = () => {
  fetch(
    "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Boston",
    options
  )
    .then((response) => response.json())
    .then((response) => {
      console.log(response);
      //   cloud_pct.innerHTML = response.cloud_pct;
      bost_temp.innerHTML = response.temp;
      bost_feels_like.innerHTML = response.feels_like;
      bost_humidity.innerHTML = response.humidity;
      bost_min_temp.innerHTML = response.min_temp;
      bost_max_temp.innerHTML = response.max_temp;
      bost_wind_speed.innerHTML = response.wind_speed;
      bost_wind_degrees.innerHTML = response.wind_degrees;
      bost_sunrise.innerHTML = response.sunrise;
      bost_sunset.innerHTML = response.sunset;
    })
    .catch((err) => console.error(err));
};
const getLucknowWeather = () => {
  fetch(
    "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Lucknow",
    options
  )
    .then((response) => response.json())
    .then((response) => {
      console.log(response);
      //   cloud_pct.innerHTML = response.cloud_pct;
      luck_temp.innerHTML = response.temp;
      luck_feels_like.innerHTML = response.feels_like;
      luck_humidity.innerHTML = response.humidity;
      luck_min_temp.innerHTML = response.min_temp;
      luck_max_temp.innerHTML = response.max_temp;
      luck_wind_speed.innerHTML = response.wind_speed;
      luck_wind_degrees.innerHTML = response.wind_degrees;
      luck_sunrise.innerHTML = response.sunrise;
      luck_sunset.innerHTML = response.sunset;
    })
    .catch((err) => console.error(err));
};
const getBangloreWeather = () => {
  fetch(
    "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Bangalore",
    options
  )
    .then((response) => response.json())
    .then((response) => {
      console.log(response);
      //   cloud_pct.innerHTML = response.cloud_pct;
      bang_temp.innerHTML = response.temp;
      bang_feels_like.innerHTML = response.feels_like;
      bang_humidity.innerHTML = response.humidity;
      bang_min_temp.innerHTML = response.min_temp;
      bang_max_temp.innerHTML = response.max_temp;
      bang_wind_speed.innerHTML = response.wind_speed;
      bang_wind_degrees.innerHTML = response.wind_degrees;
      bang_sunrise.innerHTML = response.sunrise;
      bang_sunset.innerHTML = response.sunset;
    })
    .catch((err) => console.error(err));
};
const getKolkataWeather = () => {
  fetch(
    "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Kolkata",
    options
  )
    .then((response) => response.json())
    .then((response) => {
      console.log(response);
      //   cloud_pct.innerHTML = response.cloud_pct;
      kolk_temp.innerHTML = response.temp;
      kolk_feels_like.innerHTML = response.feels_like;
      kolk_humidity.innerHTML = response.humidity;
      kolk_min_temp.innerHTML = response.min_temp;
      kolk_max_temp.innerHTML = response.max_temp;
      kolk_wind_speed.innerHTML = response.wind_speed;
      kolk_wind_degrees.innerHTML = response.wind_degrees;
      kolk_sunrise.innerHTML = response.sunrise;
      kolk_sunset.innerHTML = response.sunset;
    })
    .catch((err) => console.error(err));
};
submit.addEventListener("click", (e) => {
  e.preventDefault();
  getWeather(city.value);
  getShanghaiWeather();
  getBostonWeather();
  getLucknowWeather();
  getBangloreWeather();
  getKolkataWeather();
});
