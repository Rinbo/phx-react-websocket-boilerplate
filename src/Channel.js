import React from "react";
import useChannel from "./hooks/useChannel";
import eventReducer from "./reducers/eventReducer";
import BroadcasterButton from "./BroadcasterButton";

const STATIC_MESSAGE = "Static message from broadcaster button";

const Channel = ({ channelName, setShowChannel }) => {
  const initialState = {
    message: "Nothing to see here yet"
  };

  const [state, broadcast, channelObject] = useChannel(
    `game:${channelName}`,
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
      <br />
      <div>Message: {state.message}</div>
      <div style={{ marginTop: 30 }}>
        <BroadcasterButton broadcast={broadcast} message={STATIC_MESSAGE} />
      </div>
      <div>
        <button onClick={leaveChannel}>Leave channel</button>
      </div>
    </div>
  );
};

export default Channel;
