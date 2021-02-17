import React from "react";
import "./chatBubble.css";
function ChatBubble() {
  return (
    <div className="chatBubble">
      <div className="chatBubble_info">
        <span className="chatBubble_info_text">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab animi
          Aspernatur porro illo atque!
        </span>
        <span className="chatBubble_info_timestamp">12.55</span>
      </div>
    </div>
  );
}

export default ChatBubble;
