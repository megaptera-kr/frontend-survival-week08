import styled from 'styled-components';
import React from 'react';

type LayoutProps = {
  children: React.ReactNode;
}

const Container = styled.div`
  width: 1080px;
  height: auto;
`;

export default function Layout({ children }: LayoutProps) {
  return (
    <Container>
      {children}
    </Container>
  );
}
