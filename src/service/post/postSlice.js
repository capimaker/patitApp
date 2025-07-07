import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import postService from "./postService";

const initialState = {
  posts: [],
};

export const getAllPost = createAsyncThunk("posts/getAllPost", async () => {
  try {
    return await postService.getAllPost();
  } catch (error) {
    console.log(error);
  }
});

export const likePost = createAsyncThunk("posts/likePost", async (postId, { getState }) => {
  const token = getState().auth.token;
  return await postService.likePost(postId, token);
});

export const getPostByTitle = createAsyncThunk("post/getPostByTitle", async (postName) => {
  try {
    return await postService.getPostByTitle(postName);
  } catch (error) {
    console.log(error);
  }
});

export const postSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllPost.fulfilled, (state, action) => {
        state.posts = action.payload;
      })
      .addCase(likePost.fulfilled, (state, action) => {
        const updatedPost = action.payload;
        const index = state.posts.findIndex((p) => p._id === updatedPost._id);
        if (index !== -1) {
          state.posts[index] = updatedPost;
        }
      })
      .addCase(getPostByTitle.fulfilled, (state, action) => {
        state.posts = Array.isArray(action.payload) ? action.payload : [action.payload];
      });
  },
});

export default postSlice.reducer;
