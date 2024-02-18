import React from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { guess } from "../redux/actions/game.actions";
import { alert } from "../redux/actions/app.actions";
import { useEffect } from "react";

function Keyboard(props) {
  const { keys } = useSelector((state) => ({
    keys: state.app.keys,
  }));

  const {
    // correctGuesses,
    reqNbGuesses,
    currentPuzzle,
    wrongAttempts,
    guessedLetters,
    currCat,
    // begin,
  } = useSelector((state) => ({
    correctGuesses: state.game.correctGuesses,
    currCat: state.game.currCat,
    reqNbGuesses: state.game.reqNbGuesses,
    currentPuzzle: state.game.currentPuzzle,
    wrongAttempts: state.game.wrongAttempts,
    guessedLetters: state.game.guessedLetters,
    begin: state.app.begin,
  }));

  const dispatch = useDispatch();

  //for onscreen keyboard
  const onkeypress = async (key) => {
    if (currCat === "") {
      dispatch(alert("warning", "No category selected", "true"));
      setTimeout(() => {
        dispatch(alert("warning", "No category selected", false));
      }, 2000);
    } else if (wrongAttempts < 5) {
      await dispatch(
        guess(key, guessedLetters, reqNbGuesses, currentPuzzle, wrongAttempts)
      );
    } else {
      dispatch(alert("fail", "Out of attempts -> Next Question", true));
      setTimeout(() => {
        dispatch(alert("fail", "Out of attempts -> Next Question", false));
        dispatch({ type: "INCORRECT_ANSWER" });
      }, 2000);
    }
  };

  useEffect(() => {
    document.onkeydown = async (event) => {
      if (
        (event.keyCode > 64 && event.keyCode < 91) ||
        (event.keyCode > 96 && event.keyCode < 123)
      ) {
        if (currCat === "") {
          dispatch(alert("warning", "No category selected", "true"));
          setTimeout(() => {
            dispatch(alert("warning", "No category selected", false));
          }, 2000);
        } else if (wrongAttempts < 5) {
          await dispatch(
            guess(
              event.key.toUpperCase(),
              guessedLetters,
              reqNbGuesses,
              currentPuzzle,
              wrongAttempts
            )
          );
        }
      }
    };
  }, [
    dispatch,
    currCat,
    guessedLetters,
    reqNbGuesses,
    currentPuzzle,
    wrongAttempts,
  ]);

  useEffect(() => {
    if (wrongAttempts === 5) {
      dispatch(alert("fail", "Out of attempts -> Next Question", true));
      setTimeout(() => {
        dispatch(alert("fail", "Out of attempts -> Next Question", false));
        dispatch({ type: "INCORRECT_ANSWER" });
      }, 2000);
    }
  }, [wrongAttempts, dispatch]);

  return (
    <KeyboardStyles className="keyboard" tabIndex="0">
      <div className="top">
        {keys.top.map((key, i) => {
          return !guessedLetters.includes(key) ? (
            <button onClick={() => onkeypress(key)} key={i} className="key">
              <span>{key}</span>
            </button>
          ) : (
            <button style={{ backgroundColor: "grey" }} key={i} className="key">
              <span>{key}</span>
            </button>
          );
        })}
      </div>
      <div className="middle">
        {keys.middle.map((key, i) => {
          return !guessedLetters.includes(key) ? (
            <button onClick={() => onkeypress(key)} key={i} className="key">
              <span>{key}</span>
            </button>
          ) : (
            <button style={{ backgroundColor: "grey" }} key={i} className="key">
              <span>{key}</span>
            </button>
          );
        })}
      </div>
      <div className="bottom">
        {keys.bottom.map((key, i) => {
          return !guessedLetters.includes(key) ? (
            <button onClick={() => onkeypress(key)} key={i} className="key">
              <span>{key}</span>
            </button>
          ) : (
            <button style={{ backgroundColor: "grey" }} key={i} className="key">
              <span>{key}</span>
            </button>
          );
        })}
      </div>
    </KeyboardStyles>
  );
}

const KeyboardStyles = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 10px 0px;
  margin: 0 auto;
  justify-content: center;
  transition: 150ms all linear;
  outline: none;
  border: none;
  /* border: 1px solid rgba(0, 0, 0, 0.1); */
  border-radius: 5px;
  @media (max-width: 350px) {
    width: 300px;
    transition: 150ms all linear;
  }
  .top,
  .middle,
  .bottom {
    display: flex;
    justify-content: center;
    .key {
      height: 30px;
      width: 30px;
      display: flex;
      box-shadow: 0px 0px 2px 1px rgba(0, 0, 0, 0.4);
      margin: 5px;
      transition: 150ms all linear;
      border-radius: 2px;
      background-color: #9231ff;
      border: none;
      outline: none;
      :hover {
        transform: scale(1.1);
      }
      @media (max-width: 460px) {
        height: 25px;
        width: 25px;
        transition: 150ms all linear;
      }
      span {
        margin: auto;
        font-size: 14px;
        font-weight: bold;
        color: white;
      }
    }
  }
`;

export default Keyboard;
