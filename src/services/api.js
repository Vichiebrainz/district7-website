import axios from "axios";

const BASE_URL = "https://api.district7.com.ng/api";


const api = axios.create({
    baseURL: BASE_URL,
    headers: {
        // "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
        Accept: "application/json",
    },
    // withCredentials: true,
});

api.interceptors.request.use(
    async (request) => {
        const token = JSON.parse(localStorage.getItem("user"))
        console.log(token);
        if (request.headers && token) {
            request.headers["authorization"] = `Token ${token.token}`;
        }
        return request;
    },
    (error) => {
        return Promise.reject(error);
    }
);

export { api };
