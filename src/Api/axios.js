import axios from "axios";

const axiosInstance = axios.create({
  // deploy on cyclic
  // baseURL: "https://busy-gray-ox-shoe.cyclic.app/",
  // deploy on render
  // baseURL: "https://amazon-backend-fj8v.onrender.com"
  baseURL: "https://amazon-backend-xu4x.onrender.com",
  // baseURL: "http://localhost:7088/",
});

export default axiosInstance;
