import styled from "styled-components";

export const NavMenu = styled.ul`
  padding-left: 50px;
  flex-direction: column;
  list-style: none;
  gap: 20px;
  display: flex;

  @media (min-width: 1020px) {
    gap: 33px;
    flex-direction: row;
  }
`;

export const NavItem = styled.li`
  text-transform: capitalize;
  font-weight: 600;
  display: none;
  position: relative;

  @media (min-width: 1020px) {
    display: block;
  }
`;

export const NavLink = styled.a`
  text-decoration: none;
`;

export const Dropdown = styled.div`
  color: hsl(0, 0%, 41%);
  cursor: pointer;

  :hover, :active{
    color: hsl(0, 0%, 8%);
  }

  img {
    padding-left: 10px;
  }
`;

export const FeaturesDropdown = styled.div`
  padding: 20px 0 0 20px;
  opacity: 0;
  display: none;
  transition: all 0.3s;

  &.show {
    opacity: 1;
    display: block;
  }

  @media (min-width: 1020px) {
    display: block;
    position: absolute;
    top: 16px;
    background-color: #fff;
    border-radius: 5px;
    padding: 20px;
    box-shadow: 0px 5px 20px -2px rgba(0, 0, 0, 0.5);

    &.left {
      left: 0;
      width: 120px;
    }

    &.right {
      right: 0;
      width: 155px;
    }

    &.show {
      top: 50px;
    }
  }

  ul {
    list-style: none;
  }

  li {
    padding: 5px 0;
    text-transform: capitalize;
    font-weight: 400;
    cursor: pointer;

    img {
      padding-right: 10px;
    }
  }
`;
