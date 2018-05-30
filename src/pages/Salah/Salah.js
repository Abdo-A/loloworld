import React, { Component } from "react";
import axios from "axios";

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
    return "Salah";
  }
}

export default Salah;
