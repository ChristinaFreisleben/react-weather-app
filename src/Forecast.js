import React from "react";
import "./Forecast.css";

export default function Forecast() {
  return (
    <div className="forecast">
      <div className="row d-flex justify-content-center">
        <div className="col-lg-2 col-md-6">
          <h5>Monday</h5>
          <img
            source="https://cdn.dribbble.com/users/98494/screenshots/2714201/sun-icon.jpg"
            alt="Icon showing a sun and a cloud"
            className="forecastEmoji"
          />
          <p>31°C | 18°C</p>
        </div>
        <div className="col-lg-2 col-md-6">
          <h5>Tuesday</h5>
          <img
            source="https://static.thenounproject.com/png/1197734-200.png"
            alt="Icon showing a sun and a cloud"
            className="forecastEmoji"
          />
          <p>31°C | 18°C</p>
        </div>
        <div className="col-lg-2 col-md-6">
          <h5>Wednesday</h5>
          <img
            source="https://static.thenounproject.com/png/1197734-200.png"
            alt="Icon showing a sun and a cloud"
            className="forecastEmoji"
          />
          <p>31°C | 18°C</p>
        </div>
        <div className="col-lg-2 col-md-6">
          <h5>Thursday</h5>
          <img
            source="https://static.thenounproject.com/png/1197734-200.png"
            alt="Icon showing a sun and a cloud"
            className="forecastEmoji"
          />
          <p>31°C | 18°C</p>
        </div>
        <div className="col-lg-2 col-md-6">
          <h5>Friday</h5>
          <img
            source="https://static.thenounproject.com/png/1197734-200.png"
            alt="Icon showing a sun and a cloud"
            className="forecastEmoji"
          />
          <p>31°C | 18°C</p>
        </div>
      </div>
    </div>
  );
}
