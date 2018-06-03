import React from "react";
import classes from "./MusicPlayer.css";
import { Popover, Button, Icon } from "antd";

const MusicPlayer = props => {
  let lyrics = props.lyrics;
  return (
    <div className={classes.MusicPlayer}>
      <strong>
        {props.name}
        {" - "}
        <i>{props.singer}</i>
      </strong>
      <br />
      <audio controls autoPlay className={classes.Audio} id="floatingSong">
        <source src={props.src} />
        Your browser does not support the audio tag.
      </audio>
      <div>
        <Button
          onClick={() => props.navigateSong("last")}
          disabled={props.currentSong === 0}
        >
          <Icon type="left" />Last
        </Button>
        <Popover content={lyrics} title="Lyrics" trigger="click">
          <Button type="primary">Lyrics</Button>
        </Popover>
        <Button onClick={() => props.navigateSong("next")}>
          Next<Icon type="right" />
        </Button>
      </div>
    </div>
  );
};

export default MusicPlayer;

// useful music api:
// const RapidAPI = require("rapidapi-connect");
// const rapid = new RapidAPI(
//   "loloworld_5b0f0f20e4b089f3dc475407",
//   "170de709-c804-4a9e-818f-ecd3fde83992"
// );
// rapid
// .call("LastFm", "getAlbumInfo", {
// artist: "eminem",
// album: "revival",
// apiKey: "6455ebeaa674018489c8d9663765a38c"
// })
// .on("success", payload => {
// console.log(payload);
// })
// .on("error", payload => {
// console.log(payload);
// });
