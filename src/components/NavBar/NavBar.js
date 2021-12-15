import navLinks from "../../routing/config";
import { NavLink, Outlet } from "react-router-dom";
import styled from "styled-components";
import { Fragment } from "react";

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

const NavBar = ({ children }) => {
  return (
    <Fragment>
      <NavigationWrapper>
        {navLinks.map(({ path, title }, index) => {
          return (
            <NavLink to={path} key={index}>
              <LinkTitle>{title}</LinkTitle>
            </NavLink>
          );
        })}
      </NavigationWrapper>
      <Outlet />
    </Fragment>
  );
};

export default NavBar;
