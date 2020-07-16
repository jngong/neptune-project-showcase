import React from "react";
import { ProjectTile } from "../components/ProjectTile";
import styled from "styled-components";

const ProjectsContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
`

export const ProjectList = (props) => {
  return (
    <ProjectsContainer>
      {props && props.projects.map((project) => (
        <ProjectTile key={project.id} project={project} />
      ))}
    </ProjectsContainer>
  );
};
