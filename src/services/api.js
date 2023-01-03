import axios from "axios";
import Router from "next/router";
import { makeStore } from "../store";

const store = makeStore();
const push = Router.push;
let refreshing_token = null;

const BASE_URL = "https://tangl-api.herokuapp.com/api/v1";


const api = axios.create({
    baseURL: BASE_URL,
    headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
        Accept: "application/json",
    },
    // withCredentials: true,
});

api.interceptors.request.use(
    async (request) => {
        const token = localStorage.getItem("token");
        if (request.headers && token) {
            request.headers["authorization"] = `bearer ${token}`;
        }
        return request;
    },
    (error) => {
        return Promise.reject(error);
    }
);

export { api };
