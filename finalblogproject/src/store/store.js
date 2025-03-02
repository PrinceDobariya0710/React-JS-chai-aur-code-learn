import { configureStore } from '@reduxjs/toolkit'
import authSlice from '../store/authSlice'
const store = configureStore({
    reducer: { auth: authSlice, }
});

export default store;