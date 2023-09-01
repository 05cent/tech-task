import { createSlice } from '@reduxjs/toolkit';
import { UserAuth } from "../../types/UserAuthSlice.ts";

const initialState: UserAuth = {
    userData: null
};

const userAuth = createSlice({
    name: 'userAuth',
    initialState,
    reducers: {
        onLoginSuccess(state, action) {
            state.userData = action.payload;
        },
        onLogout(state) {
            state.userData = null;
            localStorage.removeItem('loggedInUser');
        }
    }
});

export const { onLoginSuccess, onLogout } = userAuth.actions;

export default userAuth.reducer;
