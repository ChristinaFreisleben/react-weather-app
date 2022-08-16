import axios from "axios";
import React from "react";
import "./Forecast.css";

export default function Forecast(props) {
  const apiKey = "cc9d95ff70494e22ebe5e4ea828d0369";
  let latitude = props.coordinates.lat;
  let longitude = props.coordinates.lon;
  const apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&cnt={cnt}&appid=${apiKey}&units=metric`;

  axios.get(apiUrl).then(showForecast);

  function showForecast(response) {
    console.log(response.data);
  }

  let icon = "https://static.thenounproject.com/png/1197734-200.png";
  return (
    <div className="forecast">
      <div className="container">
        <div className="row">
          <div className="col-sm">
            <h5>Monday</h5>
            <img
              src={icon}
              alt="Icon showing a sun and a cloud"
              className="forecastEmoji"
            />
            <p>31°C | 18°C</p>
          </div>
          <div className="col-sm">
            <h5>Tuesday</h5>
            <img
              src={icon}
              alt="Icon showing a sun and a cloud"
              className="forecastEmoji"
            />
            <p>31°C | 18°C</p>
          </div>
          <div className="col-sm">
            <h5>Wednesday</h5>
            <img
              src={icon}
              alt="Icon showing a sun and a cloud"
              className="forecastEmoji"
            />
            <p>31°C | 18°C</p>
          </div>
          <div className="col-sm">
            <h5>Thursday</h5>
            <img
              src={icon}
              alt="Icon showing a sun and a cloud"
              className="forecastEmoji"
            />
            <p>31°C | 18°C</p>
          </div>
          <div className="col-sm">
            <h5>Friday</h5>
            <img
              src={icon}
              alt="Icon showing a sun and a cloud"
              className="forecastEmoji"
            />
            <p>31°C | 18°C</p>
          </div>
        </div>
      </div>
    </div>
  );
}
