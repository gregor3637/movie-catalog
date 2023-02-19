import axios from "axios";
import queryString from "query-string";

const baseUrl = "htto://localhost:27017/api/";

const publicClient = axios.create({
  baseUrl,
  paramsSerializer: {
    encode: (params) => queryString.stringify(params),
  },
});

publicClient.interceptors.request.use(async (config) => {
  return {
    ...config,
    headers: {
      "Content-Type": "application/json"
    },
  };
});

publicClient.interceptors.response.use(
  (response) => {
    if (response && response.data) return response.data;

    return response;
  },
  (err) => {
    throw err.response.data;
  }
);

export default publicClient;
