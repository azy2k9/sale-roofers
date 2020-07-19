import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  background: url('/hero.jpeg');
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.colors.primary};
  height: 100vh;
`;

const Hero = () => {
  return <Container>All items placed in here will be centered</Container>;
};

export default Hero;
