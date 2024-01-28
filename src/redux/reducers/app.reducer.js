const initialState = {
  type: "",
  keys: {
    top: ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"],
    middle: ["A", "S", "D", "F", "G", "H", "J", "K", "L"],
    bottom: ["Z", "X", "C", "V", "B", "N", "M"],
  },
  begin: false,
  mode: "bright",
  alert: {
    type: "",
    message: "",
    show: false,
  },
};

const app = (state = initialState, { type, payload }) => {
  switch (type) {
    case "TYPE_OF_MENU":
      return {
        ...state,
        type: payload,
      };
    case "BEGIN_GAME":
      return { ...state, begin: payload };
    case "APP_MODE":
      if (state.mode === "bright") {
        return { ...state, mode: "dark" };
      } else {
        return { ...state, mode: "bright" };
      }
    case "ALERT":
      return {
        ...state,
        alert: {
          type: payload.type,
          message: payload.message,
          show: payload.show,
        },
      };

    default:
      return state;
  }
};

export default app;