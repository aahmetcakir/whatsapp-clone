import React from "react";
import Avatar from "./avatar";
import "./sidebar.css";
import ChatIcon from "@material-ui/icons/Chat";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import DonutLargeIcon from "@material-ui/icons/DonutLarge";
import Button from "@material-ui/core/Button";
import SidebarGroup from "./sidebar_group";
import Notification from "./notification";

function sidebar() {
  const img =
    "https://avatars.githubusercontent.com/u/51996326?s=460&u=1a97a750118dd660bbc765424688e279bb3dc6d7&v=4";
  return (
    <div className="sidebar">
      <div className="sidebar_title">
        <Avatar src={img} />
        <div className="sidebar_title_icons">
          <Button>
            <DonutLargeIcon className="sidebar_title_icons_icon" />
          </Button>
          <Button>
            <ChatIcon className="sidebar_title_icons_icon" />
          </Button>
          <Button>
            <MoreVertIcon className="sidebar_title_icons_icon" />
          </Button>
        </div>
      </div>
      <div className="sidebar_grubs">
        <Notification/>
        these are  groups
        <SidebarGroup/>
        </div>
    </div>
  );
}

export default sidebar;
