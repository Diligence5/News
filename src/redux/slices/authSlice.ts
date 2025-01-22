import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface AuthState {
  accessToken: string | null;
  isAuthenticated: boolean;
  user: any | null;
}

const initialState: AuthState = {
  accessToken: null,
  isAuthenticated: false,
  user: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setAccessToken: (state, action: PayloadAction<string>) => {
      state.accessToken = action.payload;
      state.isAuthenticated = true;
    },
    setUser: (state, action: PayloadAction<any>) => {
      state.user = action.payload;
      state.isAuthenticated = true;
    },

    clearAccessToken: (state) => {
      state.accessToken = null;
      state.isAuthenticated = false;
      state.user = null
    },
  },
});

export const { setAccessToken, setUser, clearAccessToken } = authSlice.actions;
export default authSlice.reducer;
