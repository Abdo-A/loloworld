import React, { Component } from "react";
import axios from "axios";
import classes from "./Salah.css";
class Salah extends Component {
  componentWillMount() {
    axios
      .get(
        "https://newsapi.org/v2/everything?q=mosalah&language=en&sortBy=publishedAt&apiKey=57b345a9885145969cc144ad50fbf66d"
      )
      .then(res => {
        console.log(res.data.articles);
      });
  }
  render() {
    return <div className={classes.Salah}>Salah</div>;
  }
}

export default Salah;
