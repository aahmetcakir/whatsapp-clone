import React from "react";
import Avatar from "./avatar";
import "./chatCard.css";
import { Link } from "react-router-dom";

function ChatCard({ name, id }) {
  const img = "https://avatars.dicebear.com/api/male/1903.svg";
  return (
    <Link className="chatcard_link" to={`/rooms/${id}`}>
      <div className="chatCard">
        <div className="chatCard_group">
          <Avatar src={img} height="45px" width="45px" />
          <div className="chatCard_group_info">
            <div className="chatCard_group_info_flex">
              <span className="chatCard_group_title">{name}</span>
              <span className="chatCard_group_lastMessage">last message</span>
            </div>
            <span className="chatCard_group_timestamp">dün</span>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default ChatCard;
