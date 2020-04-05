import React from "react";
import ComponentView from "./content-view";

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tempList: [1, 2, 3, 4, 5, 6, 7, 8]
    };
  }

  render() {
    return ComponentView.bind(this)();
  }
}
export default Main;
