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

export const change_password = (data) => {
    return api.post("/auth/login/landlord", data);
};


export const logout = () => {
    return api.post("/auth/logout", {
        cancelToken: source.token,
    });
};


// User
export const get_user = () => {
    return api.post("/auth/user",);
};

export const update_user = (data) => {
    return api.patch("/auth/user/update/", data)
}

export const like_apartment = (data) => {
    return api.post("allproperty/1/like/", data)
}

export const get_users_liked_apartmemts = () => {
    return api.get("/likedproperty/")
}



// Property
export const add_property = (data) => {
    return api.post("/property/", data)
}

export const get_all_properties = () => {
    return api.get("/allproperty/")
}