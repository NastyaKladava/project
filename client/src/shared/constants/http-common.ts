import axios from "axios";

export default axios.create({
  baseURL: "https://project-production-3a01.up.railway.app",
  // baseURL: "http://localhost:3001",
  headers: {
    "Content-type": "application/json",
  },
});
