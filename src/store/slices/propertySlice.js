import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  add_property,
  get_all_properties,
  get_single_property,
  get_user_added_properties,
  get_users_liked_apartmemts,
  like_property,
  remove_property,
  search_properties_for,
  update_property,
} from "../../services/requests";
import axios from "axios";

export const getAllProperties = createAsyncThunk(
  "/allproperty/",
  async (thunkAPI) => {
    try {
      const response = await get_all_properties();
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

export const searchPropertiesFor = createAsyncThunk(
  "/allproperty?search=searchQuery", 
  async (searchQuery, thunkAPI) => {
    try {
      const response = await search_properties_for(searchQuery);
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
)

export const getSingleProperty = createAsyncThunk(
  "/allproperty/id",
  async (property_id, thunkAPI) => {
    try {
      const response = await get_single_property(property_id);
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

export const getUserLikedProperties = createAsyncThunk(
  "/likedproperty/",
  async (thunkAPI) => {
    try {
      const response = await get_users_liked_apartmemts();
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

export const likeProperty = createAsyncThunk(
  `/allproperty/property_id/like`,
  async (property_id, thunkAPI) => {
    try {
      const response = await like_property(property_id);
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

export const addProperty = createAsyncThunk(
  `/allproperty`,
  async (property_details, thunkAPI) => {
    try {
      const response = await add_property(property_details);
      return response.data;
    } catch (error) {
      console.log(error);
      const message =
        (error.response &&
          error.response.data &&
          // error.response.data.message &&
          error.response.data.detail) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const removeProperty = createAsyncThunk(
  `/removeProperty`,
  async (property_id, thunkAPI) => {
    try {
      const response = await remove_property(property_id);
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

export const updateProperty = createAsyncThunk(
  `/updateProperty`,
  async (data, thunkAPI) => {
    console.log(data);
    try {
      const response = await update_property(data.id, data.details);
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

export const getUserAddedProperties = createAsyncThunk(
  `/property/`,
  async (thunkAPI) => {
    try {
      const response = await get_user_added_properties();
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

const initialState = {
  isFetching: false,
  isSuccess: false,
  isError: false,
  errorMessage: "",
};

const propertySlice = createSlice({
  name: "property",
  initialState,
  reducers: {
    clearState: (state) => {
      state.isError = false;
      state.isSuccess = false;
      state.isFetching = false;
      state.isAdded = false;
      state.isAdding = false;
      state.isAddedError = false;
      state.isLiking = false;
      state.isLiked = false;
      state.isLikedError = false;
      state.isRemoving = false;
      state.isRemoved = false;
      state.isRemoveError = false;
      state.isUpdating = false;
      state.isUpdated = false;
      state.isUpdateError = false;
      return state;
    },
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
    [searchPropertiesFor.pending]: (state) => {
      state.isFetching = true;
    },
    [searchPropertiesFor.fulfilled]: (state, action) => {
      state.matchedProperties = action.payload;
      state.isFetching = false;
      state.isSuccess = true;
    },
    [searchPropertiesFor.rejected]: (state, action) => {
      state.isFetching = false;
      state.isError = true;
      state.errorMessage = action.payload;
    },
    [getSingleProperty.pending]: (state) => {
      state.isFetching = true;
    },
    [getSingleProperty.fulfilled]: (state, action) => {
      state.singleProperty = action.payload;
      state.isFetching = false;
      state.isSuccess = true;
    },
    [getSingleProperty.rejected]: (state, action) => {
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
    [likeProperty.pending]: (state) => {
      state.isLiking = true;
    },
    [likeProperty.fulfilled]: (state, action) => {
      state.userLikedProperties = action.payload;
      state.isLiking = false;
      state.isLiked = true;
    },
    [likeProperty.rejected]: (state, action) => {
      state.isLiking = false;
      state.isLikedError = true;
      state.errorMessage = action.payload;
    },
    [addProperty.pending]: (state) => {
      state.isAdding = true;
    },
    [addProperty.fulfilled]: (state, action) => {
      state.addedProperties = action.payload;
      state.isAdding = false;
      state.isAdded = true;
    },
    [addProperty.rejected]: (state, action) => {
      state.isAdding = false;
      state.isAddedError = true;
      state.errorMessage = action.payload;
    },

    [removeProperty.pending]: (state) => {
      state.isRemoving = true;
    },
    [removeProperty.fulfilled]: (state, action) => {
      state.removedProperties = action.payload;
      state.isRemoving = false;
      state.isRemoved = true;
    },
    [removeProperty.rejected]: (state, action) => {
      state.isRemoving = false;
      state.isRemoveError = true;
      state.errorMessage = action.payload;
    },

    [updateProperty.pending]: (state) => {
      state.isUpdating = true;
    },
    [updateProperty.fulfilled]: (state, action) => {
      state.updatedProperties = action.payload;
      state.isUpdating = false;
      state.isUpdated = true;
    },
    [updateProperty.rejected]: (state, action) => {
      state.isUpdating = false;
      state.isUpdateError = true;
      state.errorMessage = action.payload;
    },
    [getUserAddedProperties.pending]: (state) => {
      state.isFetching = true;
    },
    [getUserAddedProperties.fulfilled]: (state, action) => {
      state.userAddedProperties = action.payload;
      state.isFetching = false;
      state.isSuccess = true;
    },
    [getUserAddedProperties.rejected]: (state, action) => {
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
