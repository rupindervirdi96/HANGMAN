import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { alert } from "../redux/actions/app.actions";

const AlertStyle = styled.div`
  padding: 10px;
  background-color: ${(props) =>
    props.type === "fail" ? "#da3939" : "#1fb645"};
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
  const { type, message, show, wrongAttempts } = useSelector((state) => ({
    type: state.app.alert.type,
    message: state.app.alert.message,
    show: state.app.alert.show,
    wrongAttempts: state.game.wrongAttempts,
  }));

  const dispatch = useDispatch();

  return (
    <AlertStyle type={type} show={show}>
      {message}
    </AlertStyle>
  );
}

export default Alert;
