import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
const unirest = require("unirest");

class App extends Component {
  componentWillMount() {
    unirest
      .get("https://simple-weather.p.mashape.com/aqi?lat=30.0355&lng=31.223")
      .header(
        "X-Mashape-Key",
        "J3YJWUlCN1mshIPwlMb5ilplW4qYp1Lz9x1jsnM6OO3OiTushH"
      )
      .header("Accept", "text/plain")
      .end(function(result) {
        console.log(result.status, result.headers, result.body);
      });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
