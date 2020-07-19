import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { ProjectTile } from "../components/ProjectTile";
import styled from "styled-components";
import { deleteProject } from "../services/api-helper";

const ProjectDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Button = styled.button`
  padding: 0.5rem 1rem;
  background-color: #407b87;
  color: #fff;
  text-transform: uppercase;
  font-weight: 700;
  letter-spacing: 0.5px;
  outline: none;
  cursor: pointer;
  border-radius: 5px;
  border: none;
  margin: 0 1rem;

  &:hover {
    transform: scale(1.05);
  }
`;

export const Project = (props) => {
  const { id } = useParams();
  const [isDeleted, setIsDeleted] = useState(false);
  const currentProject = props.projects.find((project) => project.id === +id);

  useEffect(() => {
    props.getProjects();
  }, [isDeleted]);

  const handleDelete = async (id) => {
    const deletedProject = await deleteProject(id);
    if (deletedProject) {
      setIsDeleted(true);
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
      {currentProject ? <ProjectTile project={currentProject} /> : null}
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
