import React from "react";
import ComponentView from "./player-view";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as currentTrackActions from "../../../actions/currentTrackActions";
import PropTypes from "prop-types";
var Spotify = require("spotify-web-api-js");
var spotifyApi = new Spotify();

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      doneLoading: false,
    };
  }

  async componentDidMount() {
    this.props.currentTrackActions.fetchCurrentTrack();
  }
  async componentWillReceiveProps(nextProps) {
    console.log(nextProps, this.props)
    // if (nextProps.currentTrack !== this.props.currentTrack) {
    //   this.props.currentTrackActions.fetchCurrentTrack();
    // }
  }

  async onPlay() {
    await spotifyApi.play();

    this.setState({
      isPlaying: true,
    });
  }

  async onPause() {
    await spotifyApi.pause();

    this.setState({
      isPlaying: false,
    });
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
  return {
    currentTrackActions: bindActionCreators(currentTrackActions, dispatch),
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(Main);
