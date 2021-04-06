import React, { useState, useEffect } from "react";
import Sidebar from "./sidebar";
import ChatPage from "./chatPage";
import "./layout.css";
import db from "./firebase";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import SignIn from "./SignIn";
import { useStateValue } from "../StateProvider";

function Layout() {
  const [rooms, setrooms] = useState([]);
  
  useEffect(() => {
    const unsubscribe = db.collection("rooms").onSnapshot((snopshot) =>
      setrooms(
        snopshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      )
    );

    return () => {
      unsubscribe();
    };
  }, []);
  const [{ user }, dispatch] = useStateValue();

  return (
    <div className="layout">
      {user ? (
        <Router>
          <div className="layout_sidebar">
            <Sidebar rooms={rooms} />
          </div>
          <Switch>
            <Route path="/rooms/:roomId">
              <div className="layout_chat">
                <ChatPage />
              </div>
            </Route>
            <Route path="/">
              <div className="layout_chat">
                <ChatPage />
              </div>
            </Route>
          </Switch>
        </Router>
      ) : (
        <SignIn />
      )}
    </div>
  );
}

export default Layout;
