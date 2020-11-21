import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";

function Keyboard(props) {
  const { keys } = useSelector((state) => ({ keys: state.app.keys }));

  const onKeyPress = () => {
    console.log("hello");
  };

  return (
    <KeyboardStyles onKeyDown={onKeyPress}>
      <div className="top">
        {keys.top.map((key, i) => {
          return (
            <div onClick={() => alert(key)} key={i} className="key">
              <span>{key}</span>
            </div>
          );
        })}
      </div>
      <div className="middle">
        {keys.middle.map((key, i) => {
          return (
            <div onClick={() => alert(key)} key={i} className="key">
              <span>{key}</span>
            </div>
          );
        })}
      </div>
      <div className="bottom">
        {keys.bottom.map((key, i) => {
          return (
            <div onClick={() => alert(key)} key={i} className="key">
              <span>{key}</span>
            </div>
          );
        })}
      </div>
    </KeyboardStyles>
  );
}

const KeyboardStyles = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  padding: 20px 0px;
  margin: 0 auto;
  justify-content: center;
  transition: 150ms all linear;
  border: 1px solid rgba(255, 255, 255, 0.7);
  border-radius: 5px;

  @media (max-width: 350px) {
    width: 300px;
    transition: 150ms all linear;
  }
  .top,
  .middle,
  .bottom {
    display: flex;
    justify-content: center;
    .key {
      height: 30px;
      width: 30px;
      display: flex;
      box-shadow: 0px 0px 2px 1px rgba(0, 0, 0, 0.4);
      margin: 5px;
      transition: 150ms all linear;
      border-radius: 2px;
      background-color: #ff8a31;
      :hover {
        transform: scale(1.1);
      }
      @media (max-width: 460px) {
        height: 20px;
        width: 20px;
        transition: 150ms all linear;
      }
      span {
        margin: auto;
        font-size: 14px;
        font-weight: bold;
      }
    }
  }
`;

export default Keyboard;
