import React from "react";
import "./App.css";
import styled from "styled-components";
import Container from "./components/Container";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
// import { guess } from "./redux/actions/game.actions";
import { alert } from "./redux/actions/app.actions";
// import WallOfFame from "./components/WallOfFame";

function App() {
  const { app } = useSelector((state) => ({
    app: state.app,
  }));

  const dispatch = useDispatch();

  const {
    correctGuesses,
    reqNbGuesses,
    // currentPuzzle,
    // wrongAttempts,
    // guessedLetters,
    // currCat,
    begin,
  } = useSelector((state) => ({
    correctGuesses: state.game.correctGuesses,
    // currCat: state.game.currCat,
    reqNbGuesses: state.game.reqNbGuesses,
    // currentPuzzle: state.game.currentPuzzle,
    // wrongAttempts: state.game.wrongAttempts,
    // guessedLetters: state.game.guessedLetters,
    begin: state.app.begin,
  }));

  useEffect(() => {
    try {
      if (correctGuesses.length === reqNbGuesses && begin) {
        dispatch(alert("success", "Correct", true));
        setTimeout(() => {
          dispatch(alert("success", "Correct", false));
        }, 2000);
        setTimeout(() => {
          dispatch({
            type: "CORRECT_ANSWER",
            payload: "",
          });
        }, 1000);
      }
    } catch (error) {}
  }, [begin, dispatch, reqNbGuesses, correctGuesses]);

  return (
    <AppStyles mode={app.mode}>
      <Container />
      {/* <WallOfFame /> */}
    </AppStyles>
  );
}

const AppStyles = styled.div`
  position: relative;
  height: 100vh;
  width: 100%;
  display: flex;
  background-color: ${(props) =>
    props.mode === "bright" ? "#0091ff" : "#000"};
`;

export default App;
