import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

// Tipi per l'autenticazione
export type User = {
    username: string;
    role: 'admin' | 'user';
}

type AuthState = {
    user: User | null;
    isAuthenticated: boolean;
}

// Dati utenti fissi
export const usersData = [
    { username: 'admin', password: 'admin123', role: 'admin' as const },
    { username: 'user', password: 'user123', role: 'user' as const }
];

// State iniziale
const initialState: AuthState = {
    user: null,
    isAuthenticated: false
};

// Slice Redux per l'autenticazione
const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        loginSuccess: (state, action: PayloadAction<User>) => {
            state.user = action.payload;
            state.isAuthenticated = true;
        },
        logout: (state) => {
            state.user = null;
            state.isAuthenticated = false;
        }
    }
});

// Funzione di autenticazione
export const authenticateUser = (username: string, password: string): User | null => {
    const foundUser = usersData.find(
        u => u.username === username && u.password === password
    );

    if (foundUser) {
        return {
            username: foundUser.username,
            role: foundUser.role
        };
    }

    return null;
};

// Action creators
export const { loginSuccess, logout } = authSlice.actions;

// Reducer
export default authSlice.reducer;

// Selettori (helper per accedere allo state)
export const selectUser = (state: { auth: AuthState }) => state.auth.user;
export const selectIsAuthenticated = (state: { auth: AuthState }) => state.auth.isAuthenticated;
export const selectUserRole = (state: { auth: AuthState }) => state.auth.user?.role;
export const selectIsAdmin = (state: { auth: AuthState }) => state.auth.user?.role === 'admin';
