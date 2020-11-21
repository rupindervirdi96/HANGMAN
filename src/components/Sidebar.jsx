import React from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";

function Sidebar(props) {
  const { app, game } = useSelector((state) => ({
    app: state.app,
    game: state.game,
  }));

  const dispatch = useDispatch();

  return (
    <SidebarStyles type={app.type}>
      <CategoryStyles type={app.type}>
        <h3>Categories</h3>
        <ul type="none">
          {game.categories.map((category, i) => (
            <li
              key={i}
              onClick={() => {
                dispatch({ type: "SET_CURR_CAT", payload: { category, i } });
                dispatch({ type: "TYPE_OF_MENU", payload: "" });
              }}
            >
              {category}
            </li>
          ))}
        </ul>
      </CategoryStyles>
      <RegisterStyles type={app.type}>
        <h3>Your Score: {game.score}</h3>
        <form action="">
          <input type="text" placeholder="your name here" />
          <input type="submit" value="ENTER" />
        </form>
      </RegisterStyles>
    </SidebarStyles>
  );
}

const SidebarStyles = styled.div`
  height: auto;
  position: absolute;
  width: 200px;
  background-color: #ff8a31;
  z-index: -10;
  border-radius: 5px;
  padding: 10px;
  ${(props) =>
    props.type === "cat"
      ? "left: 0%;transform:translateX(-100%);transition:150ms all linear;"
      : props.type === "register"
      ? "left:100%;transition:150ms all linear;"
      : "left:50%;transition:150ms all linear;opacity:0"};
`;

const CategoryStyles = styled.div`
  ${(props) => (props.type != "cat" ? "display:none" : "display:block")};
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
    :hover {
      transition: 150ms all linear;
      background-color: rgba(0, 0, 0, 0.2);
    }
  }
`;

const RegisterStyles = styled.div`
  ${(props) => (props.type != "register" ? "display:none" : "display:block")};
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
    background-color: #0091ff;
    color: white;
  }
`;

export default Sidebar;
