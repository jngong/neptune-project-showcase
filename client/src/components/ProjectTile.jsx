import React from "react";
import styled from "styled-components";

const Tile = styled.div`
  width: 30%;
  min-width: 275px;
  border: 1px solid black;
  border-radius: 2px;
  margin: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  img {
    width: 100%;
    object-fit: cover;
    max-height: 200px;
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
      <img src={img_url} />
    </Tile>
  );
};
