import React, { useEffect } from "react";
import "../styles/footer.css";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import SkipNextIcon from "@mui/icons-material/SkipNext";
import ShuffleIcon from "@mui/icons-material/Shuffle";
import RepeatIcon from "@mui/icons-material/Repeat";
import {
  PauseCircleFilledOutlined,
  PlaylistPlay,
  VolumeDown,
} from "@mui/icons-material";
import { Grid, Slider } from "@mui/material";
import Tooltip from "@mui/material/Tooltip";
import { useDataProviderValue } from "./DataProvider";

function Footer() {
  const [{ item, playing, spotify }, dispatch] = useDataProviderValue();

  useEffect(() => {
    spotify.getMyCurrentPlaybackState().then((response) => {
      //status playing
      dispatch({ type: "SET_PLAYING", playing: response.is_playing });
      //what item currently playing
      dispatch({ type: "SET_ITEM", item: response.item });
    });
  }, [spotify, dispatch]);

  //code to handle play or pause state
  function handlePlayPause() {
    if (playing) {
      spotify.pause();
      dispatch({ type: "SET_PLAYING", playing: false });
    } else {
      spotify.play();
      dispatch({ type: "SET_PLAYING", playing: true });
    }
  }

  //code to handle skip a song
  function handleSkipNext() {
    spotify.skipToNext();
    spotify.getMyCurrentPlayingTrack().then((response) => {
      dispatch({ type: "SET_ITEM", item: response.item });
      dispatch({ type: "SET_PLAYING", playing: true });
    });
  }

  //handle skip to previous song
  function handleSkipPrevious() {
    spotify.skipToPrevious();
    spotify.getMyCurrentPlayingTrack().then((response) => {
      dispatch({ type: "SET_ITEM", item: response.item });
      dispatch({ type: "SET_PLAYING", playing: true });
    });
  }

  return (
    <div className="footer">
      <div className="footer_Left">
        <img
          className="footer_albumLogo"
          src={item?.album.images[0].url}
          alt="album"
        />
        {item ? (
          <div className="footer_songInfo">
            <h4>Songs Name</h4>
            <p>Artist Name</p>
          </div>
        ) : (
          <div className="footer_songInfo">
            <h4>No Song is playing</h4>
            <p>...</p>
          </div>
        )}
      </div>

      <Tooltip
        title="functionality coded, but don't have premium account Token API"
        arrow
        followCursor
        placement="top-start"
      >
        <div className="footer_Center">
          <ShuffleIcon className="footer_green" />
          <SkipPreviousIcon className="footer_icon" onClick={handleSkipNext} />
          {playing ? (
            <PauseCircleFilledOutlined
              onClick={handlePlayPause}
              fontSize="large"
              className="footer_icon"
            />
          ) : (
            <PlayCircleIcon
              onClick={handlePlayPause}
              fontSize="large"
              className="footer_icon"
            />
          )}
          <SkipNextIcon className="footer_icon" onClick={handleSkipPrevious} />
          <RepeatIcon className="footer_green" />
        </div>
      </Tooltip>

      <div className="footer_Right">
        <Grid container spacing={2}>
          <Grid item>
            <PlaylistPlay />
          </Grid>
          <Grid item>
            <VolumeDown />
          </Grid>
          <Grid item xs>
            <Slider aria-labelledby="continuous_slider" />
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default Footer;
