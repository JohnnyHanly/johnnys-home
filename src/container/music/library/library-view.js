import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Router, Switch, Route, Link } from "react-router-dom";
import Playlist from "./playlist";

import {
  Typography,
  Card,
  IconButton,
  CardContent,
  CardMedia,
  CardActionArea,
  CardActions,
  Slider,
} from "@material-ui/core";
import "./styles.css";

var view = function () {
  return (
    <div className="container-fluid">
      <div className="row justify-content-center">
        <div className="musicNavHeader">Your Playlists</div>
      </div>
      <div className="row justifty-content-start">
        {this.props.playlists.map((x) => (
          <div style={{ padding: "0px" }} className="col-2">
            <Card
              style={{
                maxWidth: 250,
                backgroundColor: "transparent",
                boxShadow: "none",
              }}
              button
              component={Link}
              to={`library/playlist/${x.id}`}
            >
              <CardActionArea>
                <CardMedia
                  style={{ height: 250, width: 250 }}
                  image={x.images[0].url}
                />
                <CardContent>
                  <Typography
                    style={{
                      textOverflow: "ellipsis",
                      whiteSpace: "nowrap",
                      overflow: "hidden",
                    }}
                    variant="overline"
                  >
                    {x.name}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};
export default view;
