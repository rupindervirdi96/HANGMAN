import React from "react";
import styled from "styled-components";
import Display from "./Display";
import Keyboard from "./Keyboard";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Sidebar from "./Sidebar";
import { useSelector } from "react-redux";
import WallOfFame from "./WallOfFame";
import { Clouds } from "./Clouds";

function Container(props) {
  const { app } = useSelector((state) => ({
    app: state.app,
  }));

  return (
    <ContainerStyles mode={app.mode}>
      <Overlay mode={app.mode} />
      <Sidebar />
      <Navbar />
      <Display />
      <Keyboard />
      <Footer />
      <WallOfFame />
      {/* <Clouds /> */}
    </ContainerStyles>
  );
}

const ContainerStyles = styled.div`
  height: 100vh;
  margin: auto;
  width: 700px;
  border-radius: 10px;
  display: grid;
  position: relative;
  z-index: 1;
  padding: 0px 10px;
  grid-template-rows: max-content 2fr 1fr;
  /* ${(props) =>
    props.mode === "light"
      ? "box-shadow: 0px 0px 8px 1px rgba(0, 0, 0, 0.1)"
      : "box-shadow: 0px 0px 8px 1px rgba(255, 255, 255, 0.1)"} */
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
  /* background-color: ${(props) => (props.mode === "light" ? "#a7a7a7" : "#000")}; */
`;

export default Container;
