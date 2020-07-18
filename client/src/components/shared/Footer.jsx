import React from "react";
import styled from "styled-components";

const StyledFooter = styled.footer`
  background-color: #f5f5f5;
  color: #000;
  padding: 0.3rem;
  font-size: 0.8rem;
  margin-top: 2rem;

  p {
    margin: 0.2rem 0;
  }
  a {
    color: #000;
    &:hover {
      color: #008b8b;
    }
  }
  i {
    margin: 0 0.4rem;
  }
`;

export const Footer = () => {
  return (
    <StyledFooter>
      <p>&copy; 2020 SEI Neptunes | NYC</p>
      <p>
        Website by Jennifer Gong, Instructional Associate
        <a href="https://www.linkedin.com/in/jngong" target="blank">
          <i className="fab fa-linkedin"></i>
        </a>
        <a
          href="https://github.com/jngong/neptune-project-showcase"
          target="blank"
        >
          <i className="fab fa-github-square"></i>
        </a>
      </p>
    </StyledFooter>
  );
};
