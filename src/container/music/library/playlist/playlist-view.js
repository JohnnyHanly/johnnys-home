import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import {
  Typography,
  Card,
  IconButton,
  CardContent,
  CardMedia,
  Slider,
  Icon,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Button,
  Drawer,
  Divider,
  ListItemAvatar,
} from "@material-ui/core";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import PauseIcon from "@material-ui/icons/Pause";
import BackArrow from "@material-ui/icons/ArrowBack";
import history from "../../../../history";

import "./styles.css";

var view = function () {
  return (
    <div className="container-fluid">
      <div className="row justify-content-start mt-3 mb-3 backArrow">
        <BackArrow onClick={() => history.goBack()} fontSize="large" />
      </div>
      {this.state.doneLoading ? (
        <div className="row justify-content-center align-items-start">
          <Card
            className="col-12 col-sm-5"
            style={{
              maxWidth: 550,
              maxHeight: 600,
              backgroundColor: "transparent",
              boxShadow: "none",
            }}
          >
            <CardMedia
              style={{ height: 500, width: 500 }}
              image={this.state.playlist.images[0].url}
            />
            <CardContent>
              <Typography
                className="row justify-content-center"
                style={{ fontFamily: "Ubuntu", fontWeight: "500" }}
                variant="h6"
              >
                {this.state.playlist.name}
              </Typography>
              <Typography
                className="row justify-content-center"
                style={{ color: "rgba(255, 255, 255, 0.7)" }}
                variant="subtitle1"
              >
                {this.state.playlist.owner.display_name}
              </Typography>
              <Typography
                className="row justify-content-center"
                style={{ color: "rgba(255, 255, 255, 0.7)" }}
                variant="subtitle1"
              >
                {this.state.playlist.tracks.total} tracks
              </Typography>
            </CardContent>
          </Card>
          <div className="col-12 col-sm-7">
            <List style={{ width: "100%" }}>
              {this.state.playlistTracks.map((x) => (
                <ListItem
                  key={x.track.id}
                  style={
                    this.props.currentlyPlaying === x.track.name &&
                    this.props.isPlaying
                      ? {
                          background: "#1db954",
                        }
                      : null
                  }
                >
                  <ListItemIcon
                    style={{
                      cursor: "pointer",
                    }}
                  >
                    {this.props.currentlyPlaying === x.track.name &&
                    this.props.isPlaying ? (
                      <PauseIcon onClick={this.props.pauseSong} />
                    ) : (
                      <PlayArrowIcon
                      // onClick={() => this.playSongHandler(track, album)}
                      />
                    )}
                  </ListItemIcon>
                  <ListItemText
                    primary={x.track.name}
                    secondary={x.track.artists[0].name}
                  />
                  <ListItemText
                    style={{
                      textAlign: "right",
                    }}
                    primary={this.convertTimeStamp(x.track.duration_ms)}
                  />
                </ListItem>
              ))}
            </List>
          </div>
        </div>
      ) : null}
    </div>
  );
};
export default view;
