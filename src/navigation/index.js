import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

import navLinks from "./config";

const NavigationWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 48px;
  @media (max-width: 767px) {
    justify-content: center;
  }
`;

const LinkTitle = styled.h1`
  font-size: 1.4375rem;
  font-weight: 400;
`;

function Navigation() {
  return (
    <NavigationWrapper>
      {navLinks.map(({ path, title }, index) => {
        console.log(index);
        return (
          <NavLink to={path} key={index}>
            <LinkTitle>{title}</LinkTitle>
          </NavLink>
        );
      })}
    </NavigationWrapper>
  );
}

export default Navigation;
