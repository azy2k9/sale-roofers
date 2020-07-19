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
    background-color: ${({ theme }) => theme.colors.primary};
    transform: translateY(-100%);
    z-index: 0;
    position: relative;
    color: black;

    svg {
      height: 48px;
      width: 48px;
    }
  }
`;

interface Props {
  isOpen: boolean;
}

const Navbar: React.FC<Props> = ({ isOpen }: Props) => {
  return (
    <Container isOpen={isOpen}>
      <Link>Home</Link>
      <Link>About Us</Link>
      <Link>Services</Link>
      <Link>Contact</Link>
    </Container>
  );
};

export default Navbar;
