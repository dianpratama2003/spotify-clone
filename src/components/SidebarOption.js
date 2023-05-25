import React from "react";
import "../styles/sidebaroption.css";

//to make this more reusable, it will detect if we get icons or not, if not then use <p>
function SidebarOption({ title, Icon }) {
  return (
    <div className="sidebaroptions">
      {Icon && <Icon className="sideBarOption_icon" />}
      {/* to see if icon is passed in or not */}
      {Icon ? <h4>{title}</h4> : <p>{title}</p>}
    </div>
  );
}

export default SidebarOption;
