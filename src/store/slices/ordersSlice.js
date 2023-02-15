import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { get_user_orders } from "../../services/requests";



export const getUserOrders = createAsyncThunk(
    "/order/",
    async (thunkAPI) => {
        try {
            const response = await get_user_orders()

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


const initialState = {
    isFetching: false,
    isSuccess: false,
    isError: false,
    errorMessage: '',
};


const ordersSlice = createSlice({
    name: "orders",
    initialState,
    reducers: {
        clearState: (state) => {
            state.isError = false;
            state.isSuccess = false;
            state.isFetching = false;
            return state;
        }
    },
    extraReducers: {
        [getUserOrders.pending]: (state) => {
            state.isFetching = true;
        },
        [getUserOrders.fulfilled]: (state, action) => {
            state.userOrders = action.payload;
            state.isFetching = false;
            state.isSuccess = true;
        },
        [getUserOrders.rejected]: (state, action) => {
            state.isFetching = false;
            state.isError = true;
            state.errorMessage = action.payload;
        },
    },
});


export const { clearState } = ordersSlice.actions;

export const ordersSelector = (state) => state.orders;

const { reducer } = ordersSlice;
export default reducer;




