import React from 'react';
import styled from 'styled-components';

const Container = styled.div<Props>`
  display: flex;
  background-color: ${({ theme }) => theme.colors.secondary};
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100vw;
  padding: 5vh 5vw;
`;

const Content = styled.div<Props>`
  display: flex;
  background-color: ${({ theme }) => theme.colors.secondary};
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 50vh;
  width: 80vw;
  border-bottom: 1px solid ${({ theme }) => theme.colors.paragraph};
`;

interface Props {
  children: React.ReactNode;
  anchor?: string;
  header?: React.ReactNode;
}

const Panel = ({ children, anchor, header }: Props) => {
  return (
    <Container id={anchor}>
      {header}
      <Content>{children}</Content>
    </Container>
  );
};

export default Panel;
