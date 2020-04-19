import React from "react";
import ComponentView from "./player-view";
var Spotify = require("spotify-web-api-js");
var spotifyApi = new Spotify();

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  async componentDidMount() {
    console.log("MOUNT", this.props.currentTrack);

    await this.setState({
      currentTrack: this.props.currentTrack,
    });
  }
  async componentWillReceiveProps() {
    await spotifyApi
      .getMyCurrentPlayingTrack()
      .then((res) => {
        this.setState({ currentTrack: res });
        console.log(res);
      })
      .catch((err) => console.log(err));
  }

  render() {
    return ComponentView.bind(this)();
  }
}
export default Main;
