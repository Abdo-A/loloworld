import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import classes from "./App.css";
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
        console.log(result.body);
      });
  }

  render() {
    return (
      <div className={classes.App}>
        <header className={classes.AppHeader}>
          <img src={logo} className={classes.AppLogo} alt="logo" />
          <h1 className={classes.AppTitle}>Welcome to React</h1>
        </header>
        <p className={classes.AppIntro}>
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
