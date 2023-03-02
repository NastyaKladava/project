import axios from "axios";

export default axios.create({
  baseURL: "https://project-production-3a01.up.railway.app",
  headers: {
    "Content-type": "application/json",
  },
});
