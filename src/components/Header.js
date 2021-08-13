import React from "react";
import "./Header.css";
import { Avatar } from "@material-ui/core";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import SearchIcon from "@material-ui/icons/Search";
import HelpOutlineIcon from "@material-ui/icons/HelpOutline";
import { useStateValue } from "./Stateprovider";

function Header() {
  const [{ user }] = useStateValue();
  return (
    <div className="header">
      {/* Header Left */}
      <div className="header__left">
        {/*  Avatar For the locked in user*/}
        <Avatar
          className="header__avatar"
          alt={user?.displayName}
          src={user?.photoURL}
        />
        {/*time icon for history  */}
        <AccessTimeIcon />
      </div>
      {/* Header Search */}
      <div className="header__search">
        {/* Search Icon */}
        <SearchIcon />
        {/* Input */}
        <input placeholder="Search in Social Butterfly" type="text" />
      </div>
      {/* Header Right */}
      <div className="header__right">
        {/* help icon */}
        <HelpOutlineIcon />
      </div>
    </div>
  );
}

export default Header;
