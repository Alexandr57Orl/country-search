import React from "react";
import styled from "styled-components";

export const StyledContainer = styled.div`
  max-width: 1240px;
  width: 100%;
  margin: 0 auto;
  padding: 0 2rem;
`;

export const Container = (props) => {
  return <StyledContainer {...props} />;
};
