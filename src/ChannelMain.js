import React, { useState } from "react";
import Channel from "./Channel";

const ChannelMain = () => {
  const [channelName, setChannelName] = useState("");
  const [name, setName] = useState("");
  const [showChannel, setShowChannel] = useState(false);

  if (showChannel) {
    return (
      <Channel channelName={channelName} name={name} setShowChannel={setShowChannel} />
    );
  }
  return (
    <div className="myFlexCol">
      <label>Channel Name:</label>
      <input
        style={{ width: 200}}
        value={channelName}
        onChange={e => setChannelName(e.target.value)}
      />
      <label style={{ marginTop: 10 }}>Player Name:</label>
      <input
        style={{ width: 200}}
        value={name}
        onChange={e => setName(e.target.value)}
      />
      <button style={{ marginTop: 10 }} onClick={() => setShowChannel(true)}>
        Join
      </button>
    </div>
  );
};

export default ChannelMain;
