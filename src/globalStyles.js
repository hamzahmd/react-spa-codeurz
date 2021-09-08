import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`


*{
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: 'Roboto', sans-serif;
}

`;

export const Container = styled.div`
  z-index: 1;
  width: 100%;
  max-width: 1300px;
  margin-left: auto;
  margin-left: auto;
  padding: 0 50px;
  @media screen and (max-width: 950px) {
    padding: 0 30px;
  }
`;

export const Button = styled.button`
  margin-top: 2.5rem;
  background: #11bfae;
  white-space: nowrap;
  padding: ${({ big }) => (big ? '12px 64px' : '10px 20px')};
  color: #fff;
  font-size: 20px;
  outline: none;
  border: none;
  cursor: pointer;

  &:hover {
    transition: all 0.3s ease-out;
    background: #fff;
    background: #333;
  }
  @media screen and (max-width: 800px) {
    width: 100%;
  }
`;

export const H1 = styled.h1`
  font-size: 40px;
  margin-bottom: 1rem;
`;
export const H3 = styled.h3`
  font-size: 30px;
  margin-bottom: 1rem;
  color: #fff;
`;
export default GlobalStyle;

export const Para = styled.p`
  font-size: 20px;
  line-height: 2rem;
`;
