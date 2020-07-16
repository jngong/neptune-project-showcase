import React from 'react'
import { Switch, Route } from 'react-router-dom'

export const Main = () => {
  return (
    <Switch>
      <Route path="/" />
      <Route path="/project/:id/edit" />
      <Route path="/create-project" />
    </Switch>
  )
}
