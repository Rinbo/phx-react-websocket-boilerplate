const eventReducer = (state, { event, payload }) => {
  switch (event) {    
    case "phx_reply":
      console.log(event)

      return {
        ...state,
        message: payload.response.message || "Connection established"
      };
    case "ok":
      return { ...state, message: payload.response.message };
    case "said_hello":
        console.log(event)
        console.log(payload, "payload")
        return { ...state, message: payload.message };
    default:
      return state;
  }
};

export default eventReducer;
