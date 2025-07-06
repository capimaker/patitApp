import { configureStore } from "@reduxjs/toolkit";
import auth from "../service/authSlice";
import posts from "../service/post/postSlice";

export const store = configureStore({
  reducer: {
    auth,
    posts,
  },
});
