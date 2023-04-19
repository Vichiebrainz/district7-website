import axios from "axios";
import { customHistory } from "../customBroswerRouter";
import { toast } from "react-hot-toast";
import { setIsLoggedOut } from "../store/slices/authSlice";

const BASE_URL = "https://api.district7.com.ng/api";

axios.defaults.baseURL = BASE_URL;
axios.defaults.headers.common["Content-Type"] = "multipart/form-data";
axios.defaults.headers.common["Accept"] = "application/json";
axios.defaults.withCredentials = true;

let cancel;

const cancelPendingRequests = () => {
  if (cancel) {
    cancel("Operation canceled by the user.");
    cancel = null;
  }
  cancel = axios.CancelToken.source();
};

axios.interceptors.request.use(
  async (request) => {
    const token = JSON.parse(localStorage.getItem("token"));
    if (request.headers && token) {
      request.headers["authorization"] = `Token ${token}`;
    }
    cancelPendingRequests();
    request.cancelToken = cancel.token;
    return request;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axios.interceptors.response.use(
  (response) => response,
  (err) => {
    if (err.response.status === 401) {
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
      cancelPendingRequests();
    }
    return Promise.reject(err);
  }
);

export { axios as api };
