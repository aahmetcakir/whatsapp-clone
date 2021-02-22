import React from "react";
import "./chatBubble.css";
function ChatBubble({ msg, time, name }) {
  let options = { day: "numeric", month: "short" };
  return (
    <div className="chatBubble">
      <div className="chatBubble_info">
        <span className="chatBubble_info_name">{name}</span>
        <div className="chatReply_info_text_and_date">
          <span className="chatBubble_info_text">{msg}</span>
          <span className="chatBubble_info_timestamp">
            {new Date(time?.toDate()).toLocaleDateString("tr-TR", options)}
          </span>
        </div>
      </div>
    </div>
  );
}

export default ChatBubble;
