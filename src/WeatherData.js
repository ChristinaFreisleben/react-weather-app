import "./WeatherData.css";

export default function Weather() {
  let weather = {
    city: "Vienna",
    date: "Sunday, July 10",
    time: "10:35",
    currentTemperature: "15",
    description: "Cloudy",
    humidity: "60",
    wind: "16",
    imgUrl: "https://static.thenounproject.com/png/1197734-200.png",
  };

  return (
    <div className="Weather">
      <div className="row">
        <div className="col-5">
          <h1 className="city">{weather.city}</h1>
          <ul className="date">
            <li>{weather.date}</li>
            <li>{weather.time}</li>
          </ul>
          <br />
          <ul className="weatherdetails">
            {weather.description}
            <li>Humidity: {weather.humidity}%</li>
            <li>Wind: {weather.wind}km/h</li>
          </ul>
        </div>
        <div className="col-4">
          <h1>
            <span className="currentTemperature">
              {weather.currentTemperature}
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
              src={weather.imgUrl}
              alt="Icon showing a sund and a cloud"
              className="leadEmoji"
            />
          </h1>
        </div>
      </div>
    </div>
  );
}
