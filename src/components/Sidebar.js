import React from "react";
import "../styles/sidebar.css";
import SidebarOption from "./SidebarOption";
import HolidayVillageIcon from "@mui/icons-material/HolidayVillage"; //for home Icon
import TroubleshootIcon from "@mui/icons-material/Troubleshoot"; //for search icon
import LibraryMusicIcon from "@mui/icons-material/LibraryMusic";
import { useDataProviderValue } from "./DataProvider";
import Tooltip from "@mui/material/Tooltip";

function Sidebar() {
  //importing from daata provider, datacontext
  const [{ playlist }, dispatch] = useDataProviderValue();

  return (
    <>
      <div className="sidebar">
        <Tooltip
          title="Dian porto Website"
          arrow
          followCursor
          placement="top-start"
        >
          <a href="http://dians.site">
            <div className="spotifyClone_logo">
              <img
                className="sidebar_logo"
                src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
                alt="spotify logo"
              ></img>
              <div className="CloneText">CLONE</div>
            </div>
          </a>
        </Tooltip>

        <SidebarOption title="Home" Icon={HolidayVillageIcon} />
        <SidebarOption title="Search" Icon={TroubleshootIcon} />
        <SidebarOption title="Your Library" Icon={LibraryMusicIcon} />
        <br />
        <strong className="sidebar_Title">PLAYLIST</strong>
        <hr />

        {playlist?.items?.map((item) => (
          <SidebarOption title={item.name} />
        ))}
      </div>
    </>
  );
}

export default Sidebar;
