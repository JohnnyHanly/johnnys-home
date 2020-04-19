import React from "react";
import ComponentView from "./album-view";
import { withRouter } from "react-router-dom";
var Spotify = require("spotify-web-api-js");
var spotifyApi = new Spotify();

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = { doneLoading: false };
  }

  async componentDidMount() {
    console.log("ALBUUM", this.props.match.params.id);
    await this.getAlbum(this.props.match.params.id);
    await this.getAlbumTracks(this.props.match.params.id);
  }
  async getAlbum(id) {
    await spotifyApi
      .getAlbum(id)
      .then((res) => {
        console.log(res);
        this.setState({
          album: res,
        });
      })
      .catch((err) => console.log(err));
  }
  async getAlbumTracks(id) {
    await spotifyApi
      .getAlbumTracks(id)
      .then((res) => {
        console.log("TRACKS",res)
        this.setState({
          albumTracks: res.items,
          doneLoading:true
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
