import React, { useState } from "react";
import { Switch, Route } from "react-router-dom";
import { ProjectList } from "../../pages/ProjectList";
import { EditProject } from "../../pages/EditProject";
import { CreateProject } from "../../pages/CreateProject";
import { SidebarNav } from "./SidebarNav";

export const Main = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/">
          <SidebarNav />
          <ProjectList />
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
