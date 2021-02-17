import React from "react";
import SearchIcon from "@material-ui/icons/Search";
import "./searchBar.css";
import { IconButton } from "@material-ui/core";
function SearchBar() {
  return (
    <div className="searchBar">
      <IconButton style={{height:"35px", width: "35px"}}>
        <SearchIcon style={{height:"20px", width: "20px"}} className="searchBar_icon" />
      </IconButton>
      <input
        className="searchBar_input"
        type="text"
        placeholder="Ara ve ya yeni sohbet başlat"
      />
    </div>
  );
}

export default SearchBar;
