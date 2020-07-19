import React from 'react';
import './App.css';
import Landing from './pages/Landing';
import Wrapper from './components/Wrapper';
import AboutUs from './pages/AboutUs';
import Services from './pages/Services';

function App() {
  return (
    <Wrapper>
      <Landing />
      <AboutUs />
      <Services />
    </Wrapper>
  );
}

export default App;
