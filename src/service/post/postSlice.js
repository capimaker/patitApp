import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import postService from "./postService";

const initialState = {
  posts: [],
};

export const postSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAllPost.fulfilled, (state, action) => {
      state.posts = action.payload;
    });
  },
});

export const getAllPost = createAsyncThunk("posts/getAllPost", async () => {
  try {
    return await postService.getAllPost();
  } catch (error) {
    console.log(error);
  }
});

export default postSlice.reducer;
