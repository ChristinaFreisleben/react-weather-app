import "./Weather.css";
import React, { useState } from "react";
import axios from "axios";

export default function Weather() {
  const [weatherData, setWeatherData] = useState({ loaded: false });

  function handleResponse(response) {
    setWeatherData({
      loaded: true,
      currentTemperature: response.data.main.temp,
      city: response.data.name,
      wind: response.data.wind.speed,
      description: "Cloudy",
      humidity: response.data.main.humidity,
      date: "Sunday, July 10",
      time: "10:35",
      imgUrl: "https://static.thenounproject.com/png/1197734-200.png",
    });
  }

  if (weatherData.loaded) {
    return (
      <div className="Weather">
        <div className="row">
          <div className="col-5">
            <h1 className="city">{weatherData.city}</h1>
            <ul className="date">
              <li>{weatherData.date}</li>
              <li>{weatherData.time}</li>
            </ul>
            <br />
            <ul className="weatherdetails">
              {weatherData.description}
              <li>Humidity: {weatherData.humidity}%</li>
              <li>Wind: {Math.round(weatherData.wind)} km/h</li>
            </ul>
          </div>
          <div className="col-4">
            <h1>
              <span className="currentTemperature">
                {Math.round(weatherData.currentTemperature)}
              </span>
              <span className="units">
                <a href="/" className="celciusLink">
                  °C
                </a>{" "}
                |
                <a href="/" className="fahrenheitLink">
                  °F
                </a>
              </span>
            </h1>
            <ul className="temperature">
              <li>
                High: 23 °<span className="unitSignCelcius">C</span>
              </li>
              <li>
                Low: 13°
                <span className="unitSignFahrenheit">C</span>
              </li>
            </ul>
          </div>
          <div className="col-3">
            <h1>
              <img
                src={weatherData.imgUrl}
                alt="Icon showing a sund and a cloud"
                className="leadEmoji"
              />
            </h1>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "cc9d95ff70494e22ebe5e4ea828d0369";
    let city = "Vienna";
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleResponse);
  }
}
