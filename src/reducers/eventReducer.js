const eventReducer = (state, { event, payload }) => {
  switch (event) {
    case "phx_reply":
      return { ...state, message: "Connection established..." };
    case "msg_received":
      return { ...state, message: payload };
    default:
      return state;
  }
};
