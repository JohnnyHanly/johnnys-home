import React from "react";
import { AbbeyRoad } from "../../../assets/Abbey-Road.jpg";
import { makeStyles } from "@material-ui/core/styles";

import {
  Typography,
  Card,
  IconButton,
  CardContent,
  CardMedia,
  CardActionArea,
  CardActions,
  Slider
} from "@material-ui/core";
import "./styles.css";

var view = function() {
  return (
    <div className="container-fluid">
      <div className="row justify-content-center">
        <div className="musicNavHeader">Recently Played</div>
      </div>
      <div className="row justifty-content-start">
        {this.props.recentlyPlayed.map(x => (
          <div style={{ padding: "0px" }} className="col-2">
            <Card
              style={{
                maxWidth: 250,
                backgroundColor: "transparent",
                boxShadow: "none"
              }}
            >
              <CardActionArea>
                <CardMedia
                  style={{ height: 250, width: 250 }}
                  image={x.track.album.images[0].url}
                />
                <CardContent>
                  <Typography style={{  
                    textOverflow: "ellipsis",
                    whiteSpace: "nowrap",
                    overflow: "hidden"
                  }} variant="overline">
                   {x.track.name} - {this.props.displayArtists(x.track.artists)}

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
