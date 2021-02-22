import React from "react";
import ChatCard from "./chatCard";
import "./sidebarGroup.css";
function SidebarGroup({ rooms }) {
  return (
    <div className="sidebar_group">
      <div className="sidebar_group_scroll">
        {rooms.map((room) => {
          return <ChatCard key={room.id} id={room.id} RoomName={room.data.name} />;
        })}
      </div>
    </div>
  );
}

export default SidebarGroup;
