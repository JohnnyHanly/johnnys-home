import React from "react";
import ComponentView from "./container-view";

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      HueID: "CQNofgyPiNvRp-DqODEMFywnKHu9Y0UvK5L5URFY"
    };
  }

  render() {
    return ComponentView.bind(this)();
  }
}
export default Main;
