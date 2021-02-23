import React from "react";
import "./chatBubble.css";
function ChatBubble({ msg, time, name }) {
  let options = {
    weekday: "short",
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  };
  return (
    <div className="chatBubble">
      <div className="chatBubble_info">
        <span className="chatBubble_info_name">{name}</span>
        <div className="chatReply_info_text_and_date">
          <span className="chatBubble_info_text">{msg}</span>
          <span className="chatBubble_info_timestamp">
            {new Date(time?.toDate()).toLocaleString("tr-TR", options)}
          </span>
        </div>
      </div>
    </div>
  );
}

export default ChatBubble;

// toLocaleDateString("tr-TR", options)
