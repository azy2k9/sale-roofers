import React from 'react';
import styled from 'styled-components';

const Button = styled.a`
  display: inline-block;
  text-decoration: none;

  ::after {
    content: '';
    display: block;
    width: 0;
    height: 2px;
    background: black;
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
  return <Button className="link">{children}</Button>;
};

export default Link;
