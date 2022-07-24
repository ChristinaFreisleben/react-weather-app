import React, { useState } from "react";

import "./Search.css";

export default function Search() {
  let [city, setCity] = useState("Vienna");

  function handleSearch(event) {
    event.preventDefault();
    if (city.length > 0) {
      alert(`${city}`);
    } else {
      alert(`Please enter a city`);
    }
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  return (
    <form className="Search" onSubmit={handleSearch}>
      <input
        type="text"
        placeholder="Search city"
        autoComplete="off"
        onChange={updateCity}
      />
      <input type="submit" value="🔍" className="searchButton" />
    </form>
  );
}
