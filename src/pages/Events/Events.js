import React, { Component } from "react";
const RapidAPI = require("rapidapi-connect");
const rapid = new RapidAPI(
  "loloworld_5b0f0f20e4b089f3dc475407",
  "170de709-c804-4a9e-818f-ecd3fde83992"
);

class Events extends Component {
  state = {
    ques: null
  };
  componentWillMount() {
    rapid
      .call("Eventful", "searchEvents", {
        date: "This Week",
        consumerKey: "a1f0b90f6fff68ce5b31",
        sortOrder: "popularity",
        location: "Shanghai",
        consumerSecret: "05ee130f29acec622618",
        appKey: "S6zNXwKjqkbPx2Jp"
      })
      .on("success", payload => {
        console.log(payload);
      })
      .on("error", payload => {
        console.log(payload);
      });
  }
  render() {
    return <div>Events</div>;
  }
}

export default Events;
