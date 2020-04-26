import React from "react";
import ComponentView from "./music-view";
import axios from "axios";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as currentTrackActions from "../../actions/currentTrackActions";
import PropTypes from "prop-types";

import hash from "../../hash";
import history from "../../history";
import { withRouter } from "react-router-dom";
var Spotify = require("spotify-web-api-js");
const clientId = "20c16b5b9cf144fe9c6f7859c2b78347";
const redirectUri = "http://localhost:3000/music";
const scopes = [
  "user-read-currently-playing",
  "user-read-playback-state",
  "user-read-recently-played",
  "user-modify-playback-state",
];
const authEndpoint = "https://accounts.spotify.com/authorize";
const spotifyToken = localStorage.getItem("spotify-token");

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      access_token: "",
      signedIn: false,
      token: null,
      doneLoading: false,
    };
  }

  async componentDidMount() {
    let _token = null;
    console.log("SPOT TOEKN", spotifyToken);
    this.props.currentTrackActions.fetchCurrentTrack();

    if (localStorage.getItem("spotify-token") == "undefined" || null) {
      console.log("HEERE");
      window.open(
        `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
          "%20"
        )}&response_type=token&show_dialog=true`
      );

      _token = hash.access_token;
      console.log(hash);
      localStorage.setItem("spotify-token", _token);
      await this.getUser(_token);
    } else {
      console.log("ELSE");
      await this.getUser(spotifyToken);
    }
  }

  async onTrackSelected(track) {
    console.log("TRACK SELECTED");
    let playbackString = `spotify:track:${track.id}`;
    console.log(playbackString);
    var spotifyApi = new Spotify();

    await spotifyApi
      .play({
        uris: [playbackString],
      })
      .then((res) => {
        console.log(res);
        this.props.currentTrackActions.fetchCurrentTrack();
      });
  }
  playingSucc() {
    console.log("SUCC");
  }
  playErr() {
    console.log("ERR");
  }
  async getUser(token) {
    var spotifyApi = new Spotify();
    await spotifyApi.setAccessToken(spotifyToken);
    await spotifyApi
      .getUserPlaylists()
      .then((res) => {
        this.setState({
          playlists: res.items,
        });
      })
      .catch((err) => console.log(err));

    await spotifyApi
      .getMyRecentlyPlayedTracks()
      .then((res) => {
        this.setState({
          recentlyPlayed: res.items,
        });
      })
      .catch((err) => console.log(err));

    await this.setState({
      doneLoading: true,
      accessToken: token,
    });
  }

  displayArtists(artists) {
    if (artists.length === 1) {
      return artists[0].name;
    } else if (artists.length > 1) {
      let artistNames = [];
      artists.forEach((artist) => {
        artistNames.push(artist.name);
      });
      return artistNames.join(" + ");
    } else {
      return null;
    }
  }
  render() {
    return ComponentView.bind(this)();
  }
}

Main.propTypes = {
  currentTrackActions: PropTypes.object,
  currentTrack: PropTypes.object,
};
function mapStateToProps(state) {
  return {
    currentTrack: state.currentTrack,
  };
}
function mapDispatchToProps(dispatch) {
  console.log(dispatch);
  return {
    currentTrackActions: bindActionCreators(currentTrackActions, dispatch),
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Main));
