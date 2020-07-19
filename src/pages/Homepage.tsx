import React from 'react';
import styled from 'styled-components';
import Hero from '../sections/Hero';

const AboutUs = styled.div`
  display: flex;
  background-color: ${({ theme }) => theme.colors.secondary};
  justify-content: center;
  align-items: center;
  height: 30vh;
  width: 100vw;
`;

const Homepage = () => {
  return (
    <>
      <Hero />
      <AboutUs>Test the container</AboutUs>
    </>
  );
};

export default Homepage;
