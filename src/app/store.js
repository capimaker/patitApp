import { configureStore } from "@reduxjs/toolkit";
import posts from "../service/post/postSlice";

export const store = configureStore({
  reducer: {
    posts,
  },
});
