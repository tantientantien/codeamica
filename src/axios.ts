import axios from "axios";


const api = axios.create({
  baseURL: "http://codeamica.id.vn:10004",
  timeout: 4500,
  headers: {
    "Content-Type": "application/json",
  },
});
api.interceptors.response.use(
  (response) => {
    if (Array.isArray(response.data)) {
      response.data = response.data.map(
        ({ _id: id, ...rest }) => ({
          id,
          ...rest,
        }),
      );
    } else {
      const { _id: id, ...rest } = response.data;
      response.data = { id, ...rest };
    }
    return response;
  },
  (error) => Promise.reject(error),
);
export default api;