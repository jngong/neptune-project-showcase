import React, { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import { SubNav } from "../SubNav";
import { ProjectList } from "../../pages/ProjectList";
import { Project } from "../../pages/Project";
import { EditProject } from "../../pages/EditProject";
import { CreateProject } from "../../pages/CreateProject";
import { getProjects } from "../../services/api-helper";

export const Main = () => {
  const [projects, setProjects] = useState([]);
  const [unit, setUnit] = useState(3);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const data = await getProjects();
    setProjects(data);
  };

  return (
    <div>
      <Switch>
        <Route exact path="/">
          <SubNav />
          <ProjectList projects={projects} unit={unit} />
        </Route>
        <Route path="/project/:id">
          <Project />
        </Route>
        <Route path="/project/:id/edit">
          <EditProject />
        </Route>
        <Route path="/create-project">
          <CreateProject />
        </Route>
      </Switch>
    </div>
  );
};
