import React from "react";
import {
  Grid,
  Typography,
  Card,
  IconButton,
  CardContent,
  CardMedia,
  Slider,
} from "@material-ui/core";
import PauseIcon from "@material-ui/icons/Pause";
import PlayArrowIcon from "@material-ui/icons/PlayArrowRounded";
import NextIcon from "@material-ui/icons/SkipNextRounded";
import BackIcon from "@material-ui/icons/SkipPreviousRounded";

import "./styles.css";

var view = function () {
  console.log(this.state);
  return (
    <Card
      style={{
        position: "fixed",
        bottom: 0,
        width: "100%",
        paddingTop: "5px",
        paddingBottom: "5px",
      }}
    >
      {this.props.currentTrack ? (
        <div className="row justify-content-start align-items-center">
          <div className="col-3">
            <Card style={{ backgroundColor: "transparent", boxShadow: "none" }}>
              <div className="row justify-content-start">
                <CardMedia
                  style={{
                    width: 80,
                    height: 80,
                    marginLeft: "4%",
                  }}
                  image={this.props.currentTrack.item.album.images[1].url}
                />
                <CardContent style={{ flex: "1 0 auto", padding: "15px" }}>
                  <Typography variant="h5">
                    {this.props.currentTrack.item.name}{" "}
                  </Typography>
                  <Typography className="text-muted" variant="caption">
                    {this.props.currentTrack.item.artists[0].name}
                  </Typography>
                </CardContent>
              </div>
            </Card>
          </div>

          <div className="col-6">
            <div className="row justify-content-center">
              <div className="col-1">
                <BackIcon />
              </div>
              {this.props.isPlaying ? (
                <div className="col-1" onClick={() => this.onPause()}>
                  <PauseIcon />
                </div>
              ) : (
                <div className="col-1" onClick={() => this.onPause()}>
                  <PlayArrowIcon />
                </div>
              )}
              <div className="col-1">
                <NextIcon />
              </div>
            </div>
            <div className="row justify-content-center">
              <div className="col-2"> 0:00</div>

              <div className="col-6">
                <Slider />
              </div>

              <div className="col-2">5:45</div>
            </div>
          </div>

          <div className="col-2">
            <Slider />
          </div>
        </div>
      ) : (
        <div className="row justify-content-start align-items-center">
          <div className="col-3">
            <Card style={{ backgroundColor: "transparent", boxShadow: "none" }}>
              <div className="row justify-content-start">
                <CardMedia
                  style={{
                    width: 80,
                    height: 80,
                    marginLeft: "4%",
                  }}
                  image="https://static.billboard.com/files/media/The-Notorious-B-I-G-Ready-to-Die-album-covers-billboard-1000x1000-compressed.jpg"
                />
                <CardContent style={{ flex: "1 0 auto", padding: "15px" }}>
                  <Typography variant="h5">Song Title </Typography>
                  <Typography className="text-muted" variant="caption">
                    Artist Name{" "}
                  </Typography>
                </CardContent>
              </div>
            </Card>
          </div>

          <div className="col-6">
            <div className="row justify-content-center">
              <div className="col-1">left</div>
              <div className="col-1">mid</div>
              <div className="col-1">next</div>
            </div>
            <div className="row justify-content-center">
              <div className="col-2"> 0:00</div>

              <div className="col-6">
                <Slider />
              </div>

              <div className="col-2">5:45</div>
            </div>
          </div>

          <div className="col-2">
            <Slider />
          </div>
        </div>
      )}
    </Card>
  );
};
export default view;
