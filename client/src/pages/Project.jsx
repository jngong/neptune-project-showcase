import React from "react";
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
  const currentProject = props.projects.find((project) => project.id === +id);

  return (
    <ProjectDiv>
      <h2>Thanks for submitting your project!</h2>
      {currentProject ? <ProjectTile project={currentProject} /> : null}
      <div>
        <Link to={`/projects/${id}/edit`}>
          <Button>Edit</Button>
        </Link>
        <Button>Delete</Button>
      </div>
    </ProjectDiv>
  );
};
