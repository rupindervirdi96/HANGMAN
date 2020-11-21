import { combineReducers } from "redux";
import game from "./game.reducer";
import app from "./app.reducer";

export default combineReducers({
  app,
  game,
});
