import React from "react";
import { useParams } from "react-router-dom";
import { ProjectTile } from "../components/ProjectTile";
import styled from "styled-components";

const ProjectDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Project = (props) => {
  const { id } = useParams();
  const currentProject = props.projects.find((project) => project.id === +id);

  console.log(currentProject);
  return (
    <ProjectDiv>
      <h2>Thanks for submitting your project!</h2>
      {currentProject ? <ProjectTile project={currentProject} /> : null}
    </ProjectDiv>
  );
};
