import React from "react";
import "./App.css";
import styled from "styled-components";
import Container from "./components/Container";
import { useEffect } from "react";
// import Scoreboard from "./components/Scoreboard";

function App() {
  useEffect(() => {
    document.querySelector(".keyboard").focus();
  });

  return (
    <div
      style={{
        position: "relative",
        height: "100vh",
        width: "100%",
        display: "flex",
        backgroundColor: "rgb(242, 242, 242)",
      }}
    >
      <Container />
      {/* <Scoreboard /> */}
    </div>
  );
}

// const AppStyles = styled.div`
//   /* justify-content: */
// `;

export default App;
