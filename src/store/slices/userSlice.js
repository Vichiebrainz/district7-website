import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { update_user } from "../../services/requests";
import axios from "axios";


const user = JSON.parse(localStorage.getItem("user"));

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

const initialState = user
    ? {
        user: user.user,
        isFetching: false,
        isSuccess: false,
        isError: false,
        errorMessage: '',
    }
    : {
        user: null,
        isFetching: false,
        isSuccess: false,
        isError: false,
        errorMessage: '',
    };

const userSlice = createSlice({
    name: "user",
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
    },
});


export const { clearState } = userSlice.actions;

export const userSelectorMain = (state) => state.user;

const { reducer } = userSlice;
export default reducer;




