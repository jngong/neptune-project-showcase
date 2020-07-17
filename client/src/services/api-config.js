import axios from "axios";

let baseURL;

const apiURLs = {
  production: "https://sei-products-api.herokuapp.com/api",
  development: "http://localhost:3000/api",
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
