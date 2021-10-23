import React, { useState, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import Avatar from "./avatar";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import SearchIcon from "@material-ui/icons/Search";
import IconButton from "@material-ui/core/IconButton";
import firebase from "firebase";

import "./chatPage.css";

import SendMessage from "./sendMessage";
import ChatBubble from "./chatBubble";
import ChatBubbleReply from "./chatBubbleReply";

import db, { auth } from "./firebase";

import { useStateValue } from "../StateProvider";

function ChatPage() {
  const img = "https://avatars.dicebear.com/api/male/1903.svg";
  const messagesEndRef = useRef(null);
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const names = [];
  const [roomName, setroomName] = useState("");
  const [messages, setmessages] = useState([]);
  const [userMessage, setUsermessages] = useState("");
  const { roomId } = useParams();
  const [{ user }, dispatch] = useStateValue();
  const currentUser = auth.currentUser;
  useEffect(() => {
    scrollToBottom();
  }, [messages, roomId]);

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
        .onSnapshot((snapshot) => {
          setmessages(snapshot.docs.map((doc) => doc.data()));
        });
    }
  }, [roomId]);
  const sendMessageDB = (e) => {
    e.preventDefault();
    if (
      userMessage.lenght>0
    ) {
      db.collection("rooms").doc(roomId).collection("messages").add({
        message: userMessage,
        name: user.displayName,
        email: user.email,
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      });
      setUsermessages("");
    }
  };
  return (
    <div className="chatPage">
      <div className="chatPage_chatTitle">
        <div className="chatPage_chatTitle_info">
          <Avatar src={img} />
          <div>
            <div className="chatPage_chatTitle_name">{roomName}</div>
            <p className="chatPage_chatTitle_name_users">
              {messages.map((msg) => {
                names.push(msg.name);
              })}
              {[...new Set(names)].map((name) => {
                return <p className="gruopUserNames">{name}, </p>;
              })}
            </p>
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
          {messages.map((msg) => {
            return currentUser.email == msg.email ? (
              <ChatBubble
                key={msg.timestamp}
                time={msg.timestamp}
                msg={msg.message}
                name={msg.name}
              />
            ) : (
              <ChatBubbleReply
                key={msg.timestamp}
                time={msg.timestamp}
                msg={msg.message}
                name={msg.name}
              />
            );
          })}
          <div ref={messagesEndRef} />
        </div>
        <div className="chatPage_chatScreen_sendMessageArea">
          <SendMessage
            input={
              <form onSubmit={sendMessageDB} className="sendMessage_form">
                <input
                  className="sendMessage_input"
                  type="text"
                  placeholder="Bir mesaj yazın"
                  value={userMessage}
                  onChange={(e) => setUsermessages(e.target.value)}
                />
              </form>
            }
          />
        </div>
      </div>
    </div>
  );
}

export default ChatPage;
