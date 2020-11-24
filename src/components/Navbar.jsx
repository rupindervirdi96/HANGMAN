import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";

function Navbar() {
  const { app } = useSelector((state) => ({
    app: state.app,
  }));

  const dispatch = useDispatch();

  return (
    <NavbarStyles>
      <button
        onClick={() => {
          if (app.type === "cat") {
            dispatch({ type: "TYPE_OF_MENU", payload: "" });
          } else {
            dispatch({ type: "TYPE_OF_MENU", payload: "cat" });
          }
        }}
      >
        CHANGE CATEGORY
      </button>
      <h1>HANGMAN</h1>
      <button
        onClick={() => {
          if (app.type === "register") {
            dispatch({ type: "TYPE_OF_MENU", payload: "" });
          } else {
            dispatch({ type: "TYPE_OF_MENU", payload: "register" });
          }
        }}
      >
        REGISTER SCORE
      </button>
    </NavbarStyles>
  );
}
const NavbarStyles = styled.div`
  display: grid;
  grid-template-columns: max-content 1fr max-content;
  align-items: center;
  justify-content: space-between;
  padding: 10px 0px;
  position: relative;
  border-radius: 5px 5px 0px 0px;
  z-index: 1;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  button {
    padding: 10px;
    font-size: 12px;
    color: #fff;
    background-color: #ff8a31;
    border: none;
    border-radius: 2px;
    transition: 100ms all linear;
    outline: none;
    :hover {
      box-shadow: 0px 0px 2px 1px rgba(0, 0, 0, 0.3);
      transition: 100ms all linear;
    }
    @media (max-width: 460px) {
      padding: 6px;
      font-size: 8px;
    }
  }
  h1 {
    text-align: center;
    display: inline;
    color: white;
    font-family: "Roboto", monospace;
    letter-spacing: 5px;
    @media (max-width: 460px) {
      font-size: 16px;
    }
  }
`;

const CategoryStyles = styled.div`
  position: absolute;
  width: 200px;
  background-color: #fdfdfd;
  z-index: -1;
  overflow: hidden;
  top: 100%;
  ${(props) =>
    props.hide
      ? "height: 0;padding: 0;border: none;opacity:0; transition: 150ms all linear;"
      : "transition: 150ms all linear;  padding: 10px 10px 0px 10px;  border: 1px solid rgba(0, 0, 0, 0.1);"};
  border-radius: 5px;
  transition: 150ms all linear;

  h3 {
    color: #0099ac;
    padding: 12px 0px 13px 0px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  }
  ul {
    padding: 10px 0px;
  }
  ul li {
    padding: 5px;
    border-radius: 3px;
    transition: 150ms all linear;
    font-size: 14px;
    :hover {
      transition: 150ms all linear;
      background-color: rgba(0, 0, 0, 0.2);
    }
  }
`;

const RegisterStyles = styled.div`
  position: absolute;
  width: 200px;
  background-color: #fdfdfd;
  z-index: -1;
  overflow: hidden;
  top: 100%;
  left: 100%;
  transform: translateX(-100%);
  ${(props) =>
    props.hide
      ? "height: 0;padding: 0;border: none;transition: 150ms all linear;"
      : "transition: 150ms all linear;padding: 10px;border: 1px solid rgba(0, 0, 0, 0.1);"};
  border-radius: 5px;
  h3 {
    color: #0099ac;
    padding: 12px 0px 13px 0px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  }
  input {
    padding: 10px;
    border-radius: 3px;
    border: 1px solid rgba(0, 0, 0, 0.1);
    outline: none;
    margin: 10px 0;
  }
  input[type="submit"] {
    margin: 0px;
    padding: 5px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    background-color: #fff;
    color: #2d2d2d;
  }
`;

export default Navbar;

// dispatch({ type: "HIDE_CAT", payload: true });
