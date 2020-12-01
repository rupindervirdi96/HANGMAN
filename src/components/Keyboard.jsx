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
    correctGuesses,
    reqNbGuesses,
    currentPuzzle,
    wrongAttempts,
    guessedLetters,
  } = useSelector((state) => ({
    correctGuesses: state.game.correctGuesses,
    reqNbGuesses: state.game.reqNbGuesses,
    currentPuzzle: state.game.currentPuzzle,
    wrongAttempts: state.game.wrongAttempts,
    guessedLetters: state.game.guessedLetters,
  }));

  const dispatch = useDispatch();

  const onkeypress = async (key) => {
    await dispatch(
      guess(key, correctGuesses, reqNbGuesses, currentPuzzle, wrongAttempts)
    );

    if (wrongAttempts === 6) {
      dispatch(alert("fail", "U R DEAD", true));
      setTimeout(() => {
        dispatch(alert("fail", "U R DEAD", false));
      }, 2000);
    }
  };

  useEffect(() => {
    try {
      if (correctGuesses.length === reqNbGuesses) {
        dispatch({
          type: "CORRECT_ANSWER",
          payload: "",
        });
      }
    } catch (error) {}
  }, [correctGuesses]);

  return (
    <KeyboardStyles className="keyboard" onKeyDown={onkeypress} tabIndex="0">
      <div className="top">
        {keys.top.map((key, i) => {
          return (
            <button onClick={() => onkeypress(key)} key={i} className="key">
              <span>{key}</span>
            </button>
          );
        })}
      </div>
      <div className="middle">
        {keys.middle.map((key, i) => {
          return (
            <button onClick={() => onkeypress(key)} key={i} className="key">
              <span>{key}</span>
            </button>
          );
        })}
      </div>
      <div className="bottom">
        {keys.bottom.map((key, i) => {
          return (
            <button onClick={() => onkeypress(key)} key={i} className="key">
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
      background-color: #ff8a31;
      border: none;
      outline: none;
      :hover {
        transform: scale(1.1);
      }
      @media (max-width: 460px) {
        height: 20px;
        width: 20px;
        transition: 150ms all linear;
      }
      span {
        margin: auto;
        font-size: 14px;
        font-weight: bold;
      }
    }
  }
`;

export default Keyboard;
