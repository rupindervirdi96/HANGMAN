import React from "react";
import "./App.css";
import styled from "styled-components";
import Container from "./components/Container";
import { useEffect } from "react";
import { useSelector } from "react-redux";
// import Scoreboard from "./components/Scoreboard";

function App() {
  const { app } = useSelector((state) => ({
    app: state.app,
  }));

  useEffect(() => {
    document.querySelector(".keyboard").focus();
  }, []);

  return (
    <AppStyles mode={app.mode}>
      <Container />
      {/* <Scoreboard /> */}
    </AppStyles>
  );
}

const AppStyles = styled.div`
  position: relative;
  height: 100vh;
  width: 100%;
  display: flex;
  background-color: ${(props) =>
    props.mode === "bright" ? "#e9e9e9" : "#666666"};
`;

export default App;
