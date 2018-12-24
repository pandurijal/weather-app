import React, { Component } from "react";

const Weather = ({ mainWeather, city }) => {
  // console.log(weatherData);
  // console.log(weatherData.sys);
  return (
    <div>
      {city && <p>Location: {city}</p>}
      {mainWeather.temp && <p>Temperature: {mainWeather.temp}</p>}
      {mainWeather.pressure && <p>Pressure: {mainWeather.pressure}</p>}
      {mainWeather.humidity && <p>Humidity: {mainWeather.humidity}</p>}
    </div>
  );
};

export default Weather;
