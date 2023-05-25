import React from "react";
import "../styles/player.css";

import Sidebar from "./Sidebar.js";
import Body from "./Body.js";
import Footer from "./Footer.js";

function Player() {
  return (
    <div className="player">
      <div className="body_Player">
        <Sidebar />
        <Body />
      </div>
      <Footer />
    </div>
  );
}

export default Player;
