import React, { Component } from "react";
import "./App.css";
import classes from "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Layout from "./hoc/Layout/Layout";
import Salah from "./pages/Salah/Salah";
import Fun from "./pages/Fun/Fun";
import Events from "./pages/Events/Events";

class App extends Component {
  render() {
    return (
      <div className={classes.App}>
        <BrowserRouter>
          <Layout>
            <Switch>
              <Route path="/" exact render={() => "Main Page"} />
              <Route path="/salah" component={Salah} />
              <Route path="/football" render={() => "football"} />
              <Route path="/china" render={() => "china"} />
              <Route path="/events" component={Events} />
              <Route path="/painting" render={() => "painting"} />
              <Route path="/movies" render={() => "movies"} />
              <Route path="/programming" render={() => "programming"} />
              <Route path="/fun" component={Fun} />
            </Switch>
          </Layout>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
