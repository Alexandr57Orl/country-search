import React from "react";
import styled from "styled-components";
import { Container } from "./Container";
import { useState, useEffect } from "react";
import { IoMoon, IoMoonOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

const StyledHeader = styled.header`
  box-shadow: var(--shadow);
  background-color: var(--colors-ui-base);
`;
const StyledWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 0;
`;
const StyledTitle = styled.h1`
  color: var(--colors-text);
  font-size: var(--fs-sm);
  text-decoration: none;
  font-weight: var(--fw-bold);
  text-decoration: none;
`;
const StyledModeSwitch = styled.div`
  color: var(--colors-text);
  font-size: var(--fs-sm);
  cursor: pointer;
  text-transform: capitalize;
`;

export const Header = () => {
  const [theme, setTheme] = useState("light");
  const toggleTheme = () => setTheme(theme === "light" ? "dark" : "light");

  useEffect(() => {
    document.body.setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <StyledHeader>
      <Container>
        <StyledWrapper>
          <Link to="/">
            <StyledTitle>Where is the world?</StyledTitle>
          </Link>
          <StyledModeSwitch onClick={toggleTheme}>
            {theme === "light" ? (
              <IoMoonOutline size="14px" />
            ) : (
              <IoMoon size="14px" />
            )}

            <span style={{ marginLeft: "0.75rem" }}> {theme} theme</span>
          </StyledModeSwitch>
        </StyledWrapper>
      </Container>
    </StyledHeader>
  );
};
