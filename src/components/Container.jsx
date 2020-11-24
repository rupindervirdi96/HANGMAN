import React from "react";
import styled from "styled-components";
import Display from "./Display";
import Keyboard from "./Keyboard";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Sidebar from "./Sidebar";
import ScoreBoard from "./Scoreboard";

function Container(props) {
  const type = () => {
    console.log("hello");
  };
  return (
    <ContainerStyles>
      <Overlay />
      <Sidebar />
      <Navbar />
      <Display />
      <Keyboard />
      <Footer />
      <ScoreBoard />
    </ContainerStyles>
  );
}

const ContainerStyles = styled.div`
  height: 80vh;
  margin: auto;
  width: 700px;
  border-radius: 10px;
  box-shadow: 0px 0px 8px 1px rgba(0, 0, 0, 0.4);
  background-color: #0091ff;
  display: grid;
  position: relative;
  z-index: 1;
  padding: 0px 10px;
  grid-template-rows: max-content 2fr 1fr;
  @media (max-width: 460px) {
    width: 400px;
  }
`;

const Overlay = styled.div`
  width: 100%;
  position: absolute;
  height: 100%;
  z-index: -1;
  border-radius: 10px;
  background-color: #0091ff;
`;

export default Container;
