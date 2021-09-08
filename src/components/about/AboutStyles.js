import styled from 'styled-components';

export const Section1 = styled.div`
  height: 50vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 0 5rem;
  overflow: hidden;
`;

export const Section2 = styled.div`
  background: #11bfae;
  height: 40vh;
  margin-bottom: 3rem;
  padding: 0 1rem;
  width: 100%;
  @media screen and (max-width: 800px) {
    height: 80vh;
  }
`;

export const Section3 = styled.div`
  background: url('/img/cover-main.jpg') no-repeat center center/cover;
  height: 80vh;
`;

export const Feed = styled.ul`
  height: 100%;
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: space-around;
  list-style: none;
  @media screen and (max-width: 800px) {
    display: flex;
    flex-direction: column;
  }
`;
export const FeedAboutIcon = styled.div`
  margin-right: 1rem;
  font-size: 3rem;
  color: #fff;
  padding: 1rem 0;
`;
export const ParaAbout = styled.p`
  color: #fff;
`;
export const List = styled.li`
  display: flex;
  align-content: center;
`;
