import React from 'react';
import styled from 'styled-components';
import Link from '../components/Link';

const Container = styled.div`
  height: 7vh;
  background-color: blue;
  display: flex;
  justify-content: space-between;
  padding: 0 10vw;
  color: white;
`;

const List = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

const Links = styled.div`
  display: flex;
  width: 50vw;
  align-items: center;
`;

const Navbar = () => {
  return (
    <Container>
      <Links>ADD LOGO HERE</Links>
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
