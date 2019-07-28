const eventReducer = (state, { event, payload }) => {
  switch (event) {
    case "phx_reply":
      return { ...state, message: payload.response.message || "Connection established" };
    case "ok":
      return { ...state, message: payload.response.message };
    default:
      return state;
  }
};

export default eventReducer;
