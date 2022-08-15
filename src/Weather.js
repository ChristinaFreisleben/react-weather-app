import "./Weather.css";
import React, { useState } from "react";
import axios from "axios";

import WeatherDetails from "./WeatherDetails";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ loaded: false });
  const [city, setCity] = useState(props.defaultCity);

  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      loaded: true,
      currentTemperature: response.data.main.temp,
      city: response.data.name,
      wind: response.data.wind.speed,
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      max: response.data.main.temp_max,
      min: response.data.main.temp_min,
      date: new Date(response.data.dt * 1000),
      imgUrl: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
    });
  }

  function search() {
    const apiKey = "cc9d95ff70494e22ebe5e4ea828d0369";
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCityUpdate(event) {
    setCity(event.target.value);
  }

  if (weatherData.loaded) {
    return (
      <div className="Weather">
        <form className="Search" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Search city"
            autoComplete="off"
            onChange={handleCityUpdate}
          />
          <input type="submit" value="🔍" className="searchButton" />
        </form>
        <WeatherDetails data={weatherData} />
      </div>
    );
  } else {
    search();
    return "Please wait a second while we fetch the weather data...";
  }
}
