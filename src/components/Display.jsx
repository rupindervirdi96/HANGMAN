import React from "react";
import hintIcon from "../assets/hint.svg";
import scoreIcon from "../assets/score.png";
import darkModeIcon from "../assets/darkMode.svg";
import { useDispatch, useSelector } from "react-redux";
import Alert from "./Alert";
import { alert } from "../redux/actions/app.actions";
import {
  DisplayStyles,
  PuzzleStyles,
  CatDisplayStyles,
  Puzzle,
  Blank,
  OptionStyles,
} from "../styles";

function Display() {
  const { game, app, currentPuzzle, correctGuesses } = useSelector((state) => ({
    game: state.game,
    app: state.app,
    currentPuzzle: state.game.currentPuzzle,
    correctGuesses: state.game.correctGuesses,
  }));

  const dispatch = useDispatch();

  return (
    <DisplayStyles>
      <PuzzleStyles>
        <Alert />
        <div className="puzzle-navBar">
          <span>
            Question: <span>{game.questionCount + 1}</span>/
            {game.questions.length}
          </span>
          <h2>
            {game.currCat ? game.currCat : "Select a category to begin.."}
          </h2>
          <span style={{ textAlign: "right" }}>
            Wrong Attempts: <span>{game.wrongAttempts}</span>
            /7
          </span>
        </div>
        <div
          style={{
            position: "relative",
            margin: "auto",
            width: "90%",
          }}
        >
          <CatDisplayStyles hide={app.begin}>
            {game.puzzles.map((puzzle) => {
              return (
                <div
                  onClick={() => {
                    dispatch({
                      type: "SET_CURR_CAT",
                      payload: puzzle,
                    });
                    dispatch({
                      type: "BEGIN_GAME",
                      payload: true,
                    });
                  }}
                >
                  {puzzle.category}
                </div>
              );
            })}
          </CatDisplayStyles>
          <Puzzle hide={app.begin}>
            {currentPuzzle
              ?.trim()
              .split(" ")
              .map((blank) => {
                return (
                  <div>
                    {blank.split("").map((x, i) => {
                      return (
                        <Blank key={i} text={blank.toUpperCase()}>
                          {correctGuesses.includes(x) ? x : null}
                        </Blank>
                      );
                    })}
                  </div>
                );
              })}
          </Puzzle>
        </div>
      </PuzzleStyles>
      <OptionStyles>
        <li>
          <img src={hintIcon} alt="" />
        </li>
        <li>
          <img
            src={scoreIcon}
            alt=""
            onClick={() => {
              if (game.wrongAttempts > 0) {
                dispatch({
                  type: "CORRECT_GUESS",
                });
              }
              if (game.wrongAttempts === 1) {
                dispatch(alert("fail", "out of attempts", true));
                setTimeout(() => {
                  dispatch(alert("fail", "out of attempts", false));
                }, 2000);
              }
            }}
          />
        </li>
        <li>
          <img
            src={darkModeIcon}
            alt=""
            onClick={() => dispatch({ type: "APP_MODE" })}
          />
        </li>
      </OptionStyles>
    </DisplayStyles>
  );
}

export default Display;
