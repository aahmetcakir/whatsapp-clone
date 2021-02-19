import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Avatar from "./avatar";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import SearchIcon from "@material-ui/icons/Search";
import IconButton from "@material-ui/core/IconButton";
import "./chatPage.css";

import SendMessage from "./sendMessage";
import ChatBubble from "./chatBubble";
import ChatBubbleReply from "./chatBubbleReply";
import db from "./firebase";
function ChatPage() {
  const img = "https://avatars.dicebear.com/api/male/5646.svg";
  const [roomName, setroomName] = useState("");
  const [messages, setmessages] = useState([]);
  const { roomId } = useParams();
  useEffect(() => {
    if (roomId) {
      db.collection("rooms")
        .doc(roomId)
        .onSnapshot((snapshot) => {
          setroomName(snapshot.data().name);
        });
      db.collection("rooms")
        .doc(roomId)
        .collection("messages")
        .orderBy("timestamp", "asc")
        .onSnapshot((snapshot) =>
          setmessages(
            snapshot.docs.map((doc) => {
              doc.data();
            })
          )
        );
    }
  }, [roomId]);
  console.log(messages);
  return (
    <div className="chatPage">
      <div className="chatPage_chatTitle">
        <div className="chatPage_chatTitle_info">
          <Avatar src={img} />
          <div className="chatPage_chatTitle_name">
            {roomName} <br />
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
          {messages.map((message) => {
            return (
              <ChatBubble
                key={message.timesamp}
                time={message.timesamp}
                msg={message.message}
              />
            );
          })}
        </div>
        <div className="chatPage_chatScreen_sendMessageArea">
          <SendMessage />
        </div>
      </div>
    </div>
  );
}

export default ChatPage;
