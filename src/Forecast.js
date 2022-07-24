import React from "react";
import "./Forecast.css";

export default function Forecast() {
  return (
    <div className="forecast">
      <div className="row d-flex justify-content-center">
        <div className="col-lg-2 col-md-6">
          <h5>Monday</h5>
          <p>31°C | 88°F</p>
        </div>
        <div className="col-lg-2 col-md-6">
          <h5>Tuesday</h5>
          <p>31°C | 88°F</p>
        </div>
        <div className="col-lg-2 col-md-6">
          <h5>Wednesday</h5>
          <p>31°C | 88°F</p>
        </div>
        <div className="col-lg-2 col-md-6">
          <h5>Thursday</h5>
          <p>31°C | 88°F</p>
        </div>
        <div className="col-lg-2 col-md-6">
          <h5>Friday</h5>
          <p>31°C | 88°F</p>
        </div>
      </div>
    </div>
  );
}
