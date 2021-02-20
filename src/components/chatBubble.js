import React from "react";
import "./chatBubble.css";
function ChatBubble({ msg, time, name }) {
  return (
    <div className="chatBubble">
      <div className="chatBubble_info">
        <span className="chatBubble_info_text">{msg}</span>
        <span className="chatBubble_info_timestamp">
          {new Date(time?.toDate()).toLocaleDateString("en-US")}
        </span>
        <span className="chatBubble_info_name">{name}</span>
      </div>
    </div>
  );
}

export default ChatBubble;
