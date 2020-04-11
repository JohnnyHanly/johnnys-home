import React from "react";
import ComponentView from "./library-view";
import history from "../../../history";

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    console.log(this.props);
  }

  
  render() {
    return ComponentView.bind(this)();
  }
}
export default Main;
