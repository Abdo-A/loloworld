import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import Aux from "../Auxe/Auxe";
import MainMenu from "../../components/navigation/MainMenu/MainMenu";

class Layout extends Component {
  state = {
    menuCollapsed: false
  };

  toggleMenuCollapsed = () => {
    this.setState(prevState => ({ menuCollapsed: !prevState.menuCollapsed }));
  };

  navigateTo = destination => {
    this.props.history.push(destination);
  };

  render() {
    return (
      <Aux>
        <MainMenu
          menuCollapsed={this.state.menuCollapsed}
          toggleMenuCollapsed={this.toggleMenuCollapsed}
          navigateTo={this.navigateTo}
        />
        <main>{this.props.children}</main>
      </Aux>
    );
  }
}

export default withRouter(Layout);
