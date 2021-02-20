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
import { useStateValue } from "../StateProvider";

function Sidebar({ rooms }) {
  const [{ user }, dispatch] = useStateValue();
  console.log(user?.photoURL);
  return (
    <div className="sidebar">
      <div className="sidebar_title">
        <div className="sidebar_title_info">
          <Avatar src={user?.photoURL} />
          <h3 style={{ color: "#8f9394" }}>{user?.displayName}</h3>
        </div>
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
        <SidebarGroup rooms={rooms} />
      </div>
    </div>
  );
}

export default Sidebar;
