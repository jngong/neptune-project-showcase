import styled from "styled-components";

export const ProjectsContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  padding: 1rem 3rem;
  min-height: 50vh;
`;

export const ProjectDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Button = styled.button`
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

export const Form = styled.form`
  min-width: 300px;
  max-width: 600px;
  width: 50%;
  background-color: #e6f4f1;
  border-radius: 5px;
  border: 1px solid #407b87;
  margin: 1rem auto;
  padding: 1rem;
`;

export const FormLabel = styled.label`
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

export const SubmitButton = styled.button`
  display: block;
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
  margin: 0.5rem auto;

  &:hover {
    transform: scale(1.05);
  }
`;