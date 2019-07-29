import React, { useState } from "react";
import useChannel from "./hooks/useChannel";
import eventReducer from "./reducers/eventReducer";
import BroadcasterButton from "./BroadcasterButton";

const Channel = ({ channelName, name, setShowChannel }) => {
  const [message, setMessage] = useState("");

  const initialState = {
    message: "Nothing to see here yet"
  };

  const [state, broadcast, channelObject] = useChannel(
    `game:${channelName}`,
    name,
    eventReducer,
    initialState
  );

  const leaveChannel = () => {
    channelObject
      .leave()
      .receive("ok", ({ messages }) =>
        console.log("successfully left channel", messages || "")
      )
      .receive("error", ({ reason }) =>
        console.error("failed to leave channel", reason)
      );
    setShowChannel(false);
  };

  return (
    <div className="myFlexCol">
      <div>This is da channel: {channelName}</div>
      <div>Player: {name}</div>
      <br />
      <div style={{ fontSize: 20, color: "darkgreen", marginBottom: 20 }}>
        Message: {state.message}
      </div>
      <div>Broadcast a messasge:</div>
      <input
        style={{ width: 200, margin: 10 }}
        value={message}
        onChange={e => setMessage(e.target.value)}
      />
      <div style={{ marginTop: 30 }}>
        <BroadcasterButton broadcast={broadcast} message={message} />
      </div>
      <div>
        <button onClick={leaveChannel}>Leave channel</button>
      </div>
    </div>
  );
};

export default Channel;
