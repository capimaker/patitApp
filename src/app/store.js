import {configureStore} from "@reduxjs/toolkit";
import auth from "../service/AuthSlice"


export const store = configureStore ({
    reducer: { 
        auth,   
    },
});