import React from "react";
// import { useDispatch, useSelector } from "react-redux";
import { useSelector } from "react-redux";
import styled from "styled-components";

const AlertStyle = styled.div`
  padding: 10px;
  background-color: ${(props) =>
    props.type === "fail"
      ? "#da3939"
      : props.type === "warning"
      ? "#de9b00"
      : props.type === "success"
      ? "#29d21d"
      : ""};
  position: absolute;
  left: 50%;
  top: 100%;
  font-size: 16px;
  transform: translate(-50%, 0%);
  top: 100%;
  color: #ffffff;
  font-weight: 500;
  transition: 150ms all linear;
  transform: translate(-50%, -125%);
  z-index: 100;
  border-radius: 5px;
  ${(props) =>
    props.show
      ? "transform: translate(-50%, -125%);transition:150ms all linear"
      : "transform: translate(-50%, 0%);transition:150ms all linear"}
`;

function Alert() {
  const { type, message, show} = useSelector(
    (state) => ({
      type: state.app.alert.type,
      message: state.app.alert.message,
      show: state.app.alert.show
    })
  );
  // const { type, message, show, wrongAttempts, currPuzzle } = useSelector(
  //   (state) => ({
  //     type: state.app.alert.type,
  //     message: state.app.alert.message,
  //     show: state.app.alert.show,
  //     wrongAttempts: state.game.wrongAttempts,
  //     currPuzzle: state.game.currentPuzzle,
  //   })
  // );

  // const dispatch = useDispatch();

  return (
    <AlertStyle type={type} show={show}>
      {message}
      {message === "Out of attempts"}
    </AlertStyle>
  );
}

export default Alert;
