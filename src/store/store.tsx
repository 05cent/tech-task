import { configureStore } from "@reduxjs/toolkit";
import userAuth from "./slices/userAuth.ts";

const userAuthStore = configureStore({
    reducer: {
        userAuth
    }
});

export default userAuthStore;