import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { change_password, login_user, register_landlord, register_user, update_user } from "../../services/requests";
import axios from "axios";


const user = JSON.parse(localStorage.getItem("user"));

export const registerUser = createAsyncThunk(
    "auth/register",
    async (userRegistrationData, thunkAPI) => {
        try {
            const response = await register_user(userRegistrationData)
            localStorage.setItem("user", stringify(response.data));
            return response.data;
        } catch (error) {
            console.log(error)
            const message =
                (error.response &&
                    error.response.data &&
                    error.response.data.message && error.response.data.detail) ||
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
            const response = await register_landlord(landlordRegistrationData)
            localStorage.setItem("user", JSON.stringify(response.data));
            return response.data;
        } catch (error) {
            console.log(error)
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
        console.log(userLogin)
        try {
            const response = await login_user(userLogin)
            localStorage.setItem("user", JSON.stringify(response.data));
            return { user: response.data };
        } catch (error) {
            console.log(error)
            const message =
                (error.response &&
                    error.response.data &&
                    error.response.data.message && error.response.data.detail) ||
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
    await localStorage.removeItem("user");
});

export const updateUser = createAsyncThunk(
    "auth/user/update",
    async (details, thunkAPI) => {
        console.log(user)
        try {
            const response = await update_user(details)
            user.first_name = response.data.first_name;
            user.last_name = response.data.last_name;
            user.avatar = response.data.avatar;
            user.phone_number = response.phone_number;

            localStorage.setItem('user', JSON.stringify(user));
            return response.data;
        } catch (error) {
            console.log(error)
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

export const changePassword = createAsyncThunk("auth/change-password", async (password, thunkAPI) => {
    try {
        const response = await change_password(password)
        return response
    } catch (error) {
        console.log(error)
        const message =
            (error.response &&
                error.response.data &&
                error.response.data.message) ||
            error.message ||
            error.toString();
        console.log(message);
        return thunkAPI.rejectWithValue(message);
    }
})

const initialState = user
    ? {
        isLoggedIn: true,
        isLandlord: null,
        user: user.user,
        isFetching: false,
        isSuccess: false,
        isError: false,
        errorMessage: '',
        registerType: ""
    }
    : {
        isLoggedIn: false,
        isLandlord: null,
        user: null,
        isFetching: false,
        isSuccess: false,
        isError: false,
        errorMessage: '',
        registerType: ""
    };

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        clearState: (state) => {
            state.isError = false;
            state.isSuccess = false;
            state.isFetching = false;
            return state;
        },
        setRegisterType: (state, action) => {
            state.registerType = action.payload;
            return state;
        }
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
            console.log('payload', action);
        },
        [registerUser.rejected]: (state, action) => {
            state.isLoggedIn = false;
            state.user = null;
            console.log('payload', action);
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
            console.log('payload', action);
            state.isFetching = false;
            state.isError = true;
            state.errorMessage = action.payload;
        },
        [loginUser.pending]: (state) => {
            state.isFetching = true;
        },
        [updateUser.pending]: (state) => {
            state.isFetching = true;
        },
        [updateUser.fulfilled]: (state, action) => {
            state.user = user;
            state.isFetching = false;
            state.isSuccess = true;
        },
        [updateUser.rejected]: (state, action) => {
            state.user = null;
            state.isFetching = false;
            state.isError = true;
            state.errorMessage = action.payload;
        },

        [changePassword.pending]: (state) => {
            state.isFetching = true;
        },
        [changePassword.fulfilled]: (state, action) => {
            state.isFetching = false;
            state.isSuccess = true;
        },
        [changePassword.rejected]: (state, action) => {
            state.isError = true;
            state.errorMessage = action.payload;
        },
        [logout.fulfilled]: (state, action) => {
            state.isLoggedIn = false;
            state.user = null;
        },
    },
});


export const { clearState, setRegisterType } = authSlice.actions;

export const userSelector = (state) => state.auth;

const { reducer } = authSlice;
export default reducer;




