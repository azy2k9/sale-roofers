import React from 'react';
import styled from 'styled-components';
import Typography from '../components/Typography';

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  background: url('/hero.jpeg');
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  color: ${({ theme }) => theme.colors.white};
  height: 100vh;
`;

const Hero = () => {
  return (
    <Container>
      <Typography size="largest" weight="bold" variant="primary">
        Sale Roofers
      </Typography>
      <Typography variant="secondary">
        Leading roofers in Sale, Manchester and Cheshire
      </Typography>
    </Container>
  );
};

export default Hero;
