import {configureStore} from '@reduxjs/toolkit';
import auth from "../service/authSlice"


export const store = configureStore({
    reducer: {
        auth,
    },
});