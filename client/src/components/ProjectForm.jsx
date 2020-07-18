import React from "react";
import styled from "styled-components";

const Form = styled.form`
  min-width: 300px;
  max-width: 600px;
  width: 50%;
  background-color: #e6f4f1;
  border-radius: 5px;
  border: 1px solid #407b87;
  margin: 0 auto;
  padding: 1rem;
`;

const FormLabel = styled.label`
  display: inline-block;
  margin: 0.5rem 1rem;

  input,
  select {
    display: block;
    margin: 0.5rem auto;
    padding: 0.5rem 1rem;
    border: 0.5px solid #407b87;
    min-width: 200px;
  }
`;

const SubmitButton = styled.button`
  display: block;
  padding: 0.5rem 1rem;
  background-color: #407b87;
  color: #fff;
  text-transform: uppercase;
  font-weight: bold;
  letter-spacing: 0.5px;
  outline: none;
  cursor: pointer;
  border-radius: 5px;
  border: none;
  margin: 0.5rem auto;

  &:hover {
    transform: scale(1.05);
  }
`;

export const ProjectForm = (props) => {
  return (
    <Form onSubmit={props.handleSubmit}>
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
      <SubmitButton type="submit">Submit Project</SubmitButton>
    </Form>
  );
};
