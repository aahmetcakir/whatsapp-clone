import React from "react";
import Avatar from "./avatar";
import "./sidebar.css";
import ChatIcon from "@material-ui/icons/Chat";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import DonutLargeIcon from "@material-ui/icons/DonutLarge";
import IconButton from "@material-ui/core/IconButton";
import SidebarGroup from "./sidebar_group";
import Notification from "./notification";
import SearchBar from "./searchBar";

function sidebar() {
  const img =
    "https://avatars.githubusercontent.com/u/51996326?s=460&u=1a97a750118dd660bbc765424688e279bb3dc6d7&v=4";
  return (
    <div className="sidebar">
      <div className="sidebar_title">
        <Avatar src={img} />
        <div className="sidebar_title_icons">
          <IconButton>
            <DonutLargeIcon className="sidebar_title_icons_icon" />
          </IconButton>
          <IconButton>
            <ChatIcon className="sidebar_title_icons_icon" />
          </IconButton>
          <IconButton>
            <MoreVertIcon className="sidebar_title_icons_icon" />
          </IconButton>
        </div>
      </div>
      <div className="sidebar_grubs">
        <Notification />
        <SearchBar />
        <SidebarGroup />
      </div>
    </div>
  );
}

export default sidebar;
