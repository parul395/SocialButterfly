import React, { useState, useEffect } from "react";
import "./Sidebar.css";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
import CreateIcon from "@material-ui/icons/Create";
import InsertCommentIcon from "@material-ui/icons/InsertComment";
import InboxIcon from "@material-ui/icons/Inbox";
import DraftsIcon from "@material-ui/icons/Drafts";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";
import PeopleAltIcon from "@material-ui/icons/PeopleAlt";
import AppsIcon from "@material-ui/icons/Apps";
import FileCopyIcon from "@material-ui/icons/FileCopy";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import AddIcon from "@material-ui/icons/Add";
import SidebarOption from "./SidebarOption";
import db from "../firebase";
import { useStateValue } from "./Stateprovider";
function Sidebar() {
  const [{ user }] = useStateValue();
  const [channels, setChannels] = useState([]);

  useEffect(() => {
    //run this code once when sidebar loads
    db.collection("rooms").onSnapshot((snapshot) =>
      setChannels(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          name: doc.data().name,
        }))
      )
    );
  }, []);
  return (
    <div className="sidebar">
      <div className="sidebar__header">
        <div className="sidebar__info">
          <h2>Social Butterfly</h2>
          <h3>
            <FiberManualRecordIcon />
            {user?.displayName}
          </h3>
        </div>
        <CreateIcon />
      </div>
      <SidebarOption Icon={InsertCommentIcon} title="Your Conversations" />
      <SidebarOption Icon={InboxIcon} title={"Your Mentions & Reactions"} />
      <SidebarOption Icon={DraftsIcon} title={"Your Saved Items"} />
      <SidebarOption Icon={BookmarkBorderIcon} title={"Your Crew Browser"} />
      <SidebarOption Icon={PeopleAltIcon} title={"People & User Crews"} />
      <SidebarOption Icon={AppsIcon} title={"Apps"} />
      <SidebarOption Icon={FileCopyIcon} title={"Saved File Browser"} />
      <SidebarOption Icon={ExpandLessIcon} title={"Show less"} />
      <hr />
      <SidebarOption Icon={ExpandMoreIcon} title={"Crews"} />
      <hr />
      <SidebarOption Icon={AddIcon} title={"Add Crew"} addChannelOption />

      {/* {Connect to db and list all the crews} */}
      {channels.map((channel) => (
        <SidebarOption title={channel.name} id={channel.id} />
      ))}
    </div>
  );
}

export default Sidebar;
