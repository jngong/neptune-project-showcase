import React from "react";
import styled, { withTheme } from "styled-components";

const StyledFooter = styled.footer`
  background-color: #000;
  color: #fff;
  padding: 1.5rem;

  p {
    margin: 0.5rem 0;
  }
  a {
    color: #fff;
    &:hover {
      color: #008b8b;
    }
  }
`;

export const Footer = () => {
  return (
    <StyledFooter>
      <p>&copy; 2020 SEI Neptune Cohort | General Assembly NYC</p>
      <p>
        Website created by{" "}
        <a href="https://www.linkedin.com/in/jngong" target="_blank">
          Jennifer Gong
        </a>
        , Instructional Associate
      </p>
    </StyledFooter>
  );
};
