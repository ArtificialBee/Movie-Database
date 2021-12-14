import React, { useState } from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import NavigationRoutes from "./routes";

import navLinks from "./config";

const NavigationWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 954px;
  gap: 48px;
  margin: 93px auto;
  @media (max-width: 767px) {
    justify-content: center;
  }
`;

const LinkTitle = styled.h1`
  font-size: 1.4375rem;
  font-weight: 400;
`;

function Navigation() {
  const [showNavigation, setShowNavigation] = useState(true);

  return (
    <>
      {showNavigation && (
        <NavigationWrapper>
          {navLinks.map(({ path, title }, index) => {
            return (
              <NavLink to={path} key={index}>
                <LinkTitle>{title}</LinkTitle>
              </NavLink>
            );
          })}
        </NavigationWrapper>
      )}
      <NavigationRoutes
        changeNavigation={setShowNavigation}
        showNav={showNavigation}
      />
    </>
  );
}

export default Navigation;
