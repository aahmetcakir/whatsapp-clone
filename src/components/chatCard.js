import React from "react";
import Avatar from "./avatar";
import "./chatCard.css";

function ChatCard() {
  const img =
    "https://avatars.githubusercontent.com/u/51996326?s=460&u=1a97a750118dd660bbc765424688e279bb3dc6d7&v=4";
  return (
    <div className="chatCard">
      <div className="chatCard_group">
        <Avatar src={img} height="45px" width="45px" />
        <div className="chatCard_group_info">
          <div className="chatCard_group_info_flex">
            <span className="chatCard_group_title">Grup Title</span>
            <span className="chatCard_group_lastMessage">last message</span>
          </div>
          <span className="chatCard_group_timestamp">dün</span>
        </div>
      </div>
    </div>
  );
}

export default ChatCard;
