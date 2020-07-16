import React, { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import { ProjectList } from "../../pages/ProjectList";
import { EditProject } from "../../pages/EditProject";
import { CreateProject } from "../../pages/CreateProject";
import { SidebarNav } from "../SidebarNav";
import { getProjects } from "../../services/api-helper";

export const Main = () => {

  const [projects, setProjects] = useState([])

  useEffect(() => {
    getData()
  }, [])

  const getData = async () => {
    const data = await getProjects()
    setProjects(data)
  } 

  return (
    <div>
      <Switch>
        <Route exact path="/">
          <SidebarNav />
          <ProjectList projects={projects} />
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
