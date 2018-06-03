import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import Aux from "../Auxe/Auxe";
import MainMenu from "../../components/navigation/MainMenu/MainMenu";
import MusicPlayer from "../../components/MusicPlayer/MusicPlayer";
import songs from "../../partials/songs";

class Layout extends Component {
  state = {
    menuCollapsed: false,
    currentSong: 0
  };

  toggleMenuCollapsed = () => {
    this.setState(prevState => ({ menuCollapsed: !prevState.menuCollapsed }));
  };

  navigateTo = destination => {
    this.props.history.push(destination);
  };

  navigateSong = dir => {
    if (!(this.state.currentSong <= 0 && dir === "last"))
      this.setState(
        prevState => ({
          currentSong:
            dir === "next"
              ? (prevState.currentSong + 1) % songs.length
              : dir === "last"
                ? (prevState.currentSong - 1) % songs.length
                : ""
        }),
        () => {
          document.getElementById("floatingSong").src =
            songs[this.state.currentSong].src;
        }
      );
  };

  render() {
    return (
      <Aux>
        <MainMenu
          menuCollapsed={this.state.menuCollapsed}
          toggleMenuCollapsed={this.toggleMenuCollapsed}
          navigateTo={this.navigateTo}
        />
        <MusicPlayer
          name={songs[this.state.currentSong].name}
          singer={songs[this.state.currentSong].singer}
          src={songs[this.state.currentSong].src}
        />
        <button onClick={() => this.navigateSong("last")}>last</button>
        <button onClick={() => this.navigateSong("next")}>next</button>
        <main>{this.props.children}</main>
      </Aux>
    );
  }
}

export default withRouter(Layout);
