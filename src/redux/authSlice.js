import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: [], // this could be user data
  isAuth: false, // flag to track if user is authenticated
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    authStore: (state, action) => {
      state.value = action.payload; // Update user data
    },
    toggleAuth: (state) => {
      state.isAuth = !state.isAuth; // Toggle authentication status
    },
  },
});

export const { authStore, toggleAuth } = authSlice.actions;

export default authSlice.reducer;
