import styled from "styled-components";

//DISPLAY STYLES
export const DisplayStyles = styled.div`
  min-width: 100%;
  margin: 10px 0px;
  display: grid;
  grid-template-rows: 2fr max-content;
`;

export const PuzzleStyles = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 100%;
  transform: translate(-50%, -50%);
  padding: 10px 0px 20px 0px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;
  .puzzle-navBar {
    display: grid;
    grid-template-columns: max-content 1fr max-content;
    width: 100%;
    margin: 0 auto;
    padding: 0px 10px;
    h2 {
      font-family: "Itim", monospace;
      font-size: 25px;
      font-weight: normal;
      text-align: center;
      @media (max-width: 600px) {
        font-size: 18px;
      }
    }
    span {
      flex: 1;
      color: #444;
      font-size: 13px;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
`;

export const Puzzle = styled.div`
  text-align: center;
  width: 60%;
  margin: 0 auto;
  border-radius: 5px;
  div {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0px 10px;
  }
`;

export const Blank = styled.span`
  min-height: 25px;
  min-width: 25px;
  margin: 3px;
  display: inline-block;
  color: White;
  font-size: 18px;
  font-weight: bold;
  border-bottom: 3px solid white;
`;

export const OptionStyles = styled.ul`
  display: flex;
  justify-content: space-around;
  width: 50%;
  margin: auto;
  align-items: center;
  padding: 10px 0px 0px 0px;

  li {
    height: 30px;
    width: 30px;
    border-radius: 50%;
    display: flex;
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

export const CatDisplayStyles = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 90%;
  margin: auto;
  text-align: center;
  display: none;
  ${(props) => (props.hide ? "display:none" : "display:block")};
  div {
    display: inline-block;
    color: white;
    background: #9231ff;
    padding: 6px 10px;
    margin: 10px;
    border-radius: 3px;
  }
`;

//KEYBOARD STYLES

//FOOTER STYLES
export const FooterStyles = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 10px 10px;
  span {
    margin: auto;
    color: rgba(255, 255, 255, 0.6);
    font-size: 12px;
    text-align: center;
  }
`;
