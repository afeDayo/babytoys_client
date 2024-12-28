import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://babytoys-server.onrender.com",
  headers: {
    "Content-Type": "application/json",
  },
});

export default axiosInstance;
