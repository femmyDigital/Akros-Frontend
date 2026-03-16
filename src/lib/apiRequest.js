import axios from "axios";

// https://akros-backend.onrender.com
// http://localhost:3001

const apiRequest = axios.create({
  baseURL: "https://akros-backend.onrender.com/api/v1",
  withCredentials: true,
});

export default apiRequest;
