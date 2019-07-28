import React from "react";
import useChannel from "./hooks/useChannel";
import eventReducer from "./reducers/eventReducer";

const BroadcasterButton = ({broadcast, message}) => {
  
  return (
    <div>
      <button onClick={() => broadcast("event", message)}>Broadcast static message</button>
    </div>
  );
};

export default BroadcasterButton;
