import React from "react";
import styled from "styled-components";
import { Link, Outlet } from "react-router-dom";
import navLinks from "../../routing/config";

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

function Navbar() {
  return (
    <>
      <NavigationWrapper>
        {navLinks.map(({ path, title }, index) => {
          return (
            <Link to={path} key={index}>
              <LinkTitle>{title}</LinkTitle>
            </Link>
          );
        })}
      </NavigationWrapper>
      <Outlet />
    </>
  );
}

export default Navbar;
