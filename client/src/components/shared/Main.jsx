import React, { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import { SubNav } from "../SubNav";
import { ProjectList } from "../../pages/ProjectList";
import { Project } from "../../pages/Project";
import EditProject from "../../pages/EditProject";
import { CreateProject } from "../../pages/CreateProject";
import { getProjects, getStudents } from "../../services/api-helper";

export const Main = () => {
  const [projects, setProjects] = useState([]);
  const [students, setStudents] = useState([]);
  const [unit, setUnit] = useState(0);

  useEffect(() => {
    getData();
    fetchStudents();
  }, []);

  const getData = async () => {
    const data = await getProjects();
    setProjects(data);
  };

  const fetchStudents = async () => {
    const students = await getStudents();
    setStudents(students);
  };

  return (
    <div>
      <Switch>
        <Route exact path="/">
          <SubNav setUnit={setUnit} />
          <ProjectList projects={projects} unit={unit} />
        </Route>
        <Route exact path="/projects/:id">
          <Project projects={projects} getProjects={getData} />
        </Route>
        <Route exact path="/projects/:id/edit">
          <EditProject getProjects={getData} />
        </Route>
        <Route exact path="/create-project">
          <CreateProject getProjects={getData} students={students} />
        </Route>
      </Switch>
    </div>
  );
};
