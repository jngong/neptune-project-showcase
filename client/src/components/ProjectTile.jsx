import React from "react";
import styled from "styled-components";

const Tile = styled.div`
  width: 30%;
  min-width: 275px;
  max-width: 350px;
  border: 1px solid black;
  border-radius: 5px;
  margin: 2rem;
  padding: 2rem 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  h1 {
    margin-bottom: 0;
  }

  img {
    width: 90%;
    object-fit: cover;
    height: 200px;
    margin: 1rem auto;
  }

  .project-links {
    display: flex;
    justify-content: space-around;
    margin-bottom: 1rem;
  }

  .project-links a {
    color: #000;
    display: block;
  }
`;

export const ProjectTile = (props) => {
  const { title, github_url, img_url, project_url, students } = props.project;
  return (
    <Tile>
      <h1>
        <a href={project_url} target="blank">
          {title}
        </a>
      </h1>
      <h2>
        {students.map((student) => (
          <a href={student.linkedin_url} target="blank" key={student.id}>
            {student.full_name}
          </a>
        ))}
      </h2>
      <div className="project-links">
        <a href={project_url} target="blank">
          <i className="fas fa-external-link-alt"></i> View Site
        </a>
        <a href={github_url} target="blank">
          <i className="fab fa-github-square"></i> Explore Code
        </a>
      </div>
      <img src={img_url} />
    </Tile>
  );
};
