import React from "react";
import ComponentView from "./player-view";

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return ComponentView.bind(this)();
  }
}
export default Main;
