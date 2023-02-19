import axios from "axios";
import { customHistory } from "../customBroswerRouter";
import { toast } from "react-hot-toast";


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

api.interceptors.request.use(
    async (request) => {
        const token = JSON.parse(localStorage.getItem("token"))
        console.log(token);
        if (request.headers && token) {
            request.headers["authorization"] = `Token ${token}`;
        }
        return request;
    },
    (error) => {
        return Promise.reject(error);
    }
);

api.interceptors.response.use(
    (response) => response,
    (err) => {
        if (err.response.status === 401) {
            console.log("jhi")
            const token = JSON.parse(localStorage.getItem("token"))
            if (token) {
                localStorage.removeItem("token");
                customHistory.push("/");
                toast("Session timed out, please login again!")
            } else {
                customHistory.push("/");
                toast("Session timed out, please login again!")
            }
        } else {
            return Promise.reject(err);
        }
    }
)

export { api };
