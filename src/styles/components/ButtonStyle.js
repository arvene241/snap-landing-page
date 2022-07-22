import styled from "styled-components";

export const ButtonStyle = styled.div`
  a {
    text-transform: capitalize;
    font-weight: 600;
  }

  &.background {
    border: 2px solid hsl(0, 0%, 8%);
    background-color: hsl(0, 0%, 8%);
    padding: 15px 25px;
    border-radius: 15px;

    a {
      color: #fff;
    }

    :hover {
      background-color: hsl(0, 0%, 98%);

      a {
        color: #000;
      }
    }
  }
`;
