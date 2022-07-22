import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    font-family: 'Epilogue', sans-serif;
    font-size: 16px;
    background-color: hsl(0, 0%, 98%);
    color: hsl(0, 0%, 8%);
  }

  p, a {
    font-family: 'Epilogue', sans-serif;
    color: hsl(0, 0%, 41%);
    text-decoration: none;
  }

  a:hover, a:active{
    color: hsl(0, 0%, 8%);
  }
`

export const Container = styled.div`
  width: 90%;
  margin: 0 auto;
`

export default GlobalStyle;