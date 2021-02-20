import React from "react";
import { useStateValue } from "../StateProvider";
import "./avatar.css";

function Avatar({ src, height, width }) {
  const [{ user }, dispatch] = useStateValue();

  return (
    <div className="avatar">
      <img
        className="avatar_img"
        src={src}
        alt={user.displayName}
        style={{ height: `${height}`, width: `${width}` }}
      />
    </div>
  );
}

export default Avatar;
