export const selectCategory = (data) => (dispatch) => {
  dispatch({
    type: "SET_CURR_CAT",
    payload: data,
  });
};

//

export const guess = (
  key,
  guessedLetters,
  reqNbGuesses,
  currentPuzzle,
  wrongAttempts
) => (dispatch) => {
  if (!guessedLetters.includes(key)) {
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
