import React, { useState, useEffect } from "react";
import { ProjectTile } from "../components/ProjectTile";
import styled from "styled-components";

const ProjectsContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
`;

export const ProjectList = (props) => {
  
  const [filteredProjects, setFilteredProjects] = useState([]);

  useEffect(() => {
    filterProjects(props.unit);
  }, [props.unit]);

  const filterProjects = (unit) => {
    let filtered = props.projects.filter(project => project.unit === unit);
    setFilteredProjects(filtered);
    console.log(filtered);
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
