import React from "react";
import styled from "styled-components";
import background from "../../assets/galaxy-background-pixabay.jpg";

const Hero = styled.header`
  background: url(${background}) no-repeat center center scroll;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
  font-weight: 700;
  color: #fff;
  height: 250px;
  padding: 1rem;

  h1 {
    text-transform: uppercase;
    letter-spacing: 1px;
    text-shadow: 1px 1px 4px #b0a8b9;
  }
`;

export const Header = () => {
  return (
    <Hero>
      <h1>SEI Neptune Project Showcase</h1>
      <p>Explore projects created by GA SEI Neptune students.</p>
    </Hero>
  );
};
