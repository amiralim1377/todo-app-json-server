import apiRequests from "../configs/config";

apiRequests.interceptors.response.use(
  (response) => {
    console.log(response);

    return response;
  },
  (err) => {
    const status = err.response.status;
    if (status === 500) {
      console.log("status:500");
    } else if (status === 404) {
      console.log("status:404");
    } else if (status === 401) {
      console.log("status:401");
    } else if (status === 402) {
      console.log("status:402");
    }
    return Promise.reject(err);
  },
);
