const initialState = {
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
  correctGuess: [],
  questionCount: 0,
  
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
      };

    case "CORRECT_GUESS":
      return {
        ...state,
        questionCount: payload,
      };
    case "WRONG_GUESS":
      return {
        ...state,
        questionCount: payload,
      };

    default:
      return state;
  }
};

export default app;
