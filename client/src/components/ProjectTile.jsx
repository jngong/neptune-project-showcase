import React from "react";
import styled from "styled-components";

const Tile = styled.div`
  width: 30%;
  min-width: 300px;
  max-width: 350px;
  border: 1px solid black;
  border-radius: 5px;
  margin: 1.5rem;
  padding: 2rem 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  h2 {
    margin: 0;
  }

  img {
    width: 100%;
    object-fit: cover;
    height: 200px;
  }

  .project-links {
    display: flex;
    justify-content: space-around;
    margin-bottom: 2rem;
  }

  .project-links a, 
  a:visited {
    color: #000;
    display: block;
  }

  i {
    margin: 0 5px;
    font-size: 1.2rem;
  }
`;

export const ProjectTile = (props) => {
  const { title, github_url, img_url, project_url, students } = props.project;
  return (
    <Tile>
      <h2>
        <a href={project_url} target="blank">
          {title}
        </a>
      </h2>
      <h3>
        {students.map((student) => (
          <a href={student.linkedin_url} target="blank" key={student.id}>
            By {student.full_name} <i className="fab fa-linkedin"></i>
          </a>
        ))}
      </h3>
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
