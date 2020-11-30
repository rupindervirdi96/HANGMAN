import React from "react";
import styled from "styled-components";
import Display from "./Display";
import Keyboard from "./Keyboard";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Sidebar from "./Sidebar";
import ScoreBoard from "./Scoreboard";
import { useSelector } from "react-redux";

function Container(props) {
  const { app } = useSelector((state) => ({
    app: state.app,
  }));

  return (
    <ContainerStyles>
      <Overlay mode={app.mode} />
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
  height: 90vh;
  margin: auto;
  width: 700px;
  border-radius: 10px;
  box-shadow: 0px 0px 8px 1px rgba(0, 0, 0, 0.4);
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
  background-color: ${(props) =>
    props.mode === "bright" ? "#0091ff" : "#000000"};
`;

export default Container;
