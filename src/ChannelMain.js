import React, { useState } from "react";
import Channel from "./Channel";

const ChannelMain = () => {
  const [channelName, setChannelName] = useState();
  const [showChannel, setShowChannel] = useState(false);

  if (showChannel) {
    return <Channel channelName={channelName} />;
  }
  return (
    <div className="myFlex">
      <input
        style={{ width: 200 }}
        value={channelName}
        onChange={e => setChannelName(e.target.value)}
      />
      <button onClick={() => setShowChannel(true)}>Join</button>
    </div>
  );
};

export default ChannelMain;
