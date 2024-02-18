import React, { useEffect } from "react";
import styled from "styled-components";

const CubeStyles = styled.div`
  width: 100%;
  height: 100vh;
  position: absolute;
  z-index: 0;
  .cubes {
    position: absolute;
    z-index: 100;
    display: flex;
    height: 100%;
    width: 100%;
  }
  .cubes .cube-one,
  .cubes .cube-two,
  .cubes .cube-three,
  .cubes .cube-four,
  .cubes .cube-five {
    position: absolute;
    transition: all 1000ms ease;
    border-radius: 10px;
  }
  .cubes .cube-one {
    top: ${(props) => `${props.position.top + 4}%`};
    left: ${(props) => `${props.position.left}%`};
    animation: move-three 2s linear infinite;
  }
  .cubes .cube-two {
    top: ${(props) => `${props.position.top + 5}%`};
    left: ${(props) => `${props.position.left - 2}%`};
    animation: move-two 2s linear infinite;
  }
  .cubes .cube-three {
    top: ${(props) => `${props.position.top + 1}%`};
    left: ${(props) => `${props.position.left + 2}%`};
    animation: move-one 2s linear infinite;
  }
  .cubes .cube-four {
    top: ${(props) => `${props.position.top + 8}%`};
    left: ${(props) => `${props.position.left + 4}%`};
    animation: move-one 2s linear infinite;
  }
  .cubes .cube-five {
    top: ${(props) => `${props.position.top + 2}%`};
    left: ${(props) => `${props.position.left + 8}%`};
    animation: move-one 2s linear infinite;
  }

  .color-primary .cube-one {
    background-color: hsl(300, 100%, 20%);
    z-index: 1;
  }

  .color-primary .cube-two {
    background-color: hsl(300, 100%, 30%);
  }

  .color-primary .cube-three {
    background-color: hsl(300, 100%, 40%);
  }

  .color-primary .cube-four {
    background-color: hsl(300, 100%, 50%);
  }

  .color-primary .cube-five {
    background-color: hsl(300, 100%, 70%);
  }

  .medium .cube-one,
  .medium .cube-two,
  .medium .cube-three,
  .medium .cube-four,
  .medium .cube-five {
    height: 200px;
    width: 200px;
  }

  .small .cube-one,
  .small .cube-two,
  .small .cube-three,
  .small .cube-four,
  .small .cube-five {
    height: 100px;
    width: 100px;
  }

  .large .cube-one,
  .large .cube-two,
  .large .cube-three .large .cube-four .large .cube-five {
    height: 400px;
    width: 400px;
  }

  @keyframes move-one {
    0%,
    100% {
      transition: all 100ms ease;
      transform: translate(0%, 0%);
    }
    50% {
      transition: all 100ms ease;
      transform: translate(2%, 2%);
    }
  }

  @keyframes move-two {
    0%,
    100% {
      transition: all 100ms ease;
      transform: translate(0%, 0%);
    }
    50% {
      transition: all 100ms ease;
      transform: translate(-2%, -2%);
    }
  }

  @keyframes move-three {
    0%,
    100% {
      transition: all 100ms ease;
      transform: translate(0%, 0%);
    }
    50% {
      transition: all 100ms ease;
      transform: translate(4%, -2%);
    }
  }
`;

export const Clouds = ({ position , size  }) => {
  useEffect(() => console.log(position), [position]);
  return (
    <CubeStyles position={{ top: position?.top, left: position?.left }}>
      <div className={`color-primary ${size} cubes`}>
        <div className="cube-one"></div>
        <div className="cube-two"></div>
        <div className="cube-three"></div>
        <div className="cube-four"></div>
        <div className="cube-five"></div>
      </div>
    </CubeStyles>
  );
};
