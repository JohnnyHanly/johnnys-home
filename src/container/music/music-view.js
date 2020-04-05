import React from "react";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline/CssBaseline";
import SideDrawer from "./sideDrawer";
import Player from "./player";
import Content from "./content";
import Search from "./search"
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
      contrastText: "#fff"
    },
    secondary: {
      light: "#ff7961",
      main: "#ffffff",
      dark: "#191414",
      contrastText: "#000"
    }
  },
  typography: {
    useNextVariants: true
  }
});

const clientId = "20c16b5b9cf144fe9c6f7859c2b78347";
const redirectUri = "http://localhost:3000";
const scopes = ["user-read-currently-playing", "user-read-playback-state"];
const authEndpoint = "https://accounts.spotify.com/authorize";

var view = function() {
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
                    path="/music/library"
                    render={() => (
                      <Library
                        displayArtists={this.displayArtists}
                        recentlyPlayed={this.state.recentlyPlayed}
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
