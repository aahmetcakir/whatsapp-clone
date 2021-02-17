import React from "react";
import "./avatar.css";
function Avatar({ src, height, width }) {
  return (
    <div className="avatar">
      <img
        className="avatar_img"
        src={src}
        alt="avatar_photo"
        style={{ height: `${height}`, width: `${width}` }}
      />
    </div>
  );
}

export default Avatar;
