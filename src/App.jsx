import React from "react";
import "./App.css";
import styled from "styled-components";
import Container from "./components/Container";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import WallOfFame from "./components/WallOfFame";

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
