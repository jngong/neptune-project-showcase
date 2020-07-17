import React from "react";
import styled from "styled-components";

const UnitNav = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  background-color: #eee;
  padding: 1rem 3rem;

  @media (max-width: 600px) {
    padding: 1rem;
  }
`;

const UnitTab = styled.button`
  width: 100px;
  padding: 0.5rem;
  margin: 0 2rem;
  border: none;
  outline: none;
  cursor: pointer;
  border-bottom: 2px solid #000;
  text-transform: uppercase;
  font-weight: bold;

  @media (max-width: 600px) {
    margin: 0 0.4rem;
  }
`;

export const SubNav = (props) => {
  const handleClick = (unit) => {
    props.setUnit(unit);
  };

  return (
    <UnitNav>
      <UnitTab onClick={() => handleClick(1)}>Unit 1</UnitTab>
      <UnitTab onClick={() => handleClick(2)}>Unit 2</UnitTab>
      <UnitTab onClick={() => handleClick(3)}>Unit 3</UnitTab>
      <UnitTab onClick={() => handleClick(4)}>Unit 4</UnitTab>
    </UnitNav>
  );
};
