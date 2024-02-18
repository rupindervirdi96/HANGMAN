import React from "react";
import { FooterStyles } from "../styles";
function Footer(props) {
  return (
    <FooterStyles>
      <span>© {new Date().getFullYear()} rupindervirdi. All rights reserved.</span>
    </FooterStyles>
  );
}

export default Footer;
