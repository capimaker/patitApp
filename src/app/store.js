import { configureStore } from "@reduxjs/toolkit";
import auth from "../service/authSlice";
import posts from "../service/post/postSlice";
import follow from "../service/followers/followSlice";

export const store = configureStore({
  reducer: {
    auth,
    posts,
    follow,
  },
});
