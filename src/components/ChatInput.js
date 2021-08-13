import React, { useState } from "react";
import db from "../firebase";
import firebase from "firebase";
import "./ChatInput.css";
import { useStateValue } from "./Stateprovider";

export default function ChatInput({ channelName, channelId }) {
  const [input, setInput] = useState("");
  const [{ user }] = useStateValue();

  const sendMessage = (e) => {
    setInput("");
    e.preventDefault();
    if (channelId) {
      db.collection("rooms").doc(channelId).collection("messages").add({
        message: input,
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),

        user: user?.displayName,
        userImage: user?.photoURL,
      });
    }
  };
  return (
    <div className="chatInput">
      <form id="form">
        <input
          type=""
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder={` Message ღ${channelName}  
       `}
        />
        <button type="submit" onClick={sendMessage}>
          SEND
        </button>
      </form>
    </div>
  );
}
