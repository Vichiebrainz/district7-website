import axios from "axios";
import { customHistory } from "../customBroswerRouter";
import { toast } from "react-hot-toast";
import { setIsLoggedOut } from "../store/slices/authSlice";

const BASE_URL = "https://api.district7.com.ng/api";

const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    // "Access-Control-Allow-Origin": "*",
    // "Content-Type": "application/json",
    "Content-Type": "multipart/form-data",
    Accept: "application/json",
  },
  // withCredentials: true,
});

let cancel;

// const cancelPendingRequests = () => {
//   cancel = axios.CancelToken.source();
//   if (cancel) {
//     cancel("Operation canceled by the user.");
//     cancel = null;
//   }
// };

api.interceptors.request.use(
  async (request) => {
    const token = JSON.parse(localStorage.getItem("token"));
    console.log(token);
    if (request.headers && token) {
      request.headers["authorization"] = `Token ${token}`;
    }
    // cancelPendingRequests();
    // request.cancelToken = cancel.token;
    return request;
  },
  (error) => {
    return Promise.reject(error);
  }
);

api.interceptors.response.use(
  (response) => {
    console.log(response);
    return response;
  },
  (err) => {
    if (err.response && err.response.status === 401) {
      console.log("jhi");
      const token = JSON.parse(localStorage.getItem("token"));
      if (token) {
        localStorage.removeItem("token");
        setIsLoggedOut();
        customHistory.push("/login");
        // toast("Session timed out, please login again!");
      } else {
        customHistory.push("/login");
        setIsLoggedOut();
        // toast("Session timed out, please login again!")
      }
      // cancelPendingRequests();
    } else {
      return Promise.reject(err);
      // cancelPendingRequests();
    }
    return Promise.reject(err);
  }
);

export { api };
