import React, { useState } from "react";
import EmojiEmotionsOutlinedIcon from "@material-ui/icons/EmojiEmotionsOutlined";
import AttachFileOutlinedIcon from "@material-ui/icons/AttachFileOutlined";
import MicIcon from "@material-ui/icons/Mic";
import "./sendMessage.css";
function SendMessage() {
  const size = "30px";

  return (
    <div className="sendMessage">
      <EmojiEmotionsOutlinedIcon
        style={{ height: size, width: size }}
        className="sendMessage_icon"
      />
      <AttachFileOutlinedIcon
        style={{ height: size, width: size }}
        className="sendMessage_icon_rotate"
      />
      <input
        className="sendMessage_input"
        type="text"
        placeholder="Bir mesaj yazın"
      />
      <MicIcon
        style={{ height: size, width: size }}
        className="sendMessage_icon"
      />
    </div>
  );
}

export default SendMessage;
