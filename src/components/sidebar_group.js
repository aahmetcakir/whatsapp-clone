import React, { useState, useEffect } from "react";
import ChatCard from "./chatCard";
import "./sidebarGroup.css";
import db from "./firebase";
function SidebarGroup() {
  const [rooms, setrooms] = useState([]);
  useEffect(() => {
    db.collection("rooms").onSnapshot((snopshot) =>
      setrooms(
        snopshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      )
    );
  }, []);
  console.log(rooms);
  return (
    <div className="sidebar_group">
      <div className="sidebar_group_scroll">
        {rooms.map((room) => {
          return <ChatCard key={room.id} name={room.data.name} />;
        })}
      </div>
    </div>
  );
}

export default SidebarGroup;
