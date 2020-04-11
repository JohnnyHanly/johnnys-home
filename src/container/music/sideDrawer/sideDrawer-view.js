import React from "react";
import { Link } from "react-router-dom";
import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
  Button,
  Drawer,
  Avatar,
  withWidth,
  Paper,
  Divider,
  ListItemAvatar,
} from "@material-ui/core";
import HomeIcon from "@material-ui/icons/Home";
import GithubIcon from "@material-ui/icons/GitHub";
import SearchIcon from "@material-ui/icons/Search";
import LibraryMusicIcon from "@material-ui/icons/LibraryMusic";
import LinkedInIcon from "@material-ui/icons/LinkedIn";

import "./styles.css";

let mainButtons = (
  <List>
    <ListItem button component={Link} to="/music/search">
      <ListItemIcon>
        <SearchIcon />
      </ListItemIcon>
      <ListItemText>Search</ListItemText>
    </ListItem>

    <ListItem button component={Link} to="/music/home">
      <ListItemIcon>
        <HomeIcon />
      </ListItemIcon>
      <ListItemText>Home</ListItemText>
    </ListItem>
    <ListItem button component={Link} to="/music/library">
      <ListItemIcon>
        <LibraryMusicIcon />
      </ListItemIcon>
      <ListItemText>My Library</ListItemText>
    </ListItem>
  </List>
);
var view = function () {
  return (
    <div className="">
      <Paper
        style={{
          backgroundColor: "rgba(0, 0, 0, 0.5)",
        }}
      >
        {mainButtons}
        <Divider />
        <div className="mt-3 ml-2">
          Recently Played
          {this.props.recentlyPlayed.map((x) => (
            <ListItem className="recentTrack" onClick={() => console.log(x)}>
              <ListItemIcon>
                <Avatar src={x.track.album.images[2].url} />
              </ListItemIcon>
              <ListItemText>
                <Typography
                  style={{
                    fontWeight: "bold",
                    fontSize: 15,
                    textOverflow: "ellipsis",
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                  }}
                >
                  {x.track.name}
                </Typography>
                <Typography
                  style={{
                    fontSize: 13,
                    textOverflow: "ellipsis",
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                  }}
                >
                  {this.props.displayArtists(x.track.artists)}
                </Typography>
              </ListItemText>
            </ListItem>
          ))}
        </div>
        <Divider />
        <List>
          <ListItem>
            <ListItemIcon>
              <GithubIcon />
            </ListItemIcon>
            <ListItemText>Github Profile</ListItemText>
          </ListItem>

          <ListItem>
            <ListItemIcon>
              <LinkedInIcon />
            </ListItemIcon>
            <ListItemText>LinkedIn Profile</ListItemText>
          </ListItem>
        </List>
      </Paper>
    </div>
  );
};
export default view;
