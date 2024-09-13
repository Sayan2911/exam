import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: [], // this could be user data
  idValue:null
};

export const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    productStore: (state, action) => {
      state.value = action.payload; // Update product data
    },
    productId: (state, action) => {
      state.idValue = action.payload; // Update product data
    },
    
  },
});

export const { productStore ,productId} = productSlice.actions;

export default productSlice.reducer;
