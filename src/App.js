import React, { Component } from "react";
import "./App.css";
import classes from "./App.css";
import axios from "axios";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Layout from "./hoc/Layout/Layout";

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
        <BrowserRouter>
          <Layout>
            <Switch>
              <Route path="/" exact render={() => "Main Page"} />
              <Route path="/music" render={() => "music"} />
              <Route path="/salah" render={() => "salah"} />
              <Route path="/football" render={() => "football"} />
              <Route path="/china" render={() => "china"} />
              <Route path="/painting" render={() => "painting"} />
              <Route path="/movies" render={() => "movies"} />
              <Route path="/programming" render={() => "programming"} />
            </Switch>
          </Layout>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
