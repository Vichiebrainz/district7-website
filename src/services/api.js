import axios from "axios";

const BASE_URL = "https://district7.onrender.com/api";


const api = axios.create({
    baseURL: BASE_URL,
    headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
        Accept: "application/json",
    },
    // withCredentials: true,
});

// api.interceptors.request.use(
//     async (request) => {
//         const token = localStorage.getItem("token");
//         if (request.headers && token) {
//             request.headers["authorization"] = `bearer ${token}`;
//         }
//         return request;
//     },
//     (error) => {
//         return Promise.reject(error);
//     }
// );

export { api };
