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
  return api.put("/auth/change-password", data);
};

export const logout = () => {
  return api.post("/auth/logout", {
    cancelToken: source.token,
  });
};

// User
export const get_user = () => {
  return api.get("/auth/user");
};

export const update_user = (data) => {
  return api.patch("/auth/user/update/", data);
};

export const like_apartment = (data) => {
  return api.post("allproperty/1/like/", data);
};

export const get_users_liked_apartmemts = () => {
  return api.get("/likedproperty/");
};

export const get_user_orders = () => {
  return api.get("/order/");
};

// Property
export const add_property = (data) => {
  return api.post("/property/", data);
};

export const update_property = (property_id, property_details) => {
  return api.patch(`/property/${property_id}/`, property_details);
};

export const remove_property = (property_id) => {
  return api.delete(`/property/${property_id}`);
};

export const get_all_properties = () => {
  return api.get("/allproperty/");
};

export const search_properties_for = (searchQuery) => {
  return api.get(`/allproperty?search=${searchQuery}`);
};

export const get_single_property = (id) => {
  return api.get(`/allproperty/${id}`);
};

export const like_property = (property_id) => {
  return api.post(`/allproperty/${property_id}/like/`);
};

export const get_user_added_properties = () => {
  return api.get(`/property`);
};
