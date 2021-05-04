import React from "react";
import './App.css';


export default function Weather() {
  let weatherData = {
    city: "Berlin",
    temperature: 15,
    date: "Monday 12:00",
    description: "Cloudy",
    imgUrl: "https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png",
    humidity: 60,
    wind: 6
  };
  return (
    <div className="Weather">
      <form className="search-form">
        <input
          type="search"
          placeholder="search for a city"
          autofocus="on"
          autocomplete="off"
        />
        <input type="submit" value="search" class="btn btn-primary" />
        <div className="col-2">
         <button className="btn btn-info" id="current-location-button" >
         current
         </button>
         </div>
      </form>
      <div className="row">
        <div className="col-6">
          <h1>{weatherData.city}</h1>
          <div className="all">
            <img src={weatherData.imgUrl} alt="Clear" id="icon" />
            <strong>{weatherData.temperature}</strong>
            <span className="units">
              <a href="/">°C</a> | <a href="/">°F</a>
            </span>
            <div className="first">
              <ul>
                <li>{weatherData.date}</li>
                <li>{weatherData.description}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="col-6">
        <div className="characters">
          <ul>
            <li>Humidity: {weatherData.humidity}%</li>
            <li>Wind: {weatherData.wind}km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
