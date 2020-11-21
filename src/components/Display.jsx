import React from "react";
import styled from "styled-components";
import hintIcon from "../assets/hint.svg";
import scoreIcon from "../assets/score.png";
import darkModeIcon from "../assets/darkMode.svg";
import { useSelector } from "react-redux";
import Alert from "./Alert";

// Current Component
function Display() {
  const { game } = useSelector((state) => ({
    game: state.game,
  }));

  return (
    <DisplayStyles>
      <PuzzleStyles>
        <Alert />
        <div className="puzzle-navBar">
          <span>Question: 1/10</span>
          <h2>
            {game.currCat.cat ? game.currCat : "Select a category to begin.."}
          </h2>
          <span>Attempts left: 7</span>
        </div>
        <Puzzle>
          {/* {puzzle[0]
            .trim()
            .split("")
            .map((blank, i) => {
              return (
                <Blank key={i} text={blank.toUpperCase()}>
                  {blank.toUpperCase()}
                </Blank>
              );
            })} */}
        </Puzzle>
      </PuzzleStyles>
      <OptionStyles>
        <li>
          <img src={hintIcon} alt="" />
        </li>
        <li>
          <img src={scoreIcon} alt="" />
        </li>
        <li>
          <img src={darkModeIcon} alt="" />
        </li>
      </OptionStyles>
    </DisplayStyles>
  );
}
const DisplayStyles = styled.div`
  max-width: 100%;
  padding: 0px 10px;
  margin: 10px 0px;
  display: grid;
  /* background-color: #0091ff; */
  grid-template-rows: 2fr max-content;
`;

const PuzzleStyles = styled.div`
  padding: 20px 0px;
  border-radius: 10px;
  margin: 10px 0px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px solid rgba(255, 255, 255, 0.7);
  position: relative;
  overflow: hidden;
  .puzzle-navBar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    margin: 0 auto;
    padding: 0px 10px;
    h2 {
      flex: 1;
      font-family: "Itim", monospace;
      font-size: 25px;
      font-weight: normal;
      text-align: center;
    }
    span {
      color: white;
      font-size: 12px;
    }
  }
`;

const Puzzle = styled.div`
  text-align: center;
  width: 60%;
  margin: auto;
  border-radius: 5px;
`;

const Blank = styled.span`
  height: 25px;
  width: 22px;
  margin: 3px;
  display: inline-block;
  color: White;
  font-size: 18px;
  font-weight: bold;
  padding: 2px;
  ${(props) =>
    props.text === " "
      ? "border:none"
      : "border-bottom: 2px solid rgba(255, 255, 255, 1)"}
`;

const OptionStyles = styled.ul`
  display: flex;
  justify-content: space-around;
  width: 50%;
  margin: auto;
  align-items: center;

  li {
    height: 30px;
    width: 30px;
    border-radius: 50%;
    display: flex;
    background-color: #fff;
    background-position: center;
    background-size: cover;
    transition: 100ms all linear;
    :nth-child(even) {
      height: 40px;
      width: 40px;
      img {
        height: 28px;
        width: 28px;
        margin: auto;
      }
    }
    :hover {
      background-color: #fff;
      transition: 100ms all linear;
      transform: scale(1.2);
    }
    img {
      height: 22px;
      width: 22px;
      margin: auto;
    }
  }
`;

export default Display;
