import React from "react";
import "../styles/header.css";
import TroubleshootIcon from "@mui/icons-material/Troubleshoot"; //for search icon
import { Avatar } from "@mui/material";
import { useDataProviderValue } from "./DataProvider";
import ShowModal from "./ShowModal.js";

function Header() {
  const [{ user }, dispatch] = useDataProviderValue();

  return (
    <div className="header">
      <div className="header_Left">
        <TroubleshootIcon />
        <input type="text" placeholder="Search for Artist, songs,etc" />
      </div>

      <div className="header_Right">
        <ShowModal
          showAbout
          title="Spotify-Clone"
          appFrontEnd="ReactJs, React Context & MUI hosted @Google Firebase"
          AppBackEnd="NodeJS-ExpressJS hosted @Google Cloud Function"
        />
        <Avatar src={user?.images[0]?.url} alt={user?.display_name} pic />
        <h4>{user?.display_name}</h4>
      </div>
    </div>
  );
}

export default Header;
