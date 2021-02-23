import React, { useEffect, useState } from "react";
import Avatar from "./avatar";
import "./chatCard.css";
import { Link } from "react-router-dom";
import db from "./firebase";
import { useStateValue } from "../StateProvider";
function ChatCard({ RoomName, id }) {
  const img = "https://avatars.dicebear.com/api/male/1903.svg";
  const [name, setname] = useState([]);
  const [message, setmessage] = useState([]);
  const [time, settime] = useState([]);
  const [{ user }, dispatch] = useStateValue();
  useEffect(() => {
    db.collection("rooms")
      .doc(id)
      .collection("messages")
      .orderBy("timestamp", "asc")
      .onSnapshot((snapshot) => {
        setname(snapshot.docs.map((doc) => doc.data().name));
        setmessage(snapshot.docs.map((doc) => doc.data().message));
        settime(snapshot.docs.map((doc) => doc.data().timestamp));
      });
  }, []);
  let options = { day: "numeric", month: "short" };
  return (
    <Link className="chatcard_link" to={`/rooms/${id}`}>
      <div className="chatCard">
        <div className="chatCard_group">
          <Avatar src={img} height="45px" width="45px" />
          <div className="chatCard_group_info">
            <div className="chatCard_group_info_flex">
              <span className="chatCard_group_title">{RoomName}</span>
              <div className="chatCard_group_lastMessage">
                <div className="chatCard_group_lastMessage_name">
                  {name[name.length - 1]}:
                </div>
                <div className="chatCard_group_lastMessage_message">
                  {message[message.length - 1] &&
                    message[message.length - 1].split("", 7).join("")}
                  {message[message.length - 1] &&
                  message[message.length - 1].split("").length >= 7
                    ? " ..."
                    : ""}
                </div>
              </div>
            </div>
          </div>
        </div>
        <span className="chatCard_group_timestamp">
          {new Date(time[time.length - 1]?.toDate()).toLocaleDateString(
            "tr-TR",
            options
          )}
        </span>
      </div>
    </Link>
  );
}

export default ChatCard;
