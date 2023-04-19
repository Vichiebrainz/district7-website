import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  change_password,
  get_user,
  login_user,
  register_landlord,
  register_user,
  update_user,
} from "../../services/requests";
import axios from "axios";

const token = JSON.parse(localStorage.getItem("token"));

export const registerUser = createAsyncThunk(
  "auth/register",
  async (userRegistrationData, thunkAPI) => {
    try {
      const response = await register_user(userRegistrationData);
      localStorage.setItem("token", JSON.stringify(response.data.token));
      return response.data;
    } catch (error) {
      console.log(error);
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message &&
          error.response.data.detail) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const registerLandlord = createAsyncThunk(
  "auth/register",
  async (landlordRegistrationData, thunkAPI) => {
    try {
      const response = await register_landlord(landlordRegistrationData);
      localStorage.setItem("token", JSON.stringify(response.data.token));
      return response.data;
    } catch (error) {
      console.log(error);
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const loginUser = createAsyncThunk(
  "auth/login",
  async (userLogin, thunkAPI) => {
    console.log(userLogin);
    try {
      const response = await login_user(userLogin);
      localStorage.setItem("token", JSON.stringify(response.data.token));
      return { user: response.data };
    } catch (error) {
      console.log(error);
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message &&
          error.response.data.detail) ||
        error.response.data.detail ||
        error.message ||
        error.toString();
      console.log(message);
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const logout = createAsyncThunk("auth/logout", async () => {
  console.log("logged out");
  await localStorage.removeItem("token");
});

export const getUser = createAsyncThunk(
  "auth/user",
  async (details, thunkAPI) => {
    try {
      const response = await get_user();
      return response.data;
    } catch (error) {
      console.log(error);
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.response.data.detail ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const updateUser = createAsyncThunk(
  "auth/user/update",
  async (details, thunkAPI) => {
    try {
      const response = await update_user(details);
      console.log(response.data);
      return response.data;
    } catch (error) {
      console.log(error);
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.response.data.detail ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const changePassword = createAsyncThunk(
  "auth/change-password",
  async (password, thunkAPI) => {
    try {
      const response = await change_password(password);
      return response;
    } catch (error) {
      console.log(error);
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      console.log(message);
      return thunkAPI.rejectWithValue(message);
    }
  }
);

const initialState = token
  ? {
      isLoggedIn: true,
      isLandlord: null,
      isFetching: false,
      isSuccess: false,
      isError: false,
      errorMessage: "",
      registerType: "",
      isUpdatingPassword: false,
      isUpdatedPassword: false,
      isUpdatePasswordError: false,
    }
  : {
      isLoggedIn: false,
      isLandlord: null,
      isFetching: false,
      isSuccess: false,
      isError: false,
      errorMessage: "",
      registerType: "",
      isUpdatingPassword: false,
      isUpdatedPassword: false,
      isUpdatePasswordError: false,
    };

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    clearState: (state) => {
      state.isError = false;
      state.isSuccess = false;
      state.isFetching = false;
      state.isUpdating = false;
      state.isUpdated = false;
      state.isUpdateError = false;
      state.isUpdatingPassword = false;
      state.isUpdatedPassword = false;
      state.isUpdatePasswordError = false;
      return state;
    },
    setRegisterType: (state, action) => {
      state.registerType = action.payload;
      return state;
    },
    setIsLoggedOut: (state) => {
      state.isLoggedIn = false;
    },
  },
  extraReducers: {
    [registerUser.pending]: (state) => {
      state.isFetching = true;
    },
    [registerUser.fulfilled]: (state, action) => {
      state.isLoggedIn = true;
      state.isLandlord = action.payload.user.is_landlord;
      state.user = action.payload.user;
      state.isFetching = false;
      state.isSuccess = true;
      console.log("payload", action);
    },
    [registerUser.rejected]: (state, action) => {
      state.isLoggedIn = false;
      state.user = null;
      console.log("payload", action);
      state.isFetching = false;
      state.isError = true;
      state.errorMessage = action.payload;
    },
    [loginUser.fulfilled]: (state, action) => {
      state.isLoggedIn = true;
      state.isLandlord = action.payload.user.user.is_landlord;
      state.user = action.payload.user;
      state.isFetching = false;
      state.isSuccess = true;
      return state;
    },
    [loginUser.rejected]: (state, action) => {
      state.isLoggedIn = false;
      state.user = null;
      console.log("payload", action);
      state.isFetching = false;
      state.isError = true;
      state.errorMessage = action.payload;
    },
    [loginUser.pending]: (state) => {
      state.isFetching = true;
    },
    [getUser.pending]: (state) => {
      state.isFetching = true;
    },
    [getUser.fulfilled]: (state, action) => {
      state.user = action.payload;
      state.isFetching = false;
      state.isSuccess = true;
    },
    [getUser.rejected]: (state, action) => {
      state.user = null;
      state.isFetching = false;
      state.isError = true;
      state.errorMessage = action.payload;
    },
    [updateUser.pending]: (state) => {
      state.isUpdating = true;
    },
    [updateUser.fulfilled]: (state, action) => {
      state.user = action.payload;
      state.isUpdating = false;
      state.isUpdated = true;
    },
    [updateUser.rejected]: (state, action) => {
      state.isUpdating = false;
      state.isUpdateError = true;
      state.errorMessage = action.payload;
    },

    [changePassword.pending]: (state) => {
      state.isUpdatingPassword = true;
    },
    [changePassword.fulfilled]: (state, action) => {
      state.isUpdatingPassword = false;
      state.isUpdatedPassword = true;
    },
    [changePassword.rejected]: (state, action) => {
      state.isUpdatingPassword = false;
      state.isUpdatePasswordError = true;
      state.errorMessage = action.payload;
    },
    [logout.fulfilled]: (state, action) => {
      state.isLoggedIn = false;
      state.user = null;
    },
  },
});

export const { clearState, setRegisterType, setIsLoggedOut } =
  authSlice.actions;

export const userSelector = (state) => state.auth;

const { reducer } = authSlice;
export default reducer;
