import React from "react";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline/CssBaseline";
import SideDrawer from "./sideDrawer";
import Player from "./player";
import Playlist from "./library/playlist";
import Content from "./content";
import Search from "./search";
import { Router, Switch, Route } from "react-router-dom";
import Library from "./library";
import history from "../../history";

import "./styles.css";
const theme = createMuiTheme({
  palette: {
    type: "dark",
    primary: {
      light: "#757ce8",
      main: "#1db954",
      dark: "#191414",
      contrastText: "#fff",
    },
    secondary: {
      light: "#ff7961",
      main: "#ffffff",
      dark: "#191414",
      contrastText: "#000",
    },
  },
  typography: {
    useNextVariants: true,
  },
});

var view = function () {
  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline>
        {this.state.doneLoading ? (
          <div>
            <div className="row">
              <div className="col-2">
                <SideDrawer
                  displayArtists={this.displayArtists}
                  recentlyPlayed={this.state.recentlyPlayed}
                />
              </div>
              <div className="col-10">
                <Switch>
                  <Route
                    path="/music/home"
                    render={() => (
                      <Content
                        displayArtists={this.displayArtists}
                        recentlyPlayed={this.state.recentlyPlayed}
                      ></Content>
                    )}
                  />
                  <Route
                  exact
                    path="/music/library"
                    render={() => (
                      <Library
                        displayArtists={this.displayArtists}
                        recentlyPlayed={this.state.recentlyPlayed}
                        playlists={this.state.playlists}
                        playListTracks={this.state.playListTracks}
                      ></Library>
                    )}
                  />

                  <Route
                    path="/music/search"
                    render={() => (
                      <Search
                        displayArtists={this.displayArtists}
                        recentlyPlayed={this.state.recentlyPlayed}
                      ></Search>
                    )}
                  />

                  <Route
                    
                    path={`/music/library/playlist/:id`}
                    render={() => (
                      <Playlist
                      // playListTracks={this.state.playListTracks}
                      ></Playlist>
                    )}
                  />
                </Switch>
              </div>
            </div>
            <Player />
          </div>
        ) : (
          <div>loading..</div>
        )}
      </CssBaseline>
    </MuiThemeProvider>
  );
};
export default view;
