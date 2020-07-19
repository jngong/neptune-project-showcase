import React, { useState, useEffect } from "react";
import { ProjectTile } from "../components/ProjectTile";
import {ProjectsContainer} from "../services/styles";

export const ProjectList = (props) => {
  const [filteredProjects, setFilteredProjects] = useState([]);

  useEffect(() => {
    filterProjects(props.unit);
  }, [props.unit]);

  const filterProjects = (unit) => {
    let filtered = props.projects.filter((project) => project.unit === unit);
    setFilteredProjects(filtered);
  };

  const mapProjects = (list) => {
    return list.map((project) => (
      <ProjectTile key={project.id} project={project} />
    ));
  };

  return (
    <ProjectsContainer>
      {props.unit === 0
        ? mapProjects(props.projects)
        : mapProjects(filteredProjects)}
    </ProjectsContainer>
  );
};
