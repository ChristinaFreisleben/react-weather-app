import "./App.css";

import WeatherData from "./WeatherData";
import Search from "./Search";
import Forecast from "./Forecast";

function App() {
  return (
    <div className="App">
      <Search />
      <WeatherData />
      <Forecast />
    </div>
  );
}

export default App;
