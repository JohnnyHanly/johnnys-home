import React from "react";
import ComponentView from "./music-view";
import axios from "axios";
import hash from "../../hash";
import { withRouter } from 'react-router-dom';
var Spotify = require("spotify-web-api-js");
const clientId = "20c16b5b9cf144fe9c6f7859c2b78347";
const redirectUri = "http://localhost:3000/music";
const scopes = [
  "user-read-currently-playing",
  "user-read-playback-state",
  "user-read-recently-played"
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
      doneLoading: false
    };
  }

  async componentDidMount() {
    let _token = null;
    console.log("SPOT TOEKN", spotifyToken);

    if (localStorage.getItem("spotify-token") == "undefined") {
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

  async getUser(token) {
    var spotifyApi = new Spotify();
    console.log(this.state.token);
    await spotifyApi.setAccessToken(token);
    await spotifyApi
      .getUserPlaylists()
      .then(res => {
        this.setState({
          playlists: res.items
        });
      })
      .catch(err => console.log(err));

    await spotifyApi
      .getMyRecentlyPlayedTracks()
      .then(res => {
        this.setState({
          recentlyPlayed: res.items
        });
      })
      .catch(err => console.log(err));

    await this.setState({
      doneLoading: true
    });
  }

  async refreshToken() {}

  async getPlaylists() {
    var spotifyApi = new Spotify();
    console.log(this.state.access_token);
    await spotifyApi.setAccessToken(this.state.access_token);
  }

  displayArtists(artists) {
    console.log(artists);
    if (artists.length === 1) {
      return artists[0].name;
    } else if (artists.length > 1) {
      let artistNames = [];
      artists.forEach(artist => {
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
export default withRouter(Main);
