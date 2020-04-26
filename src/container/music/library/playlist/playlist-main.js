import React from "react";
import ComponentView from "./playlist-view";
import { withRouter } from "react-router-dom";

var Spotify = require("spotify-web-api-js");
var spotifyApi = new Spotify();

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = { doneLoading: false };
  }

  async componentDidMount() {
    console.log("PLAYLIST", this.props.match.params.id);
    await this.getPlaylist(this.props.match.params.id);
    await this.getPlaylistTracks(this.props.match.params.id);
  }
  async getPlaylist(id) {
    await spotifyApi
      .getPlaylist(id)
      .then((res) => {
        console.log(res);
        this.setState({
          playlist: res,
        });
      })
      .catch((err) => console.log(err));
  }
  async getPlaylistTracks(id) {
    await spotifyApi
      .getPlaylistTracks(id)
      .then((res) => {
        console.log(res);
        this.setState({
          playlistTracks: res.items,
          doneLoading: true,
        });
      })
      .catch((err) => console.log(err));
  }

  convertTimeStamp(ms) {
    let sec = ((ms % 60000) / 1000).toFixed(0);
    let min = Math.floor(ms / 60000);

    return `${min}:${sec}`;
  }
  render() {
    return ComponentView.bind(this)();
  }
}
export default withRouter(Main);
