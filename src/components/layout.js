import React from "react";
import Sidebar from "./sidebar";
import ChatPage from "./chatPage";
import "./layout.css";

function Layout() {
  return (
    <div className="layout">
      <div className="layout_sidebar">
        <Sidebar />
      </div>
      <div className="layout_chat">
        <ChatPage name={"TEAM ÇAKIR"} />
      </div>
    </div>
  );
}

export default Layout;
