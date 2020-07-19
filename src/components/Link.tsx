import React from 'react';
import styled from 'styled-components';

const Button = styled.a`
  display: inline-block;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.white};

  ::after {
    content: '';
    display: block;
    width: 0;
    height: 2px;
    background: ${({ theme }) => theme.colors.white};
    transition: width 0.2s;
  }

  :hover::after {
    width: 100%;
  }
`;

interface Props {
  children: React.ReactNode;
  link: string;
  handleClick: () => void;
}

const Link = ({ children, link, handleClick }: Props) => {
  return (
    <Button href={link} onClick={(e) => handleClick()}>
      {children}
    </Button>
  );
};

export default Link;
