import { configureStore } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage'; // Default storage (localStorage in the web)
import { persistReducer, persistStore } from 'redux-persist';
import authReducer from './authSlice';
import productReducer from './productSlice';

// Configuration for persisting the auth slice
const authPersistConfig = {
  key: 'auth', // Key in localStorage
  storage, // Default storage (localStorage)
};

// Wrap the auth reducer with persistReducer
const persistedAuthReducer = persistReducer(authPersistConfig, authReducer);

// Configure the Redux store
export const store = configureStore({
  reducer: {
    auth: persistedAuthReducer, // Persisted auth reducer
    product: productReducer, // Regular non-persisted reducer
  },
});

// Create the persistor
export const persistor = persistStore(store);
