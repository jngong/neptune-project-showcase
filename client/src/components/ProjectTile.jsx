import React from "react";
import styled from "styled-components";

const Tile = styled.div`
  width: 30%;
  min-width: 300px;
  max-width: 350px;
  border: 1px solid black;
  border-radius: 5px;
  margin: 1rem;
  padding: 2rem 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-shadow: 8px 8px 10px #b0a8b9;

  h2 {
    margin: 0;
  }

  img {
    width: 100%;
    object-fit: cover;
    height: 200px;
  }

  .student-names {
    margin: 1rem 0;
  }

  .student-names > div {
    margin: 0.3rem 0;
  }

  .project-links {
    display: flex;
    justify-content: space-around;
    margin-bottom: 2rem;
    background-color: #e6f4f1;
    padding: 0.8rem 0;
    border-radius: 2px;
  }

  .project-links a,
  a:visited {
    display: block;
  }

  i {
    margin: 0 5px;
    font-size: 0.9rem;
  }
`;

export const ProjectTile = (props) => {
  const { title, github_url, img_url, project_url, students } = props.project;
  return (
    <Tile>
      <h2>{title}</h2>
      <div className="student-names">
        {students.map((student) => (
          <div key={student.id}>
            {student.full_name}
            <a href={student.linkedin_url} target="blank" key={student.id}>
              <i className="fab fa-linkedin"></i>
            </a>
          </div>
        ))}
      </div>
      <div className="project-links">
        <a href={project_url} target="blank">
          <i className="fas fa-external-link-alt"></i> View Site
        </a>
        <a href={github_url} target="blank">
          <i className="fab fa-github-square"></i> Explore Code
        </a>
      </div>
      <a href={project_url} target="blank">
        <img src={img_url} alt={title} />
      </a>
    </Tile>
  );
};
