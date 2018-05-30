import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import classes from "./App.css";
import axios from "axios";

class App extends Component {
  componentWillMount() {
    axios
      .get(
        "https://newsapi.org/v2/everything?q=java&language=en&sortBy=publishedAt&apiKey=57b345a9885145969cc144ad50fbf66d"
      )
      .then(res => {
        console.log(res.data.articles);
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
