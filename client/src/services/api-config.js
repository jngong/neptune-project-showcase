import axios from "axios";

let baseURL;

const apiURLs = {
  production: "https://neptune-sei-projects.herokuapp.com/api",
  development: "https://neptune-sei-projects.herokuapp.com/api",
};

if (window.location.hostname === "localhost") {
  baseURL = apiURLs.development;
} else {
  baseURL = apiURLs.production;
}

const api = axios.create({
  baseURL: baseURL,
});

export default api;
