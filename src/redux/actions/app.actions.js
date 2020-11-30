export const alert = (type, message, show) => (dispatch) => {
  dispatch({
    type: "ALERT",
    payload: { type: type, message: message, show: show },
  });
};
