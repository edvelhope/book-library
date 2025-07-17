import { configureStore } from '@reduxjs/toolkit';
import bookReducer from "./bookSlice";
import authReducer from "./authSlice"

// Creo lo store combinando i reducer tramite RTK
export const store = configureStore({
    reducer: {
        books: bookReducer,
        auth: authReducer
    }
});

// Tipi per TypeScript
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
