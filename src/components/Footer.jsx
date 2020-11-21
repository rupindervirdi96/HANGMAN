import React from "react";
import styled from "styled-components";

function Footer(props) {
  return (
    <FooterStyles>
      <span>© 2020 rupindervirdi. All rights reserved.</span>
    </FooterStyles>
  );
}

const FooterStyles = styled.div`
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
export default Footer;
