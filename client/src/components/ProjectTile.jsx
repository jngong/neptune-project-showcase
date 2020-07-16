import React from 'react'
import styled from "styled-components"

const Tile = styled.div`
  width: 30%;
  min-width: 275px;
  border: 1px solid black;
  border-radius: 2px;
  margin: 1rem;
`

export const ProjectTile = (props) => {

  const {title, github_url, img_url, students} = props.project
  return (
    <Tile>
      <h1>{title}</h1>
      <h2>{students.map(student => student.full_name )}</h2>
    </Tile>
  )
}