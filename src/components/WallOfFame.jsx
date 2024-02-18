import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

const WallOfFameStyles = styled.div`
  position: absolute;
  box-sizing: border-box;
  max-height: 250px;
  width: 100%;
  top: 100%;
  border: 5px solid black;
  background-color: #fff;
  overflow-y: scroll;
  ${(props) =>
    props.showScoreCard
      ? "transform: translateY(-100%)"
      : "transform: translateY(0%)"};
  transition: all 200ms linear;
  * {
    color: black !important;
  }
`;

const WallOfFame = () => {
  const { showScoreCard } = useSelector((state) => ({
    showScoreCard: state.game.showScore,
  }));

  return (
    <WallOfFameStyles showScoreCard={showScoreCard}>
      <h4>WALL OF FAME</h4>
      <ul>
        <li>Work In Progress</li>
        <li>Work In Progress</li>
      </ul>
    </WallOfFameStyles>
  );
};

export default WallOfFame;
