import React, { useEffect, useState } from "react";
import logo from "../images/logo.svg";
import hamburger from "../images/icon-menu.svg";
import close from "../images/icon-close-menu.svg";
import { Container } from "../styles/GlobalStyle";
import {
  Background,
  ButtonContainer,
  Left,
  Menu,
  Nav,
  Right,
} from "../styles/components/HeaderStyle";
import NavLinks from "./NavLinks";
import Button from "./Button";

export default function Header() {
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    if (toggle) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "unset";
    }

  }, [toggle])

  return (
    <Container>
      <Nav>
        <Left>
          <img src={logo} alt="logo" />
        </Left>
        <Menu onClick={() => setToggle(!toggle)}>
          {toggle ? (
            <img src={close} alt="close" />
          ) : (
            <img src={hamburger} alt="menu" />
          )}
        </Menu>
        <Background className={toggle ? 'open' : ''} />
        <Right className={toggle ? 'open' : ''}>
          <NavLinks />
          <ButtonContainer className={toggle ? 'open' : ''}>
            <Button content="login"/>
            <Button content="register" type="border" />
          </ButtonContainer>
        </Right>
      </Nav>
    </Container>
  );
}
