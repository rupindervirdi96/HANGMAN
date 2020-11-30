const initialState = {
  title: "HANGMAN",
  puzzles: [
    {
      category: "MOVIES",
      questions: [
        "MATRIX",
        "WANTED",
        "LORD OF THE RINGS",
        "TRANSFORMERS",
        "THE SHAWSHANK REDEMPTION",
        "THE FORREST GUMP",
        "DUMB AND DUMBER",
        "PAPILLON",
        "CATCH ME IF YOU CAN",
        "THE HUNGER GAMES",
      ],
    },
    {
      category: "TV SERIES",
      questions: [
        "PEAKY BLINDERS",
        "LUCIFER",
        "EMILY IN PARIS",
        "FRIENDS",
        "TWO AND A HALF MEN",
        "STRANGER THINGS",
        "PUNISHER",
        "GOTHAM",
        "MONEY HEIST",
        "MIRZAPUR",
      ],
    },
    {
      category: "DAILY",
      questions: [
        "TOOTHPASTE",
        "SUNLIGHT",
        "MOBILE PHONE",
        "MILK",
        "BEDROOM",
        "GROCERY",
        "KEYS",
        "REFRIGERATOR",
        "METRO",
        "LAPTOP",
      ],
    },
  ],
  currCat: "",
  questions: [],
  guessedLetters: [],
  correctGuesses: [],
  questionCount: 0,
  wrongAttempts: 0,
  currentPuzzle: "",
  reqNbGuesses: 0,
  score: 0,
};
const app = (state = initialState, { type, payload }) => {
  switch (type) {
    case "SET_CURR_CAT":
      return {
        ...state,
        currCat: payload.category,
        questions: payload.questions,
        questionCount: 0,
        currentPuzzle: payload.questions[0],
        reqNbGuesses: payload.questions[0]
          .replace(" ", "")
          .split("")
          .filter(function (item, pos, self) {
            return self.indexOf(item) == pos;
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
      };
    // case "INCORRECT_ANSWER":
    //   return {
    //     ...state,
    //     wrongAttempts: state.wrongAttempts - 1,
    //   };
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
