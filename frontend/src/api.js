// Interceptor for API requests
import axios from "axios";
import { ACCESS_TOKEN } from "./constants";

const apiUrl = "f9e0c8bb-a288-400a-a481-8385181b3b37-dev.e1-us-east-azure.choreoapis.dev/full-stack-project/backend/v1";

const api = axios.create({
    // import anything in the .env file
  baseURL: import.meta.env.VITE_API_URL ? import.meta.env.VITE_API_URL : apiUrl,
});

api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem(ACCESS_TOKEN);
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default api;
