import { useContext, useReducer, useEffect, useState } from "react";
import SocketContext from "../socket/SocketContext";

const useChannel = (channelTopic, name, reducer, initialState) => {
  const socket = useContext(SocketContext);
  const [state, dispatch] = useReducer(reducer, initialState);
  const [broadcast, setBroadcast] = useState(mustJoinChannelWarning);
  const [channelObject, setChannelObject] = useState(null);

  // eslint-disable-next-line
  useEffect(() => joinChannel(socket, channelTopic, name, dispatch, setBroadcast, setChannelObject), [
    channelTopic
  ]);

  return [state, broadcast, channelObject];
};

const joinChannel = (socket, channelTopic, name, dispatch, setBroadcast, setChannelObject) => {
  const channel = socket.channel(channelTopic, {
    screen_name: name
  });
  channel.onMessage = (event, payload) => {
    dispatch({ event, payload });
    return payload;
  };

  channel
    .join()
    .receive("ok", ({ messages }) =>
      console.log("successfully joined channel", messages || "")
    )
    .receive("error", ({ reason }) =>
      console.error("failed to join channel", reason)
    );

  setChannelObject(channel)
  setBroadcast(() => channel.push.bind(channel));
  return () => {
    channel.leave();
  };
};

const mustJoinChannelWarning = () => () =>
  console.error(
    `useChannel broadcast function cannot be invoked before the channel has been joined`
  );

export default useChannel;
