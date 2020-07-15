import api from "./api-config";

export const getProjects = async () => {
  try {
    let response = await api.get("/projects");
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const createProject = async (project) => {
  try {
    let project = await api.post("/projects", project);
    return project.data;
  } catch (error) {
    throw error;
  }
};

export const updateProject = async (id, project) => {
  try {
    let project = await api.put(`/projects/${id}`, project);
    return project.data;
  } catch (error) {
    throw error;
  }
};

export const deleteProject = async (id) => {
  try {
    let response = await api.delete(`/projects/${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};
