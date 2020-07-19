import React from 'react';
import styled from 'styled-components';
import Hero from '../sections/Hero';
import Navbar from '../sections/Navbar';


const Overlayed = styled.div`
  position: absolute;
`;

const Homepage = () => {
  return (
    <div>
      <Overlayed>
        <Navbar />
      </Overlayed>
      <Hero />
    </div>
  );
};

export default Homepage;
