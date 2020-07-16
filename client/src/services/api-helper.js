import api from "./api-config";

export const getProjects = async () => {
  try {
    const response = await api.get("/projects");
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const createProject = async (project) => {
  try {
    const response = await api.post("/projects", project);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const updateProject = async (id, project) => {
  try {
    const response = await api.put(`/projects/${id}`, project);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const deleteProject = async (id) => {
  try {
    const response = await api.delete(`/projects/${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};
