import React from "react";
import styled from "styled-components";
import { Container } from "./Container";

const Wrapper = styled.main`
  padding: 2rem 0;
  @media (min-width: 768px) {
    padding: 3rem 0;
  }
`;

export const Main = ({ children }: { children: React.ReactNode }) => {
  return (
    <Wrapper>
      <Container>{children}</Container>
    </Wrapper>
  );
};
