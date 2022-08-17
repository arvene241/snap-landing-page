import styled from "styled-components";

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  gap: 20px;

  img {
    width: 100%;
  }

  @media (min-width: 450px) {
    width: 450px;
    
    img {
      width: 450px;
    }
  }

  @media (min-width: 1020px) {
    width: 1000px;
    flex-direction: row;
    flex-flow: row-reverse;
    justify-content: space-between;
    padding: 0 50px;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin: 50px 0;
  gap: 30px;

  p {
    line-height: normal;
  }

  @media (min-width: 1020px) {
    text-align: left;
    align-items: flex-start;
    width: auto;

    h1 {
      font-size: 4.5rem;
    }

    p {
      width: 80%;
    }
  }
`;

export const Companies = styled.div`
  display: flex;
  align-items: center;

  img {
    width: 5rem;
    padding: 10px;
    cursor: pointer;

    :hover {
      transform: scale(1.2);
      color: #000;
    }

    @media (min-width: 450px) {
      width: 6rem;
      padding: 12px;
    }
  }
`;
