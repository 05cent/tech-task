import { configureStore } from '@reduxjs/toolkit';
import { tasks, userAuth } from './slices';

const userAuthStore = configureStore({
    reducer: {
        userAuth,
        tasks
    }
});

export default userAuthStore;