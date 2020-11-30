import React from "react";
import styled from "styled-components";
import hintIcon from "../assets/hint.svg";
import scoreIcon from "../assets/score.png";
import darkModeIcon from "../assets/darkMode.svg";
import { useDispatch, useSelector } from "react-redux";
import Alert from "./Alert";
import { alert } from "../redux/actions/app.actions";

// Current Component
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
          <span>Question: {game.questionCount + 1}/10</span>
          <h2>
            {game.currCat ? game.currCat : "Select a category to begin.."}
          </h2>
          <span>Attempts left: {game.wrongAttempts}</span>
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

const CatDisplayStyles = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 90%;
  margin: auto;
  text-align: center;
  display: none;
  ${(props) => (props.hide ? "display:none" : "display:block")};
  div {
    display: inline-block;
    color: #ff8a31;
    background: white;
    padding: 6px 10px;
    margin: 10px;
    border-radius: 3px;
  }
`;

const DisplayStyles = styled.div`
  min-width: 100%;
  margin: 10px 0px;
  display: grid;
  grid-template-rows: 2fr max-content;
`;

const PuzzleStyles = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 100%;
  transform: translate(-50%, -50%);
  padding: 20px 0px;
  border-radius: 10px;
  margin: 10px 0px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px solid rgba(0, 0, 0, 0.1);
  position: relative;
  overflow: hidden;
  .puzzle-navBar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    margin: 0 auto;
    padding: 0px 10px;
    h2 {
      flex: 1;
      font-family: "Itim", monospace;
      font-size: 25px;
      font-weight: normal;
      text-align: center;
    }
    span {
      color: white;
      font-size: 12px;
    }
  }
`;

const Puzzle = styled.div`
  text-align: center;
  width: 60%;
  margin: auto;
  border-radius: 5px;
  div {
    display: inline-block;
    margin: 0px 10px;
  }
`;

const Blank = styled.span`
  height: 25px;
  width: 22px;
  margin: 3px;
  display: inline-block;
  color: White;
  font-size: 18px;
  font-weight: bold;
  padding: 2px;
  ${(props) =>
    props.text === " "
      ? "border:none"
      : "border-bottom: 2px solid rgba(255, 255, 255, 1)"}
`;

const OptionStyles = styled.ul`
  display: flex;
  justify-content: space-around;
  width: 50%;
  margin: auto;
  align-items: center;
  padding: 10px 0px 0px 0px;

  li {
    height: 30px;
    width: 30px;
    border-radius: 50%;
    display: flex;
    background-color: #fff;
    background-position: center;
    background-size: cover;
    transition: 100ms all linear;
    :nth-child(even) {
      height: 40px;
      width: 40px;
      img {
        height: 28px;
        width: 28px;
        margin: auto;
      }
    }
    :hover {
      background-color: #fff;
      transition: 100ms all linear;
      transform: scale(1.2);
    }
    img {
      height: 22px;
      width: 22px;
      margin: auto;
    }
  }
`;

export default Display;
