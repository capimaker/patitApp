import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import AuthService from "./AuthService";

const user = JSON.parse(localStorage.getItem("user")) || null;
const token = localStorage.getItem("token");

const initialState = {
    user: user,
    token: token

};



export const register = createAsyncThunk("auth/register", async (user) => {

    console.log(user)
    try {
        return await AuthService.register(user);
    } catch (error) {
        console.error(error);

    }
})

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        reset: (state) => {
            (state.isError = false), (state.isSuccess = false), (state.message = "");
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(register.fulfilled, (state, action) => {
                (state.isSuccess = true), (state.message = action.payload.message);
            })

            .addCase(register.rejected, (state, action) => {
                (state.isError = true), (state.message = action.payload);

            });
        },

    });


        export default authSlice.reducer;