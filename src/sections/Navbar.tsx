import React from 'react';
import styled from 'styled-components';
import Link from '../components/Link';

const Container = styled.div`
  height: 10vh;
  display: flex;
  justify-content: space-between;
  color: white;
  width: 90vw;
  padding: 5vh 5vw;
`;

const List = styled.ul`
  list-style-type: none;
  margin: 0;
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

const Links = styled.div`
  display: flex;
  width: 40vw;
  align-items: center;
`;

const Logo = styled.img`
  height: 100px;
  width: 200px;
`;

const Navbar = () => {
  return (
    <Container>
      <Links>
        <Logo src="/logo.png" alt="sale roofers" />
      </Links>
      <Links>
        <List>
          <Link>Home</Link>
          <Link>About Us</Link>
          <Link>Services</Link>
          <Link>Contact</Link>
        </List>
      </Links>
    </Container>
  );
};

export default Navbar;
