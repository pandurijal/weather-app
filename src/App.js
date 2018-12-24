import React, { Component } from "react";
import Form from "./components/Form";
import Weather from "./components/Weather";
import "./App.css";

const API_KEY = "66aaac21a3cc03525a72207ae1833bf8";

class App extends Component {
  state = {
    city: "",
    mainWeather: []
  };

  handleSubmit = async e => {
    e.preventDefault();
    const cityName = e.target.cityName.value;
    // const countryName = e.target.countryName.value;
    const api_req = await fetch(
      `https://cors-anywhere.herokuapp.com/api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}`
    );
    const api_res = await api_req.json();
    console.log(api_res.main);
    this.setState({ mainWeather: api_res.main, city: api_res.name });
  };

  render() {
    console.log(this.state.mainWeather.pressure);
    return (
      <div className="App">
        <header>
          <h2>Weather App</h2>
        </header>
        <Form onSubmit={this.handleSubmit} />
        <Weather mainWeather={this.state.mainWeather} city={this.state.city} />
      </div>
    );
  }
}

export default App;
