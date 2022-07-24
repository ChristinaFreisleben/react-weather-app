import "./WeatherData.css";

export default function Weather() {
  let weatherData = {
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
          <h1 className="city">{weatherData.city}</h1>
          <ul className="date">
            <li>
              <span className="currentDate">{weatherData.date}</span>
            </li>
            <li>
              <span className="currentTime">{weatherData.time}</span>
            </li>
          </ul>
          <br />
          <ul className="weatherdetails">
            <li className="description">{weatherData.description}</li>
            <li>
              Humidity: <span className="humidity">{weatherData.humidity}</span>
              %
            </li>
            <li>
              Wind: <span className="wind">{weatherData.wind}</span> km/h
            </li>
          </ul>
        </div>
        <div className="col-4">
          <h1>
            <span className="currentTemperature">
              {weatherData.currentTemperature}
            </span>
            <span className="units">
              <a href="/" className="celciusLink" className="active">
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
              High: <span className="tempMax">23</span> °
              <span className="unitSignCelcius">C</span>
            </li>
            <li>
              Low: <span className="tempMin">13</span> °
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
}
