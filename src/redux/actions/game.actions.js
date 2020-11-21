export const selectCategory = (data) => (dispatch) => {
  dispatch({
    type: "SET_CURR_CAT",
    data: data,
  });
};
