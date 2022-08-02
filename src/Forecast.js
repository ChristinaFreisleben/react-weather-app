import React from "react";
import "./Forecast.css";

export default function Forecast() {
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
