import React from 'react';
import styled, { keyframes } from 'styled-components';
import Link from '../components/Link';

// Create the keyframes
const slideDown = keyframes`
  to {
    transform: translateY(0%);
  }
`;

const Container = styled.div<Props>`
  animation: ${slideDown} 0.3s ease forwards;
  display: flex;
  color: ${({ theme }) => theme.colors.headline};
  width: 50vw;
  justify-content: space-evenly;
  padding-right: 12px;

  @media ${({ theme }) => theme.mediaQueries.mobile} {
    flex-direction: column;
    align-items: center;
    width: 100vw;
    height: 100%;
    background-color: ${({ theme }) => theme.colors.paragraph};
    transform: translateY(-100%);
    z-index: 0;
    position: relative;

    svg {
      height: 48px;
      width: 48px;
    }
  }
`;

interface Props {
  isOpen: boolean;
  handleClick: () => void;
}

const Navbar: React.FC<Props> = (props: Props) => {
  const { handleClick } = props;
  return (
    <Container {...props}>
      <Link link="#home" handleClick={handleClick}>
        Home
      </Link>
      <Link link="#about-us" handleClick={handleClick}>
        About Us
      </Link>
      <Link link="#services" handleClick={handleClick}>
        Services
      </Link>
      <Link link="#contact" handleClick={handleClick}>
        Contact
      </Link>
    </Container>
  );
};

export default Navbar;
