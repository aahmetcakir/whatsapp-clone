import React from "react";
import "./notification.css";
import NotificationsOffIcon from "@material-ui/icons/NotificationsOff";
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
function Notification() {
  return (
    <div className="notification">
      <div className="notification_circle">
        <NotificationsOffIcon className="notification_circle_icon" />
      </div>
      <div className="notification_texts">
        <span className="notification_text">
          Yeni mesaj geldiğinde haberdar ol
        </span>
        <p className="notification_texts_p">
          <a  className="notification_texts_p" href="">Masaüstü bildirimlerini aç</a>
          <ArrowForwardIosIcon className="notification_texts_p_icon" style={{height:"12px",width:"12px"}}/>
        </p>
      </div>
    </div>
  );
}

export default Notification;
