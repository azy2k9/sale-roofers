import React from 'react';
import './App.css';
import Landing from './pages/Landing';
import Wrapper from './components/Wrapper';
import AboutUs from './pages/AboutUs';

function App() {
  return (
    <Wrapper>
      <Landing />
      <AboutUs />
    </Wrapper>
  );
}

export default App;
