import React, { useState } from "react";
import { withRouter, Link, useParams } from "react-router-dom";
import { updateProject } from "../services/api-helper";
import { Form, FormLabel, Button } from "../services/styles"

const EditProject = (props) => {

  const {project} = props.location.state
  const [title, setTitle] = useState(project.title)
  const [project_url, setProjectUrl] = useState(project.project_url)
  const [github_url, setGithubUrl] = useState(project.github_url)
  const [img_url, setImgUrl] = useState(project.img_url)

  const {id} = useParams()

  const handleSubmit = async (e) => {
    e.preventDefault();
    let response = await updateProject(id, {title: title, project_url: project_url, github_url: github_url, img_url: img_url}).catch(console.error);
    if (response) {
      props.getProjects();
    }
    props.history.push(`/projects/${project.id}`);
  };

  return (
    <div>
      <h1>Edit Your Project</h1>
      <Form onSubmit={(e) => handleSubmit(e)}>
        <div>Student: {project.students[0].full_name}</div>
        <div>Unit: {project.unit}</div>
        <FormLabel>
        Project Title
        <input
          type="text"
          name="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        </FormLabel>
        <FormLabel>
        Project Link (URL)
        <input
          type="text"
          name="project_url"
          value={project_url}
          onChange={(e) => setProjectUrl(e.target.value)}
          required
        />
        </FormLabel>
        <FormLabel>
        Github Link (URL)
        <input
          type="text"
          name="github_url"
          value={github_url}
          onChange={(e) => setGithubUrl(e.target.value)}
          required
        />
        </FormLabel>
        <FormLabel>
        Image Link (URL)
        <input
          type="text"
          name="img_url"
          value={img_url}
          onChange={(e) => setImgUrl(e.target.value)}
          required
        />
        </FormLabel>
        <Button type="submit">Submit Changes</Button>
      </Form>
      <Link to={`/projects/${id}`}>
        <Button>Return to Project</Button>
      </Link>
    </div>
  );
};

export default withRouter(EditProject);
