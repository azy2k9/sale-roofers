import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: red;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Hero = () => {
  return <Container>All items placed in here will be centered</Container>;
};

export default Hero;
