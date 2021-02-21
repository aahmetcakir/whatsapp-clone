import React from "react";
import "./chatBubbleReply.css";
function ChatBubbleReply({ msg, time, name }) {
  return (
    <div className="chatReply">
      <div className="chatReply_info">
        <span className="chatReply_info_text">{msg}</span>
        <span className="chatReply_info_timestamp">
          {" "}
          {new Date(time?.toDate()).toLocaleDateString("en-US")}
        </span>
      </div>
    </div>
  );
}

export default ChatBubbleReply;
