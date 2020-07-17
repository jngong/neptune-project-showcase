import React from "react";
import styled from "styled-components";

const FormLabel = styled.label`
  display: block;
  margin: 1rem;

  input,
  select {
    display: block;
    margin: 0.5rem auto;
  }
`;

export const ProjectForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <FormLabel>
        Student Name
        <select
          name="student_id"
          onChange={props.handleChange}
          value={props.project.student_id}
          required
        >
          <option selected disabled value="">
            Select a Student
          </option>
          {props.students.map((student) => (
            <option value={student.id} key={student.id}>
              {student.full_name}
            </option>
          ))}
        </select>
      </FormLabel>
      <FormLabel>
        Project Title
        <input
          type="text"
          name="title"
          value={props.project.title}
          onChange={props.handleChange}
          required
        />
      </FormLabel>
      <FormLabel>
        Project Link (URL)
        <input
          type="url"
          name="project_url"
          value={props.project.project_url}
          onChange={props.handleChange}
          required
        />
      </FormLabel>
      <FormLabel>
        Github Link (URL)
        <input
          type="url"
          name="github_url"
          value={props.project.github_url}
          onChange={props.handleChange}
          required
        />
      </FormLabel>
      <FormLabel>
        Image Link (URL)
        <input
          type="url"
          name="img_url"
          value={props.project.img_url}
          onChange={props.handleChange}
          required
        />
      </FormLabel>
      <FormLabel>
        Course Unit
        <select
          name="unit"
          onChange={props.handleChange}
          value={props.project.unit}
          required
        >
          <option disabled selected value="">
            Select A Unit
          </option>
          <option value={1}>Unit 1</option>
          <option value={2}>Unit 2</option>
          <option value={3}>Unit 3</option>
          <option value={4}>Unit 4</option>
        </select>
      </FormLabel>
      <button type="submit">Submit Project</button>
    </form>
  );
};
