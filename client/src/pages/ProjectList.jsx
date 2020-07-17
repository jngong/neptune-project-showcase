import React, { useState, useEffect } from "react";
import { ProjectTile } from "../components/ProjectTile";
import styled from "styled-components";

const ProjectsContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  padding: 3rem 4rem;
`;

export const ProjectList = (props) => {
  const [filteredProjects, setFilteredProjects] = useState([]);

  useEffect(() => {
    filterProjects(3);
  }, [props.unit]);

  const filterProjects = (unit) => {
    let filtered = props.projects.filter((project) => project.unit === unit);
    console.log(filtered);
    setFilteredProjects(filtered);
  };

  return (
    <ProjectsContainer>
      {props &&
        props.projects.map((project) => (
          <ProjectTile key={project.id} project={project} />
        ))}
    </ProjectsContainer>
  );
};
