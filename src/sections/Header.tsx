import React from 'react';
import styled from 'styled-components';
import Navbar from './Navbar';
import HamburgerButton from '../components/HamburgerButton';

const Container = styled.div<Props>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 1000;

  @media ${({ theme }) => theme.mediaQueries.mobile} {
    justify-content: center;
    background-color: ${({ theme, isOpen }) =>
      isOpen ? theme.colors.white : ''};
  }
`;

const NavbarContainer = styled.div`
  @media ${({ theme }) => theme.mediaQueries.mobile} {
    display: none;
  }
`;

interface Props {
  handleNavbar: () => void;
  isOpen: boolean;
}

const Logo = styled.img`
  margin-top: 1rem;
  margin-left: 3rem;
  height: 70px;
`;

const Header: React.FC<Props> = (props: Props) => {
  const { handleNavbar, isOpen } = props;
  return (
    <>
      <Container {...props}>
        <Logo
          src={`/logo-${isOpen ? 'normal' : 'alternate'}.png`}
          alt="sale roofers"
        />
        <HamburgerButton isOpen={isOpen} handleClick={handleNavbar} />
        <NavbarContainer>
          <Navbar isOpen={false} />
        </NavbarContainer>
      </Container>
    </>
  );
};

export default Header;
