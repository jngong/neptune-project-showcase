import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { ProjectTile } from "../components/ProjectTile";
import {ProjectDiv, Button} from "../services/styles";
import { deleteProject } from "../services/api-helper";

export const Project = (props) => {
  const { id } = useParams();
  const [isDeleted, setIsDeleted] = useState(false);
  const currentProject = props.projects.find((project) => project.id === +id);

  const handleDelete = async (id) => {
    const deletedProject = await deleteProject(id);
    if (deletedProject) {
      setIsDeleted(true);
      props.getProjects();
    }
  };

  if (isDeleted) {
    return (
      <div>
        <h2>Your project has been deleted successfully.</h2>
        <Link to="/create-project">
          <Button>Add A New Project</Button>
        </Link>
        <Link to="/">
          <Button>Return to Homepage</Button>
        </Link>
      </div>
    );
  } else if (!currentProject) {
    return <h2>This project does not exist.</h2>;
  }

  return (
    <ProjectDiv>
      <h2>Thanks for submitting your project!</h2>
      {<ProjectTile project={currentProject} />}
      <div>
        <Link
          to={{
            pathname: `/projects/${id}/edit`,
            state: { project: currentProject },
          }}
        >
          <Button>Edit</Button>
        </Link>
        <Button onClick={async () => await handleDelete(id)}>Delete</Button>
      </div>
    </ProjectDiv>
  );
};
