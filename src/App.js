import "./styles/App.css";
import Login from "./components/Login.js";
import React, { useEffect } from "react";
import { getTokenFromUrl, DISCOVER_WEEKLY_LIST } from "./script/spotify";
import SpotifyWebApi from "spotify-web-api-js";
import Player from "./components/Player.js";
import { useDataProviderValue } from "./components/DataProvider";

const spotify = new SpotifyWebApi();

function App() {
  //the first item anything inside {} is what we are getting out
  // dispatch is the function to do the action to the react Context
  const [{ token }, dispatch] = useDataProviderValue();
  console.clear();

  useEffect(() => {
    const hash = getTokenFromUrl();
    const _token = hash.access_token;
    if (_token) {
      dispatch({ type: "SET_TOKEN", token: _token });

      window.location.hash = ""; // empty the parameter from spotify, we already saved it!
      spotify.setAccessToken(_token); // this make this object Logged on, and can be passed to player component

      //saved logged in spotify object
      dispatch({
        type: "SET_SPOTIFY",
        spotify: spotify,
      });

      //get and saved user details
      spotify.getMe().then((user) => {
        // put it in DataProvider/React Context
        dispatch({
          type: "SET_USER",
          user: user,
        });
      });

      // go to web spotify, find discover weekly, there youll find the id, and use it
      // my discover weekly  playlist id 37i9dQZEVXcCLfEdTZi06O
      spotify.getPlaylist(DISCOVER_WEEKLY_LIST).then((response) => {
        dispatch({
          type: "SET_DISCOVER_WEEKLY",
          discover_weekly: response,
        });
      });

      //get and save top artist
      spotify.getMyTopArtists().then((response) =>
        dispatch({
          type: "SET_TOP_ARTISTS",
          top_artists: response,
        })
      );

      //get and save playlist
      spotify.getUserPlaylists().then((playlist) => {
        dispatch({
          type: "SET_PLAYLIST",
          playlist: playlist,
        });
      });
    }
  }, [token, dispatch]);

  return (
    <div className="App">
      {/* // somehow passing spotify web through Props does not work but through
      react context does!! */}
      {token ? <Player /> : <Login />}
    </div>
  );
}

export default App;
