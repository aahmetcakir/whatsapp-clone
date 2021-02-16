import React from "react";
import Avatar from "./avatar";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import SearchIcon from "@material-ui/icons/Search";
import Button from "@material-ui/core/Button";
import "./chatPage.css";

function ChatPage({ name }) {
  const img =
    "https://avatars.githubusercontent.com/u/51996326?s=460&u=1a97a750118dd660bbc765424688e279bb3dc6d7&v=4";
  return (
    <div className="chatPage">
      <div className="chatPage_chatTitle">
        <div className="chatPage_chatTitle_info">
          <Avatar src={img} />
          <div className="chatPage_chatTitle_name">
            {name} <br />
            <div className="chatPage_chatTitle_name_users">
              Siz, Umutcan, Berkay, Muhammet
              </div>
          </div>
        </div>
        <div className="chatPage_chatTitle_icons">
          <Button className="button">
            <SearchIcon className="searchIcon" />
          </Button>
          <Button className="button">
            <MoreVertIcon className="moreIcon" />
          </Button>
        </div>
      </div>
      <div className="chatPage_chatScreen">this is a chat screen</div>
    </div>
  );
}

export default ChatPage;
