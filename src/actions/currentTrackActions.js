import * as allActions from "./allActions";
var Spotify = require("spotify-web-api-js");

const spotifyToken = localStorage.getItem("spotify-token");

export function fetchCurrentTrack() {
  console.log("GETTING CURRENT TRACK");
  var spotifyApi = new Spotify();
    spotifyApi.setAccessToken(spotifyToken);
  return (dispatch) => {
  
    spotifyApi
      .getMyCurrentPlayingTrack()
      .then((currentTrack) => {
        console.log(currentTrack);
        dispatch(receiveCurrentTrack(currentTrack));
      })
      .catch((err) => console.log(err));
  };
}

export function receiveCurrentTrack(currentTrack) {
    console.log(currentTrack)
  console.log(currentTrack);
  return {
    type: allActions.RECEIVE_TRACK,
    currentTrack: currentTrack,
  };
}
