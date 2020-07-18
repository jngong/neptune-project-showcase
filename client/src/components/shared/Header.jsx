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
  color: #fff;
  height: 25vh;
  padding: 1rem;
`;

export const Header = () => {
  return (
    <Hero>
      <h1>SEI Neptune Project Showcase</h1>
      <p>Explore projects created by GA SEI Neptune students.</p>
    </Hero>
  );
};
