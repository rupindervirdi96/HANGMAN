import React from "react";
import "./App.css";
import styled from "styled-components";
import Container from "./components/Container";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { alert } from "./redux/actions/app.actions";
import { Clouds } from "./components/Clouds";

function App() {
  const { app } = useSelector((state) => ({
    app: state.app,
  }));

  const dispatch = useDispatch();

  const {
    correctGuesses,
    reqNbGuesses,
    begin,
  } = useSelector((state) => ({
    correctGuesses: state.game.correctGuesses,
    reqNbGuesses: state.game.reqNbGuesses,
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
      <Clouds position={{ top: 15, left: 5 }} size={"small"} />
      <Clouds position={{ top: 40, left: 85 }} size={"medium"} />
      <Clouds position={{ top: 80, left: 10 }} size={"small"} />
    </AppStyles>
  );
}

const AppStyles = styled.div`
  position: relative;
  height: 100vh;
  width: 100%;
  display: flex;
  overflow: hidden;
  background-color: ${(props) => (props.mode === "light" ? "#a7a7a7" : "#000")};
  *{
    color: ${(props) => (props.mode === "light" ? "#000" : "#ddd !important")};
  }
`;

export default App;
