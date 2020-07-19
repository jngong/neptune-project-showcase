import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import { ProjectForm } from "../components/ProjectForm";

const EditProject = (props) => {
  const [project, setProject] = useState(props.location.state.project);

  return (
    <div>

    </div>
  );
};

export default withRouter(EditProject);
