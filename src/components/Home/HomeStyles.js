import styled from 'styled-components';

export const Cover = styled.div`
  background: url('/img/cover-about.jpg') no-repeat center center/cover;
  height: 90vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Div1 = styled.div`
  width: 100%;
  padding: 0 1rem;

  @media screen and (max-width: 800px) {
    width: 0;
  }
`;

export const Div2 = styled.div`
  margin: 0 10rem;
  @media screen and (max-width: 800px) {
    margin: 0 1rem;
  }
`;
