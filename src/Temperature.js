import React, { useState } from "react";
import "./Temperature.css";

export default function Temperature(props) {
  const [unit, setUnit] = useState("celcius");

  function showFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  function showCelcius(event) {
    event.preventDefault();
    setUnit("celcius");
  }

  if (unit === "celcius") {
    return (
      <div>
        <h1>
          <span className="currentTemperature">
            {Math.round(props.celcius)}
          </span>
          <span className="units">
            °C |{" "}
            <a href="/" className="fahrenheitLink" onClick={showFahrenheit}>
              °F
            </a>
          </span>
        </h1>
        <ul className="temperature">
          <li>
            High: {Math.round(props.celciusMax)} °
            <span className="unitSignCelcius">C</span>
          </li>
          <li>
            Low: {Math.round(props.celciusMin)} °
            <span className="unitSignFahrenheit">C</span>
          </li>
        </ul>
      </div>
    );
  } else {
    let fahrenheitTemperature = (props.celcius * 9) / 5 + 32;
    let fahrenheitTemperatureMax = (props.celciusMax * 9) / 5 + 32;
    let fahrenheitTemperatureMin = (props.celciusMin * 9) / 5 + 32;
    return (
      <div>
        <h1>
          <span className="currentTemperature">
            {Math.round(fahrenheitTemperature)}
          </span>
          <span className="units">
            <a href="/" className="celciusLink" onClick={showCelcius}>
              °C
            </a>{" "}
            | °F
          </span>
        </h1>
        <ul className="temperature">
          <li>
            High: {Math.round(fahrenheitTemperatureMax)} °
            <span className="unitSignCelcius">C</span>
          </li>
          <li>
            Low: {Math.round(fahrenheitTemperatureMin)} °
            <span className="unitSignFahrenheit">C</span>
          </li>
        </ul>
      </div>
    );
  }
}
