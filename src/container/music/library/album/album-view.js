import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import {
  Typography,
  Card,
  CardContent,
  CardMedia,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
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
              maxHeight: 650,
              backgroundColor: "transparent",
              boxShadow: "none",
            }}
          >
            <CardMedia
              style={{ height: 500, width: 500 }}
              image={this.state.album.images[0].url}
            />
            <CardContent>
              <Typography
                className="row justify-content-center"
                style={{ fontFamily: "Ubuntu", fontWeight: "650" }}
                variant="h4"
              >
                {this.state.album.name}
              </Typography>
              <Typography
                className="row justify-content-center"
                style={{ color: "rgba(255, 255, 255, 0.7)" }}
                variant="subtitle1"
              >
                {this.state.album.artists[0].name} tracks
              </Typography>
              <Typography
                className="row justify-content-center"
                style={{ color: "rgba(255, 255, 255, 0.7)" }}
                variant="subtitle1"
              >
                {this.state.album.tracks.total} 
              </Typography>
              <Typography
                className="row justify-content-center"
                style={{ color: "rgba(255, 255, 255, 0.7)" }}
                variant="subtitle1"
              >
                {this.state.album.release_date}
              </Typography>
            </CardContent>
          </Card>
          <div className="col-12 col-sm-7">
            <List style={{ width: "100%" }}>
              {this.state.albumTracks.map((x) => (
                <ListItem
                  className="trackListItem"
                  onClick={() => this.props.onTrackSelected(x)}
                  key={x.id}
                  style={
                    // this.props.currentlyPlaying === x.track.name &&
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
                    {this.props.isPlaying ? (
                      <PauseIcon onClick={this.props.pauseSong} />
                    ) : (
                      <PlayArrowIcon
                      // onClick={() => this.playSongHandler(track, album)}
                      />
                    )}
                  </ListItemIcon>
                  <ListItemText
                    primary={x.name}
                    secondary={x.artists[0].name}
                  />
                  <ListItemText
                    style={{
                      textAlign: "right",
                    }}
                    primary={this.convertTimeStamp(x.duration_ms)}
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
