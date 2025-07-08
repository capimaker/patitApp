// src/service/followSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import followService from "./followService";

// 1️⃣ Refrescar info del usuario logueado (followers/following)
export const fetchLoggedUser = createAsyncThunk(
  "follow/fetchLoggedUser",
  async (_, thunkAPI) => {
    try {
      return await followService.getLoggedUser();
    } catch (err) {
      return thunkAPI.rejectWithValue(err.response?.data || err.message);
    }
  }
);

// 2️⃣ Hacer toggle follow/unfollow
export const toggleFollow = createAsyncThunk(
  "follow/toggleFollow",
  async (targetUserId, thunkAPI) => {
    try {
      const data = await followService.toggleFollow(targetUserId);
      // después de cambiar, recarga la info del usuario logueado:
      thunkAPI.dispatch(fetchLoggedUser());
      return data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.response?.data || err.message);
    }
  }
);

const followSlice = createSlice({
  name: "follow",
  initialState: {
    user: null,        // datos del usuario logueado
    isLoading: false,
    isError: false,
    message: "",
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchLoggedUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchLoggedUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload;
      })
      .addCase(fetchLoggedUser.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })

      .addCase(toggleFollow.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(toggleFollow.fulfilled, (state, action) => {
        state.isLoading = false;
        // action.payload puede tener solo un mensaje; 
        // la info actualizada del user está en state.user tras fetchLoggedUser()
      })
      .addCase(toggleFollow.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      });
  },
});

export default followSlice.reducer;
