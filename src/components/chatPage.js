import React from "react";
import Avatar from "./avatar";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import SearchIcon from "@material-ui/icons/Search";
import IconButton from "@material-ui/core/IconButton";
import "./chatPage.css";
import SendMessage from "./sendMessage";
import ChatBubble from "./chatBubble";
import ChatBubbleReply from "./chatBubbleReply";

function ChatPage({ name }) {
  const img =
    "https://avatars.githubusercontent.com/u/51996326?s=460&u=1a97a750118dd660bbc765424688e279bb3dc6d7&v=4";

  return (
    <div className="chatPage">
      <div className="chatPage_chatTitle">
        <div className="chatPage_chatTitle_info">
          <Avatar src={img} />
          <div className="chatPage_chatTitle_name">
            {name} <br />
            <div className="chatPage_chatTitle_name_users">
              Siz, Umutcan, Berkay, Muhammet
            </div>
          </div>
        </div>
        <div className="chatPage_chatTitle_icons">
          <IconButton className="button">
            <SearchIcon className="searchIcon" />
          </IconButton>
          <IconButton className="button">
            <MoreVertIcon className="moreIcon" />
          </IconButton>
        </div>
      </div>
      <div className="chatPage_chatScreen">
        <div className="chatPage_chatScreen_messages">
          <ChatBubble />
          <ChatBubbleReply />
          <ChatBubble />
          <ChatBubbleReply />
          <ChatBubble />
          <ChatBubbleReply />
          <ChatBubble />
          <ChatBubbleReply />
        </div>
        <div className="chatPage_chatScreen_sendMessageArea">
          <SendMessage />
        </div>
      </div>
    </div>
  );
}

export default ChatPage;
