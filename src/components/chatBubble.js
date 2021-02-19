import React from "react";
import "./chatBubble.css";
function ChatBubble({ msg ,time}) {
  return (
    <div className="chatBubble">
      <div className="chatBubble_info">
        <span className="chatBubble_info_text">{msg}</span>
        <span className="chatBubble_info_timestamp">{time}</span>
      </div>
    </div>
  );
}

export default ChatBubble;
