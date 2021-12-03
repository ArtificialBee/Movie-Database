import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

import navLinks from "./config";

const LinkTitle = styled.h1`
  font-size: 1.4375rem;
  font-weight: 400;
  display: inline-block;
  margin-right: 48px;
`;

function Navigation() {
  return (
    <>
      {navLinks.map((navlink) => {
        return (
          <NavLink to={navlink.path}>
            <LinkTitle>{navlink.title}</LinkTitle>
          </NavLink>
        );
      })}
    </>
  );
}

export default Navigation;
