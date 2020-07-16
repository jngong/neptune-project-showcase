import React from 'react'
import { Switch, Route } from 'react-router-dom'
import {ProjectList} from '../pages/ProjectList'
import { EditProject } from '../pages/EditProject'
import { CreateProject } from '../pages/CreateProject'

export const Main = () => {
  return (
    <Switch>
      <Route exact path="/" render={() => <ProjectList />} />
      <Route path="/project/:id/edit" render={() => <EditProject />} />
      <Route path="/create-project" render={() => <CreateProject />}/>
    </Switch>
  )
}
