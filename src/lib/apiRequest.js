import axios from "axios";

// https://akros-backend.onrender.com
// http://localhost:3001

const apiRequest = axios.create({
  baseURL: "https://9g6nk4-3001.csb.app/api/v1",
  withCredentials: true,
});

export default apiRequest;
