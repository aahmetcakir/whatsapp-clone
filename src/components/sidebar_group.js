import React from "react";
// import { useParams } from "react-router-dom";
import ChatCard from "./chatCard";
import "./sidebarGroup.css";
// import db, { auth } from "./firebase";

function SidebarGroup({ rooms }) {
  // const currentUser = auth.currentUser;

  // const [roomUsers, setroomUsers] = useState([]);
  // useEffect(() => {
  //   rooms.map((room) => {
  //     if (room.id) {
  //       db.collection("rooms")
  //         .doc(room.id)
  //         .collection("users")
  //         .onSnapshot((snap) => {
  //           setroomUsers(snap.docs.map((doc) => doc.data()));
  //         });
  //     }
  //   });
  // }, []);
  // console.log(roomUsers);
  return (
    <div className="sidebar_group">
      <div className="sidebar_group_scroll">
        {rooms.map((room) => {
          return (
            <ChatCard key={room.id} RoomName={room.data.name} id={room.id} />
          );
        })}
      </div>
    </div>
  );
}

export default SidebarGroup;
