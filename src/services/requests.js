import axios from "axios";
import { api } from "./api";

const CancelToken = axios.CancelToken;
let source = CancelToken.source();

source && source.cancel("Operation canceled due to new request.");

// save the new request for cancellation
source = axios.CancelToken.source();

// Organization Onboarding
export const register_user = (data) => {
    return api.post("/auth/register", data);
};

export const login_user = (data) => {
    return api.post("/auth/login", data);
};

export const register_landlord = (data) => {
    return api.post("/auth/register/landlord", data);
};

export const login_landlord = (data) => {
    return api.post("/auth/login/landlord", data);
};


export const logout = () => {
    return api.post("/auth/logout", {
        cancelToken: source.token,
    });
};

