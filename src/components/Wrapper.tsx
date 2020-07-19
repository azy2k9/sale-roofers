import React, { useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { lightTheme } from '../styles/theme';
import { GlobalStyles } from '../styles/global';
import Header from '../sections/Header';
import Navbar from '../sections/Navbar';

interface WrapperProps {
  children: React.ReactNode;
}

interface Props {
  isOpen?: boolean;
}

const MobileContainer = styled.div<Props>`
  flex-grow: 1;
  display: none;
  z-index: 100;
  position: absolute;
  top: 64px;
  bottom: 0;
  @media ${({ theme }) => theme.mediaQueries.mobile} {
    display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
  }
`;

const Container = styled.div<Props>`
  display: flex;
  overflow-y: auto;
  position: absolute;
  flex-direction: column;
  transition: opacity 0.3s ease;
  z-index: 0;
  @media ${({ theme }) => theme.mediaQueries.mobile} {
    opacity: ${({ isOpen }) => (isOpen ? '0' : '1')};
    height: ${({ isOpen }) => (isOpen ? '100vh' : '')};
  }
`;

const Wrapper: React.FC<WrapperProps> = ({ children }: WrapperProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const handleNavbar = () => {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  };

  return (
    <ThemeProvider theme={lightTheme}>
      <GlobalStyles />
      <Header handleNavbar={handleNavbar} isOpen={isOpen} />
      <MobileContainer isOpen={isOpen}>
        <Navbar isOpen={isOpen} handleClick={handleNavbar} />
      </MobileContainer>
      <Container isOpen={isOpen}>{children}</Container>
    </ThemeProvider>
  );
};

export default Wrapper;
