import React from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
// import Display from "./Display";

const breakpoints = {
  xs: "320px",
  sm: "640px",
  md: "768px",
  lg: "1024px",
  xl: "1280px",
  "2xl": "1536px",
};

export const devices = {
  xs: `(max-width: ${breakpoints.xs})`,
  sm: `(max-width: ${breakpoints.sm})`,
  md: `(max-width: ${breakpoints.md})`,
  lg: `(max-width: ${breakpoints.lg})`,
  xl: `(max-width: ${breakpoints.xl})`,
  "2xl": `(max-width: ${breakpoints["2xl"]})`,
};

function Sidebar(props) {
  const { app, game } = useSelector((state) => ({
    app: state.app,
    game: state.game,
  }));

  const dispatch = useDispatch();

  return (
    <SidebarStyles type={app.type}>
      <CategoryStyles type={app.type} isContentEditable="true" onBlur={()=>alert("hello")}>
        <h3>Categories</h3>
        <ul type="none">
          {game.puzzles.map((puzzle, i) => (
            <li
              key={i}
              onClick={() => {
                dispatch({
                  type: "SET_CURR_CAT",
                  payload: puzzle,
                });
                dispatch({ type: "TYPE_OF_MENU", payload: "" });
                dispatch({ type: "BEGIN_GAME", payload: true });
              }}
            >
              {puzzle.category}
            </li>
          ))}
        </ul>
      </CategoryStyles>
      <RegisterStyles type={app.type}>
        <h3>Your Score: {game.score}</h3>
        <form action="">
          <input type="text" placeholder="Work in progress" />
          <input type="submit" value="Enter" />
        </form>
      </RegisterStyles>
    </SidebarStyles>
  );
}

const SidebarStyles = styled.div`
  height: auto;
  position: absolute;
  width: 100%;
  z-index: 1;
  border-radius: 5px;
  display: flex;
  justify-content: space-between;
  opacity: 1;
  /* @media only screen and ${devices.sm} {
    z-index: 1;
    opacity: 1;
  } */
`;

const CategoryStyles = styled.div`
  width: 200px;
  padding: 10px;
  background-color: #9231ff;
  border-radius: 10px;
  position: absolute;
  top: 0%;
  left: 50%;
  transform: translate(-100%, -100%);
  z-index: 1000;
  opacity: 0;
  ${(props) =>
    props.type === "cat"
      ? "transform:translate(-50%,0%); opacity:1"
      : "transform:translate(-50%,-100%); opacity: 0;"};
  transition: all 150ms ease-in;
  h3 {
    color: #fff;
    padding: 12px 0px 13px 0px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  }
  ul {
    padding: 10px 0px 0px 0px;
  }
  ul li {
    padding: 5px;
    border-radius: 3px;
    transition: 150ms all linear;
    font-size: 14px;
    color: white;
    :hover {
      transition: 150ms all linear;
      background-color: rgba(0, 0, 0, 0.2);
    }
  }
`;

const RegisterStyles = styled.div`
  width: 200px;
  padding: 10px;
  height: auto;
  border-radius: 10px;
  background-color: #9231ff;
  position: absolute;
  top: 30%;
  left: 50%;
  transform: translate(-100%, -100%);
  z-index: 1;
  opacity: 0;
  ${(props) =>
    props.type === "reg"
      ? "transform:translate(-50%,0%); opacity:1"
      : "transform:translate(-50%,-100%); opacity: 0;"};
  transition: all 150ms ease-in;
  h3 {
    color: #fff;
    padding: 12px 0px 12px 0px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  }
  input {
    padding: 10px;
    border-radius: 3px;
    border: 1px solid rgba(0, 0, 0, 0.1);
    outline: none;
    color: black;
    margin: 10px 0;
  }
  input[type="submit"] {
    margin: 0px;
    padding: 5px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    background-color: #000;
    color: white;
  }
`;

export default Sidebar;
