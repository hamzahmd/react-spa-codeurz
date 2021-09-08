import React from 'react';
import styled from 'styled-components';

const Bottom = styled.div`
  background: #333;
  color: #fff;
  height: 25vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Footer = () => {
  return (
    <Bottom>
      <h3>Piroll Design, Inc.</h3>
      <p style={{ padding: '1rem 0' }}>
        &copy; {new Date().getFullYear()} Piroll. All rights reserved.
      </p>
    </Bottom>
  );
};

export default Footer;
