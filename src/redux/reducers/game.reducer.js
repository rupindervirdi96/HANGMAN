const initialState = {
  categories: ["MOVIES", "TV_SERIES", "DAILY"],
  puzzles: [
    [
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
    [
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
    [
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
  ],
  currCat: "",
  currPuzzle: null,
  guessedLetters: [],
  correctGuess: [],
  score: 0,
};

const app = (state = initialState, { type, payload }) => {
  switch (type) {
    case "SET_CURR_CAT":
      return {
        ...state,
        currCat: payload.category,
        currPuzzles: state.puzzles[payload.i],
      };
    default:
      return state;
  }
};

export default app;
