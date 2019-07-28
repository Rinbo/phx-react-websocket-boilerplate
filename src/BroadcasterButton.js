import React from "react";

const BroadcasterButton = ({broadcast, message}) => {
  
  return (
    <div>
      <button onClick={() => broadcast("hello", {message})}>Broadcast static message</button>
    </div>
  );
};

export default BroadcasterButton;
