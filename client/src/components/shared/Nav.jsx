import React from "react";
import logo from "../../assets/neptune-logo.png";
import styled from "styled-components";
import { Link } from "react-router-dom";

const NavBar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem;
  background-color: #000;
  position: sticky;
  top: 0;
  width: 100%;
`;

const Logo = styled.img`
  width: 30px;
  height: 30px;
  margin-left: 1rem;
`;

const NavLink = styled.div`
  color: #fff;
  text-transform: uppercase;
  font-weight: bold;
  letter-spacing: 1px;
  padding: 0.5rem;
  border-radius: 5px;

  &:hover {
    background-color: #fff;
    color: #000;
  }
`;

export const Nav = () => {
  return (
    <NavBar>
      <Link to="/">
        <Logo src={logo} />
      </Link>
      <Link to="/create-project">
        <NavLink>New Project +</NavLink>
      </Link>
    </NavBar>
  );
};
