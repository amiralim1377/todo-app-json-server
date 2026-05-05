import axios from "axios";

const apiRequests = axios.create({
  baseURL: "http://localhost:4000",
  headers: {
    "Content-Type": "application/json",
    Authorization: "Bearer Token",
  },
  signal: AbortSignal.timeout(6000),
});

apiRequests.interceptors.request.use(
  (config) => {
    return config;
  },
  (err) => {
    console.log("err", err);

    return Promise.reject(err);
  },
);

export default apiRequests;
