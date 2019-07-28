import React from "react";
import SocketProvider from "./socket/SocketProvider";
import ChannelMain from "./ChannelMain";
import "./css/app.css";

const App = () => {
  return (
    <SocketProvider wsUrl="ws://localhost:4000/socket" options={{}}>
      <ChannelMain />
    </SocketProvider>
  );
};

export default App;
