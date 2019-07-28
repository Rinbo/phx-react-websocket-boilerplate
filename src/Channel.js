import React from "react";
import useChannel from "./hooks/useChannel";
import eventReducer from "./reducers/eventReducer";
import BroadcasterButton from "./BroadcasterButton";

const STATIC_MESSAGE = "Static message from broadcaster button";

const Channel = ({ channelName }) => {
  const initialState = {
    message: "Nothing to see here yet"
  };

  const [state, broadcast] = useChannel(
    `game:${channelName}`,
    eventReducer,
    initialState
  );

  return (
    <div className="myFlexCol">
      <div>This is da channel: {channelName}</div>
      <br />
      <div>Message: {state.message}</div>
      <div style={{ marginTop: 30 }}>
        <BroadcasterButton broadcast={broadcast} message={STATIC_MESSAGE} />
      </div>
    </div>
  );
};

export default Channel;
