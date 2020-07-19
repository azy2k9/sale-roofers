import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  background-color: ${({ theme }) => theme.colors.secondary};
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 50vh;
  width: 100vw;
  padding: 0px 5vw;
`;

interface Props {
  children: React.ReactNode;
  anchor?: string;
}

const Panel = ({ children, anchor }: Props) => {
  return <Container id={anchor}>{children}</Container>;
};

export default Panel;
