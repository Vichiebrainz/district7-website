import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { login_user, register_user } from "../../services/requests";
import axios from "axios";


const user = JSON.parse(localStorage.getItem("user"));

export const registerUser = createAsyncThunk(
    "auth/register",
    async (userRegistrationData, thunkAPI) => {
        try {
            const response = await register_user(userRegistrationData)
            localStorage.setItem("user", JSON.stringify(response.data));
            return response.data;
        } catch (error) {
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
                    error.response.data.message) ||
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

const initialState = user
    ? {
        isLoggedIn: true,
        user: user.user,
        isFetching: false,
        isSuccess: false,
        isError: false,
        errorMessage: '',
    }
    : {
        isLoggedIn: false,
        user: null,
        isFetching: false,
        isSuccess: false,
        isError: false,
        errorMessage: '',
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
    },
    extraReducers: {
        [registerUser.pending]: (state) => {
            state.isFetching = true;
        },
        [registerUser.fulfilled]: (state, action) => {
            state.isLoggedIn = true;
            state.user = action.payload.user;
            state.isFetching = false;
            state.isSuccess = true;
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
        [logout.fulfilled]: (state, action) => {
            state.isLoggedIn = false;
            state.user = null;
        },
    },
});

export const { clearState } = authSlice.actions;

export const userSelector = (state) => state.auth;


const { reducer } = authSlice;
export default reducer;



// import { createSlice } from '@reduxjs/toolkit';

// const authSlice = createSlice({
//     name: 'auth',
//     initialState: {
//         user: null,
//         isLoading: false,
//         error: null,
//     },
//     reducers: {
//         loginStart: state => {
//             state.isLoading = true;
//         },
//         loginSuccess: (state, action) => {
//             state.user = action.payload;
//             state.isLoading = false;
//         },
//         loginError: (state, action) => {
//             state.error = action.payload;
//             state.isLoading = false;
//         },
//         logout: state => {
//             state.user = null;
//         },
//     },
// });

// export const { loginStart, loginSuccess, loginError, logout } = authSlice.actions;

// export default authSlice.reducer;

