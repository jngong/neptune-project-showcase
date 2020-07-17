import React, { useReducer, useState, useEffect } from "react";
import { getStudents, createProject } from "../services/api-helper";
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

export const CreateProject = () => {
  const [students, setStudents] = useState([]);
  const [newProject, setNewProject] = useState([]);

  useEffect(() => {
    fetchStudents();
  }, []);

  const fetchStudents = async () => {
    const students = await getStudents();
    setStudents(students);
  };

  const [state, dispatch] = useReducer(reducer, initialProject);

  const handleChange = (e) => {
    dispatch({ field: e.target.name, value: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let response = await createProject(state, state.student_id).catch(
      console.error
    );
    setNewProject(response);
  };

  return (
    <div>
      <h1>Add A New Project</h1>
      <ProjectForm
        students={students}
        project={state}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
    </div>
  );
};

// https://medium.com/javascript-in-plain-english/react-controlled-forms-with-hooks-538762aab935
