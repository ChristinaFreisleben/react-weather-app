import "./App.css";

import Weather from "./Weather";
import Search from "./Search";
import Forecast from "./Forecast";

function App() {
  return (
    <div className="App">
      <Search />
      <Weather />
      <Forecast />
    </div>
  );
}

export default App;
