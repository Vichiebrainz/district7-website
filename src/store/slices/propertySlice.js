import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { get_all_properties, get_users_liked_apartmemts } from "../../services/requests";
import axios from "axios";


export const getAllProperties = createAsyncThunk(
    "/allproperty/",
    async (thunkAPI) => {
        try {
            const response = await get_all_properties()
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

export const getUserLikedProperties = createAsyncThunk(
    "/likedproperty/",
    async (thunkAPI) => {
        try {
            const response = await get_users_liked_apartmemts()
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


const initialState = {
    isFetching: false,
    isSuccess: false,
    isError: false,
    errorMessage: '',
};

const propertySlice = createSlice({
    name: "property",
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
        [getAllProperties.pending]: (state) => {
            state.isFetching = true;
        },
        [getAllProperties.fulfilled]: (state, action) => {
            state.allProperties = action.payload;
            state.isFetching = false;
            state.isSuccess = true;
        },
        [getAllProperties.rejected]: (state, action) => {
            state.isFetching = false;
            state.isError = true;
            state.errorMessage = action.payload;
        },
        [getUserLikedProperties.pending]: (state) => {
            state.isFetching = true;
        },
        [getUserLikedProperties.fulfilled]: (state, action) => {
            state.userLikedProperties = action.payload;
            state.isFetching = false;
            state.isSuccess = true;
        },
        [getUserLikedProperties.rejected]: (state, action) => {
            state.isFetching = false;
            state.isError = true;
            state.errorMessage = action.payload;
        },

    },
});


export const { clearState } = propertySlice.actions;

export const propertySelector = (state) => state.property;

const { reducer } = propertySlice;
export default reducer;




