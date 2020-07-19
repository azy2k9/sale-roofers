import React from 'react';
import styled from 'styled-components';

const Button = styled.a`
  display: inline-block;
  color: white;
  text-decoration: none;

  ::after {
    content: '';
    display: block;
    width: 0;
    height: 2px;
    background: white;
    transition: width 0.2s;
  }

  :hover::after {
    width: 100%;
  }
`;

interface Props {
  children: React.ReactNode;
}

const Link = ({ children }: Props) => {
  return <Button>{children}</Button>;
};

export default Link;
