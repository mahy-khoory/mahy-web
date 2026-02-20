import axios from "axios";

const api = axios.create({
  //   baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
  baseUrl: "http://localhost:5000",
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: false,
});

api.interceptors.request.use((config) => {
  if (config.data instanceof FormData) {
    delete config.headers["Content-Type"];
  } else {
    config.headers["Content-Type"] = "application/json";
  }
  return config;
});

export default api;
