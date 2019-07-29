const eventReducer = (state, { event, payload }) => {
  switch (event) {    
    case "phx_reply":
      return {
        ...state,
        message: payload.response.message || "Connection established"
      };
    case "ok":
      return { ...state, message: payload.response.message };
    case "broadcast":
        return { ...state, message: payload.message };
    default:
      return state;
  }
};

export default eventReducer;
