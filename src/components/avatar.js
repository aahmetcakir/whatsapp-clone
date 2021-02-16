import React from "react";
import "./avatar.css";
function Avatar({ src }) {
  return (
    <div className="avatar">
      <img className="avatar_img" src={src} alt="avatar_photo" srcset="" />
    </div>
  );
}

export default Avatar;
