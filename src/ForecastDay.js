import React from "react";

export default function ForecastDay(props) {
  let icon = `http://openweathermap.org/img/wn/${props.data.weather[0].icon}@2x.png`;

  function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();

    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];

    return days[day];
  }

  return (
    <div className="ForecastDay">
      <h5>{day()}</h5>
      <img
        src={icon}
        alt={props.data.weather[0].description}
        className="forecastEmoji"
      />
      <p>
        <strong>{Math.round(props.data.temp.max)}°C </strong>|{" "}
        {Math.round(props.data.temp.min)}
        °C
      </p>
    </div>
  );
}
