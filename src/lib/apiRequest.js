import axios from "axios";

// https://akros-backend.onrender.com

const apiRequest = axios.create({
  baseURL: "http://localhost:3001/api/v1",
  withCredentials: true,
});

export default apiRequest;
