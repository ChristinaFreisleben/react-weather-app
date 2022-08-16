import "./App.css";

import Weather from "./Weather";
import Forecast from "./Forecast";

function App() {
  return (
    <div className="App">
      <Weather defaultCity="Vienna" />
    </div>
  );
}

export default App;
