export const selectCategory = (data) => (dispatch) => {
  dispatch({
    type: "SET_CURR_CAT",
    payload: data,
  });
};

//

export const guess = (
  key,
  correctGuesses,
  reqNbGuesses,
  currentPuzzle,
  wrongAttempts
) => (dispatch) => {
  if (!correctGuesses.includes(key)) {
    if (currentPuzzle.includes(key)) {
      dispatch({
        type: "CORRECT_GUESS",
        payload: { key: key },
      });
    } else {
      dispatch({
        type: "WRONG_GUESS",
        payload: { key: key },
      });
    }
  }
};
