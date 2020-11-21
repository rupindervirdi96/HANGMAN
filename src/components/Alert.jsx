import React from "react";
import styled from "styled-components";

const AlertStyle = styled.div`
  padding: 10px;
  background-color: #ff8a31;
  position: absolute;
  left: 50%;
  top: 100%;
  font-size: 16px;
  transform: translate(-50%, 0%);
  top: 100%;
  color: #fff;
  transition: 150ms all linear;
  ${(props) => {
    // if (props.show) {
    //     setTimeout(()=>{
    //         return "transform: translate(-50%, -125%);transition:150ms all linear";
    //     })
    // } else {
    //   return "transform: translate(-50%, 0%);transition:150ms all linear";
    // }
  }}
`;

function Alert({ type, message, show }) {
  return (
    <AlertStyle type={type} show={show}>
      {message}
    </AlertStyle>
  );
}

export default Alert;
