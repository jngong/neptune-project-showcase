import React from "react";
import logo from "../assets/neptune-logo.png";
import styled from "styled-components";

const NavBar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
`

const Logo = styled.img`
  width: 50px;
  height: 50px;
  margin: 1rem;
`
export const Nav = () => {
  return (
    <NavBar>
      <Logo src={logo} />
      <button>Add A Project</button>
    </NavBar>
  );
};
