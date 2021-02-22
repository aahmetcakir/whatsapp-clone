import React from "react";
import "./chatBubbleReply.css";
function ChatBubbleReply({ msg, time, name }) {
  let options = { day: "numeric", month: "short" };
  return (
    <div className="chatReply">
      <div className="chatReply_info">
        <span className="chatReply_info_name">{name}</span>
        <div className="chatReply_info_text_and_date">
          <span className="chatReply_info_text">{msg}</span>
          <span className="chatReply_info_timestamp">
            {new Date(time?.toDate()).toLocaleDateString("tr-TR", options)}
          </span>
        </div>{" "}
      </div>
    </div>
  );
}

export default ChatBubbleReply;
