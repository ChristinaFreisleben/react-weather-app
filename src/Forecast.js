import axios from "axios";
import React, { useState } from "react";
import "./Forecast.css";
import ForecastDay from "./ForecastDay";

export default function Forecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecastData, setForecastData] = useState(null);

  function showForecast(response) {
    setForecastData(response.data.daily);
    setLoaded(true);
  }

  if (loaded) {
    return (
      <div className="forecast">
        <div className="container">
          <div className="row">
            {forecastData.map(function (dailyForecast, index) {
              if (index < 5) {
                return (
                  <div className="col-sm" key={index}>
                    <ForecastDay data={dailyForecast} />
                  </div>
                );
              }
            })}
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "cc9d95ff70494e22ebe5e4ea828d0369";
    let longitude = props.longitude;
    let latitude = props.latitude;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(showForecast);

    return "Loading forecast...";
  }
}
