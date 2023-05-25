import "../styles/songrow.css";
import React from "react";

function SongRow({ track, play }) {
  return (
    <div className="songRow">
      <img
        className="songRow_AlbumPic"
        src={track.album.images[0].url}
        alt="Album Pics"
      />
      <div
        className="songRow_info"
        onClick={() => {
          play(track.id);
        }}
      >
        <h2>{track.name}</h2>
        <p>
          {track.artists.map((artist) => artist.name).join(", ")}
          {track.album.name}
        </p>
      </div>
    </div>
  );
}

export default SongRow;
