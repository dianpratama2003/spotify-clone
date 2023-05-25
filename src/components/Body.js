import { MoreHoriz, PlayCircleFilled } from "@mui/icons-material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import React from "react";
import "../styles/body.css";
import { useDataProviderValue } from "./DataProvider";
import Header from "./Header.js";
import SongRow from "./SongRow.js";
import { DISCOVER_WEEKLY_LIST } from "../script/spotify";
import Tooltip from "@mui/material/Tooltip";

function Body() {
  const [{ discover_weekly, spotify }, dispatch] = useDataProviderValue();

  function playPlaylist() {
    spotify
      .play({ context_uri: "spotify:playlist:" + DISCOVER_WEEKLY_LIST })
      .then((response) => {
        spotify.getMyCurrentPlayingTrack().then((r) => {
          dispatch({ type: "SET_ITEM", item: r.item });
          dispatch({ type: "SET_PLAYING", playing: true });
        });
      });
  }

  function playSong(id) {
    spotify.play({ uris: [`spotify:track:${id}`] }).then((response) => {
      dispatch({ type: "SET_ITEM", item: response.item });
      dispatch({ type: "SET_PLAYING", playing: true });
    });
  }

  return (
    <div className="body">
      <Header />
      <div className="body_Info">
        <img src={discover_weekly?.images[0].url} alt="" />
        <div className="body_InfoText">
          <strong>PLAYLIST</strong>
          <h2>{discover_weekly?.name}</h2>
          <p>{discover_weekly?.description}</p>
        </div>
      </div>
      <div className="body_Songs">
        List of songs
        <Tooltip
          title="functionality coded, but don't have premium account Token API"
          arrow
          followCursor
          placement="top-start"
        >
          <div className="body_SongsIcon">
            <PlayCircleFilled className="bodyShuffle" onClick={playPlaylist} />
            <FavoriteIcon className="bodyFav" fontSize="large" />
            <MoreHoriz className="bodyMoreHoric" />
          </div>
        </Tooltip>
        {/* list of songs */}
        {/* assign unique key on a list, to make react faster */}
        {discover_weekly?.tracks?.items?.map((item, index) => (
          // passed in the function, inside SongRow they will have songId
          <SongRow key={index} track={item.track} play={playSong} />
        ))}
      </div>
    </div>
  );
}

export default Body;
