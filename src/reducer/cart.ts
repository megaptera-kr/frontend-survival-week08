import { createSlice } from '@reduxjs/toolkit';

import type { PayloadAction } from '@reduxjs/toolkit';

import { Food } from '../types';

export interface CartState {
  addedFoods: Food[];
}

const initialState: CartState = {
  addedFoods: [],
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addFood: (state, action: PayloadAction<Food>) => ({
      ...state,
      addedFoods: [...state.addedFoods, action.payload],
    }),

    deleteFood: (state, action: PayloadAction<number>) => ({
      ...state,
      addedFoods: [
        ...state.addedFoods.filter((_, index) => index !== action.payload),
      ],
    }),

    resetCart: (state, action: PayloadAction<Food[]>) => ({
      ...state,
      addedFoods: action.payload,
    }),
  },
});

export const { addFood, deleteFood, resetCart } = cartSlice.actions;

export default cartSlice.reducer;
