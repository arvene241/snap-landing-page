import React, { useEffect, useState } from "react";
import { Companies, Content, Main } from "../styles/components/HeroStyle";
import hero_desktop from "../images/image-hero-desktop.png";
import hero_mobile from "../images/image-hero-mobile.png";
import { Container } from "../styles/GlobalStyle";
import Button from "./Button";
import company1 from '../images/client-databiz.svg';
import company2 from '../images/client-audiophile.svg';
import company3 from '../images/client-meet.svg';
import company4 from '../images/client-maker.svg';

export default function Hero() {
  const isDesktop = 1000;
  const [width, setWidth] = useState(window.innerWidth);
  const clients = [company1, company2, company3, company4]

  useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth);
    }
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [setWidth]);

  return (
    <Main>
      <img
        src={width >= isDesktop ? hero_desktop : hero_mobile}
        alt="desktop-image"
      />
      <Container>
        <Content>
          <h1>Make remote work</h1>
          <p>
            Get your team in sync, no matter your location. Streamline
            processes, create team rutuals, and watch productivity soar.
          </p>
          <Button content="learn more" type="background" />
          <Companies>
            {clients.map((client, index) => (
              <img src={client} alt="client" key={index} />
            ))}
          </Companies>
        </Content>
      </Container>
    </Main>
  );
}
