import { gameState } from "./constants";

const initialState = { ...gameState };

const app = (state = initialState, { type, payload }) => {
  switch (type) {
    case "SET_CURR_CAT":
      return {
        ...state,
        currCat: payload.category,
        questions: payload.questions,
        questionCount: 0,
        currentPuzzle: payload.questions[0],
        correctGuesses: [],
        guessedLetters: [],
        wrongAttempts: 0,
        reqNbGuesses: payload.questions[0]
          .replace(" ", "")
          .split("")
          .filter(function (item, pos, self) {
            return self.indexOf(item) === pos;
          }).length,
      };
    case "CORRECT_GUESS":
      return {
        ...state,
        correctGuesses: state.correctGuesses.concat(payload.key),
        guessedLetters: state.guessedLetters.concat(payload.key),
      };
    case "WRONG_GUESS":
      return {
        ...state,
        guessedLetters: state.guessedLetters.concat(payload.key),
        wrongAttempts: state.wrongAttempts + 1,
      };
    case "CORRECT_ANSWER":
      return {
        ...state,
        questionCount: state.questionCount + 1,
        currentPuzzle: state.questions[state.questionCount + 1],
        correctGuesses: [],
        guessedLetters: [],
        wrongAttempts: 0,
        reqNbGuesses: state.questions[state.questionCount + 1]
          .replace(" ", "")
          .split("")
          .filter((x) => x !== " ")
          .filter(function (item, pos, self) {
            return self.indexOf(item) === pos && item !== " ";
          }).length,
      };
    case "INCORRECT_ANSWER":
      return {
        ...state,
        questionCount: state.questionCount + 1,
        currentPuzzle: state.questions[state.questionCount + 1],
        correctGuesses: [],
        guessedLetters: [],
        wrongAttempts: 0,
        reqNbGuesses: state.questions[state.questionCount + 1]
          .replace(" ", "")
          .split("")
          .filter((x) => x !== " ")
          .filter(function (item, pos, self) {
            return self.indexOf(item) === pos && item !== " ";
          }).length,
      };
    case "FINISH_GAME":
      return {
        ...state,
        wrongAttempts: state.wrongAttempts - 1,
      };

    default:
      return state;
  }
};

export default app;
