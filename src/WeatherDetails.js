import React from "react";
import FormatedDate from "./FormatedDate";

export default function WeatherDetails(props) {
  return (
    <div className="WeatherDetails">
      <div className="row">
        <div className="col-5">
          <h1 className="city">{props.data.city}</h1>
          <ul className="date">
            <li>
              <FormatedDate date={props.data.date} />
            </li>
          </ul>
          <br />
          <ul className="weatherdetails">
            <li className="text-capitalize">{props.data.description}</li>
            <li>Humidity: {props.data.humidity}%</li>
            <li>Wind: {Math.round(props.data.wind)} km/h</li>
          </ul>
        </div>
        <div className="col-4">
          <h1>
            <span className="currentTemperature">
              {Math.round(props.data.currentTemperature)}
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
              High: {Math.round(props.data.max)} °
              <span className="unitSignCelcius">C</span>
            </li>
            <li>
              Low: {Math.round(props.data.min)} °
              <span className="unitSignFahrenheit">C</span>
            </li>
          </ul>
        </div>
        <div className="col-3">
          <h1>
            <img
              src={props.data.imgUrl}
              alt="Icon showing a sund and a cloud"
              className="leadEmoji"
            />
          </h1>
        </div>
      </div>
    </div>
  );
}
