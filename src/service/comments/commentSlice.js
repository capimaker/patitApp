import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import commentService from "./commentService";

const initialState = {
  comments: [],
};

export const updateComment = createAsyncThunk(
  "comment/update",
  async ({ commentId, updatedComment, token }) => {
    try {
      return await commentService.updateComment(commentId, updatedComment, token);
    } catch (error) {
      console.error("Error al actualizar comentario:", error);
      throw error;
    }
  }
);

export const createComment = createAsyncThunk("comment/create", async ({ postId, text, token }) => {
  return await commentService.createComment(postId, { text }, token);
});

export const commentSlice = createSlice({
  name: "comments",
  initialState: {},
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(updateComment.fulfilled, (state, action) => {
        const updated = action.payload;
        state.comments = state.comments.map((comment) =>
          comment._id === updated._id ? updated : comment
        );
      })
      .addCase(createComment.fulfilled, (state, action) => {
        state.comments.push(action.payload.comment);
      });
  },
});

export default commentSlice.reducer;
