import React, { useReducer } from "react";
import { useHistory } from "react-router-dom";
import { createProject } from "../services/api-helper";
import { ProjectForm } from "../components/ProjectForm";

const initialProject = {
  title: "",
  project_url: "",
  img_url: "",
  github_url: "",
  unit: "",
  student_id: "",
};

const reducer = (state, { field, value }) => {
  if (field === "unit" || field === "student_id") {
    return { ...state, [field]: +value };
  }
  return { ...state, [field]: value };
};

export const CreateProject = (props) => {
  const history = useHistory();
  const [state, dispatch] = useReducer(reducer, initialProject);

  const handleChange = (e) => {
    dispatch({ field: e.target.name, value: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let response = await createProject(state, state.student_id).catch(
      console.error
    );
    props.getProjects();
    history.push(`/projects/${response.id}`);
  };

  return (
    <div>
      <h1>Add A New Project</h1>
      <ProjectForm
        students={props.students}
        project={state}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
    </div>
  );
};

// https://medium.com/javascript-in-plain-english/react-controlled-forms-with-hooks-538762aab935
