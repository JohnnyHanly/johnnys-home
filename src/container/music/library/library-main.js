import React from "react";
import ComponentView from "./library-view";

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    console.log("LIBRARY");
  }
  render() {
    return ComponentView.bind(this)();
  }
}
export default Main;
