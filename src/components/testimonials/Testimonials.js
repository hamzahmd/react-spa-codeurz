import React from 'react';
import styled from 'styled-components';

const Section1 = styled.div`
  height: 60vh;
  background: #11bfae;
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;
  text-align: center;
  overflow: hidden;
  color: #fff;
`;
const Section2 = styled.div`
  height: 30vh;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
const Comment = styled.p`
  margin: 2rem 17rem;
  font-size: 25px;
  @media screen and (max-width: 800px) {
    margin: 1rem 3rem;
  }
`;
const Testimonials = () => {
  return (
    <>
      <Section1>
        <Comment>
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed minima
          id est delectus ratione non deserunt quaerat voluptatum quam corporis
          recusandae, dignissimos "
        </Comment>
        <p>MICHAEL HOPKINS</p>
      </Section1>
      <Section2>
        <img src='./img/logo2.png' alt='Client1' width='100px' height='100px' />
        <img src='./img/logo3.png' alt='Client1' width='100px' height='100px' />
        <img src='./img/logo4.png' alt='Client1' width='100px' height='100px' />
        <img src='./img/logo5.png' alt='Client1' width='100px' height='100px' />
        <img src='./img/logo6.png' alt='Client1' width='100px' height='100px' />
      </Section2>
    </>
  );
};

export default Testimonials;
