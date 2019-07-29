import React from "react";

const BroadcasterButton = ({broadcast, message}) => {
  
  return (
    <div>
      <button onClick={() => broadcast("message", {message})}>Broadcast message</button>
    </div>
  );
};

export default BroadcasterButton;
