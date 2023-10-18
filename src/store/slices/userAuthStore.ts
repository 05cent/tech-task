import { createSlice } from '@reduxjs/toolkit';
import { UserAuth } from '../../types/UserAuthStore.ts';

const initialState: UserAuth = {
    userData: null
};

const userAuthStore = createSlice({
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

export const { onLoginSuccess, onLogout } = userAuthStore.actions;

export default userAuthStore.reducer;
