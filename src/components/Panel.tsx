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
  justify-content: ${({ rows }) => (rows ? 'space-evenly' : 'center')};
  flex-wrap: wrap;
  width: 80vw;
  padding: 3rem 0;
  border-bottom: 1px solid ${({ theme }) => theme.colors.paragraph};
`;

interface Props {
  children: React.ReactNode;
  anchor?: string;
  header?: React.ReactNode;
  rows?: boolean;
}

const Panel = ({ children, anchor, header, rows }: Props) => {
  return (
    <Container id={anchor}>
      {header}
      <Content rows={rows}>{children}</Content>
    </Container>
  );
};

export default Panel;
