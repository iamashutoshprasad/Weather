// weatherService.jsx

import { DateTime } from "luxon";

const API_KEY = "cf57814bcafb8f9a7a7d3c5bced6ee58";
const BASE_URL = "https://api.openweathermap.org/data/2.5";

const getWeatherData = (infoType, searchParams) => {
  const url = new URL(BASE_URL + "/" + infoType);
  url.search = new URLSearchParams({ ...searchParams, appid: API_KEY });

  return fetch(url).then((res) => res.json());
};

const formatCurrentWeather = (data) => {
  const {
    coord: { lat, lon },
    main: { temp, feels_like, temp_min, temp_max, humidity },
    name,
    dt,
    sys: { country, sunrise, sunset },
    weather,
    wind: { speed },
  } = data;

  const { main: details, icon } = weather[0];

  return {
    lat,
    lon,
    temp,
    feels_like,
    temp_min,
    temp_max,
    humidity,
    name,
    dt,
    country,
    sunrise,
    sunset,
    details,
    icon,
    speed,
  };
};

const formatForecastWeather = async (searchParams) => {
  const currentWeather = await getWeatherData("weather", searchParams);
  const { coord } = currentWeather;
  const { lat, lon } = coord;

  const forecastResponse = await getWeatherData("forecast", { lat, lon });
  const forecastData = forecastResponse.list;

  const filteredForecastData = forecastData
    .filter((item, index) => index % 8 === 0)
    .slice(1, 6);

  const formattedForecast = filteredForecastData.map((forecast) => ({
    title: formatToLocalTime(forecast.dt, forecast.timezone, "ccc"),
    temp: forecast.main.temp,
    icon: forecast.weather[0].icon,
  }));

  return {
    timezone: forecastResponse.city.timezone,
    daily: formattedForecast,
  };
};

const getCurrentWeatherData = async (searchParams) => {
  const currentWeather = await getWeatherData("weather", searchParams);
  return formatCurrentWeather(currentWeather);
};

const getForecastData = async (searchParams) => {
  const forecastWeather = await formatForecastWeather(searchParams);
  return forecastWeather;
};

const formatToLocalTime = (
  secs,
  zone,
  format = "cccc, dd LLL yyyy' | Local time: 'hh:mm a"
) => DateTime.fromSeconds(secs).setZone(zone).toFormat(format);

const iconUrlFromCode = (code) =>
  `http://openweathermap.org/img/wn/${code}@2x.png`;

export { getCurrentWeatherData, getForecastData, formatToLocalTime, iconUrlFromCode };
