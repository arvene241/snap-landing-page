import styled from "styled-components";

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 30px 0;
`;

export const Left = styled.div`
  img {
    cursor: pointer;
  }
`;

export const Right = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  padding-top: 20%;
  background-color: hsl(0, 0%, 98%);
  width: 60%;
  height: 100vh;
  transition: transform 0.3s;
  transform: translateX(100%);

  &.open {
    transform: translateX(0px);
    z-index: 4;

    li {
      display: block;
    }
  }

  @media (min-width: 1020px) {
    flex: 1;
    align-items: center;
    justify-content: space-between;
    height: auto;
    width: auto;
    transform: translateX(0px);
    flex-direction: row;
    position: relative;
    padding-top: 0;
  }
`;

export const ButtonContainer = styled.div`
  padding-top: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  display: none;

  &.open {
    display: flex;
  }

  .border {
    padding: 10px 70px;
    border: 2px solid hsl(0, 0%, 41%);
    border-radius: 15px;

    :hover, :active {
      border: 2px solid hsl(0, 0%, 8%);;
    }
  }

  @media (min-width: 1020px) {
    display: flex;
    flex-direction: row;
    padding-top: 0;
    gap: 33px;

    .border {
      padding: 10px 20px;
    }
  }
`;

export const Menu = styled.div`
  display: flex;
  cursor: pointer;
  z-index: 100;

  @media (min-width: 1020px) {
    display: none;
  }
`;

export const Background = styled.div`
  background-color: rgba(0, 0, 0, 0.3);
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 3;
  display: none;

  &.open {
    display: block;
  }

  @media (min-width: 1020px) {
    &.open {
      display: none;
    }
  }
`;
