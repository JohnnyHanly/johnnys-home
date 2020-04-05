import React from "react";
import ComponentView from "./sideDrawer-view";

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      listItems: [1, 2, 3, 4, 5, 6, 7]
    };
  }

  

  render() {
    return ComponentView.bind(this)();
  }
}
export default Main;
