import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { ProjectTile } from "../components/ProjectTile";

export const Project = (props) => {
  const { id } = useParams();
  const [project, setProject] = useState({})

  useEffect(() => {
    const currentProject = props.projects.find((project) => project.id === +id);
    if (currentProject) {
      setProject(currentProject)
    }
  }, [])

  const renderTile = () => <ProjectTile project={project} />

  console.log(project)
  return (
    <div>
      Project {id}.
      {/* {project ? renderTile() : null} */}
    </div>
  );
};
